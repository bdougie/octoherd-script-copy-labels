# octoherd-script-copy-labels

> This script copies labels from one repo to the next

[![@latest](https://img.shields.io/npm/v/octoherd-script-copy-labels.svg)](https://www.npmjs.com/package/octoherd-script-copy-labels)
[![Build Status](https://github.com/bdougie/octoherd-script-copy-labels/workflows/Test/badge.svg)](https://github.com/bdougie/octoherd-script-copy-labels/actions?query=workflow%3ATest+branch%3Amain)

## Usage

```js
npx octoherd-script-copy-labels \
  --octoherd-token 0123456789012345678901234567890123456789 \
  "bdougie/*" \
  --template bdougie/live \
  -- octoherd-bypass-confirms true // To bypass each label confirmation.
```
## Options

| option       | type   | description                                                           |
| ------------ | ------ | --------------------------------------------------------------------- |
| `--template` | string | **(required)** this is the repo you want the labels to be copied from |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
