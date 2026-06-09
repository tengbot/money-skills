import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const skillsDir = join(root, 'skills');

if (!existsSync(skillsDir)) {
  console.error('No skills directory found.');
  process.exit(1);
}

for (const entry of readdirSync(skillsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const skillPath = join(skillsDir, entry.name, 'SKILL.md');
  if (!existsSync(skillPath)) continue;
  const content = readFileSync(skillPath, 'utf8');
  const name = readFrontmatter(content, 'name') ?? entry.name;
  const description = readFrontmatter(content, 'description') ?? '';
  console.log(`${entry.name}\n  name: ${name}\n  description: ${description}\n`);
}

function readFrontmatter(content, key) {
  const match = content.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  return match?.[1]?.trim().replace(/^['\"]|['\"]$/g, '');
}
