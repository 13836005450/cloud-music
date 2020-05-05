import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1588639477613'); /* IE9 */
  src: url('iconfont.eot?t=1588639477613#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMQAAsAAAAABwQAAALCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBaIFmATYCJAMMCwgABCAFhG0HORsvBiMRZlvPJvtHYgxuozsPFrdzKwpRtDkpi29WRVs0vgkisqOqp2dxZkSG1EvMIAfxX5C9M8HpTQAsbYv0VtJCwiL1rWs/2YkBY7z9z+X0ph/g6gPlsuagMemoF8VxQIGONSiyAknQG8ZuInAIxyFAJLmUIe2XQaMIsYBxAsgiP3c6YS6KxVqFEMGvWWqRA3iEZqe5Bvv59+VrjYRg8BQwddicjlk0f0j8kKcb3AYmUQTZfG7AWgUKlAEWZEqtdxwqs2UokYHahvXgYxHMXAnnuDRU+/APDwwC4gNKowEo0nIGPiRiaarLU+V33aQA+LxGUTswFWBMHuvW5Gj1ivWvtJiHm8c82DPq3qbR91+PHX109/GNKx5sHvtwb1a1qSK0Z2rc8bDqVGTsrhMbjq6nyBFzVFxz6Ni42CMpehI5PaW+f/C7d6OXralZtnr1slokYqqazPQFs5MS1pEfP85Jep74NnnG3BiNmjsjNjJ9bsx0OZ0NOwYuuIxfMQMxvzJcVf93HnWZLoZ2RudXn8Y0wO3SO1oDetZc/de/4ePU3yenxtX/D6MsAE8ePPyvR90upaV/LsSAJfuzsp4tNlQAm1pfiqWxX8m7S7cBVWwHcCCYyIvxxpS7dwthTmaBISAHlJA81JJl4BFFHfiENEEkpXStjiKJFShiI4AStiogxHMODLGcByWe66gln4NHKt/BJ14UIhkjSVtGUSBf/eFIKBg1yB94NRaDHHwQ5Te0axKUVXD6hbT4BHR1WyxcsSDNMWN5257ZgKExw0U5DVMaYaIxoOLaMU9D05i6N9VqzNWBI6Fg1CB/4NVYDO3Oh9Lnb2jXJKiFNxB+IS2+f+jqtgd61ZZevHt5ZXnbntmAoTHDRXFjgtkRpvpBARXXbkR6GhqtnemrrdfX5+/bA0QC9lYxomLZrERBym3+/reKUlUAAA==') format('woff2'),
  url('iconfont.woff?t=1588639477613') format('woff'),
  url('iconfont.ttf?t=1588639477613') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1588639477613#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-search:before {
  content: "\e624";
}

.icon-ziyuan:before {
  content: "\e612";
}
`