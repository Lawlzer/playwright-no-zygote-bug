const playwright = require("playwright");

async function main() {
  console.log("Script initialized");

  const browser = await playwright.chromium.launch({
    headless: true,
    args: ["--no-zygote"],
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://www.courtclerk.org/records-search/foreclosure/");

  await page.selectOption("#cc_frm > select", "All of the Above");

  const [startDate, endDate] = ["08/23/2023", "09/02/2023"];

  await page.type("#FFC", startDate);
  await page.type("#date", endDate);

  console.log("About to click search (we usually error next line)");
  await page.getByRole("button", { name: "Search" }).click();
  console.log("Search button pressed");

  await page.click("body > div.page-container > button");
  console.log("Show all rows button pressed");
  console.log("Script successfully ran!");
}

void main();
