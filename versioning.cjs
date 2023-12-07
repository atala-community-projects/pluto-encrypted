const fs = require("fs");

function findPackageVersion(packageName) {
  try {
    // Read the package.json file
    const packageJson = JSON.parse(fs.readFileSync("./packages/database/package.json", "utf-8"));

    // Check if the package is in the dependencies
    if (
      packageJson.peerDependencies &&
      packageJson.peerDependencies[packageName]
    ) {
      return packageJson.peerDependencies[packageName];
    } else {
      return undefined; // Package not found
    }
  } catch (error) {
    console.error("Error reading or parsing package.json:", error);
    return undefined;
  }
}

function updateReadme(version) {
  const readmeFilePath = "README.md";

  try {
    // Read the content of the README.md file
    let readmeContent = fs.readFileSync(readmeFilePath, "utf-8").split("\n");

    // Check if there are at least 4 lines in the file
    if (readmeContent.length >= 4) {
      // Replace the 4th line with "123"
      readmeContent[3] = `This package is compatible with Atala Prism Wallet SDK v${version.slice(
        1
      )}`;

      // Join the lines back together
      readmeContent = readmeContent.join("\n");

      // Write the modified content back to the README.md file
      fs.writeFileSync(readmeFilePath, readmeContent, "utf-8");
      console.log("README.md updated successfully.");
    } else {
      console.log("README.md does not have at least 4 lines.");
    }
  } catch (error) {
    console.error("Error reading or updating README.md:", error);
  }
}

const packageNameToFind = "@atala/prism-wallet-sdk"; // Replace with the package name you want to find
const packageVersion = findPackageVersion(packageNameToFind);
updateReadme(packageVersion);
