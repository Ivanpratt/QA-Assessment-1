
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:3000/')
    await driver.sleep(500)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(500)
})

test('Robots show up when Draw is clicked', async () => {
    const draw = await driver.findElement(By.id('draw'))
    draw.click()
    await driver.sleep(500)
    const card = await driver.findElement(By.className('bot-card outline'))
    const displayed = await card.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(500)
})

test('Duel button shows up when two robots have been selected', async () => {
    let robot1 = await driver.findElements(By.xpath('//button[text()="Add to Duo"]'))
    await robot1[1].click()
    let robot2 = await driver.findElements(By.xpath('//button[text()="Add to Duo"]'))
    await robot2[3].click()
    const duelbutton = await driver.findElement(By.xpath('//button[text()="DUEL!"]'))
    const displayed = await duelbutton.isDisplayed()
    await driver.sleep(1000)
})