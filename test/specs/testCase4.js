import MainPage from '../pageobjects/mainPage.js'

describe('Test case 4', () => {
    before(async () => {
        await browser.maximizeWindow();
        await MainPage.openRozetkaSite();
    });
    it('Wrong case', async () => {
        await MainPage.wrongAction();
    });
});