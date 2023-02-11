import MainPage from '../pageobjects/mainPage.js'

describe('Test case 1', () => {
    before(async () => {
        await browser.maximizeWindow();
        await MainPage.openRozetkaSite();
    });
    it('Verify if the price filter working correctly for the following marketplaces', async () => {
        await MainPage.goToTheTV();
        await MainPage.filterSelection();
        await expect(browser).toHaveUrlContaining('sort=cheap');
    });
});