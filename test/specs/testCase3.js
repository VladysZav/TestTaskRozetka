import MainPage from '../pageobjects/mainPage.js'

describe('Test case 3', () => {
    before(async () => {
        await browser.maximizeWindow();
        await MainPage.openRozetkaSite();
    });
    it('Search the item', async () => {
        await MainPage.searchItem('Sumsung');
        await expect(browser).toHaveUrlContaining('producer/samsung/');
    });
});