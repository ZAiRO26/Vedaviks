Param(
  [switch]$RevertMain
)

Write-Host "Reverting Professional Theme changes..." -ForegroundColor Cyan

# Ensure we are in repo root
Set-Location -Path "$PSScriptRoot/.."

function Exec($cmd) {
  Write-Host "`n> $cmd" -ForegroundColor Yellow
  & powershell -NoProfile -ExecutionPolicy Bypass -Command $cmd
  if ($LASTEXITCODE -ne 0) {
    Write-Error "Command failed: $cmd"
    exit 1
  }
}

if ($RevertMain) {
  # Revert commit on main that introduced the professional theme (by commit message)
  Exec "git checkout main"
  $commit = git log --grep "feat(theme): add professional theme CSS" -n 1 --pretty=format:%H
  if (-not $commit) {
    Write-Warning "No matching commit found on main. Nothing to revert."
  } else {
    Exec "git revert --no-edit $commit"
    Write-Host "Reverted commit $commit on main." -ForegroundColor Green
  }
} else {
  # Restore previous settings by switching to main and deleting the feature branch
  $current = git branch --show-current
  if ($current -eq "feature/professional-theme") {
    Exec "git checkout main"
  }
  # Delete local branch if exists
  $exists = git branch --list feature/professional-theme
  if ($exists) {
    Exec "git branch -D feature/professional-theme"
  }
  # Delete remote branch (if present)
  Exec "git push origin --delete feature/professional-theme"
  Write-Host "Feature branch removed. Repo restored to main." -ForegroundColor Green
}

Write-Host "Done." -ForegroundColor Cyan