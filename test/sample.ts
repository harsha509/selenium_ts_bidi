import {Builder, LogInspector, WebDriver} from 'selenium-webdriver';
import { Options as ChromeOptions } from 'selenium-webdriver/chrome';
const opts = new ChromeOptions();


describe('sample test', () => {
  let driver: WebDriver;
  before(async () => {
    driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(<ChromeOptions>opts.enableBidi())
      .build()
  });

  it('test listen to console log', async function () {
    let logEntry = null
    const inspector = await LogInspector(driver)
    await inspector.onConsoleEntry(function (log) {
      logEntry = log
    })

    await driver.get('https://www.selenium.dev/selenium/web/bidi/logEntryAdded.html')
    await driver.findElement({id: 'consoleLog'}).click()

    await inspector.close()
  })

  after(async () => {
    await driver.quit()
  });
});