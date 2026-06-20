// document.querySelectorAll('.headerCenter').forEach(item => {
//     item.style.textAlign = 'center'
// }) 
// document.querySelector('.journey').style.textTransform = 'capitalize';

let cent = document.querySelector('.headerCenter');
if(cent){
    cent.style.textAlign = 'center'
}

let cap = document.querySelectorAll('.journey').forEach(cap => {
    if(cap){
    cap.style.textTransform = 'capitalize'
}
})


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayIndex = new Date().getDay(); // Returns a number 0-6
// document.getElementById("current-day").textContent = days[todayIndex];
let cday = document.getElementById("current-day");
if(cday) {
    cday.textContent = days[todayIndex];
}

// Get the current date and format it locally
const today = new Date().toLocaleDateString();
// Inject it into the HTML span
// document.getElementById('current-date').textContent = today;
let cdate = document.getElementById('current-date');
if(cdate){
    cdate.textContent = today
}


