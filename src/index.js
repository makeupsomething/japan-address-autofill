const regions = [
    {id:1, name:"北海道", kana:"ホッカイドウ", en:"hokkaido", neighbor:[2]},
    {id:2, name:"東北",   kana:"トウホク",     en:"tohoku",   neighbor:[1]},
    {id:3, name:"関東",   kana:"カントウ",     en:"kanto",    neighbor:[2, 4]},
    {id:4, name:"中部",   kana:"チュウブ",     en:"chubu",    neighbor:[2, 3, 5]},
    {id:5, name:"近畿",   kana:"キンキ",       en:"kinki",    neighbor:[4, 6, 7]},
    {id:6, name:"中国",   kana:"チュウゴク",   en:"chugoku",  neighbor:[5, 7, 8]},
    {id:7, name:"四国",   kana:"シコク",       en:"shikoku",  neighbor:[5, 6, 8]},
    {id:8, name:"九州",   kana:"キュウシュウ", en:"kyusyu",   neighbor:[6, 7]}
];

const prefectures = [
    {id:1,  region:1, name:"北海道",   short:"北海道", kana:"ホッカイドウ", en:"hokkaido",  neighbor:[2]},
    {id:2,  region:2, name:"青森県",   short:"青森",   kana:"アオモリ",     en:"aomori",    neighbor:[1, 3, 5]},
    {id:3,  region:2, name:"岩手県",   short:"岩手",   kana:"イワテ",       en:"iwate",     neighbor:[2, 4, 5]},
    {id:4,  region:2, name:"宮城県",   short:"宮城",   kana:"ミヤギ",       en:"miyagi",    neighbor:[3, 5, 6, 7]},
    {id:5,  region:2, name:"秋田県",   short:"秋田",   kana:"アキタ",       en:"akita",     neighbor:[2, 3, 4, 6]},
    {id:6,  region:2, name:"山形県",   short:"山形",   kana:"ヤマガタ",     en:"yamagata",  neighbor:[4, 5, 7, 15]},
    {id:7,  region:2, name:"福島県",   short:"福島",   kana:"フクシマ",     en:"fukushima", neighbor:[4, 6, 8, 9, 10, 15]},
    {id:8,  region:3, name:"茨城県",   short:"茨城",   kana:"イバラキ",     en:"ibaraki",   neighbor:[7, 9, 11, 12]},
    {id:9,  region:3, name:"栃木県",   short:"栃木",   kana:"トチギ",       en:"tochigi",   neighbor:[8, 7, 10, 11]},
    {id:10, region:3, name:"群馬県",   short:"群馬",   kana:"グンマ",       en:"gunma",     neighbor:[7, 9, 11, 15, 20]},
    {id:11, region:3, name:"埼玉県",   short:"埼玉",   kana:"サイタマ",     en:"saitama",   neighbor:[8, 9, 10, 12, 13, 19, 20]},
    {id:12, region:3, name:"千葉県",   short:"千葉",   kana:"チバ",         en:"chiba",     neighbor:[8, 11, 13, 14]},
    {id:13, region:3, name:"東京都",   short:"東京",   kana:"トウキョウ",   en:"tokyo",     neighbor:[11, 12, 14, 19]},
    {id:14, region:3, name:"神奈川県", short:"神奈川", kana:"カナガワ",     en:"kanagawa",  neighbor:[12, 13, 19, 22]},
    {id:15, region:4, name:"新潟県",   short:"新潟",   kana:"ニイガタ",     en:"niigata",   neighbor:[6, 7, 10, 16, 20]},
    {id:16, region:4, name:"富山県",   short:"富山",   kana:"トヤマ",       en:"toyama",    neighbor:[15, 17, 20, 21]},
    {id:17, region:4, name:"石川県",   short:"石川",   kana:"イシカワ",     en:"ishikawa",  neighbor:[16, 18, 21]},
    {id:18, region:4, name:"福井県",   short:"福井",   kana:"フクイ",       en:"fukui",     neighbor:[17, 21, 25, 26]},
    {id:19, region:4, name:"山梨県",   short:"山梨",   kana:"ヤマナシ",     en:"yamanashi", neighbor:[11, 13, 14, 20, 22]},
    {id:20, region:4, name:"長野県",   short:"長野",   kana:"ナガノ",       en:"nagano",    neighbor:[10, 11, 15, 16, 19, 21, 22, 23]},
    {id:21, region:4, name:"岐阜県",   short:"岐阜",   kana:"ギフ",         en:"gifu",      neighbor:[16, 17, 18, 20, 23, 24, 25]},
    {id:22, region:4, name:"静岡県",   short:"静岡",   kana:"シズオカ",     en:"shizuoka",  neighbor:[14, 19, 20, 23]},
    {id:23, region:4, name:"愛知県",   short:"愛知",   kana:"アイチ",       en:"aichi",     neighbor:[20, 21, 22, 24]},
    {id:24, region:5, name:"三重県",   short:"三重",   kana:"ミエ",         en:"mie",       neighbor:[21, 23, 25, 26, 29, 30]},
    {id:25, region:5, name:"滋賀県",   short:"滋賀",   kana:"シガ",         en:"shiga",     neighbor:[18, 21, 24, 26]},
    {id:26, region:5, name:"京都府",   short:"京都",   kana:"キョウト",     en:"kyoto",     neighbor:[18, 24, 25, 27, 28, 29]},
    {id:27, region:5, name:"大阪府",   short:"大阪",   kana:"オオサカ",     en:"osaka",     neighbor:[26, 28, 29, 30]},
    {id:28, region:5, name:"兵庫県",   short:"兵庫",   kana:"ヒョウゴ",     en:"hyogo",     neighbor:[26, 27, 30, 31, 33, 36, 37]},
    {id:29, region:5, name:"奈良県",   short:"奈良",   kana:"ナラ",         en:"nara",      neighbor:[24, 26, 27, 30]},
    {id:30, region:5, name:"和歌山県", short:"和歌山", kana:"ワカヤマ",     en:"wakayama",  neighbor:[24, 27, 28, 29, 36]},
    {id:31, region:6, name:"鳥取県",   short:"鳥取",   kana:"トットリ",     en:"tottori",   neighbor:[28, 32, 33, 34]},
    {id:32, region:6, name:"島根県",   short:"島根",   kana:"シマネ",       en:"shimane",   neighbor:[31, 34, 35]},
    {id:33, region:6, name:"岡山県",   short:"岡山",   kana:"オカヤマ",     en:"okayama",   neighbor:[28, 31, 34, 37]},
    {id:34, region:6, name:"広島県",   short:"広島",   kana:"ヒロシマ",     en:"hiroshima", neighbor:[31, 32, 33, 35, 37, 38]},
    {id:35, region:6, name:"山口県",   short:"山口",   kana:"ヤマグチ",     en:"yamaguchi", neighbor:[32, 34, 38, 40, 44]},
    {id:36, region:7, name:"徳島県",   short:"徳島",   kana:"トクシマ",     en:"tokushima", neighbor:[28, 30, 37, 38, 39]},
    {id:37, region:7, name:"香川県",   short:"香川",   kana:"カガワ",       en:"kagawa",    neighbor:[28, 33, 34, 36, 38]},
    {id:38, region:7, name:"愛媛県",   short:"愛媛",   kana:"エヒメ",       en:"ehime",     neighbor:[33, 34, 35, 36, 37, 39, 44]},
    {id:39, region:7, name:"高知県",   short:"高知",   kana:"コウチ",       en:"kochi",     neighbor:[36, 38]},
    {id:40, region:8, name:"福岡県",   short:"福岡",   kana:"フクオカ",     en:"fukuoka",   neighbor:[35, 41, 42, 43, 44]},
    {id:41, region:8, name:"佐賀県",   short:"佐賀",   kana:"サガ",         en:"saga",      neighbor:[40, 42]},
    {id:42, region:8, name:"長崎県",   short:"長崎",   kana:"ナガサキ",     en:"nagasaki",  neighbor:[41, 43]},
    {id:43, region:8, name:"熊本県",   short:"熊本",   kana:"クマモト",     en:"kumamoto",  neighbor:[40, 41, 42, 44, 45, 46]},
    {id:44, region:8, name:"大分県",   short:"大分",   kana:"オオイタ",     en:"oita",      neighbor:[35, 38, 40, 43, 45]},
    {id:45, region:8, name:"宮崎県",   short:"宮崎",   kana:"ミヤザキ",     en:"miyazaki",  neighbor:[43, 44, 46]},
    {id:46, region:8, name:"鹿児島県", short:"鹿児島", kana:"カゴシマ",     en:"kagoshima", neighbor:[43, 45, 47]},
    {id:47, region:8, name:"沖縄県",   short:"沖縄",   kana:"オキナワ",     en:"okinawa",   neighbor:[46]}
];

export function getAddressByZip(code) {
    if(code.includes("-")) {
        code = code.replace("-", "")
    }
    if(code.length > 7) {
        return Promise.reject("Too many characters in zip code")
    } else if (code.length < 7) {
        return Promise.reject("Not enough characters in zip code")
    }
    let prefCode = code.substring(0, 3)
    const data = require(`./zipdata/zip-${prefCode}`)
    try {
        const [ prefId, city, area, street ] = data[code]

        const prefectureData = prefectures.find(prefecture => {
            if(prefecture.id === prefId) {
                return prefecture
            } 
        })

        const region = regions.find(region => {
            if(region.id === prefectureData.region) {
                return region
            }
        })
        
        return Promise.resolve({
            region: region.name,
            prefecture: prefectureData.name,
            city,
            area,
            street,
        })
    } catch (err) {
        return Promise.reject(err)
    }
}

export function getAllPrefectures() {
    return prefectures
}

export function getAllRegions() {
    return regions
}