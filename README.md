# Pepper K部 料理系


## 使い方
[GitHub Pages](http://masakura.github.io/pepper-angular/#/) で公開しています。一般のブラウザーで動作させた場合、Pepper に本来送るべきメッセージはブラウザーのコンソールに表示されます。


## 開発方法
[Node.js](https://nodejs.org/)が必要です。また、`bower`及び`grunt`をインストールしてください。

```
npm install -g bower grunt-cli
```

### プロジェクトのセットアップ
プロジェクトのセットアップは以下のようにしてください。

```
git clone git@github.com:masakura/pepper-angular.git
cd pepper-angular
npm install
bower install
```


### プロジェクトの実行
プロジェクトを実行する場合は以下のようにしてください。ブラウザーが自動で起動します。

```
grunt serve
```


### プロジェクトをデプロイする
GitHub Pages にデプロイするには以下のようにしてください。

```
grunt deploy
```
