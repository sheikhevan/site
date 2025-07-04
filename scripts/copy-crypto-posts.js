import fs, { globSync } from "fs";
import path from 'path';

const markdowns = globSync('src/pages/writings/**/*.md')
const signatures = globSync('src/pages/writings/**/*.asc')
const publicDir = 'public/gpg/posts'

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

signatures.forEach(sig => {
  const folderName = path.basename(path.dirname(sig));
  const targetDir = path.join(publicDir, folderName);
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  fs.copyFileSync(sig, path.join(targetDir, 'index.md.asc'));
});

markdowns.forEach(md => {
  const folderName = path.basename(path.dirname(md));
  const targetDir = path.join(publicDir, folderName);
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  fs.copyFileSync(md, path.join(targetDir, 'index.md'));
});
