// document.querySelector('.headerCenter').style.textAlign = 'center'
document.querySelectorAll('.headerCenter').forEach(item => {
    item.style.textAlign = 'center'
}) 
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayIndex = new Date().getDay(); // Returns a number 0-6
  
  document.getElementById("current-day").textContent = days[todayIndex];
  // Get the current date and format it locally
  const today = new Date().toLocaleDateString();
  
  // Inject it into the HTML span
  document.getElementById('current-date').textContent = today;
 