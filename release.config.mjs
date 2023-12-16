export default {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "../../CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: [
          "**/*"
        ],
        message:
          "chore(release): Released ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
        signedCommit: true,
      },
    ],
    "@semantic-release/github",
  ],
};
