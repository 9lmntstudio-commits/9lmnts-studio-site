@echo off
title Antigravity Quantum Vault - 1-Click Backup
echo ===============================================================
echo   ANTIGRAVITY QUANTUM VAULT - 1-CLICK INSTANT SNAPSHOT
echo ===============================================================
echo.
node "%~dp0antigravity-vault.js" snapshot --label "oneclick"
echo.
echo ===============================================================
echo   SNAPSHOT COMPLETED - PRESS ANY KEY TO CLOSE
echo ===============================================================
pause > nul
