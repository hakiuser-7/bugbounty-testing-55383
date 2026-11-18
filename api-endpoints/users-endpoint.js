// Vulnerable: No input validation on userId
app.get('/api/users/:userId', async (req, res) => {
    const query = \`SELECT * FROM users WHERE id = \${req.params.userId}\`;
    const result = await db.query(query);
    res.json(result.rows);
});

// Safe: Parameterized query example
// app.get('/api/users/:userId', async (req, res) => {
//     const query = 'SELECT * FROM users WHERE id = $1';
//     const result = await db.query(query, [req.params.userId]);
//     res.json(result.rows);
// });
