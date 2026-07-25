'use client';

import { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { mediaUrl } from '@/lib/media';

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

interface LatexRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

export function LatexRenderer({ content, className, inline }: LatexRendererProps) {
  // Generate HTML during render using useMemo for performance
  const html = useMemo(() => {
    return inline ? renderInlineContent(content) : renderMixedContent(content);
  }, [content, inline]);

  if (inline) {
    return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

// Escapet dollartegn (\$) skal være et LITERALT dollartegn, ikke matte-avgrenser.
// Uten dette matcher matte-regexen «\$A\$1» (Excel-referanser, valuta) som formelen
// «A\» og rendrer søppel. Vi parkerer dem før matten deles opp, og setter dem
// tilbake når all annen prosessering er ferdig.
const DOLLAR_HOLDER = 'DOLLAR';

function parkerEscapetDollar(s: string): string {
  return s.replace(/\\{1,2}\$/g, DOLLAR_HOLDER);
}

function gjenopprettDollar(s: string): string {
  return s.split(DOLLAR_HOLDER).join('$');
}

// Render inline content without paragraph wrapping
function renderInlineContent(content: string): string {
  const katexBlocks: string[] = [];
  const KATEX_START = '\u0000KATEX';
  const KATEX_END = 'KATEX\u0000';

  // Handle inline math ($...$)
  let result = parkerEscapetDollar(content).replace(/\$([^$\n]+?)\$/g, (_, latex) => {
    try {
      let processedLatex = latex.trim();
      if (processedLatex.includes('\\frac')) {
        processedLatex = `\\displaystyle ${processedLatex}`;
      }
      const rendered = katex.renderToString(processedLatex, {
        displayMode: false,
        throwOnError: false,
        trust: true,
      });
      katexBlocks.push(rendered);
      return `${KATEX_START}${katexBlocks.length - 1}${KATEX_END}`;
    } catch {
      return `<span class="text-red-500">Feil i LaTeX: ${escapeHtml(latex)}</span>`;
    }
  });

  // Restore KaTeX blocks
  result = result.replace(
    new RegExp(`${KATEX_START}(\\d+)${KATEX_END}`, 'g'),
    (_, index) => katexBlocks[parseInt(index)]
  );

  return gjenopprettDollar(result);
}

function renderMixedContent(content: string): string {
  // Store KaTeX rendered content to protect from text transformations
  const katexBlocks: string[] = [];
  // Use Unicode characters that won't be affected by Markdown processing
  const KATEX_START = '\u0000KATEX';
  const KATEX_END = 'KATEX\u0000';

  // Kodeblokker (```lang … ```) MÅ tas ut FØR både matte og markdown. Uten det
  // matcher inline-kode-regexen (/`([^`]+)`/) inn i gjerdet: to backticks blir
  // stående som synlig tekst, språktaggen havner INNE i koden, innrykket
  // forsvinner når \n blir <br />, og `$` eller `*` i koden tolkes som
  // matte/kursiv. 3 256 kodeblokker i 66 bøker rendret slik.
  const kodeBlokker: string[] = [];
  const KODE_START = '\u0000KODE';
  const KODE_END = 'KODE\u0000';
  let result = content.replace(/```([a-zA-Z0-9+#_-]*)[ \t]*\n?([\s\S]*?)```/g, (_, spraak, kode) => {
    const klasse = spraak ? ` language-${(spraak as string).toLowerCase()}` : '';
    kodeBlokker.push(
      `<pre class="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-relaxed"><code class="font-mono${klasse}">${escapeHtml(
        (kode as string).replace(/\n$/, '')
      )}</code></pre>`
    );
    return `${KODE_START}${kodeBlokker.length - 1}${KODE_END}`;
  });

  // Inline-kode (`…`) må parkeres på samme måte, og FØR matten. Den ble tidligere
  // behandlet helt til slutt, etter fet/kursiv, så markdown spiste innholdet:
  //   `__init__`      -> <code>_<em>init</em></code>
  //   `x**2 + y**2`   -> <code>x<strong>2 + y</strong>2</code>
  //   `d$hoy`         -> $-et startet et matteuttrykk
  // Det rammer alle dunder-metoder i Python og all R-kolonnesyntaks.
  result = result.replace(/`([^`\n]+)`/g, (_, kode) => {
    kodeBlokker.push(
      `<code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">${escapeHtml(kode as string)}</code>`
    );
    return `${KODE_START}${kodeBlokker.length - 1}${KODE_END}`;
  });

  // Handle display math ($$...$$)
  result = parkerEscapetDollar(result).replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
    try {
      let rendered = katex.renderToString(latex.trim(), {
        displayMode: true,
        throwOnError: false,
        trust: true,
      });
      // Override KaTeX centering and margin by adding inline style to .katex-display
      rendered = rendered.replace(
        'class="katex-display"',
        'class="katex-display" style="text-align: left; margin: 0;"'
      );
      katexBlocks.push(rendered);
      return `${KATEX_START}${katexBlocks.length - 1}${KATEX_END}`;
    } catch {
      return `<span class="text-red-500">Feil i LaTeX: ${escapeHtml(latex)}</span>`;
    }
  });

  // Handle inline math ($...$)
  result = result.replace(/\$([^$\n]+?)\$/g, (_, latex) => {
    try {
      // Add displaystyle for fractions to make them larger
      let processedLatex = latex.trim();
      if (processedLatex.includes('\\frac')) {
        processedLatex = `\\displaystyle ${processedLatex}`;
      }
      const rendered = katex.renderToString(processedLatex, {
        displayMode: false,
        throwOnError: false,
        trust: true,
      });
      katexBlocks.push(rendered);
      return `${KATEX_START}${katexBlocks.length - 1}${KATEX_END}`;
    } catch {
      return `<span class="text-red-500">Feil i LaTeX: ${escapeHtml(latex)}</span>`;
    }
  });

  // Handle Markdown-style formatting
  // Headings (#, ##, ### and ####) - process from most specific to least specific
  // Use [^\n]+ instead of .+ to ensure we don't match across lines
  result = result.replace(/^#### ([^\n\r]+)$/gm, '<h5 class="text-base font-semibold mt-4 mb-2">$1</h5>');
  result = result.replace(/^### ([^\n\r]+)$/gm, '<h4 class="text-lg font-semibold mt-6 mb-2">$1</h4>');
  result = result.replace(/^## ([^\n\r]+)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>');
  result = result.replace(/^# ([^\n\r]+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');

  // Bold (**text**)
  result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  // Italic (*text* or _text_)
  result = result.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  result = result.replace(/_([^_]+)_/g, '<em>$1</em>');

  // (inline-kode håndteres nå sammen med kodeblokkene, før markdown)

  // Images (![alt](url)). Lokale /images-stier rutes via mediaUrl (Supabase
  // Storage) — samme som ImageBlockComponent — ellers 404 i prod. Figurer får
  // lesbar bredde og sentreres.
  result = result.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
    const ok = /^https?:\/\//i.test(url) || url.startsWith('/');
    const sanitizedUrl = ok ? mediaUrl(url) : '';
    return `<img src="${escapeHtml(sanitizedUrl)}" alt="${escapeHtml(alt)}" style="max-width: 420px; width: 100%; height: auto; margin: 1rem auto; display: block;" />`;
  });

  // Links ([text](url)) - internal chapter links (/bok/...) and external https
  // Must run after image handling so ![..](..) is already consumed
  result = result.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, text, url) => {
    if (url.startsWith('/')) {
      return `<a href="${escapeHtml(url)}" class="text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:text-sky-800 dark:hover:text-sky-300">${text}</a>`;
    }
    if (/^https?:\/\//i.test(url)) {
      return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline underline-offset-2 hover:text-sky-800 dark:hover:text-sky-300">${text}</a>`;
    }
    return match;
  });

  // Line breaks
  result = result.replace(/\n\n/g, '</p><p class="my-3">');
  result = result.replace(/\n/g, '<br />');

  // Handle simple tables (| col1 | col2 |)
  result = renderTables(result);

  // Restore KaTeX blocks
  result = result.replace(
    new RegExp(`${KATEX_START}(\\d+)${KATEX_END}`, 'g'),
    (_, index) => katexBlocks[parseInt(index)]
  );

  // Sett kodeblokkene tilbake. Skjer etter markdown og <br />-konverteringen, så
  // innholdet i <pre> er urørt — inkludert innrykk, stjerner, dollartegn og #.
  result = result.replace(
    new RegExp(`${KODE_START}(\\d+)${KODE_END}`, 'g'),
    (_, index) => kodeBlokker[parseInt(index)]
  );
  // <pre> er blokk-nivå: et <br /> rett etter gir et tomt linjeskift i teksten.
  result = result.replace(/(<\/pre>)<br \/>/g, '$1');

  // Wrap in paragraph if not already wrapped and not starting with katex-display
  if (!result.startsWith('<') && !result.includes('katex-display') && !result.startsWith('<pre')) {
    result = `<p class="my-3">${result}</p>`;
  }

  return gjenopprettDollar(result);
}

