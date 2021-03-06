---
theme: "simple"
customTheme : "my-theme"
transition: "convex"
slideNumber: false
title: "コーディング 3w - JavaScript"
---

# コーディング  ライブ授業
##  3週目「JavaScript」
<img src="./img/1w/logo_bg_none.png" style="width: 16%;">

---

1. 先週の課題
1. JavaScriptについて
1. 変数
1. 演算
1. 条件分岐
1. 繰り返し
1. 関数
1. 教材について
1. 実習
1. 課題と来週の話

note:
10:00～10:20 先週の課題
10:20～11:00 JSについてから関数まで
11:00～11:05 休憩
11:05～11:30 教材について
11:30～11:45 実習
11:45～12:00 課題と来週の話

---

## 先週の課題

---

## JavaScriptについて

--

空のHTMLファイルを作ってちょうだい

--

ライブ授業ではjQueryはやらない

--

### JavaScriptの処理の流れ

--

- 上から順番に処理を実行
- 条件分岐
- 繰り返し

---

## 変数

--

### 変数を宣言する

--

宣言 | 内容
-------------|---------------
何もつけない      | グローバルもしくは関数
var      | グローバルもしくは関数　再宣言可
let      | ブロック{}　再宣言不可
const      | ブロック{}　再宣言不可　定数
[変数宣言の種類]

```
let x = 10;
```

--

### 変数スコープ

```
├── グローバルスコープ
└── ローカルスコープ
    ├──関数スコープ
    └──ブロックスコープ
```

--

### 変数を宣言して表示してみよう

```
var x = 10;
let y = 20;
const z = 30;

// 画面上に表示
document.write(x);

// アラートに表示
alert(y);

// コンソールに表示
console.log(z);
```

--

### 変数の型

--

型 | 内容
-------------|---------------
Boolean      | 真偽値　true　false
Number      | 数値
String      | 文字列
Array、Object      | 配列とオブジェクト。複数のデータをまとめて管理する
undefined     | 未定義
[変数の型の種類]

---

## 演算子

--

演算子 | 内容
-------------|---------------
+      | 加算（文字列の場合は結合）
-      | 減算
*      | 乗算
/      | 除算
%      | 剰余算
[四則演算子]

--

演算子 | 内容
-------------|---------------
==      | 等価
===     | 厳密等価
!=      | 不等価
!==     | 厳密不等価
<       | 小なり （> 大なり）
<=      | 小なりイコール （>= 大なりイコール）
[比較演算子]


--

### 演算してみよう

```
const x = 10;
const y = 20;
const z = x + y;

console.log(z);
```

---

## 条件分岐

--

### if文

```
if (x === 10) {
    console.log("条件にマッチ");
}
```
```
if (x === 10) {
    console.log("条件にマッチ");
} else {
    console.log("条件にマッチしない");
}
```
```
if (x === 20) {
    console.log("条件にマッチ");
} else if(y === 20) {
    console.log("2番目の条件にマッチ");
} else {
    console.log("条件にマッチしない");
}
```

---

## 繰り返し

--

for文

```
for(let i = 0; i < 10; i++) {
    console.log(i);
}
```

---

## 関数

--

処理をひとまとめにしたもの

--

- document.write()
- alert()
- console.log()

全部関数

--

関数は自分でも作れる

```
function 関数名() {
    ～処理～
}

function 関数名(引数) {
    ～処理～
    retrun 戻り値;
}

```

---

## 教材について

---

## 実習

---

<p style="font-size: 1.6em;">11:45 まで</p>

---

## 来週に向けて

---

### 課題

JSを完成させる！
<p style="font-size: .8em;">※どうしてもだめなら教材のソースを使ってください</p>

---

### 予告

--

次週はWebに公開するよ  
最近の中ではだいぶ気楽だよ☺

- サーバーのアカウントを作ってくるのをお忘れなく
- Filezillaというアプリもインストールしてきて

---

### お知らせ

--

- 6/25の授業後はオリエンテーション
- 専攻コースの締切は6/18

--

Googleの口コミに投稿お願いします。

［Design Campus 八王子］で検索🔍

--

6月18日土曜日

「今日から始める！WEB広告超入門」

https://design-campus.connpass.com/event/248374/




