workflow "CI" {
  on = "push"
  resolves = ["Build"]
}

action "Install" {
  uses = "docker://node:11-alpine"
  runs = "yarn"
}

action "Build" {
  uses = "docker://node:11-alpine"
  needs = ["Install"]
  runs = "yarn"
  args = "build"
}
