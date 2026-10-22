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



\## 初期コミットID

e923a6a9a3f1473a787a6b7d04a4a229083648cc





\#02

\##認証確認した結果

C:\\Users\\miyu\_\\web-service-100knock-2026>ssh -T git@github.com

Hi miyu1027! You've successfully authenticated, but GitHub does not provide shell access.



\##GitHubの「Settings → SSH and GPG keys」に鍵が登録された画面のスクリーンショット
!\[SSHキー登録画面](screenshots/github-ssh-keys.png)



\#03 ローカルリポジトリとGitHubリポジトリの連携

\## git remote -v の結果

C:\\Users\\miyu\_\\web-service-100knock-2026>git remote -v

origin  git@github.com:miyu1027/web-service-100knock-2026.git (fetch)

origin  git@github.com:miyu1027/web-service-100knock-2026.git (push)



\#04 ファイルの変更とpush/pull

\### ローカルでの編集

ローカルから編集し、git add、git commit、git pushでGitHubに反映しました。

