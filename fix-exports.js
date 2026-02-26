import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const indexPath = join('src', 'lib', 'index.ts')
const content = readFileSync(indexPath, 'utf-8')

// Fix the IconSource export to be type-only
const fixed = content.replace(
  /^export \{IconSource\}/m,
  'export type {IconSource}'
)

writeFileSync(indexPath, fixed, 'utf-8')
console.log('✓ Fixed IconSource export in', indexPath)
