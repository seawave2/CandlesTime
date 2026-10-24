import http.server
import socketserver
import socket
import os
import sys

# Ensure UTF-8 output on Windows console
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Prevent caching while developing so changes show immediately on phone
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.csv'):
            return 'text/csv; charset=utf-8'
        if path.endswith('.ics'):
            return 'text/calendar; charset=utf-8'
        return super().guess_type(path)

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == '__main__':
    local_ip = get_local_ip()
    local_url = f"http://localhost:{PORT}"
    phone_url = f"http://{local_ip}:{PORT}"

    print("=" * 60)
    print("🚀 שרת פיתוח לאפליקציית ההתראות פועל כעת!")
    print(f"💻 קישור ישיר למחשב:   {local_url}")
    print(f"📱 קישור ישיר לטלפון:    {phone_url}")
    print("=" * 60)
    print("טיפ: ודא שהטלפון והמחשב מחוברים לאותה רשת Wi-Fi.")
    print("כל שינוי בקבצי האפליקציה יתעדכן בטלפון מיד ברענון הדף (F5).")
    print("לעצירת השרת: לחץ Ctrl + C")
    print("=" * 60)
    sys.stdout.flush()

    with ReusableTCPServer(("0.0.0.0", PORT), NoCacheHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nשרת נעצר.")
