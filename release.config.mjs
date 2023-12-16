export default {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets:
          [
            "package.json",
            "package-lock.json",
            "CHANGELOG.md",
            "packages/*/package.json",
            "packages/*/package-lock.json",
            "packages/*/README.md",
          ],
        message: `chore(release): release ${nextRelease.version}
          ${nextRelease.notes}`,
      },
    ],
    "@semantic-release/github",
  ],
};
