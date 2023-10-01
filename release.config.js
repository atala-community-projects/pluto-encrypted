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
          "coverage/badge-branches.svg",
          "coverage/badge-functions.svg",
          "coverage/badge-lines.svg",
          "coverage/badge-statements.svg",
          "package-lock.json",
          "CHANGELOG.md",
          "README.md",
          "modules.md",
          ".nojekyll",
          "classes/*.md"
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
        signedCommit: true,
      },
    ],
    "@semantic-release/github",
  ],
};
