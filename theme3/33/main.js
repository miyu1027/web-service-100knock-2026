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