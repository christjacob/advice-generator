const btn = document.getElementById('btn');

btn.addEventListener('click', generateAdvice);


function generateAdvice() { 

  fetch('https://api.adviceslip.com/advice')
  .then(res => {
    if(!res.ok) throw new Error(`Something went wrong. ${res.status} ${res.statusText}`)
    return res.json()
  })
   .then(data => {
    // console.log(data);
      const adviceText = document.getElementById('advice');
      adviceText.innerText = JSON.stringify(data.slip.advice);
      const adviceID = document.getElementById('adviceID');
      adviceID.innerText = JSON.stringify(data.slip.id);
   })
   .catch(err => console.log(err));

}

// document.addEventListener("DOMContentLoaded", generateAdvice);