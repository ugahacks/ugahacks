#!/usr/bin/env bash

set -euo pipefail

base=${1:?usage: project-matrix.sh BASE HEAD [TARGET]}
head=${2:?usage: project-matrix.sh BASE HEAD [TARGET]}
target=${3:-}

changed=$(git diff --name-only "$base" "$head" | jq -Rsc 'split("\n") | map(select(length > 0))')

force_all=$(jq -nr --argjson changed "$changed" '
  $changed | any(
    . == ".github/deploy-projects.json" or
    . == ".github/scripts/project-matrix.sh" or
    . == ".github/workflows/cicd_master.yaml" or
    . == ".github/workflows/project-validation.yaml"
  )
')

jq -c \
  --argjson changed "$changed" \
  --argjson force_all "$force_all" \
  --arg target "$target" '
    {include: [
      .[]
      | select($target == "" or .[$target] == true)
      | select(
          $force_all or
          (.path as $path | $changed | any(startswith($path + "/")))
        )
    ]}
  ' .github/deploy-projects.json
