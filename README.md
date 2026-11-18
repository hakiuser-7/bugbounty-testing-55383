# Bug Bounty Testing Repository

This repository contains various assets for security testing and bug bounty practice.

## Structure
- `web-apps/` - Web application assets for XSS, SQLi, and other web vulnerabilities
- `api-endpoints/` - API endpoints for testing authentication, injection, and security issues
- `configs/` - Configuration files with potential misconfigurations
- `src/` - Source code samples with common vulnerabilities
- `docs/` - Testing documentation and guides

## Purpose
For educational security testing and bug bounty practice only.

## Test Areas Covered
- [ ] Cross-Site Scripting (XSS) - Reflected, stored, and DOM-based
- [ ] SQL Injection - Union-based, error-based, blind techniques
- [ ] Authentication Bypass - Session management, token validation
- [ ] API Security - Parameter tampering, rate limiting, CORS
- [ ] Configuration Issues - Default credentials, exposed secrets
- [ ] Header Security - Missing security headers, HSTS
- [ ] File Upload Vulnerabilities - Type validation, path traversal
- [ ] Command Injection - User input execution

## How to Use
1. Clone this repository
2. Review the structure and documentation
3. Use tools like Burp Suite, OWASP ZAP, SQLmap
4. Follow the testing guide in `docs/testing-guide.md`

## Contributing
Feel free to add more vulnerable assets and documentation for comprehensive testing.
