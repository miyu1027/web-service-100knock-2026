# 00. Gitのインストールと初期設定

```
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
```


# 01. リポジトリの初期化と最初のコミット

## 初期コミットまでのコマンド履歴


```
git init

notepad README.md

git add README.md

git commit -m "Initial commit"

```

## 初期コミットID

e923a6a9a3f1473a787a6b7d04a4a229083648cc





# 02. GitHubアカウントの作成，2段階認証とSSHキー登録

## 認証確認した結果

```
C:\\Users\\miyu\_\\web-service-100knock-2026>ssh -T git@github.com

Hi miyu1027! You've successfully authenticated, but GitHub does not provide shell access.
```


## GitHubの「Settings → SSH and GPG keys」に鍵が登録された画面のスクリーンショット
!\[SSHキー登録画面](screenshots/github-ssh-keys.png.png)



# 03 ローカルリポジトリとGitHubリポジトリの連携

## git remote -v の結果
```
C:\\Users\\miyu\_\\web-service-100knock-2026>git remote -v

origin  git@github.com:miyu1027/web-service-100knock-2026.git (fetch)

origin  git@github.com:miyu1027/web-service-100knock-2026.git (push)

```

# 04 ファイルの変更とpush/pull

### ローカルでの編集

ローカルから編集し、git add、git commit、git pushでGitHubに反映しました。


### GitHub上での編集

GitHub上でREADME.mdを直接編集し、git pullでローカルに反映しました。

### 証拠(git logの結果)
```
C:\Users\miyu_\web-service-100knock-2026>git log --oneline --decorate -5
10c0398 (HEAD -> main, origin/main, origin/HEAD) Update README.md
c0c3711 課題05ローカル側からの編集
792b895 課題03でローカルリポジトリとGitHubリポジトリ連携
cbe7180 Add SSH setup screenshots
0c67d6c Add SSH setup screenshots

C:\Users\miyu_\web-service-100knock-2026>git status -sb
## main...origin/main
```

## 05. .gitignoreファイルの作成

### 無視するファイルとその理由

- `node_modules/`：依存パッケージが大量に含まれ、必要に応じて再インストールできるため。
- `.env`：APIキーやパスワードなどの秘密情報が含まれる可能性があるため。
- `.DS_Store`：macOSのFinderが作成するメタデータであり、プロジェクト自体には不要なため。
