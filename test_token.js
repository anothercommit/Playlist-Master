async function fetchWebApi() {
  const res = await fetch('https://accounts.spotify.com/api/token',{"Content-Type: "application/x-www-form-urlencoded",
"grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"

    }, 'POST');
  return await res.json();
}

curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
