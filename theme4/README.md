### 40. APIとは何か
API（Application Programming Interface）について調査し，REST APIの特徴や仕組み（リソース，URL，HTTPメソッド，ステータスコードの対応）について200字程度でまとめること．

APIとは、ソフトウェアやプログラム、webサービスをつなぐインターフェースのことである。リクエスト(要求)とレスポンス(応答)の2プロセスがあり、利用者がリクエストを送り、サービス提供側がレスポンスを行う。REST APIはRESTという設計原則に則ってwebシステムを外部から利用するための呼び出し規約(API)の一種。RESTはRepresentational State Transfer の略で、Web APIの構築方法に関するルールとガイドラインの集まり。

参考：https://www.redhat.com/ja/topics/api/what-is-a-rest-api


### 41. シンプルなHTTPサーバ
- Node.jsとExpressを使い，「Hello, API!」と返すだけのHTTPサーバを実装すること．

コードはフォルダ41内に。
```

const express = require("express");

// Expressアプリケーションを作成
const app = express();

// ポート番号を設定
const PORT = 3000;

// GETリクエストを受け取ったときの処理
app.get("/", (req, res) => {
    res.send("Hello, API!");
});

// HTTPサーバを起動
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

```
サーバ確認
```
node server.js
```


もう一つコマンドを開いてcurl動作確認

結果
<img width="425" height="32" alt="image" src="https://github.com/user-attachments/assets/1c95f22d-d984-425b-91e7-ac8a46cb4995" />




### 42. GETリクエストとクエリパラメータに対応したAPIの作成

- `/api/greet` というパスにGETリクエストが来た際，`{"message": "Hello!"}` のようなJSONレスポンスを返すAPIを実装すること．
- `/api/greet?name=Ushiama` のようにnameパラメータが付いた場合は，`{"message": "Hello, Ushiama!"}` を返すこと．

\*\*提出物\*\*

- ソースコード
- パラメータあり・なし両方のcurlコマンド例と結果

