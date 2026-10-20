@echo off
title Antigravity Quantum Vault - Disaster Recovery
echo ===============================================================
echo   ANTIGRAVITY QUANTUM VAULT - DISASTER RECOVERY & RESTORE
echo ===============================================================
echo.
node "%~dp0antigravity-vault.js" list
echo.
set /p SNAPSHOT_ID="Enter the Snapshot ID to restore (or press Ctrl+C to cancel): "
echo.
node "%~dp0antigravity-vault.js" restore %SNAPSHOT_ID% --scope all
echo.
echo ===============================================================
echo   RESTORATION COMPLETE - PRESS ANY KEY TO CLOSE
echo ===============================================================
pause > nul
