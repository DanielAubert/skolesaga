# Interactive Book Components

A comprehensive component library for creating interactive, web-based textbooks with code execution, exercises, videos, and progress tracking.

## Components

### 1. CodeEditor
Monaco-based code editor with syntax highlighting and toolbar controls.

```tsx
import { CodeEditor } from '@/components/book';

<CodeEditor
  initialCode="print('Hello')"
  language="python"
  height="300px"
  onRun={(code) => console.log(code)}
  showRunButton={true}
  readOnly={false}
/>
```

**Features:**
- Monaco Editor (VS Code's editor)
- Run, Reset, Copy buttons
- Dark theme with line numbers
- Word wrap and auto-layout

### 2. PythonRunner
Complete Python execution environment in the browser using Pyodide.

```tsx
import { PythonRunner } from '@/components/book';

<PythonRunner
  initialCode="print('Hello')"
  title="Try Python"
  height="300px"
/>
```

**Features:**
- Pyodide integration (Python in WebAssembly)
- Captures stdout/stderr
- Loading states and error handling
- Output display

### 3. Exercise
Auto-grading exercise system with test cases and hints.

```tsx
import { Exercise } from '@/components/book';

<Exercise
  title="Exercise 1"
  description="Write code that prints 'Hello'"
  initialCode="# Your code here\n"
  difficulty="lett"
  testCases={[
    {
      expectedOutput: "Hello",
      description: "Check output is correct"
    }
  ]}
  hints={[
    "Use print() function",
    "Remember quotes"
  ]}
/>
```

**Features:**
- Multiple test cases
- Pass/fail visualization
- Optional hints system
- Difficulty badges (lett/medium/vanskelig)

### 4. VideoEmbed
Responsive video player supporting YouTube and Vimeo.

```tsx
import { VideoEmbed } from '@/components/book';

<VideoEmbed
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  title="Introduction to Python"
  description="Learn the basics"
  aspectRatio="16:9"
/>
```

**Features:**
- YouTube and Vimeo support
- Responsive aspect ratios (16:9, 4:3)
- Loading placeholder
- Title and description

### 5. InfoBox
Styled callout boxes for tips, warnings, and notes.

```tsx
import { InfoBox } from '@/components/book';

<InfoBox type="tip" title="Pro Tip">
  Remember to save your work!
</InfoBox>
```

**Types:**
- `info` - General information (blue)
- `warning` - Important warnings (orange)
- `tip` - Helpful tips (yellow)
- `note` - Additional notes (purple)
- `success` - Success messages (green)

### 6. ProgressTracker
Track student progress through chapters with localStorage persistence.

```tsx
import { ProgressTracker } from '@/components/book';

<ProgressTracker
  bookId="python-basics"
  chapters={[
    { id: 'ch1', title: 'Introduction', sections: ['What is Python?'] },
    { id: 'ch2', title: 'Variables' }
  ]}
  currentChapterId="ch1"
  showDetails={true}
/>
```

**Features:**
- localStorage persistence
- Progress percentage
- Chapter completion tracking
- Reset functionality

## Demo Page

Visit `/book-demo` to see all components in action with working examples.

## Architecture

### Client-Side Rendering
All components use `'use client'` directive for interactive features.

### Dependencies
- **@monaco-editor/react** - Code editor
- **pyodide** - Python in browser
- **shadcn/ui** - UI components
- **lucide-react** - Icons

### Styling
Components use Tailwind CSS and shadcn/ui for consistent styling that adapts to dark/light themes.

## Usage in MDX

These components can be easily integrated into MDX-based content:

```mdx
import { PythonRunner, Exercise, InfoBox } from '@/components/book';

# Chapter 1: Introduction to Python

<InfoBox type="info">
Python is a beginner-friendly programming language.
</InfoBox>

<PythonRunner initialCode="print('Hello, World!')" />

<Exercise
  title="Your First Program"
  description="Print 'Hello, World!'"
  testCases={[{ expectedOutput: "Hello, World!" }]}
/>
```

## Performance Considerations

- **Pyodide Loading**: First load takes ~5-10 seconds to download Python runtime
- **Monaco Editor**: Lazy loads syntax highlighting
- **LocalStorage**: Progress data is stored locally, no backend required
- **Client-Side Only**: Components require JavaScript, not suitable for static export

## Future Enhancements

Potential additions:
- Interactive graphs/diagrams (Recharts)
- Math formula rendering (KaTeX)
- File upload/download
- Code collaboration features
- Multiple language support beyond Python
