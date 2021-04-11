const ShopHerePage = require('../../shophere.page');

describe('Laybuy Shop Here functionality', () => {
    it('should show results with valid search', () => {
        ShopHerePage.open();
        const textToSearch = 'Stirling'
        const expectedTileUrls = ['stirlingsports.co.nz', 'stirlingwomen.co.nz']
        const selectedTile = 0;

        ShopHerePage.search(textToSearch);
        expect(ShopHerePage.searchBar).toHaveValue(textToSearch);
        expect(ShopHerePage.shopTiles).toBeElementsArrayOfSize({ gte: 2 });
        for(var i = 0; i < expectedTileUrls.length; i++) {
            expect(ShopHerePage.shopTiles[i]).toHaveLinkContaining(expectedTileUrls[i]);
        }
        ShopHerePage.clickTile(selectedTile);
        browser.switchWindow(expectedTileUrls[selectedTile]);
    });
});


