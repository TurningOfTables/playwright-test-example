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

describe("Lorem Ipsum Plc - Login", () => {
  it("should open the login form correctly", async () => {
    await page.waitForSelector("#login-popup", { state: "hidden" });
    await page.click("#login-link");
    await page.waitForSelector("#login-popup");
  });
  it("should close the login form correctly", async () => {
    await page.waitForSelector("#login-popup", { state: "hidden" });
    await page.click("#login-link");
    await page.waitForSelector("#login-popup");
    await page.click("#login-popup-close");
    await page.waitForSelector("#login-popup", { state: "hidden" });
  });
  it("should log in with valid details", async () => {
    await page.click("#login-link");
    await page.type("#username", "User42");
    await page.type("#password", "guest");
    await page.click("#form-submit");
    await page.waitForSelector(".form-success-container");
  });
  it("should nog log in with invalid details", async () => {
    await page.click("#login-link");
    await page.type("#username", "User42");
    await page.type("#password", "foo");
    await page.click("#form-submit");
    await page.waitForSelector(".form-failure-container");
  })

});
