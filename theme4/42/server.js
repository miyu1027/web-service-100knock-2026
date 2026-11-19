
const express = require("express");

// Expressアプリケーションを作成
const app = express();

// ポート番号
const PORT = 3000;

// GETリクエストに対応するAPI
app.get("/api/greet", (req, res) => {

    // クエリパラメータからnameを取得
    const name = req.query.name;

    // nameが指定されている場合
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
