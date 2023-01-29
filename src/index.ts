const cheerio = require("cheerio");
const fetchs = require("node-fetch");
export class BookLink {
  static async linkArray(search: string, API_KEY: string, CONTEXT_KEY: string) {
    const str = search.split(" ");
    str.push("book", "pdf", "filetype:pdf");
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${str.join(
      " "
    )}&start=0`;
    const response = await fetchs(url);
    const html = await response.json();
    const links = html.items;
    const final: string[] = [];
    links.forEach((item) => {
      if (item.link && item.link.endsWith("pdf")) {
        final.push(item.link);
      }
    });
    console.log(final);
    return final;
  }
}
