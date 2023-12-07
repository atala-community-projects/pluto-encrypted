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
          "coverage/*.svg",
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
