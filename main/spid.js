// Calender generation
const select = document.getElementById('select');
const cal = document.querySelector('.grid');
const h2 = document.querySelector('h2');

select.onchange = function() {
 const choice = select.value;
 let days = 31;
 if(choice === 'February') {
 days = 28;
 } else if(choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
 days = 30;
 }

 createCalendar(days, choice);
}

function createCalendar(days, choice) {
    cal.innerHTML = '';
    h2.textContent = choice;
    for(let i = 1; i <= days; i++) {
        const cell = document.createElement('div');
        cell.textContent = i;
        cal.appendChild(cell);
        cell.classList.add('baby');
    }
}

createCalendar(31,'January');