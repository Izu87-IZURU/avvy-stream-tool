# Avvy配信補助ツール v2

## 今回の追加
- メインタブを「ホーム→ギフト→都道府県→MBTI→星座→カスタム→設定」に変更
- ギフトを5C/50Cなどコイン数別に自動分類
- ギフト名ボタンをタップして+1、コインごとにリセット
- 都道府県・MBTI・星座をボタン式カウント
- ユーザー名横の⚙️から背景カラー変更・保存
- Supabaseでユーザーごとのカウント保存

## Supabase
既存のschemaに加えて `supabase-migration-v2.sql` をSQL Editorで1回実行してください。
その後、現在のconfig.jsをこのフォルダのconfig.jsとして使用してください。


### v2.1 表示設定
- デフォルトのアクセントカラーはサーモンピンクです。
- ユーザー名横の⚙️からボタン・進捗バー等のアクセントカラーを変更できます。
- 設定タブからホワイト／ダークモードを切り替えられます。
- 表示設定はSupabaseのprofilesに保存されます。
- 初回更新時は `supabase-migration-v2.sql` をSQL Editorで再実行してください（既存データを削除しません）。


## Gift catalog implementation
This version includes the official Avvy gift catalog in the app, five event catalogs, event ON/OFF selection, per-gift event selection, and an `オリギフ` tab for user-created gifts.
Before first use of this version, run the updated `supabase-migration-v2.sql` in Supabase SQL Editor. Existing users and counts are preserved; the app adds catalog definitions for each logged-in user.
