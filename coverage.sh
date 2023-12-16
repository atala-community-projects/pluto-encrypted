#!/bin/bash

# Array to store the status of each package's coverage command
statuses=()

# Run coverage command in each package
# Run the coverage command for the package
output=$(npm run coverage 2>&1)

# Check if the output contains the specific text you want to check for
if [[ "$output" =~ "does not meet global threshold" ]]; then
  echo "Coverage command failed in package"
  statuses+=("failed")
else
  statuses+=("success")
fi
# Check if any package failed
if [[ "${statuses[*]}" =~ "failed" ]]; then
  echo "Coverage failed in one or more packages."
  exit 1
else
  echo "Coverage passed in all packages."
  exit 0
fi
