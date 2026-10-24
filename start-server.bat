@echo off
chcp 65001 >nul
title שרת פיתוח - התראות שבת ומועדים
cd /d "%~dp0"
py dev_server.py
pause
