# Simple local web server for the Shabbat Alerts app
$port = 8080
$folder = $PSScriptRoot

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://+:$port/") 2>$null

try {
    $listener.Start()
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host " שרת האפליקציה פועל בהצלחה! " -ForegroundColor Yellow
    Write-Host " כתובת מקומית למחשב:   http://localhost:$port" -ForegroundColor Cyan
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "לסגירת השרת לחץ Ctrl+C" -ForegroundColor Gray
} catch {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
    Write-Host "שרת פועל ב: http://localhost:$port" -ForegroundColor Green
}

Start-Process "http://localhost:$port"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath
        if ($path -eq '/' -or $path -eq '') {
            $path = '/index.html'
        }

        $filePath = Join-Path $folder ($path.TrimStart('/'))
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.json' { 'application/json; charset=utf-8' }
                '.png'  { 'image/png' }
                '.csv'  { 'text/csv; charset=utf-8' }
                '.ics'  { 'text/calendar; charset=utf-8' }
                default { 'application/octet-stream' }
            }
            
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $err = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
            $response.OutputStream.Write($err, 0, $err.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # ignore aborts
    }
}
