# Renovate

- Official site: <https://www.whitesourcesoftware.com/free-developer-tools/renovate>
- Repository: <https://github.com/renovatebot/renovate>
- Documentation: <https://docs.renovatebot.com/>
- Release notes: <https://github.com/renovatebot/renovate/releases>

## Setup

### GitHub Apps

GitHub Marketplace からインストール。

GitHub Marketplace: <https://github.com/marketplace/renovate>

## Configuration

基本のプリセットに設定を追加して拡張。

- `config:base`: <https://docs.renovatebot.com/presets-config/#configbase>
- `config:js-app`: <https://docs.renovatebot.com/presets-config/#configjs-app>
- `config:js-lib`: <https://docs.renovatebot.com/presets-config/#configjs-lib>

## Notes

### Migration

変更のあった設定について。  
Releases だけでなく `migration.ts` でも調べることが可能。

- `migration.ts`: <https://github.com/renovatebot/renovate/blob/master/lib/config/migration.ts>

* `masterIssue` -> `dependencyDashboard`
* `:unpublishSafe` -> `npm:unpublishSafe`

### Commit message

コミットメッセージについて。

#### Default

Example:

- dependencies: `Update dependency axios to v0.21.1`
- devDependencies: `Update dependency typescript to v4.1.3`

#### Semantic commit

`semanticCommits` を有効にすると Conventional Commits の仕様に沿ったコミットに変更可能。  
\*Git の履歴に Conventional Commits の仕様に沿ったコミットの履歴があれば自動で適用。

- `semanticCommits`: <https://docs.renovatebot.com/presets-default/#semanticcommits>

Example: `"semanticCommits": "enabled"` を設定した場合

- dependencies: `fix(deps): update dependency axios to v0.21.1`
- devDependencies: `chore(deps): update dependency typescript to v4.1.3`

型を変更する場合は `semanticCommitType` または `semanticCommitTypeAll` を設定。  
\*デフォルトでは `dependencies` の場合は `fix`、`devDependencies` の場合は `chore`。

- `semanticCommitType`: <https://docs.renovatebot.com/presets-default/#semanticcommittypeltarg0gt>
- `semanticCommitTypeAll`: <https://docs.renovatebot.com/presets-default/#semanticcommittypeallltarg0gt>

Example: `"extends": [":semanticCommitTypeAll(chore)"]` を設定した場合

- dependencies: `chore(deps): update dependency axios to v0.21.1`
- devDependencies: `chore(deps): update dependency typescript to v4.1.3`

コミットメッセージを変更する場合は `commitMessageTopic` を設定。

- `commitMessageTopic`: <https://docs.renovatebot.com/configuration-options/#commitmessagetopic>

Example: `"commitMessageTopic": "{{prettyDepType}} {{depName}}"` を設定した場合

- dependencies: `fix(deps): update dependency axios to v0.21.1`
- devDependencies: `chore(deps): update devdependency typescript to v4.1.3`
