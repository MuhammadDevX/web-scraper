const express = require('express');
const request = require('request');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (our HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Route to download PDF via proxy
app.get('/download', (req, res) => {
    const fileUrl = req.query.url;
    if (!fileUrl) {
        return res.status(400).send('Missing file URL');
    }

    console.log(fileUrl)

    // Set download headers
    res.setHeader('Content-Disposition', 'attachment; filename="case.pdf"');
    // Pipe the remote PDF to the response
    request.get({url:fileUrl,rejectUnauthorized:false}).on('error', () => {
        res.status(500).send('Failed to fetch file');
    }).pipe(res);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
