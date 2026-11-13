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

// while文を使った全要素の出力（おまけ）
console.log("◆while文の出力");
let index = 0;
while (index < colors.length) {
  console.log(colors[index]);
  index++;
}
```

<img width="606" height="333" alt="image" src="https://github.com/user-attachments/assets/59ac2132-fb38-4717-b3a1-35072875bebf" />
