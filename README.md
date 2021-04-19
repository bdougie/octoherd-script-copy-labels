# octoherd-script-copy-labels

> This script copies labels from one repo to the next

[![@latest](https://img.shields.io/npm/v/octoherd-script-copy-labels.svg)](https://www.npmjs.com/package/octoherd-script-copy-labels)
[![Build Status](https://github.com/bdougie/octoherd-script-copy-labels/workflows/Test/badge.svg)](https://github.com/bdougie/octoherd-script-copy-labels/actions?query=workflow%3ATest+branch%3Amain)

## Usage

Minimal usage

```js
npx octoherd-script-copy-labels \
  --template bdougie/live
```

Pass all options as CLI flags to avoid user prompts

```
npx octoherd-script-copy-labels \
  --template bdougie/live \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "bdougie/*"
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--template`                 | string           | **(required)** this is the repo you want the labels to be copied from                                                                                                                                                                       |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
