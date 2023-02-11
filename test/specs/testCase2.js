import MainPage from '../pageobjects/mainPage.js'

describe('Test case 2', () => {
    before(async () => {
        await browser.maximizeWindow();
        await MainPage.openRozetkaSite();
    });
    it('add items to the basket ', async () => {
        await MainPage.goToTheTV();
        await MainPage.buyTV();
        await MainPage.goToApplePhone();
        await MainPage.buyPhone();
        await MainPage.goToBasket();
        await MainPage.checkBasket();
    });
});