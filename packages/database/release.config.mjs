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
        assets: [
          "package.json",
          "packages/databasecoverage/**/*",
          "package-lock.json",
          "CHANGELOG.md",
          "README.md",
          "docs/*/*"
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
        signedCommit: true,
      },
    ],
    "@semantic-release/github",
  ],
};
