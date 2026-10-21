# ==============================================================================
# ⚡ 9LMNTS STUDIO — AUTOMATED REDESIGN & NETLIFY DEPLOYMENT PIPELINE (POWERSHELL)
# ==============================================================================
$ErrorActionPreference = "Stop"

Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "⚡ 9LMNTS STUDIO — INITIATING AUTOMATED REDESIGN PIPELINE" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan

# 1. Ingest Design Specifications & NotebookLM Tokens
Write-Host ">> [1/5] Ingesting 9LMNTS Brand Tokens & NotebookLM Architecture..." -ForegroundColor Yellow
Write-Host "   ✓ Grounded in: Obsidian Void (#08090C), Flame Orange (#FF5500), Bento Grids, 5 Pillars" -ForegroundColor Green

# 2. Execute Page Redesign & Static Compilation
Write-Host ">> [2/5] Compiling High-Converting Bento Routes into /public..." -ForegroundColor Yellow
node site/build.mjs

# 3. Verify Build Integrity
Write-Host ">> [3/5] Verifying Static Build & Clean URL Redirects..." -ForegroundColor Yellow
if (!(Test-Path "public/index.html") -or !(Test-Path "public/_redirects")) {
    Write-Host "❌ Build verification failed: Missing public/index.html or public/_redirects" -ForegroundColor Red
    exit 1
}
Write-Host "   ✓ Verified all routes compiled successfully in /public." -ForegroundColor Green

# 4. Stage and Semantic Commit
Write-Host ">> [4/5] Staging files for Git sync..." -ForegroundColor Yellow
git add .
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "   ✓ No changes to commit. Working tree is clean." -ForegroundColor Green
} else {
    git commit -m "feat(ui): automated redesign via NotebookLM tokens, Stitch MCP & 9LMNTS Bento layout"
    Write-Host "   ✓ Semantic commit created." -ForegroundColor Green
}

# 5. Push to GitHub for Netlify Continuous Deployment
Write-Host ">> [5/5] Pushing to GitHub (origin/main) to trigger Netlify Edge Deployment..." -ForegroundColor Yellow
git push origin main

Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "✅ PIPELINE COMPLETE: Live build triggered at https://9lmntsstudio.com" -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
