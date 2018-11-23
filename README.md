# NIC viewer

## 動作方法

** Windows (64bit) 限定です **

* 下記で動作
```
$ npm install
$ npm run ele
```
* npm run build で実行可能形式で出力 (electron-packager 利用)

## ツールについて

* PCのNIC一覧・MACアドレス及びIPアドレス表示
* Electron+React+Redux(saga併用), NIC取得部分は PowerShell を利用

## 詰まった点

* node-ffi が動かなかった (rebuild 時に VS2017 のコンパイラでエラー多発）
* windows-build-tools をインストール -> npm install ffi で node-gyp による rebuild に失敗する
* Qiita や　StackOverFlow にも記事があったがうまく行かず、node-powershell で一旦代替


