import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const [base, head] = process.argv.slice(2);

if (!base || !head) {
  throw new Error("usage: project-matrix.mjs <base> <head>");
}

const projects = JSON.parse(
  readFileSync(new URL("../deploy-projects.json", import.meta.url), "utf8"),
);
const changedFiles = execFileSync("git", ["diff", "--name-only", base, head], {
  encoding: "utf8",
})
  .trim()
  .split("\n")
  .filter(Boolean);
const matrixFiles = new Set([
  ".github/deploy-projects.json",
  ".github/scripts/project-matrix.mjs",
  ".github/workflows/project-validation.yaml",
]);
const validateAll = changedFiles.some((file) => matrixFiles.has(file));
const include = projects.filter(
  (project) =>
    validateAll || changedFiles.some((file) => file.startsWith(`${project.path}/`)),
);

process.stdout.write(JSON.stringify({ include }));
