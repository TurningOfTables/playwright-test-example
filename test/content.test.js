const { chromium } = require("playwright");
const chai = require("chai");
const expect = chai.expect;
let browser, page;

beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

beforeEach(async () => {
  await page.goto("http://localhost:3000");
});

afterAll(async () => {
  await browser.close();
});

describe("Lorem Ipsum Plc - Page Content", () => {
  it("should display the nav bar", async () => {
    await page.waitForSelector(".nav-container");
    await page.waitForSelector("#home-link");
    await page.waitForSelector("#login-link");
  });
  it("should display the header", async () => {
    await page.waitForSelector(".header-section");
    await page.waitForSelector("#company-name");
  });
  it("should display the intro", async () => {
    await page.waitForSelector("#intro");
    await page.waitForSelector("#intro-heading");
  });
  it("should display the products", async () => {
    await page.waitForSelector("#products");
    await page.waitForSelector("#products-heading");
  });
  it("should display the testimonials", async () => {
    await page.waitForSelector("#testimonials");
    await page.waitForSelector("#testimonials-heading");
  });
  it("should display the contact info", async () => {
    await page.waitForSelector("#contact");
    await page.waitForSelector("#contact-heading");
  });
});
