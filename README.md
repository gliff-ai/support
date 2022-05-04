# gliff.ai DOCUMENT

![Latest Tag](https://img.shields.io/github/v/tag/gliff-ai/document?&label=latest_tag&style=flat-square&color=f2f2f2) ![Number of Open Issues](https://img.shields.io/github/issues/gliff-ai/document?style=flat-square&color=yellow) ![Number of Open Pull Requests](https://img.shields.io/github/issues-pr/gliff-ai/document?style=flat-square&color=yellow) ![Number of Contributors](https://img.shields.io/github/contributors/gliff-ai/document?style=flat-square&color=yellow) ![Repository Size](https://img.shields.io/github/repo-size/gliff-ai/document?style=flat-square&color=red) ![Repo License](https://img.shields.io/github/license/gliff-ai/document?color=0078FF&style=flat-square)

👋 **Welcome in!** 👋

This repository contains the Open Source code for [gliff.ai](https://gliff.ai)’s DOCUMENT supporting library (built using the [Just The Docs](https://pmarsceill.github.io/just-the-docs/) Jekyll template).

DOCUMENT is [gliff.ai](https://gliff.ai)'s user documentation for supporting use of our user-friendly interface for curating, annotation and collaborating with imaging datasets for the purposes of developing imaging AI products. When the full [gliff.ai platform](https://gliff.ai/software/) is used, DOCUMENT provides a clear guide for our users to support the development of high-quality and auditable datasets that satisfy any relevant regulatory frameworks which enables our users to build world-changing and trustworthy AI models and products.

A preview build of the current `main` branch is [here](https://docs.gliff.app/).

✅ **We welcome contributions on this repository!** ✅

## Table of Contents

Looking for something specific? 🔍

- [Repository Introduction](#gliffai-document)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Development](#development)
- [Linting and Formatting](#linting-and-formatting)
- [Contribute](#contribute)
- [Contact](#contact)
- [License](#license)

## Installation

[{{back to navigation}}](#table-of-contents)

install npm dependencies for lint and format with `npm i --include=dev`.

For further info on npm, please visit https://www.npmjs.com/.

## Development

[{{back to navigation}}](#table-of-contents)

npm should always be used for package management.

Run npm run start to get local access. Next, head to [http://127.0.0.1:3000/](http://127.0.0.1:3000/) and then hit `ctrl`+`c` to stop the server.

Don't forget to regulary update dependenies with `bundle update` and `npm update`.

## Linting and Formatting

[{{back to navigation}}](#table-of-contents)

**Note:** HTML + CSS, mark-up and mark-down code should be formatted using [Prettier](https://prettier.io/) but do not need to be linted.

We recommend that you use globbing to lint all markdown files in the project. To do this, please replace the line "lint:md" in the package.json file with "lint:md": "npx markdownlint-cli --ignore node_modules ./*/.md".

`npm run lint` will lint the codebase.
`npm run format` will format the codebase.

Our GitHub Actions will also lint any pull requests before they're merged.

## Build Testing

Once code alterations have been made, please ensure the validity and stability of the code. We recommend using [Docusaurus](https://docusaurus.io/) using command 'npm run build' or 'npm run start' for continuous visualisation.

## Continuous Integration

[{{back to navigation}}](#table-of-contents)

GitHub Actions should only be included under the `.github/workflows` path.

## Contribute

[{{back to navigation}}](#table-of-contents)

We welcome all contributors and any contributions on this project through the likes of feedback on or suggesting features and enhancements, raising bug problems, reporting on security vulnerabilities, reviewing code, requesting or creating tests, user testing etc. to ensure gliff.ai can help enable the best and biggest positive impact possible.

Sounds good and want to contribute to the project? 🧑‍💻 \
Please check the [gliff.ai Contribution Guide](<(https://github.com/gliff-ai/.github/blob/main/CONTRIBUTING.md)>) 👋 before you get started. Don’t forget the [gliff.ai Code of Conduct](<(https://github.com/gliff-ai/.github/blob/main/CODE_OF_CONDUCT.md)>) ⚠️ and [gliff.ai Security Policy](<(https://github.com/gliff-ai/.github/blob/main/SECURITY.md)>) 🔒 too!

A big thank you from the entire gliff.ai team to these fellow contributors ([emoji key](https://allcontributors.org/docs/en/emoji-key)): \
[{{Contributor List - _coming soon_}}](https://github.com/all-contributors/all-contributors)

## Contact

[{{back to navigation}}](#table-of-contents)

Need some help? 🤔 Have a question? 🧠 \
Reach out to the gliff.ai team at [community@gliff.ai](mailto:community@gliff.ai?subject=[GitHub]) or on our [GitHub discussions](https://github.com/gliff-ai/roadmap/discussions/landing).

## License

[{{back to navigation}}](#table-of-contents)

This code is licensed under a [GNU AGPLv3 license](https://github.com/gliff-ai/document/blob/main/LICENSE) 📝 \
Curious about our reasoning for this? Read about them [here](https://gliff.ai/articles/open-source-license-gnu-agplv3/)!
