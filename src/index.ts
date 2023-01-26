const cheerio = require("cheerio");
const fetchs = require("node-fetch");
export class BookLink {
  static async linkArray(search: string) {
    const str = search.split(" ");
    str.push("book", "pdf", "filetype:pdf");
    const url = `https://www.google.com/search?q=${str.join(" ")}`;
    const response = await fetchs(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const links = $("a")
      .map((i, link) => {
        return link.attribs.href;
      })
      .get();
    return links;
  }
}
