document.getElementById('content-form').addEventListener('submit', async (e) => {
     e.preventDefault();
     const topic = document.getElementById('topic').value;
     const payload = { topic: topic };
 
     const response = await fetch('/generate/', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(payload)
     });
     const data = await response.json();
     document.getElementById('generated-content').innerText = data.generated_text;
 });
 
 document.getElementById('analyze-form').addEventListener('submit', async (e) => {
     e.preventDefault();
     const content = document.getElementById('content').value;
     const payload = { content: content };
 
     const response = await fetch('/analyze/', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(payload)
     });
     const data = await response.json();
     document.getElementById('readability').innerText = data.readability;
     document.getElementById('sentiment').innerText = data.sentiment;
 });
 
 document.getElementById('import-content').addEventListener('click', () => {
     const generatedContent = document.getElementById('generated-content').innerText;
     document.getElementById('content').value = generatedContent;
 });
 