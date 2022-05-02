let value = document.getElementById('in').value;
document.getElementById('in').addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    fetch('/submit', { method : 'POST' , body : value})
      .then(response => response.text())
      .then(text => {
        console.log(text);
      })
  }
})