# 13. curlコマンドでPOSTリクエストを送る
curlコマンドで https://httpbin.org/post にJSONデータをPOSTし，レスポンス内容を確認せよ．
Content-Type: application/json ヘッダーを付けた場合と付けない場合で，レスポンスのjson／form欄がどう変わるか比較すること．

GETとは違うのは、自分でデータを作ってサーバーに送る（POSTする）こと。-X POST：POSTメソッドを指定
※PowerShellなので、curl.exeにしました。(curlだけだと別のものと勘違いされる)
※PowerShellでも確実にJSON文字列を渡せるように、--data-binaryを使用


送信データ：data.json
```
{
    "age": 23,
    "course": "media",
    "name": "Miyu"
  }
```

### Content-Type: application/json ヘッダーを付けない場合
```
PS C:\Users\miyu_\web-service-100knock-2026\theme1> curl.exe -X POST --data-binary "@data.json" https://httpbin.org/post
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Content-Length": "60",
    "Content-Type": "application/x-www-form-urlencoded",
    "Host": "httpbin.org",
    "User-Agent": "curl/8.21.0"
  },
  "method": "POST",
  "origin": "124.154.139.143",
  "url": "https://httpbin.org/post",
  "data": "",
  "files": {},
  "form": {
    "{\r\n  \"name\": \"Miyu\",\r\n  \"course\": \"media\",\r\n  \"age\": 23\r\n}\r\n": ""
  },
  "json": null
}
```
- Content-Type：application/x-www-form-urlencoded
- form：JSON文字列全体がフォームの項目名のように扱われた
- json：null


### Content-Type: application/json ヘッダーを付けた場合
```
PS C:\Users\miyu_\web-service-100knock-2026\theme1> curl.exe -X POST -H "Content-Type: application/json" --data-binary "@data.json" https://httpbin.org/post
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Content-Length": "60",
    "Content-Type": "application/json",
    "Host": "httpbin.org",
    "User-Agent": "curl/8.21.0"
  },
  "method": "POST",
  "origin": "124.154.139.143",
  "url": "https://httpbin.org/post",
  "data": "{\r\n  \"name\": \"Miyu\",\r\n  \"course\": \"media\",\r\n  \"age\": 23\r\n}\r\n",
  "files": {},
  "form": {},
  "json": {
    "age": 23,
    "course": "media",
    "name": "Miyu"
  }
}
```
- Content-Type：application/json
- form：{}
- json：{"age": 23, "course": "media", "name": "Miyu"}

Content-Typeを指定しない場合、curlはデータをフォーム形式として送信するため、JSONデータとして正しく解析されなかった。一方、Content-Typeにapplication/jsonを指定すると、サーバーは送信された本文をJSONとして解析し、json欄に各項目を表示した。
