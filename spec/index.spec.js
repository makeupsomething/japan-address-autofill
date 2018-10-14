describe("Getting an address", function() {
    it("getting an address with a valid zipcode", function(done) {
        var japanAddressAutofill = require('../lib/index.js');
        japanAddressAutofill.getAddressByZip("1000005")
        .then((response) => {
            const { prefecture, city, area, street } = response
            expect(prefecture).toBe("東京都");
            expect(city).toBe("千代田区");
            expect(area).toBe("丸の内");
            expect(street).toBe(undefined);
            done();
        });
    });
});