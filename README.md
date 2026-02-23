Migración mínima a React (Vite)

Resumen
- Este repositorio se configura como una app React (Vite) que muestra tus páginas HTML estáticas dentro de un `iframe`.
- Conserva la estructura original: copia tus archivos HTML/CSS/JS a `public/site`.

Pasos rápidos (PowerShell):

1) Copiar todos los archivos del proyecto actual a `public/site` (desde la raíz del proyecto):

```powershell
mkdir -Force public\site
robocopy . public\site *.html *.css *.js /S /XD node_modules .git public
```

2) Generar manifest JSON con la lista de HTML (usa la raíz del proyecto):

```powershell
Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
	$p = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\\','/')
	$p
} | ConvertTo-Json > public\site-manifest.json
```

3) Instalar dependencias y ejecutar la app:

```powershell
npm install
npm run dev
```

4) Abrir `http://localhost:5173` y ver la lista de páginas. Haz clic en "Ver en app" para abrir la página dentro del iframe.

Notas y próximos pasos
- Si prefieres convertir cada HTML a componentes React (JSX) en lugar de usar `iframe`, puedo convertir páginas una por una.
- Puedo automatizar la copia y el manifest directamente desde aquí si quieres que lo haga ahora.