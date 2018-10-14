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

    it("getting an address with a valid zipcode that includes a hyphen", function(done) {
        var japanAddressAutofill = require('../lib/index.js');
        japanAddressAutofill.getAddressByZip("100-0005")
        .then((response) => {
            const { prefecture, city, area, street } = response
            expect(prefecture).toBe("東京都");
            expect(city).toBe("千代田区");
            expect(area).toBe("丸の内");
            expect(street).toBe(undefined);
            done();
        });
    });

    it("getting an address with a invalid zipcode", function(done) {
        var japanAddressAutofill = require('../lib/index.js');
        japanAddressAutofill.getAddressByZip("100000005")
        .catch((error) => {
            expect(error).toBeTruthy();
            done();
        })
    });
});