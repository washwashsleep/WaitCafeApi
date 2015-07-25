# WaitCafeApi
Wait Cafe Api Server

## 在開始之前

你的電腦應該要安裝好 Node.js 與 MongoDB !

## 啟動 Server

`npm start`

## 注意事項，很重要，請一定要看
  - 所有回傳物件請呼叫 res.api 這個 method，例如 `return res.api(user);`
  - 目前綁定在全域變數(global)有幾樣東西，在程式中可以隨意呼叫。
    - model: 所有的 model
    - Promise: bluebird

# TEST
