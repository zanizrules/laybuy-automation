const Page = require('./page');

class ShopHerePage extends Page {
    get searchBar () { return $(`[type="search"]`) }
    get shopTiles () { return $(`.shop-directory-module--tiles--33tJj`).$$(`a`) }

    search (searchTerm) {
        this.searchBar.waitForExist();
        this.searchBar.click();
        this.searchBar.setValue(searchTerm);
    }

    clickTile(index) {
        this.shopTiles[index].click();
    }

    open () {
        return super.open('shop-here');
    }
}

module.exports = new ShopHerePage();
