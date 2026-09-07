---
name: "Ostfalia University of Applied Sciences"
logoLight: "./ostfalia_logo.svg"
logoDark: "./ostfalia_logo.svg"
url: "https://www.ostfalia.de/en/"
location: Wolfenbüttel, Germany
cover: "./ostfalia_cover.jpg"
coverAlt: "Collage of four Ostfalia University campus views."
---

**This is placeholder text.** Replace it with the profile of Ostfalia University
of Applied Sciences. Until then it doubles as a short Markdown guide: open
`index.md` next to this page and compare the source with what you see here.

## Headings

Start at `##`, as above. The page title comes from the `name` field in the
header block, so a first-level `#` heading would repeat it. Use `###` for a
subsection.

### A subsection

Headings need a blank line before and after them.

## Text

A paragraph is one or more lines of text. Leave a blank line between
paragraphs. A single line break inside a paragraph is ignored, so you can wrap
long lines wherever you like.

Words can be *italic*, **bold**, or `monospaced`. A link looks like
[this one to the campus map](https://www.ostfalia.de/), written as
`[link text](https://example.org/)`.

## Lists

A bulleted list:

- Faculty of Computer Science
- Faculty of Electrical Engineering
- Faculty of Mechanical Engineering

A numbered list:

1. Write the profile in `index.md`.
2. Put the images in the same folder.
3. Open a pull request.

Lists need a blank line before the first item.

## Quotes

> Standards are the foundation of interoperability.

Prefix a quote with `>`.

## Images

Images live in the same folder as `index.md` and are referenced by file name:

```markdown
![Students at the Wolfenbüttel campus](./campus.jpg)
```

The text in brackets describes the picture for people who cannot see it.
Please write a real description, not the file name.

The wide picture at the top of this page is not part of the text. It comes from
the `cover` field in the header block.

## Tables

| Field      | Meaning                            |
| ---------- | ---------------------------------- |
| `name`     | Full name, as the member writes it |
| `url`      | Link to the member's website       |
| `location` | City and country                   |

Columns do not have to line up in the source. It only makes them easier to
read.

## Good to know

- Blank lines separate blocks. Most formatting problems come from a missing one.
- The build stops and says what and where if something is wrong.
- More syntax: [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/).
