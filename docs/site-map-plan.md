# Site Map Plan

A plan for the pages of westjerseyproprietors.org, built from three sources:

1. **The 1964 pamphlet**, _West Jersey Proprietors and Council of Proprietors_ (Revell Press, Burlington), already transcribed to Markdown. The Proprietors wrote it, so we can publish it in full.
2. **External references** collected by family: the modern-spelling Concessions on [westjersey.org](https://westjersey.org/ca77.htm), seven New York Times articles (1893–1977), and the New Jersey State Archives' elementary lesson plan.
3. **Things the pamphlet doesn't cover**: what has happened since 1964 (including the current officers), and how to contact the Council.

## Guiding decisions

- **Two audiences.** Most visitors are curious: a neighbor who watched the noon ceremony in Burlington, a student, a genealogist. A smaller group has real business with the Council: surveyors, title searchers, attorneys, shareholders. The navigation serves the curious group first and gives the business group one clear entry point (**Land & Titles**).
- **Public only.** No members-only area, logins or shareholder notices.
- **Readable first, original second.** The 1676 Concessions use "Comissioners," "ffreeholders" and "seaventy." Each chapter page opens with a plain-English summary we write ourselves, then the original text. The easier-to-read version on westjersey.org belongs to someone we don't know, so we link to it and never copy it. The 1676 text itself is long out of copyright, so if we later want our own modern-spelling version, we can make one from the original.
- **The pamphlet gets split up, not dumped on one page.** Each section of the pamphlet becomes a page (or part of one), and the full transcription lives in the Library with its transcription note.
- **Link out to copyrighted material.** NYT articles and the state lesson plan are listed with a date, headline and one-line summary, and link to the source. We don't reproduce them.
- **URLs map straight to Astro files** in `src/pages/`, so `/history/timeline/` is `src/pages/history/timeline.md`.

## Top navigation

```
Home · About · History · The Concessions · Land & Titles · Ceremonies · Library
```

Contact goes in the footer. Six items fits a phone menu.

## Site map

```
/                                   Home
├── /about/                         About the Proprietors
│   ├── /about/council/             The Council of Proprietors
│   ├── /about/surveyor-general/    The Surveyor General
│   ├── /about/propriety/           What Is a Propriety?
│   └── /about/faq/                 Frequently Asked Questions
├── /history/                       History
│   ├── /history/timeline/          Timeline, 1497–today
│   ├── /history/province-line/     The East–West Jersey Line
│   └── /history/founding-documents/  Founding Documents
├── /concessions/                   The Concessions and Agreements (1676)
│   ├── /concessions/commissioners/ Chapters 1–12: The Commissioners and the Land
│   ├── /concessions/charter/       Chapters 13–31: The Charter of Fundamental Laws
│   ├── /concessions/assembly/      Chapters 32–44: The General Assembly
│   └── /concessions/signatures/    The Attestation and Signers
├── /land-titles/                   Land & Titles
│   └── /land-titles/surveys/       Getting a Proprietary Survey
├── /ceremonies/                    Annual Elections and Meetings
├── /library/                       Library
│   ├── /library/1964-pamphlet/     The 1964 Pamphlet (full text)
│   ├── /library/in-the-news/       In the News (NYT archive, 1893–1977)
│   ├── /library/for-teachers/      For Teachers and Students
│   └── /library/sources/           Sources and Further Reading
└── /contact/                       Contact
```

24 pages in total.

## Page by page

### Home `/`

- One-paragraph answer to "Who are the West Jersey Proprietors?" Adapt the pamphlet's opening: "an anachronism … still has a useful function."
- Three hooks, each linking deeper:
  - **Since 1688.** The Council was formally organized in Burlington on September 6, 1688. → Timeline
  - **The first separation of church and state.** The 1676 Concessions, Chapter 16. → The Concessions
  - **Noon on April 10.** The annual election at High and Broad streets. → Ceremonies
- A small "For surveyors and title searchers" link to Land & Titles.

### About

| Page                       | Content                                                                                                                                                                                                                                                                                                       | Pamphlet source                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `/about/`                  | What the Proprietors are today, in plain language; how they differ from the government of New Jersey. Links to the four sub-pages.                                                                                                                                                                            | Introduction                                                                  |
| `/about/council/`          | Nine members (five from Burlington, four from Gloucester) plus the Surveyor General. Officers: president, vice president, clerk, treasurer. **Current officers and members**, from the Proprietors' list. Duties: grant the original basis of title, approve surveys, keep records, control acreage warrants. | "Duties and functions of the Council"; chronology entries for 1687–8 and 1688 |
| `/about/surveyor-general/` | What the office does. The five-pound fee. Table of every Surveyor General since 1688, **updated past 1963**.                                                                                                                                                                                                  | "The Surveyor General" and its table                                          |
| `/about/propriety/`        | The 100 shares from Byllinge's bankruptcy. The difference between "rights of propriety" (the shares) and "proprietary rights" (acreage warrants). The 1/32 share needed to vote. How shares pass by deed or inheritance. A simple diagram: 1 province half → 100 shares → fractions → warrants → acres.       | "A propriety"; 1674–5 note on the Tripartite Indenture                        |
| `/about/faq/`              | Short answers: Do they own my land? Can I buy a share? Is this a government agency? Why do they meet outdoors? Is it the oldest corporation in the U.S.? (Confirm wording with the Council.)                                                                                                                  | Compiled from all of the above                                                |

### History

| Page                           | Content                                                                                                                                                                                                                                                                                                           | Source                      |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `/history/`                    | A two- or three-paragraph narrative: Berkeley sells to Byllinge, Byllinge goes bankrupt, Penn and the trustees divide the half into 100 shares, Quakers settle Burlington, government is surrendered in 1702 but the land stays with the Proprietors.                                                             | Chronology, retold          |
| `/history/timeline/`           | The full chronology, 1497–1814, as a scannable timeline with years as anchors (`#1664`, `#1676` …). **Extend it** past 1814 with the 1964 pamphlet itself, the NYT coverage, and recent events.                                                                                                                   | "Historical chronology"     |
| `/history/province-line/`      | The Quintipartite Deed's intended line; Keith's Line (1687); the 1718 commission; Chapman (1720); Lawrence (1743); the 1769 King's commission. **Needs a map**, which is the most useful image on the site.                                                                                                       | "The East-West Jersey line" |
| `/history/founding-documents/` | One card per document: Berkeley–Carteret grant (1664), Tripartite Indenture (1675), Quintipartite Deed (1676), Concessions (1676), Confirmatory Grant (1680). Each shows the date, what it did, the N.J.A. citation, and "original held at the Surveyor General's Office, Burlington" where the pamphlet says so. | Pamphlet footnotes 1–10     |

### The Concessions and Agreements

The longest content on the site. Split into four pages along the pamphlet's own section breaks so that no page is enormous.

- **`/concessions/`** (landing page): why the document matters (separation of church and state, trial by jury, secret ballot, open courts, fair dealing with the Lenape). A table of all 44 chapters, each with a one-line plain-English summary and a link to its anchor. A link to the [easier-to-read version on westjersey.org](https://westjersey.org/ca77.htm), labeled as an outside site. A note on the spelling.
- **`/concessions/commissioners/`**: Chapters 1–12.
- **`/concessions/charter/`**: Chapters 13–31, the "Charter or fundamental Laws." The highlights for most readers: 16 (liberty of conscience), 17 (jury of twelve), 23 (open courts), 25–26 (relations with the Native people).
- **`/concessions/assembly/`**: Chapters 32–44.
- **`/concessions/signatures/`**: the attestation, plus a scan or photo of the signature pages if the Council can provide one (the pamphlet's pp. 30–33 facsimiles weren't transcribed).

On each chapter page, every chapter gets an anchor (`#chapter-16`), a plain-English summary in a highlighted box, and then the original text. Prev/next links between the four pages.

### Land & Titles

| Page                    | Content                                                                                                                                                                                                                                     | Source                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `/land-titles/`         | Who this page is for. What a "proprietary survey" is and when you need one (land never before appropriated). What the Council does and doesn't do. Contact for the Surveyor General's office.                                               | "Basis of original title to lands" |
| `/land-titles/surveys/` | Step by step: measure the acreage → acquire warrant rights from a holder → survey by the Surveyor General or a deputy → caveat period → Council approval → record with the county clerk. Current fees and meeting dates (from the Council). | Same section, expanded             |

### Ceremonies `/ceremonies/`

- **Burlington**, April 10 at noon, northwest corner of High and Broad streets. Five proprietors elected.
- **Gloucester City**, April 13, Gloucester Green, at the site of the old buttonwood tree. Four elected.
- **Council organizes** on the first Tuesday after the first Monday in May at the Proprietors' office.
- A map of both sites, photos from recent years, and "visitors welcome?" (confirm).
- Link to the NYT coverage of past ceremonies on In the News.

### Library

| Page                      | Content                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/library/`               | Index of everything below.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `/library/1964-pamphlet/` | The complete transcription, exactly as in `west-jersey-proprietors.md`, with its transcription note. A PDF of the scan for download (the Proprietors wrote it, so we can host it). A note that the 1964 text is a historical document and some facts (the Surveyor General list, fees) have changed.                                                                                                                          |
| `/library/in-the-news/`   | NYT articles listed newest first (table below).                                                                                                                                                                                                                                                                                                                                                                               |
| `/library/for-teachers/`  | The NJ State Archives lesson plan, "It Happened Here: West Jersey" ([PDF](https://nj.gov/state/historical/assets/pdf/it-happened-here/ihhnj-er-west-jersey.pdf)). Suggested classroom hooks: compare Chapter 16 to the First Amendment; Chapter 33's ballot boxes; Chapter 25's mixed juries.                                                                                                                                 |
| `/library/sources/`       | The pamphlet's ten citations (Whitehead's N.J.A., Pomfret 1956, Leaming & Spicer), formatted as a bibliography. Web resources: westjersey.org's [Concessions](https://westjersey.org/ca77.htm) and [Council](https://westjersey.org/wjh_copowj.htm) pages, and the NJ State Archives, which has held the Proprietors' records since December 2005 ([finding aid PDF](https://www.nj.gov/state/archives/pdf/proprietors.pdf)). |

**In the News** (headlines and summaries to fill in after reading each article):

| Date             | Link                                                                                                        | Headline                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| July 7, 1977     | [TimesMachine p. 40](https://timesmachine.nytimes.com/timesmachine/1977/07/07/75091108.html?pageNumber=40)  | _TBD_                                 |
| April 6, 1975    | [TimesMachine p. 87](https://timesmachine.nytimes.com/timesmachine/1975/04/06/83170105.html?pageNumber=87)  | _TBD_                                 |
| April 13, 1961   | [TimesMachine p. 37](https://timesmachine.nytimes.com/timesmachine/1961/04/13/101456305.html?pageNumber=37) | _TBD_                                 |
| May 6, 1935      | [TimesMachine p. 8](https://timesmachine.nytimes.com/timesmachine/1935/05/06/95073620.html?pageNumber=8)    | _TBD_                                 |
| October 15, 1895 | [TimesMachine p. 6](https://timesmachine.nytimes.com/timesmachine/1895/10/15/103373822.html?pageNumber=6)   | _TBD_                                 |
| April 10, 1893   | [TimesMachine p. 1](https://timesmachine.nytimes.com/timesmachine/1893/04/10/109697891.html?pageNumber=1)   | _TBD_                                 |
| _date TBD_       | _URL needed_                                                                                                | "Long on Ceremony, Short on Business" |

TimesMachine requires an NYT subscription, so add a note saying so. The 1893 and 1895 articles are in the public domain and could be quoted or transcribed in full.

### Contact `/contact/`

Mailing address of the Proprietors' office in Burlington, who to contact for survey business versus general questions, and office hours if any.

## Where each part of the pamphlet goes

| Pamphlet section                    | Destination                                        |
| ----------------------------------- | -------------------------------------------------- |
| Introduction ("an anachronism")     | Home, About                                        |
| Historical chronology               | History, Timeline; pieces in Council and Propriety |
| Election of Council                 | Ceremonies, Council                                |
| Duties and functions of the Council | Council                                            |
| The Surveyor General (and table)    | Surveyor General                                   |
| A propriety                         | What Is a Propriety?                               |
| The East-West Jersey line           | Province Line                                      |
| Basis of original title to lands    | Land & Titles, Getting a Proprietary Survey        |
| Notes 1–10                          | Founding Documents, Sources                        |
| Concessions, Chapters 1–12          | Concessions: Commissioners                         |
| Concessions, Chapters 13–31         | Concessions: Charter                               |
| Concessions, Chapters 32–44         | Concessions: Assembly                              |
| Attestation                         | Concessions: Signatures                            |
| Whole pamphlet                      | Library, 1964 Pamphlet                             |

## Decisions made

- **westjersey.org**: we don't know its author, so we link to it and don't copy it.
- **1964 pamphlet**: written by the Proprietors, so we publish it in full, scan included.
- **Current officers**: the Proprietors have a list; it goes on the Council page.
- **Audience**: public only.

## Still open

1. **"Long on Ceremony, Short on Business."** This was the one item in the email that came through as a title with no link. It's probably the headline of another NYT article about the Proprietors. If the email has a link behind that text, please send it; otherwise we leave it off until someone finds it.
2. **Other changes since 1964**: Surveyor Generals after William H. Taylor, whether the five-pound fee or the meeting dates have changed, and whether the Council still approves new surveys.
3. **Contact details** the Council is willing to publish.
4. **Images**: the scanned pamphlet, its cover art, the manuscript facsimiles (pp. 8, 30–33), photos of the ceremony sites and markers, and a map of the province line. Which do we have, and are there photos from recent ceremonies?

## Suggested build order

1. Home, About (all four sub-pages), Contact. This gets the basics online.
2. Library → 1964 Pamphlet (the transcription is ready to drop in).
3. Concessions, all five pages. Split the pamphlet text and write the 44 one-line summaries.
4. History, Timeline, Founding Documents.
5. Ceremonies, Land & Titles. These depend on the Council's current details.
6. In the News, For Teachers, Sources. Then the Province Line page, once there is a map.
