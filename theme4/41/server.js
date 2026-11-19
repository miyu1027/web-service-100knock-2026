
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
