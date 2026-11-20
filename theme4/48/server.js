
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
