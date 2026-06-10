// document.querySelector('.headerCenter').style.textAlign = 'center'
document.querySelectorAll('.headerCenter').forEach(item => {
    item.style.textAlign = 'center'
}) 
  // Get the current date and format it locally
  const today = new Date().toLocaleDateString();
  
  // Inject it into the HTML span
  document.getElementById('current-date').textContent = today;
 