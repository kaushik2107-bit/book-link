# Book Link

## Installation

```
npm i book-link
```

## Example

Find pdf links of a book

```
import { BookLink } from "book-link";

const API_KEY = YOUR_API_KEY;
const CONTEXT_KEY = YOUR_CONTEXT_KEY;
const result = await BookLink.linkArray("Pride and Prejudice", API_KEY, CONTEXT_KEY);
console.log(result);
```

Console of the previous search

```
[
  'https://www.gutenberg.org/files/1342/old/pandp12p.pdf',
  'https://giove.isti.cnr.it/demo/eread/Libri/joy/Pride.pdf',
  'https://archive.org/download/prideprejudice00aust/prideprejudice00aust.pdf',
  'https://www.tarakeswardegreecollege.org/res/class/080-pride-and-prejudice.pdf',
  'https://www.ucm.es/data/cont/docs/119-2014-04-09-Guide%20To%20Pride%20and%20Prejudice.pdf',
  'https://almabooks.com/wp-content/uploads/2016/10/Excerpt_Pride_and_Prejudice.pdf',
  'https://gibbssmithcovers.com/Pride-Prejudice-eBLAD.pdf',
  'https://ir.nbu.ac.in/bitstream/123456789/1169/6/06_chapter_02.pdf',
  'https://pdfs.semanticscholar.org/9813/456c78ee744bee3b882005b0387960ad7769.pdf',
  'https://core.ac.uk/download/pdf/230746955.pdf'
]
```

## Keys

To get **Google API Key** for Programmable Search Engine,
goto: https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key

![Screenshot from 2023-01-31 10-06-11](https://user-images.githubusercontent.com/56549069/215678106-092888cb-0b9b-442f-8e14-f1a64d0931aa.png)

To get **Search Engine Key**,
goto : https://programmablesearchengine.google.com/controlpanel/create

![Screenshot from 2023-01-31 10-13-01](https://user-images.githubusercontent.com/56549069/215678189-f8140c1a-54f5-45b7-b9f4-c6f7b0353074.png)

