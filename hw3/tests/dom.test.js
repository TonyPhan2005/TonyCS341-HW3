
// Tony Phan

const fs = require('fs');
const $ = require('jquery');

// Example mock DOM: Read HTML file

test('index.html loads and h1 exists', () => {
    const html = fs.readFileSync('public/index.html', 'utf8');

    document.body.innerHTML = html;

    // Checks if the title (h1) matches up
    expect($('h1').html()).toBe("Cheesecake Order Form");
});

