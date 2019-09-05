workflow "Releases packages" {
  resolves = [
    "Publish Ruby gem",
    "Publish NPM package"
  ]
  on = "release"
}

action "Publish Ruby gem" {
  uses = "cadwallion/publish-rubygems-action@master"
  secrets = ["GITHUB_TOKEN", "RUBYGEMS_API_KEY"]
}

action "yarn install" {
  uses = "docker://node:10"
  runs = "yarn"
  args = "install"
}

action "yarn build" {
  needs = "yarn install"
  uses = "docker://node:10"
  runs = "yarn"
  args = "build"
}

action "Publish NPM package" {
  needs = "yarn build"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
