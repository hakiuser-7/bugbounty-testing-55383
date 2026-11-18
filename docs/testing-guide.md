# Bug Bounty Testing Guide

## Setup Instructions
1. Clone this repository
2. Review the structure above
3. Start analyzing each component

## Test Categories

### 1. Cross-Site Scripting (XSS)
- Test reflected parameters in web-apps/vulnerable-xss.html
- Try stored XSS vectors
- Test DOM-based XSS

### 2. SQL Injection
- Test api-endpoints/users-endpoint.js with payloads
- Test web-apps/sql-login.html login form
- Union-based, error-based, blind SQLi

### 3. Authentication Issues
- Test src/express-app.js auth bypass
- Session fixation attacks
- Token validation issues

### 4. API Security
- Parameter tampering in api-endpoints/
- Rate limit testing
- CORS misconfigurations

### 5. Configuration Issues
- Review configs/ for insecure settings
- Default credentials
- Exposed debug endpoints

### 6. Header Security
- Missing security headers
- CORS policy issues
- HSTS configuration

## Tools to Use
- Burp Suite / OWASP ZAP
- SQLmap for SQL injection
- XSSer for XSS testing
- Nuclei for template scanning
