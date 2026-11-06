# 25. テーブルでデータを表形式で表示

<table>，<thead>，<tbody>，<tr>，<th>，<td>を用いて，例えば「授業時間割」や「成績表」などのデータを表形式で表示すること．

|タグ|役割|
|<table>|表全体を定義する|
|<thead>|表の見出し部分|
|<tbody>|表のデータ部分|
|<tr>|表の1行を定義する|
|<th>|見出し用のセル|
|<td>|データ用のセル|

コードはindex.htmlのもの

```
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>私のWebページ</title>
</head>
<body>
    <h1>こんにちは！</h1>

    <h1>楽器について</h1>

    <p>楽器についてまとめました。</p>

    <table border="1">
        <thead>
            <tr>
                <th>楽器</th>
                <th>種類</th>
                <th>特徴</th>
                <th>役割</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th>フルート</th>
                <td>木管楽器</td>
                <td>最高音域付近、天使のような儚い音色</td>
                <td>メロディや高音での装飾、連符</td>
            </tr>

            <tr>
                <th>クラリネット</th>
                <td>木管</td>
                <td>木でできた暖かみのある音</td>
                <td>メロディが多め、連符もある</td>
            </tr>

            <tr>
                <th>トランペット</th>
                <td>金管楽器</td>
                <td>華やかで力強い音。音が大きい</td>
                <td>ファンファーレや、曲の重要パートで目立つ</td>
            </tr>

            <tr>
                <th>チューバ</th>
                <td>金管楽器</td>
                <td>音が大きく、低い。太い音</td>
                <td>伴奏やコラールで活躍</td>
            </tr>

        </tbody>
    </table>


</body>
</html>
```

結果

<img width="604" height="259" alt="image" src="https://github.com/user-attachments/assets/2a8bdf2f-0c40-473c-83ef-b5890686e992" />
