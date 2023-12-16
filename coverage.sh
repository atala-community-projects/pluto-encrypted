#!/bin/bash
output=$(npm run coverage 2>&1)
if [[ "$output" =~ "does not meet global threshold" ]]; then
  echo "Coverage command failed in package"
  exit 1
else
  echo "Coverage passed in all packages."
  exit 0
fi
