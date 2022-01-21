# gliff.ai DOCUMENT

![Latest Tag](https://img.shields.io/github/v/tag/gliff-ai/document?&label=latest_tag&style=flat-square&color=f2f2f2) ![Number of Open Issues](https://img.shields.io/github/issues/gliff-ai/document?style=flat-square&color=yellow) ![Number of Open Pull Requests](https://img.shields.io/github/issues-pr/gliff-ai/document?style=flat-square&color=yellow) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![Number of Contributors](https://img.shields.io/badge/all_contributors-1-yellow.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->  ![Repository Size](https://img.shields.io/github/repo-size/gliff-ai/document?style=flat-square&color=red) ![Repo License](https://img.shields.io/github/license/gliff-ai/document?color=0078FF&style=flat-square)

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
- [Testing](#testing)
- [Contribute](#contribute)
- [Contact](#contact)
- [License](#license)

## Installation

[{{back to navigation}}](#table-of-contents)

Initially you will need to install [Ruby <2.7](https://www.ruby-lang.org/en/documentation/installation/) and [bundler](https://bundler.io/) with `gem install bundler`.

Run `bundle config set --local path 'vendor/bundle'` to make the bundle install everything locally (so no sudo is required) and install dependenies locally with `bundle install` and npm dependencies for lint and format with `npm i`.

## Development

[{{back to navigation}}](#table-of-contents)

Frontend code should always be written in [Typescript](https://www.typescriptlang.org/) and transpiled using the options in `tsconfig.json` in this repository. npm should always be used for package management.

Run `bundle exec jekyll serve -H 127.0.0.1` to get local access. Next, head to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) and then hit `ctrl`+`c` to stop the server.

Don't forget to regulary update dependenies with `bundle update` and `npm update`.

## Linting and Formatting

[{{back to navigation}}](#table-of-contents)

As a standard, all code contributions should be linted with [ESLint](https://eslint.org/) using `.eslintrc.js` and formatted with [Prettier](https://prettier.io/). **Note:** HTML + CSS, mark-up and mark-down code are exemptions and should be formatted using [Prettier](https://prettier.io/) but do not need to be linted.

`npm run lint` will lint the codebase.
`npm run format` will format the codebase.

Our GitHub Actions will also lint any pull requests before they're merged.

## Testing

[{{back to navigation}}](#table-of-contents)

All code contributions should be tested using both the [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

`npm run test` will run any existing tests in our codebase.

Our GitHub Actions will also test any pull requests before they're merged! These all must pass and have 2 reviewers approval before a pull request can merge. If one or a few fail and your troubleshooting is not giving an answer, please check out the [gliff.ai Contribution Guide](https://github.com/gliff-ai/.github/blob/main/CONTRIBUTING.md) 👋 for further guidance.

## Continuous Integration

[{{back to navigation}}](#table-of-contents)

GitHub Actions should only be included under the `.github/workflows` path.

## Contribute

[{{back to navigation}}](#table-of-contents)

We welcome all contributors and any contributions on this project through the likes of feedback on or suggesting features and enhancements, raising bug problems, reporting on security vulnerabilities, reviewing code, requesting or creating tests, user testing etc. to ensure gliff.ai can help enable the best and biggest positive impact possible.

Sounds good and want to contribute to the project? 🧑‍💻 \
Please check the [gliff.ai Contribution Guide](<(https://github.com/gliff-ai/.github/blob/main/CONTRIBUTING.md)>) 👋 before you get started. Don’t forget the [gliff.ai Code of Conduct](<(https://github.com/gliff-ai/.github/blob/main/CODE_OF_CONDUCT.md)>) ⚠️ and [gliff.ai Security Policy](<(https://github.com/gliff-ai/.github/blob/main/SECURITY.md)>) 🔒 too!

A big thank you from the entire gliff.ai team to these fellow contributors ([emoji key](https://allcontributors.org/docs/en/emoji-key)): \
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/philhallbio"><img src="https://avatars.githubusercontent.com/u/70635602?v=4?s=100" width="100px;" alt=""/><br /><sub><b>philhallbio</b></sub></a><br /><a href="https://github.com/gliff-ai/document/commits?author=philhallbio" title="Documentation">📖</a> <a href="#maintenance-philhallbio" title="Maintenance">🚧</a> <a href="#content-philhallbio" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

_This project follows the [all-contributors specification](https://github.com/all-contributors/all-contributors) and makes use of the [all-contributors emoji key](https://allcontributors.org/docs/en/emoji-key) to credit the types of contributions from our community!_

## Contact

[{{back to navigation}}](#table-of-contents)

Need some help? 🤔 Have a question? 🧠 \
Reach out to the gliff.ai team at [community@gliff.ai](mailto:community@gliff.ai?subject=[GitHub]) or on our [GitHub discussions](https://github.com/gliff-ai/roadmap/discussions/landing).

## License

[{{back to navigation}}](#table-of-contents)

This code is licensed under a [GNU AGPLv3 license](https://github.com/gliff-ai/document/blob/main/LICENSE) 📝 \
Curious about our reasoning for this? Read about them [here](https://gliff.ai/articles/open-source-license-gnu-agplv3/)!
