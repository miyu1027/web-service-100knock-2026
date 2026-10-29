# テーマ1

# 10. HTTPとは何か調べてまとめる
HTTPの仕組み，特徴，よく使われるバージョン（1.1/2/3）の違いと，HTTPSとの関係についてまとめよ

HTTP（Hypertext Transfer Protocol、ハイパーテキスト・トランスファー・プロトコル）は、ハイパーメディアを転送する通信プロトコルであり、主にインターネット上で利用される。World Wide Webのデータ通信の基盤を支える技術であり、インターネット・プロトコル・スイートの一つである。

- 仕組み：クライアントがサーバに送る要求であるリクエスト、サーバーがリクエストを受け取り、クライアントに返すメッセージのレスポンスの2つの仕組みで成り立っている。これが最も典型的なHTTPのやりとりである。
- 特徴：ステートレスのプロトコルであり、複数の要求があっても、それぞれのセッション（英語版）の情報や状態を保持することをサーバに要求しない。
- よく使われるバージョン（1.1/2/3）の違い：
- HTTP/1.1 (1997年)
  - テキスト形式: 人間が読めるテキストで通信。
	- 持続的接続（Keep-Alive）: 1つのTCP接続を再利用できるが、リクエストは順番待ち（シリアル処理）になる。
	- ヘッド・オブ・ライン・ブロッキング（HOLブロック）: 1つの処理が詰まると、後ろの処理がすべて待たされる。
- HTTP/2 (2015年)
  - バイナリ形式: データをバイナリに変換し、コンピュータが効率よく処理できるように。
	- 多重化（ストリーム）: 1つのTCP接続で複数のリクエストを同時に処理できるように。
	- ヘッダー圧縮: 通信量を減らすためHPACKでヘッダーを圧縮。
	- TCPレベルの限界: TCPトランスポート層でのHOLブロック問題は完全に解決できず。
- HTTP/3 (2022年標準化)
  - QUIC (UDPベース): TCPをやめ、UDPをベースにした「QUIC」プロトコルを採用。
	- 真の多重化: ストリームが完全に独立し、パケットロスが起きても他のストリームが止まらない（HOLブロックの解消）。
	- 高速な接続確立: 暗号化（TLS）とハンドシェイクを統合し、初回から低遅延で接続可能。
	- コネクションマイグレーション: Wi-Fiからモバイル回線へ切り替わっても、IPアドレスの変化を吸収して接続維持可能。
- HTTPSとの違い：HTTPとHTTPSの違いは通信が暗号化されていないか暗号化されているかの違いで、HTTPSが暗号化されている。HTTPSはHTTPにSSL/TLSという暗号化技術を組み合わせた仕組みであり、通信全部が暗号化される。


# 11. ブラウザのデベロッパーツールで通信を観察する
Google Chrome等のデベロッパーツール（Networkタブ）を使い，あるWebページ（例：https://example.com）にアクセスしたときのリクエスト・レスポンスヘッダーの内容を確認せよ．

確認方法：ブラウザの該当ページで右クリック → "検証"選択 → 上部のバーから"ネットワーク"選択 → ブラウザを更新 → 通信の名前をクリック

- 基本情報
  - Request URL（実際に表示されたURL）：https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.zZZZhVqDDCw.L.W.O/am=AACAAQ/d=0/rs=AN8SPfoThpppAXpRoF1hV9gBo6v0GkdBdw/m=el_main_css
  - Request Method（例：GET）：GET
  - Status Code（実際に表示されたステータスコード）：200 OK

- リクエストヘッダー
  - user-agent(ブラウザやOSなど、リクエストを送信したクライアントの情報)：Mozilla/5.0 (Linux; Android 16; Pixel 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/156.0.0.0 Mobile Safari/537.36
  - Accept(クライアントが受け入れ可能なコンテンツの種類を示す。)：text/css,*/*;q=0.1
  - Accept-Language(クライアントが希望する言語を示す。)：ja,en-US;q=0.9,en;q=0.8

- レスポンスヘッダー
  - content-type(レスポンス本文のデータ形式や文字コード)：text/css; charset=UTF-8
  - Content-Length(レスポンス本文のサイズをバイト単位で示す)：4160
  - Cache-Control(レスポンスをキャッシュする際の扱いを指定する)：public, max-age=31536000


# 12. curlコマンドでGETリクエストを送る
curlコマンドを使って https://httpbin.org/get にGETリクエストを送り，返ってきたレスポンスを確認せよ．
-v（または-i）オプションを付けた場合との違いも確認すること．

通常版(レスポンス本文としてJSON形式のデータが表示された。)
```
PS C:\Users\miyu_\web-service-100knock-2026\theme1> curl.exe https://httpbin.org/get
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/8.21.0"
  },
  "method": "GET",
  "origin": "124.154.139.143",
  "url": "https://httpbin.org/get"
}
```
-iオプション(レスポンスヘッダーとレスポンス本文が表示された。)
```
PS C:\Users\miyu_\web-service-100knock-2026\theme1> curl.exe -i https://httpbin.org/get
HTTP/1.1 200 OK
access-control-allow-credentials: true
access-control-allow-origin: *
access-control-expose-headers: Retry-After, RateLimit, RateLimit-Policy
content-length: 203
content-type: application/json
x-content-type-options: nosniff
date: Thu, 29 Oct 2026 17:34:34 GMT

{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/8.21.0"
  },
  "method": "GET",
  "origin": "124.154.139.143",
  "url": "https://httpbin.org/get"
}
```
-vオプション(リクエストヘッダー、レスポンスヘッダー、接続に関する詳細な情報が表示された。)
```
PS C:\Users\miyu_\web-service-100knock-2026\theme1> curl.exe -v https://httpbin.org/get
* Host httpbin.org:443 was resolved.
* IPv6: (none)
* IPv4: 16.58.42.220, 18.227.178.96, 3.137.48.32
*   Trying 16.58.42.220:443...
* schannel: disabled automatic use of client certificate
* ALPN: curl offers http/1.1
* ALPN: server accepted http/1.1
* Established connection to httpbin.org (16.58.42.220 port 443) from 192.168.0.19 port 64379
* using HTTP/1.x
> GET /get HTTP/1.1
> Host: httpbin.org
> User-Agent: curl/8.21.0
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< access-control-allow-credentials: true
< access-control-allow-origin: *
< access-control-expose-headers: Retry-After, RateLimit, RateLimit-Policy
< content-length: 203
< content-type: application/json
< x-content-type-options: nosniff
< date: Thu, 29 Oct 2026 17:34:46 GMT
<
{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "httpbin.org",
    "User-Agent": "curl/8.21.0"
  },
  "method": "GET",
  "origin": "124.154.139.143",
  "url": "https://httpbin.org/get"
}
* Connection #0 to host httpbin.org:443 left intact
```

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
