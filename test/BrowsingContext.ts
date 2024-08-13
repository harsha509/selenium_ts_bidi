// import {Builder, By, LogInspector, Options, WebDriver, BrowsingContext } from 'selenium-webdriver';
// import { Options as ChromeOptions } from 'selenium-webdriver/chrome';
// import * as assert from "node:assert";
// const opts = new ChromeOptions();
//
//
// describe('sample test', () => {
//   let driver: WebDriver;
//   before(async () => {
//     driver = new Builder()
//       .forBrowser('chrome')
//       .setChromeOptions(<ChromeOptions>opts.enableBidi())
//       .build()
//   });
//
//   it.skip('Test Case #1: Unauthenticated cannot submit ideas', async () => {
//     const id = await driver.getWindowHandle()
//     const browsingContext = await BrowsingContext(driver, {
//       browsingContextId: id,
//     })
//     console.log(browsingContext)
//     assert.equal(browsingContext.id, id)
//   });
//
//   after(async () => {
//     await driver.quit()
//   });
// });