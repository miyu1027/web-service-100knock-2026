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

**提出物**

- ソースコード
- パラメータあり・なし両方のcurlコマンド例と結果

server.jsのソースコードは以下の通り(フォルダ42にもある)
```

const express = require("express");

// Expressアプリケーションを作成
const app = express();

// ポート番号
const PORT = 3000;

// GETリクエストに対応するAPI APIのURLを指定する!
// app.get()は、指定したパスにGETリクエストが送られたときの処理を定義するもの。今回は/api/greetというURLに対応
app.get("/api/greet", (req, res) => {

    // クエリパラメータからnameを取得
    // ?：クエリパラメータの開始、name：パラメータの名前、Koike：パラメータの値
    // Expressではreq.query.nameと書くことで、Koikeという値を取得できる

    const name = req.query.name;

    // nameが指定されている場合。今回はJSONを返すのでres.json()
    if (name) {
        res.json({
            message: `Hello, ${name}!`
        });
    } else {
        // nameが指定されていない場合
        res.json({
            message: "Hello!"
        });
    }
});

// サーバを起動
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

```

サーバはこのコードをコマンドで実行して起動
```
node server.js
```


別コマンドを開いて、サーバ動かした結果

<img width="557" height="52" alt="image" src="https://github.com/user-attachments/assets/f14aa47a-a606-4d7b-bbb4-c1f9ee95b726" />



### 43. POSTリクエストでのデータの受け取りとJSONでの応答

- `/api/echo` というパスで，POSTされたJSONデータをそのまま返すAPIを実装すること．
- `express.json()` ミドルウェアの役割を確認すること．


コード
```

const express = require("express");

// Expressアプリケーションを作成
const app = express();

// ポート番号
const PORT = 3000;

// JSON形式のリクエストデータを受け取るための設定
app.use(express.json());

// POSTリクエストに対応するAPI
app.post("/api/echo", (req, res) => {

    // 受け取ったデータをそのまま返す
    res.json(req.body);

});

// サーバを起動
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

```

結果

<img width="632" height="41" alt="image" src="https://github.com/user-attachments/assets/033b71bd-c47d-4e3c-8c1f-6cdbfc76d81c" />


### 44. 一覧を返すAPIの実装

- `/api/items` というパスにGETリクエストが来た場合，`id`と`name`を持つオブジェクトの配列をJSONで返すAPIを実装すること．

**提出物**
- ソースコード
- curlまたはブラウザでの動作確認結果



### 45. パスパラメータでデータを取得するAPIの作成

- `/api/items/2` のように，URLの一部をパスパラメータとして受け取り，該当するデータを返すAPIを実装すること．
- 該当データが存在しない場合は，ステータスコード404とエラーメッセージ（JSON）を返すこと．

**提出物**
- ソースコード
- 存在するID・存在しないIDそれぞれの動作確認のcurlコマンド例と結果



### 46. POSTでデータを追加するAPIの作成

- `/api/items` にPOSTリクエストで新しいアイテムを追加し，追加したアイテムをステータスコード201で返すAPIを実装すること．
- `name`が空の場合は400を返すなど，簡単な入力チェックを行うこと．
- サーバ側で配列などを用いて簡易的に管理すればよい．

**提出物**
- ソースコード
- curlコマンド等でデータ追加後の動作確認結果（`curl -i`でステータスコードも示す）



### 47. PUT（またはPATCH）でデータを更新するAPIの作成

- `/api/items/2` のようなパスにPUT（またはPATCH）リクエストが来た場合，該当アイテムの内容を更新して返すAPIを実装すること．
- PUTとPATCHの違いを一言まとめること．

**提出物**
- ソースコード
- curlコマンド等で更新前後の動作確認結果



### 48. DELETEメソッドでデータを削除するAPIの作成

- `/api/items/2` のようなパスにDELETEリクエストが来た場合，該当アイテムを削除するAPIを実装すること．
- 成功時は204（No Content），該当がない場合は404を返すこと．

**提出物**
- ソースコード
- curlコマンド等で削除後の動作確認結果

コードはフォルダ48にもある
```

const express = require("express");

// Expressアプリケーションを作成
const app = express();

// ポート番号
const PORT = 3000;

// アイテムのデータ
let items = [
    { id: 1, name: "りんご" },
    { id: 2, name: "バナナ" },
    { id: 3, name: "みかん" }
];

// DELETEリクエストに対応するAPI
// パスパラメータを取得する. :idの部分がパスパラメータ
app.delete("/api/items/:id", (req, res) => {

    // URLからIDを取得、今回は数値として扱い比較する
    const id = Number(req.params.id);

    // 該当するアイテムの位置を検索。findIndex() は、条件に一致する要素の位置（インデックス）を取得するメソッド
    const index = items.findIndex(item => item.id === id);

    // 該当するアイテムが存在しない場合
    if (index === -1) {
        return res.status(404).json({
            error: "Item not found"
        });
    }

    // アイテムを削除。splice() は配列の要素を削除したり、追加したりするメソッド。
    items.splice(index, 1);

    // 削除成功：HTTPステータスコード204を返す
    res.status(204).send();
});

// サーバを起動
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

```

結果

<img width="566" height="234" alt="image" src="https://github.com/user-attachments/assets/8aad9647-6dd3-439b-9b19-b88f810ba19f" />

上では、削除が成功しているから204 No Content、下ではもうすでに削除しているから404 Not Foundが返された。




### 49. APIドキュメントの作成

- 作成したAPIの各エンドポイントの仕様（パス，メソッド，パラメータ，サンプルリクエスト/レスポンス，ステータスコード）をREADME.mdに整理して記述すること．
- Markdown形式で表やリストを用いてもよい．余力があればOpenAPI（YAML）形式でも記述してみること．

**提出物**
- APIドキュメント（README.md，任意で`openapi.yaml`）

