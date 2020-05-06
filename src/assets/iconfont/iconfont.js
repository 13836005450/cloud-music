import {createGlobalStyle} from'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1588732643495'); /* IE9 */
  src: url('iconfont.eot?t=1588732643495#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAS0AAsAAAAACPwAAARmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqFQIRYATYCJAMQCwoABCAFhG0HQBvCB8iuMTaGWQ/IdEqzQe/dOxfQ1J9msq8yZri3biMfvk19H0jKSF1YTW2mNEhFCZkomZkeVU5iehK9LhPX/Ig6T/y2pwddcZRFEW3nX0ADG+jH+UoHNh54jtlfNA1kb2LDJo0SnFXZgGYcxeu75rupmz9mcagBLYymbs4WSJdvzsbSQEqAANj+zwBq2Bqw8P++qeK4FMd58HL+jlfRr1b7495p039g81mWyxzj/FMXxdEECmisTVGiBRRoQtoyvNWlLmg/EAAnWDxS0euHgsUgwwiAdEJFABvTYkpIBKsw5swNAzKGARusqFuAle7nyVNqBADFEAJkbHOtQkTxhb83YN2uw1gbA15/ZgDsIoAGxAMYII1caxvaj8ajcfJ3GJkAFouCL+6f8O+NP8Rfi5TV//IAGoUAiQIidcTEdAm9YzyTG8rCEQMo+HqDfwJSxpazreNfAJLhdIHIBAcUOu3qWuzpOUhxhB+Un1tuyaP6mEtPR6zv+dx4nE64JesAfb3J1GwkpNgwPP6iCc0M9E0Jdt+vMJ16GnbbE7xzr8+eJ5nU/ZZvTp7uxo93qGe33OG49V7gdTf0XZ7bH2dUuy0EfOzAJ9ujbR1lqg5j3S59t5d+KJyrjxCX1s3237jXtsd7a1ma32jbcsm6Ic/ZOHXk83Su1YXRmNneeNj63kab2rndZ1RkGbPC4TdutG3hnOtN+vqpXH2xS3H6hpHcunX65hCz9cIPc/+uhLJaPecCnFODUircyVwz3l23ebMTu7BLTb6rmWAw0gsJSYfPCqq9TPaZy+WwqUwzsAPm80XAbkINgN/2J1PI7nYCV69eVRZC3zuvl3X/Uhnh9ONC+vDBe+CSL/7JfsLuIXVM2IwK+vIv0qLdLHYq/gQsKkreyiy9GM41M81bBPsqigADZ4RTpxoUVVFktgv5N7zesH9Sar/V2p9msBxRamR8p+ThZh3y9S89Xrs/PaeKE0aUNmePoDgJ/njoi/6XYv/2Gc9vrvefWbucich+DNgCAPuLl0MFgL3GB6FEAKBX1I3/pR8s3fm2CXz+PyJ1wapePMs+uh57TWjHe+m82ry/g1eziFEERMeEJaHJVXMZe+AAN7sQHA7wTyQBd2/6sHtBaCZYjoeA4iAIaKxwLEOMBwOTdDBiFQEnTtViEw8qGglLAMSaD0C4OgkUZ5eA5uo2liG+BgNv38DINRg4wwMea5pEtlHKIknQJJFvm8p3mPt6ZcOgcV5hq6RYuwU1KnDJwyXV0hHgUxKTk4kqqVdS+5hgmaSkaprMy2pfD18Jh0nd3X18v9rXKZm1xHZN689NSpLznpRo7usBp4xKItBIRLw2U/E6mPXpJduVNVzq/a0kCqtuArUEVWYeTqKy6GidlyJRcg1slbS3FupcOltMokil0cjUIJmqTw9eJTJLuvVoH15/fq9OEjNNovYW4X65knApua40cXx5zxVuAuCQa5kAghgSSAFTjTo7jBZXUM3txmnhVKvQCwAAAA==') format('woff2'),
  url('iconfont.woff?t=1588732643495') format('woff'),
  url('iconfont.ttf?t=1588732643495') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1588732643495#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-erji:before {
  content: "\e7c5";
}

.icon-search:before {
  content: "\e624";
}

.icon-ziyuan:before {
  content: "\e612";
}
`