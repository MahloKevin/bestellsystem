// GET-Anfrage an /test senden
fetch('http://localhost:42069/test')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// GET-Anfrage an /test/{special} senden
fetch('http://localhost:42069/test/2')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
