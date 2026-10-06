# Deploy: build the site and push public/ to main, and source/ to the source branch.
# Usage: npm run deploy
$ErrorActionPreference = 'Stop'
$repo = 'https://github.com/3cabbage1/3cabbage1.github.io.git'
$root = Split-Path -Parent $PSScriptRoot

Push-Location $root
try {
  npx hexo clean
  npx hexo generate
  New-Item -ItemType File -Force -Path (Join-Path $root 'public\.nojekyll') | Out-Null

  # --- push source ---
  if (-not (Test-Path (Join-Path $root '.git'))) {
    git init | Out-Host
    git checkout -b source | Out-Host
    git remote add origin $repo
  }
  git add -A
  git commit -m "Update blog source" | Out-Host
  git push -u origin source | Out-Host

  # --- push built site to main ---
  Push-Location (Join-Path $root 'public')
  try {
    if (-not (Test-Path (Join-Path $root 'public\.git'))) {
      git init | Out-Host
      git checkout -b main | Out-Host
      git remote add origin $repo
    }
    git add -A
    git commit -m 'Deploy site' | Out-Host
    git push -u origin main | Out-Host
  } finally { Pop-Location }
} finally { Pop-Location }

Write-Host 'Deployed to https://3cabbage1.github.io/'
