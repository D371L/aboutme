# aboutme

Personal site and interactive resume of **Vladimir Berson**.

**Live:** [d371l.github.io/aboutme](https://d371l.github.io/aboutme/)

## Concept

The page is a live SSH session: every section is a typed shell command and its output.
`whoami` prints the name, `neofetch` renders the profile, `journalctl` streams the career log,
`docker ps` lists running projects, `ssh` opens the contact channel.

## Stack

- Single `index.html`: vanilla HTML / CSS / JS
- **Zero dependencies**: no frameworks, no fonts, no trackers, works offline
- Dark / light theme toggle (terminal noir / paper terminal), respects system preference
- `⎙ cv` button: print stylesheet turns the page into a clean PDF resume
- Fully responsive, `prefers-reduced-motion` supported
- Open Graph + JSON-LD for rich link previews and search

## Palette

Proton purple `#6D4AFF` as the field, phosphor green `#00FF41` as the terminal response.

---

`$ uptime` · 10+ years up · load average: high, sustainable, intentional
