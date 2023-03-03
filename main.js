

const year=document.getElementById("year");
const thisYear=newDate().getFullYear()

year.setAttribute("datetime",thisYear)
year.textContent=thisYear