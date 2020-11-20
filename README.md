<h1 align="center">〒</h1>

## Get any Japanese street address based on it's postal code

### Installation

`npm install japan-address-autofill --save`

### Usage

```js
import { getAddressByZip } from "japan-address-autofill"

getAddressByZip("1000005")
.then((response) => {
    console.log(response)
})
```

### Data

Data is obtained from `https://github.com/yubinbango/yubinbango`
