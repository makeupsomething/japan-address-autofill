
describe("Getting invalid zip codes", () => {
    // it("getting an address with an invalid zipcode", (done) => {
    //     var japanAddressAutofill = require('../lib/index.js')
    //     japanAddressAutofill.getAddressByZip("1111111")
    //     .catch((error) => {
    //         expect(error).toBeTruthy()
    //         done()
    //     })
    // })

    // it("getting an address with a long zipcode", (done) => {
    //     var japanAddressAutofill = require('../lib/index.js')
    //     japanAddressAutofill.getAddressByZip("100000005")
    //     .catch((error) => {
    //         expect(error).toBeTruthy()
    //         done()
    //     })
    // })
})

describe("Getting all prefectures and regions by zipcode", () => {
    var japanAddressAutofill = require('../lib/index.js')
    const prefectures = japanAddressAutofill.getAllPrefectures()
    const regions = japanAddressAutofill.getAllRegions()

    const input = [
        {id:1,  region:1, name:"北海道", zip: '0600806'},
        {id:2,  region:2, name:"青森県", zip: '0380012'},  
        {id:3,  region:2, name:"岩手県", zip: '0200121'},
        {id:4,  region:2, name:"宮城県", zip: '9800021'},  
        {id:5,  region:2, name:"秋田県", zip: '0100001'},    
        {id:6,  region:2, name:"山形県", zip: '9900828'},  
        {id:7,  region:2, name:"福島県", zip: '9608002'},
        {id:8,  region:3, name:"茨城県", zip: '3100015'},  
        {id:9,  region:3, name:"栃木県", zip: '3210965'},
        {id:10, region:3, name:"群馬県", zip: '3710024'},  
        {id:11, region:3, name:"埼玉県", zip: '3360021'},
        {id:12, region:3, name:"千葉県", zip: '2600031'},  
        {id:13, region:3, name:"東京都", zip: '1000005'},
        {id:14, region:3, name:"神奈川県", zip: '2200011'},
        {id:15, region:4, name:"新潟県", zip: '9500086'},
        {id:16, region:4, name:"富山県", zip: '9300004'},  
        {id:17, region:4, name:"石川県", zip: '9200861'},  
        {id:18, region:4, name:"福井県", zip: '9100006'},
        {id:19, region:4, name:"山梨県", zip: '4000031'}, 
        {id:20, region:4, name:"長野県", zip: '3800921'},  
        {id:21, region:4, name:"岐阜県", zip: '5008856'},     
        {id:22, region:4, name:"静岡県", zip: '4200851'},
        {id:23, region:4, name:"愛知県", zip: '4500002'},
        {id:24, region:5, name:"三重県", zip: '5140041'},
        {id:25, region:5, name:"滋賀県", zip: '5200055'},  
        {id:26, region:5, name:"京都府", zip: '6008216'},
        {id:27, region:5, name:"大阪府", zip: '5300001'},
        {id:28, region:5, name:"兵庫県", zip: '6520897'},
        {id:29, region:5, name:"奈良県", zip: '6308122'},
        {id:30, region:5, name:"和歌山県", zip: '6408146'},
        {id:31, region:6, name:"鳥取県", zip: '6800835'},
        {id:32, region:6, name:"島根県", zip: '6900003'},
        {id:33, region:6, name:"岡山県", zip: '7000024'},
        {id:34, region:6, name:"広島県", zip: '7320822'},
        {id:35, region:6, name:"山口県", zip: '7530042'},
        {id:36, region:7, name:"徳島県", zip: '7700841'},
        {id:37, region:7, name:"香川県", zip: '7600011'},  
        {id:38, region:7, name:"愛媛県", zip: '7900012'},  
        {id:39, region:7, name:"高知県", zip: '7800061'},
        {id:40, region:8, name:"福岡県", zip: '8120012'},  
        {id:41, region:8, name:"佐賀県", zip: '8400801'},
        {id:42, region:8, name:"長崎県", zip: '8500058'},
        {id:43, region:8, name:"熊本県", zip: '8600047'},
        {id:44, region:8, name:"大分県", zip: '8700831'}, 
        {id:45, region:8, name:"宮崎県", zip: '8800811'},
        {id:46, region:8, name:"鹿児島県", zip: '8996404'}, 
        {id:47, region:8, name:"沖縄県", zip: '9000013'},
    ]

    input.forEach(input => {
        it(`getting an region and prefecture for zipcode ${input.zip}`, (done) => {
            japanAddressAutofill.getAddressByZip(input.zip).then((response) => {
                const { region, prefecture } = response
                expect(prefecture).toBe(input.name)
                done()
            })
        })
    })
})

describe("Getting a Tokyo address", () => {
    var japanAddressAutofill = require('../lib/index.js')
    it("getting an address with a valid zipcode", (done) => {
        japanAddressAutofill.getAddressByZip("1000005")
        .then((response) => {
            const { region, prefecture, city, area, street } = response
            expect(region).toBe("関東")
            expect(prefecture).toBe("東京都")
            expect(city).toBe("千代田区")
            expect(area).toBe("丸の内")
            expect(street).toBe(undefined)
            done()
        })
    })

    it("getting an address with a valid zipcode that includes a hyphen", (done) => {
        japanAddressAutofill.getAddressByZip("100-0005")
        .then((response) => {
            const { region, prefecture, city, area, street } = response
            expect(region).toBe("関東")
            expect(prefecture).toBe("東京都")
            expect(city).toBe("千代田区")
            expect(area).toBe("丸の内")
            expect(street).toBe(undefined)
            done()
        })
    })
})