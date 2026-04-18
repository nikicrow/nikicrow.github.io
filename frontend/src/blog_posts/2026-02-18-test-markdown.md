---
title: "Test markdown"
slug: "markdown-test"
date: 2026-02-18
category: Test
excerpt: "Test markdown functionality."
published: true
tags:
  - test_tag
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Text Formatting

**bold text** or **also bold**

_italic text_ or _also italic_

**_bold and italic_** or **_also bold and italic_**

~~strikethrough text~~

This is `inline code` within a sentence.

---

## Links and Images

[Link to Google](https://www.google.com)

[Link with title](https://www.google.com "Google Homepage")

Automatic link: <https://www.example.com>

![Alt text for image](https://via.placeholder.com/150 "Image title")

---

## Lists

### Unordered List

- Item 1
- Item 2
  - Nested item 2.1
  - Nested item 2.2
- Item 3

Alternative syntax:

- Star item 1
- Star item 2

* Plus item 1
* Plus item 2

### Ordered List

1. First item
2. Second item
   1. Nested item 2.1
   2. Nested item 2.2
3. Third item

### Task List (Checkboxes)

- [ ] Unchecked task
- [x] Checked task
- [ ] Another unchecked task

---

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

> Nested blockquotes:
>
> > This is nested one level.
> >
> > > This is nested two levels.

---

## Code Blocks

Inline code: `const x = 42;`

Fenced code block with syntax highlighting:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
  return true;
}
```

```python
def greet(name):
    print(f"Hello, {name}!")
    return True
```

```bash
echo "Hello World"
ls -la
```

Indented code block (4 spaces):

    function example() {
      return "This is indented code";
    }

---

## Tables

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

Alignment:

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| Left         |     Center     |         Right |
| Text         |      Text      |          Text |

---

## Horizontal Rules

Three dashes:

---

Three asterisks:

---

Three underscores:

---

---

## HTML Elements (if supported)

<details>
<summary>Click to expand</summary>

This is hidden content that appears when you click the summary.

</details>

<mark>Highlighted text</mark>

Text with <sup>superscript</sup> and <sub>subscript</sub>

<kbd>Ctrl</kbd> + <kbd>C</kbd> for keyboard keys

---

## Footnotes (if supported)

Here is a sentence with a footnote[^1].

Another footnote reference[^note].

[^1]: This is the footnote content.

[^note]: This is another footnote.

---

## Escaping Characters

\*This is not italic\*

\`This is not code\`

\[This is not a link\]

---

## Line Breaks

First line with two spaces at end
Second line (soft break)

First line

Second line (paragraph break)

---

## Definition Lists (if supported)

Term 1
: Definition 1

Term 2
: Definition 2a
: Definition 2b

---

## Abbreviations (if supported)

The HTML specification is maintained by the W3C.

_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium

---

## Math (if KaTeX/MathJax supported)

Inline math: $E = mc^2$

Block math:

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

---

## Emoji (if supported)

:smile: :heart: :thumbsup:

Or native emoji: 😀 ❤️ 👍
