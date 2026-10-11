import { execSync } from "node:child_process";
import * as fs from "node:fs";

const run = (cmd) => execSync(cmd, { stdio: "inherit" });

try {
    run("git checkout --orphan gh-pages");
    console.log("Building started...");
    run("npm run build");
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    fs.copyFileSync("./CNAME", `./${folderName}/CNAME`);
    run(`git --work-tree ${folderName} add --all`);
    run(`git --work-tree ${folderName} commit -m "gh-pages"`);
    console.log("Pushing to gh-pages...");
    run("git push origin HEAD:gh-pages --force");
    fs.rmSync(folderName, { recursive: true, force: true });
    run("git checkout -f main");
    run("git branch -D gh-pages");
    console.log("Successfully deployed, check your settings");
} catch (e) {
    console.error(e);
    process.exit(1);
}

