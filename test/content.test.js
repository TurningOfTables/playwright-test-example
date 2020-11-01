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
    expect(await page.waitForSelector(".nav-container")).to.not.be.undefined;
    expect(await page.waitForSelector("#home-link")).to.not.be.undefined;
    expect(await page.waitForSelector("#login-link")).to.not.be.undefined;
  });
  it("should display the header", async () => {
    expect(await page.waitForSelector(".header-section")).to.not.be.undefined;
    expect(await page.waitForSelector("#company-name")).to.not.be.undefined;
  });
  it("should display the intro", async () => {
    expect(await page.waitForSelector("#intro")).to.not.be.undefined;
    expect(await page.waitForSelector("#intro-heading")).to.not.be.undefined;
  });
  it("should display the products", async () => {
    expect(await page.waitForSelector("#products")).to.not.be.undefined;
    expect(await page.waitForSelector("#products-heading")).to.not.be.undefined;
  });
  it("should display the testimonials", async () => {
    expect(await page.waitForSelector("#testimonials")).to.not.be.undefined;
    expect(await page.waitForSelector("#testimonials-heading")).to.not.be.undefined;
  });
  it("should display the contact info", async () => {
    expect(await page.waitForSelector("#contact")).to.not.be.undefined;
    expect(await page.waitForSelector("#contact-heading")).to.not.be.undefined;
  });
});
