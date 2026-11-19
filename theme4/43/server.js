
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
