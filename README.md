\#00. Gitのインストールと初期設定

C:\\Users\\miyu\_>git --version

git version 2.51.0.windows.2



C:\\Users\\miyu\_>git config --global user.name "miyu1027"



C:\\Users\\miyu\_>git config --global user.email "207504449+miyu1027@users.noreply.github.com"



C:\\Users\\miyu\_>git config --global init.defaultBranch main



C:\\Users\\miyu\_>git config --global --list

core.editor="C:\\Users\\miyu\_\\AppData\\Local\\Programs\\Microsoft VS Code\\bin\\code" --wait

user.name=miyu1027

user.email=207504449+miyu1027@users.noreply.github.com

init.defaultbranch=main



\#01. リポジトリの初期化と最初のコミット

\## 初期コミットまでのコマンド履歴



git init

notepad README.md

git add README.md

git commit -m "Initial commit"



