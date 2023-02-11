
class MainPage{
    get smartphoneAndTVButton () {
        return $('div[class*="menu-wrapper menu"] a[href*="telefony-tv-i-ehlektronika"]')
    };
    get smartphoneAndTVNumberTwoButton () {
        return $('a[href*="telefony-tv-i-ehlektronika"][class*="menu-categories__link"]')
    };
    get QLEDTVButton () {
        return $('a[title*="qled-televizor/"]')
    };
    get applePhoneButton () {
        return $('a[title*="mobile-phones/c80003/producer=apple/"]')
    };
    get hisenceCheckBox () {
        return $('a[data-id="Hisense"]')
    };
    get nokiaCheckBox () {
        return $('a[data-id="Nokia"]')
    };
    get sortListButton () {
        return $('select [_ngcontent-rz-client-c192][selected]')
    };
    get fromCheapToExpensiveButton () {
        return $('option[value="1: cheap"]')
    };
    get appBuyTVButton () {
        return $('app-buy-button[goods_id="366544455"]')
    };
    get appBuyPhoneButton () {
        return $('app-buy-button[goods_id="318463663"]')
    };
    get basketButton () {
        return $('button[class*="header__button ng-star-inserted"]')
    };
    get phoneLabel () {
        return $('div[class="cart-product__main"] a[title="Мобильный телефон Apple iPhone 13 128GB Midnight (MLPF3HU/A)"]')
    };
    get TVLabel () {
        return $('div[class="cart-product__main"] a[title="Телевизор Nokia Smart Tv Qled 6500D черный"]')
    };
    get searchInput () {
        return $('input[name="search"]')
    };
    get searchButton () {
        return $('button[class*="button button_color_green"]')
    };

    async openRozetkaSite() {
        await browser.url('https://rozetka.com.ua/')
        await expect(browser).toHaveUrlContaining('https://rozetka.com.ua/')
    };
    async goToTheTV () {
        await this.smartphoneAndTVButton.click();
        await this.QLEDTVButton.click();
    };
    async filterSelection () {
        await this.hisenceCheckBox.click();
        await this.nokiaCheckBox.click();
        await this.sortListButton.click();
        await this.fromCheapToExpensiveButton.click();
    };
    async buyTV () {
        await this.appBuyTVButton.click();
    };
    async goToApplePhone () {
        await browser.url('https://rozetka.com.ua/');
        await this.smartphoneAndTVButton.click();
        await this.applePhoneButton.click();
    };
    async buyPhone () {
        await this.appBuyPhoneButton.click();
    };
    async goToBasket () {
        await this.basketButton.click();
    };
    async checkBasket () {
        await this.phoneLabel.isDisplayedInViewport();
        await this.TVLabel.isDisplayedInViewport();
    };
    async searchItem (nameItem) {
        await this.searchInput.setValue(nameItem);
        await this.searchButton.click();
    };
    async wrongAction () {
        await this.applePhoneButton.click();
    };
}
export default new MainPage();