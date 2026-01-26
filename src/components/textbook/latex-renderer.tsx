'use client';

import { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

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

// Render inline content without paragraph wrapping
function renderInlineContent(content: string): string {
  const katexBlocks: string[] = [];
  const KATEX_START = '\u0000KATEX';
  const KATEX_END = 'KATEX\u0000';

  // Handle inline math ($...$)
  let result = content.replace(/\$([^$\n]+?)\$/g, (_, latex) => {
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
      return `<span class="text-red-500">Feil i LaTeX: ${latex}</span>`;
    }
  });

  // Restore KaTeX blocks
  result = result.replace(
    new RegExp(`${KATEX_START}(\\d+)${KATEX_END}`, 'g'),
    (_, index) => katexBlocks[parseInt(index)]
  );

  return result;
}

function renderMixedContent(content: string): string {
  // Store KaTeX rendered content to protect from text transformations
  const katexBlocks: string[] = [];
  // Use Unicode characters that won't be affected by Markdown processing
  const KATEX_START = '\u0000KATEX';
  const KATEX_END = 'KATEX\u0000';

  // Handle display math ($$...$$)
  let result = content.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
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
      return `<span class="text-red-500">Feil i LaTeX: ${latex}</span>`;
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
      return `<span class="text-red-500">Feil i LaTeX: ${latex}</span>`;
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

  // Code (`code`)
  result = result.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">$1</code>');

  // Images (![alt](url)) - max 200px on desktop for inline figures
  result = result.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width: 200px; height: auto; margin: 1rem 0;" />');

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

  // Wrap in paragraph if not already wrapped and not starting with katex-display
  if (!result.startsWith('<') && !result.includes('katex-display')) {
    result = `<p class="my-3">${result}</p>`;
  }

  return result;
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
