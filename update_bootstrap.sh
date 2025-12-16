#!/usr/bin/env bash
set -euo pipefail

install_from_local() {
  local package_path=$1
  local script_name=$2
  local dist_dir="$package_path/dist"

  echo "▶ Building package from $package_path"
  pushd "$package_path" > /dev/null
  npm install --verbose
  npm run "$script_name"
  popd > /dev/null
  echo "▶ Installing package into current project"
  npm install "$package_path"
  echo "✅ Done"
}

install_from_local "../bootstrap" "css"
# install_from_local "../spatial-bootstrap" "build"
