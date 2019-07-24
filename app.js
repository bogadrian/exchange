
// calculate exchange function
const calcFunct = (valIn, valOut, amount, objData) => {
       
        const euro = amount / objData.rates[valIn];
        let resultChanged = euro * objData.rates[valOut];
        n = resultChanged.toFixed(2);
       
        //check result output
        if (isNaN(n)) {
        alert.classList.remove('d-none')
        setTimeout(() => {
        alert.classList.add('d-none')
        }, 2000)
        }else {
          // call two display DOm functions, one for the amount changed and one for the daily course
          displayDom(valIn, valOut, amount, n)
          displayCourse(valIn, valOut, objData);
        }       
}; 

//DOM display function 
const displayDom = function (valIn, valOut, amount, n) {
  
 loader.classList.remove('d-none');

  setTimeout(() => {

  loader.classList.add('d-none');
    
   result.innerHTML = `
    <h5 >Your Exchange from BCE today is:</h5>
    <h3 class="text-muted alert alert-primary">For ${amount} ${valIn}, as today rate exchange, you will receive ${n} ${valOut}</h3>
    </br>
    <h6 class="blockquote text-muted h6 float-right mt-2">App created by Bogdan Adrian</h6>
   `;
   }, 1000); 
   
   //clean the div result on button click and display alert if the inputs are wrong
    if (n !== null) {
      buttonSubmit.addEventListener('click', () => {
        result.innerHTML = '';
      })
    }
}; 

//display daily course
const displayCourse = function (valIn, valOut, data) {
  const valCurIn = data.rates[valIn];
  const valCurOut = data.rates[valOut];
 
  
  let result = 1 / valCurIn;
 
  let resultFinal = result * valCurOut; 
  let res = resultFinal.toFixed(6);
  
setTimeout(() => {

  courseDayly.classList.remove('d-none');

    courseDayly.innerHTML = `
      <h5 class="text-primary display-5 font-weight-bold "> For 1 ${valIn} today you will receive
      ${res} ${valOut}</h5>
      `;
   }, 1000);
   
   //clean the div result on button click and display alert if the inputs are wrong
   if (res !== null) {
    buttonSubmit.addEventListener('click', () => {
      courseDayly.innerHTML = '';
    })
  }
}