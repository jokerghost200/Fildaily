@echo off
echo ========================================
echo   DEMARRAGE POUR TEST MOBILE
echo ========================================
echo.

echo Recherche de votre adresse IP locale...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    set IP=%%a
    goto :found
)
:found
set IP=%IP: =%
echo Votre adresse IP: %IP%
echo.

echo Demarrage du serveur React...
echo Votre application sera accessible sur:
echo http://%IP%:3000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

set HOST=0.0.0.0
npm start 