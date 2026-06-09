import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const required = [
  'README.md',
  'LICENSE',
  'package.json',
  'skills/serenity/SKILL.md',
  'skills/evidence-ladder/SKILL.md',
  'skills/risk-boundary/SKILL.md',
  'adapters/codex/install.sh',
  'adapters/claude-code/install.sh',
  'adapters/hermes/install.sh',
  'adapters/openclaw/install.sh',
];

const missing = required.filter((file) => !existsSync(join(root, file)));
if (missing.length) {
  console.error('Missing required files:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

const skillsDir = join(root, 'skills');
const skillNames = [];
for (const entry of readdirSync(skillsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const skillFile = join(skillsDir, entry.name, 'SKILL.md');
  if (!existsSync(skillFile)) {
    console.error(`Skill ${entry.name} is missing SKILL.md`);
    process.exit(1);
  }
  const content = readFileSync(skillFile, 'utf8');
  for (const key of ['name', 'version', 'description', 'license']) {
    if (!new RegExp(`^${key}:`, 'm').test(content)) {
      console.error(`Skill ${entry.name} is missing frontmatter key: ${key}`);
      process.exit(1);
    }
  }
  skillNames.push(entry.name);
}

console.log(`Money Skills validation passed. Skills: ${skillNames.join(', ')}`);