function renderTables(content: string): string {
  // Split on both <br /> and </p><p...> to properly separate tables
  // Use a placeholder to preserve which separator was used
  const PARA_PLACEHOLDER = '\u0001PARA\u0001';
  const BR_PLACEHOLDER = '\u0001BR\u0001';

  const processed = content
    .replace(/<\/p><p[^>]*>/g, PARA_PLACEHOLDER)
    .replace(/<br \/>/g, BR_PLACEHOLDER);

  const lines = processed.split(new RegExp(`${PARA_PLACEHOLDER}|${BR_PLACEHOLDER}`));
  const separators: string[] = [];

  // Extract separators in order
  const sepMatches = processed.matchAll(new RegExp(`${PARA_PLACEHOLDER}|${BR_PLACEHOLDER}`, 'g'));
  for (const match of sepMatches) {
    separators.push(match[0] === PARA_PLACEHOLDER ? '</p><p class="my-3">' : '<br />');
  }

  const result: string[] = [];
  let inTable = false;
  let tableRows: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Find first and last pipe in the line
    const firstPipe = trimmedLine.indexOf('|');
    const lastPipe = trimmedLine.lastIndexOf('|');

    // Check if this looks like a table row (has at least 2 pipes with content between)
    if (firstPipe !== -1 && lastPipe !== -1 && firstPipe < lastPipe) {
      const tableRow = trimmedLine.substring(firstPipe, lastPipe + 1);
      const pipeCount = (tableRow.match(/\|/g) || []).length;

      // Need at least 3 pipes for a valid table row (| col1 | col2 |)
      if (pipeCount >= 3) {
        const prefix = trimmedLine.substring(0, firstPipe).trim();

        if (!inTable) {
          inTable = true;
          tableRows = [];
          // If there's a prefix before the first table row, add it
          if (prefix) {
            result.push(prefix);
          }
        }
        tableRows.push(tableRow);
        continue;
      }
    }

    // Not a table row - end any current table
    if (inTable && tableRows.length > 0) {
      result.push(buildTable(tableRows));
      inTable = false;
      tableRows = [];
    }
    result.push(line);
  }

  // Handle table at end of content
  if (inTable && tableRows.length > 0) {
    result.push(buildTable(tableRows));
  }

  // Rejoin with appropriate separators
  let output = result[0] || '';
  for (let i = 1; i < result.length; i++) {
    output += (separators[i - 1] || '<br />') + result[i];
  }

  return output;
}

function buildTable(rows: string[]): string {
  if (rows.length === 0) return '';

  let html = '<table class="my-4 w-full border-collapse">';

  rows.forEach((row, index) => {
    // Skip separator row (|---|---|)
    if (row.match(/^\|[\s\-:|]+\|$/)) return;

    const cells = row
      .split('|')
      .filter((cell) => cell.trim() !== '')
      .map((cell) => cell.trim());

    const tag = index === 0 ? 'th' : 'td';
    const cellClass = index === 0
      ? 'border border-border bg-muted px-3 py-2 text-left font-semibold'
      : 'border border-border px-3 py-2';

    html += '<tr>';
    for (const cell of cells) {
      html += `<${tag} class="${cellClass}">${cell}</${tag}>`;
    }
    html += '</tr>';
  });

  html += '</table>';
  return html;
}
