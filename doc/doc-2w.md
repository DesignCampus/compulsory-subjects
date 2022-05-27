---
theme: "simple"
customTheme : "my-theme"
transition: "convex"
slideNumber: false
title: "コーディング 2w - CSS"
---

# コーディング  ライブ授業
##  2週目「CSS」
<img src="./img/1w/logo_bg_none.png" style="width: 16%;">

---

1. 先週の課題
1. CSSの基本を補足
1. 押さえておきたい基本的なレイアウト方法
1. ANYでは出てこない便利なCSS
1. 実習
1. 課題と来週の話

note:
10:00～10:15 先週の課題
10:15～10:30 CSSの基本を補足
10:30～10:50 押さえておきたい基本的なレイアウト方法
10:50～10:55 休憩
10:55～11:25 ANYでは出てこない便利なCSS
11:25～11:45 実習
11:45～12:00 課題と来週の話10:00～10:05 自己紹介

---

## 先週の課題

---

## CSSの基本を補足

---

### 命名規則とCSS設計

---

### セレクタ

--

CSS selectors cheatsheet &amp; details - Nana Jeo  
https://nanajeon.com/css-selectors-cheatsheet-details/

エンジニアのためのWebチートシート  
https://web-cheatsheet.com/css-selector


---

### 詳細度

--

CSSが適用される優先順位

* 登場する順番が新しいほうが強い
* 詳細度が高いほうが強い

--

1. style属性
1. id属性
1. class属性やその他の属性セレクタ
1. 要素・疑似要素

--

例外

* !important
* 全称セレクタ（*）

---

### 疑似要素・疑似クラス

--

**疑似要素**
- ::before
- ::frist-letter

**疑似クラス**
- :hover
- :frist-child
- :not

etc...

---

### 様々な単位

--

- 絶対的な単位  
px、pt、mm … etc
- 相対的な単位  
%、em、rem、vw … etc

※できるだけ使用する単位は少なく

---

## 押さえておきたい基本的なレイアウト方法

---

### FlexとGrid

参考例：制作実績と私の強み

---

### 上下左右の中央配置

参考例：header

---

### Floatの使い方

参考例：私について  

CSSにコメントで便利な使い方の参考コードもあり

---

## ANYではでてない？便利なCSS

---

### カスケードレイヤー

---

### カスタムプロパティ

---

### フォントの指定

--

フォントの種類

--

font-feature-settings

サンプルでは  
body要素に指定している

---

### :isと:where

--

どちらも複数のセレクタを選択するときに、便利

```
:is(.aaa, .bbb, .ccc) .xxx { ～ }
```
```
.aaa .xxx { ～ }
.bbb .xxx { ～ }
.ccc .xxx { ～ }
```

--

:isと:whereの違いは詳細度が上がるかどうか

--

:has

---

### 要素をぼかす

--

backdrop-filter: blur

サンプルでは  
header要素のテキスト部分で使用

---

### 簡単に背景を固定

--

background-attachment: fixed

サンプルでは  
header要素にコメントで書いている

---

### CSSで画像のだし分け

--

image-set

サンプルでは  
header要素にコメントで書いている

---

### fit-content

サンプルでは  
各セクションの見出しに使用

---

### hoverが使えるデバイス

--

スマートフォンなどではHoverの概念がない

--

```
@media (hover: hover) and (pointer: fine) {
	a:hover {}
}
```

サンプルでは  
送信ボタンなどに使用

---

### 便利な計算や幅などの指定

--

calc

```
calc((1 + 2) * 10px)
```

--

- min・・・最大値を指定できる
- max・・・最小値を指定できる
- clamp・・・最大最小と推奨値を指定できる

minとmaxが逆っぽいけど・・・  
minなら、最大でここまでを決める  
ということはその値以上にはならない  
だから小さいぞということでmin

---

### 背景画像のブレンド

--

background-blend-mode

サンプルでは  
私についての背景に使用

---

### 字下げについて

--

デザインの授業で話題になったので  
私についてのところにコメントで書いてます

---

### input系の疑似クラス

---

## 実習

---

<p style="font-size: 1.6em;">11:45 まで</p>

---

## 来週に向けて

---

### 課題

CSSを完成させる！
<p style="font-size: .8em;">※どうしてもだめなら教材のソースを使ってください</p>

---

### 予告

次週はJS回
ちょっと大変かもしれないけど頑張りましょう

---

### お知らせ

--

**1. 後期授業に向けたオリエンテーション**

6/25の授業の後オリエンテーションを行います  
ご都合いかがでしょうか？

--

**2. 専攻コースを決める**

締切：6/18の授業の終わりまで

--




