# Project Contribution Guidelines

Welcome to our open-source project! We appreciate your interest in contributing. To maintain code quality and ensure the reliability of our project, we have established these contribution guidelines.

Since AtalaPrism removed pluto each developer is like rebuilding the wheele while not being able to work on other more important areas. We think that, it is important to first build a set of simple wrappers:

1. InMemory
2. IndexDB
3. LevelDB

@database is basically the code, where u wrote the queries, etc. The rest are package engines.


## Table of Contents

- [Getting Started](#getting-started)
- [Contribution Process](#contribution-process)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Testing](#testing)
- [License](#license)

---

## Getting Started

Before contributing, please make sure you have read and understood our [Code of Conduct](#code-of-conduct).


In order to contribute, being a typescript mono-repo, its worth expoaining some keys things:


1. Installing with npm from the root is inevitable. If we need to add an extra npm package we would do as follows:
npm i [[packageName]] --save --workspace=@pluto-encrypted/database and that will install [[packageName]] in workspace @pluto-encrypted/database

2. Running the DEMOS directly from visual studio in 1 click.
From the root folder, without moving to any subdirectory we build the 3 packages.


```
npm i 
npm run build
```

3. Open using debugger tool
* LEVEL DB Electron
* INDEX DB
* LEVEL DB
* INMEMORY
* TEST

Running this from visual studio will let us debug and to straight to the root causes triggering the issues.


---

## Contribution Process

1. Fork the repository.
2. Create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them following the [Commit Guidelines](#commit-guidelines).
4. Push your branch to your fork:

```bash
git push origin feature/your-feature-name
```

5. Create a pull request (PR) following the [Pull Request Guidelines](#pull-request-guidelines).

---

## Commit Guidelines

- Sign your commits: We require all commits to be signed. You can sign your commits using the `-S` flag with Git (`git commit -S -m "Your commit message"`).
- Write clear and descriptive commit messages.
- use conventional commits [more info here](https://www.conventionalcommits.org/en/v1.0.0/)

---

## Pull Request Guidelines

- Ensure your PR addresses a specific issue, or clearly describes the purpose of the changes.
- Include a concise and informative title for your PR.
- The PR Title must use conventional commits, (fix:---), (feat:---) or (chore:---)
- Ensure your PR has high test coverage (around 95%).
- Your code must pass all existing tests, and new code should include appropriate tests.
- Ensure your branch is up to date with the latest changes from the main repository.
- Sign your commits as mentioned in the [Commit Guidelines](#commit-guidelines).

---

## Testing

We take testing seriously. All contributions must include tests that cover the code changes you made. Ensure that your changes do not break existing tests, and strive for high test coverage (around 95%). Our continuous integration system will verify the test coverage for each PR.

---

## License

By contributing to this project, you agree that your contributions will be licensed under the project's LICENSE.

