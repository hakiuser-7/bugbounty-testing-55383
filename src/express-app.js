const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS - Testing configuration
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');  // Too permissive
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// XSS endpoint - vulnerable
app.get('/reflect', (req, res) => {
    const name = req.query.name;  // No sanitization
    res.send(\`<h1>Hello, \${name}</h1>\`);
});

// SQL Injection vulnerable endpoint
app.get('/search', async (req, res) => {
    const query = req.query.q;  // Directly used in query
    const sql = `SELECT * FROM products WHERE name = '\${query}'`;
    // Execute query...
    res.send(\`Search results for: \${query}\`);
});

// Authentication bypass test
app.get('/auth/test', (req, res) => {
    const token = req.query.token;
    // No token validation - just pass through
    if (token) {
        req.user = { id: 1, role: 'admin' };  // Always admin
    }
    res.json(req.user);
});

// File upload - vulnerable
app.post('/upload', (req, res) => {
    const file = req.file;
    const path = \`/uploads/\${file.name}\`;  // No extension validation
    // Save file...
    res.json({ filename: file.name });
});

app.listen(port, () => {
    console.log(\`Test app listening at http://localhost:\${port}\`);
});
