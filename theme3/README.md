# 30-39

## 課題30(担当箇所)

index.html

```
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>課題30 JavaScriptファイルの読み込み</title>
    <script type="module" src="main.js"></script>
</head>
<body>
    <h1>JavaScriptファイルの読み込み</h1>
    <p>ブラウザのコンソールを確認してください。</p>
</body>
</html>
```

type="module"：JavaScriptをモジュールとして扱う指定、src="main.js"：読み込むJavaScriptファイルを指定


main.js
```
console.log("Hello, JavaScript!");
```


開発者ツールの、consoleを確認
<img width="1694" height="648" alt="image" src="https://github.com/user-attachments/assets/cf1c7dbe-44e5-42d3-aa7b-0b660011ade7" />

type="module"を指定すると、JavaScriptファイルがモジュールとして扱われ、importやexportを利用して別ファイルの機能を読み込めるようになる。また、通常のスクリプトとは異なり、HTMLの解析が完了してから実行される（defer相当）。



## 課題33(担当箇所)

index.html
```
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>課題33 繰り返し処理</title>
    <script type="module" src="main.js"></script>
</head>
<body>
    <h1>繰り返し処理</h1>
    <p>コンソールを確認してください。</p>
</body>
</html>

```


main.js
```
// 配列の定義
let colors = ["赤", "青", "黄", "緑"];

// for文を使った全要素の出力
console.log("◆for文の出力");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for...of文を使った全要素の出力
console.log("◆for...of文の出力");
for (const color of colors) {
  console.log(color);
}

// while文を使った全要素の出力（おまけ）
console.log("◆while文の出力");
let index = 0;
while (index < colors.length) {
  console.log(colors[index]);
  index++;
}
```
for文

・初期化、繰り返し条件、更新処理を1行にまとめている、配列のインデックスを使って要素を取り出す。


for of 文　(for文との大きな違いは、インデックス番号を自分で指定しなくてよいこと)

・const color	配列から取り出した要素を格納する変数

・of colors	配列colorsから要素を取り出す

・console.log(color)	取り出した要素を出力する


while文

条件が成立している間、処理を繰り返す、index++で自分自身でカウンタを更新する必要がある。


コンソール出力結果のスクリーンショット

<img width="292" height="293" alt="image" src="https://github.com/user-attachments/assets/fd5b99fe-acd5-4273-b03a-6513ab8f1657" />

