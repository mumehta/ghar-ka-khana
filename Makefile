PORT ?= 5173
PREVIEW_PORT ?= 4173
NPM := npm.cmd
PS := powershell.exe -NoProfile -ExecutionPolicy Bypass -Command

.PHONY: help install start stop build preview lint clean

help:
	@$(PS) 'Write-Host ""; Write-Host "Available targets:" -ForegroundColor Cyan; Write-Host "  make install   Install project dependencies"; Write-Host "  make start     Restart the Vite dev server on port $(PORT)"; Write-Host "  make stop      Stop the process listening on port $(PORT)"; Write-Host "  make build     Create a production build"; Write-Host "  make preview   Preview the production build on port $(PREVIEW_PORT)"; Write-Host "  make lint      Run ESLint"; Write-Host "  make clean     Remove generated output"'

install:
	$(NPM) install

start:
	@$(PS) '$$existing = Get-NetTCPConnection -LocalPort $(PORT) -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1; if ($$existing) { $$process = Get-Process -Id $$existing.OwningProcess -ErrorAction SilentlyContinue; if ($$process) { Write-Host ("Stopping process " + $$process.ProcessName + " on port $(PORT)...") -ForegroundColor Yellow; Stop-Process -Id $$process.Id -Force; Start-Sleep -Seconds 1 } }; Write-Host "Starting Vite dev server on http://localhost:$(PORT) ..." -ForegroundColor Green'
	$(NPM) run dev -- --host 0.0.0.0 --port $(PORT)

stop:
	@$(PS) '$$existing = Get-NetTCPConnection -LocalPort $(PORT) -State Listen -ErrorAction SilentlyContinue | Select-Object -First 1; if (-not $$existing) { Write-Host "No process is listening on port $(PORT)." -ForegroundColor Yellow; exit 0 }; $$process = Get-Process -Id $$existing.OwningProcess -ErrorAction SilentlyContinue; if ($$process) { Write-Host ("Stopping process " + $$process.ProcessName + " on port $(PORT)...") -ForegroundColor Yellow; Stop-Process -Id $$process.Id -Force }'

build:
	$(NPM) run build

preview:
	$(NPM) run preview -- --host 0.0.0.0 --port $(PREVIEW_PORT)

lint:
	$(NPM) run lint

clean:
	@$(PS) 'if (Test-Path dist) { Remove-Item -Recurse -Force dist; Write-Host "Removed dist/" -ForegroundColor Green } else { Write-Host "dist/ does not exist." -ForegroundColor Yellow }'
