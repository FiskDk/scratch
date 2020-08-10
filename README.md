### Scratch++ (Windows only atm)

Customized Scratch Desktop client

![](https://github.com/FiskDk/scratch/blob/master/sc1.png)

![](https://github.com/FiskDk/scratch/blob/master/s2.png)

You need NodeJS for this to work, and also that Scratch is installed for the local user only.

To install it copy and paste the following code into a powershell terminal
(You need to close Scratch first)

```powershell
$nodeV = (node -v) | Out-String
if ($nodeV.StartsWith("v")) { echo NodeJS Version : $nodeV } else {exit}
cd "C:\Users\$env:UserName\AppData\Local\Programs\Scratch Desktop\resources"
if (Test-Path "scratch") { remove-item "scratch" }
npx asar extract app.asar scratch
if (Test-Path "app.asar") { remove-item "app.asar" }

cd scratch
remove-item "index.html"
Invoke-WebRequest https://raw.githubusercontent.com/FiskDk/scratch/master/2inject/index.html -OutFile index.html
if (Test-Path "scratch.png") { remove-item "scratch.png" }
Invoke-WebRequest https://raw.githubusercontent.com/FiskDk/scratch/master/2inject/scratch.png -OutFile scratch.png
cd "C:\Users\$env:UserName\AppData\Local\Programs\Scratch Desktop\resources"
npx asar pack scratch app.asar
Remove-Item -Recurse -Force "scratch"
cd "C:\Users\$env:UserName\AppData\Local\Programs\Scratch Desktop"
start "Scratch Desktop.exe"
echo Scratch++ has been installed!

```