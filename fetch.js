// make a app wich takes the rates exchenage and the countries info, combine them and output to UI a nice info about the countries with teh up to date monetary exchange. 

//all DOm selectors needed
const form = document.querySelector('#form');
const loader = document.querySelector('#loader');
const result = document.querySelector('#resultat');
const countryOption1 = document.querySelector('#country1');
const countryOption2 = document.querySelector('#country2');
const amount = document.querySelector('#amount');
const alert = document.querySelector('#alert');
const courseDayly = document.querySelector('#course-dayly');
const buttonSubmit = document.querySelector('#submit');

//fetch data from data.fixer.io (Github)
const course = 'http://data.fixer.io/api/latest?access_key=f575f79164ab3c948fbffc2dcf9ff75b';


// async function to fetch data
const getCourse = async function () {
 
        const courses = await fetch(course);

        if (courses.status === 200) {
          const currency = await courses.json();
          return currency;
        }else {
          throw new Error('not woking')
        } 
   };

  // promises to return data. eventistner as well to grab the values from input fields
 getCourse()
 .then((currency) => {
    form.addEventListener('submit',  e => {
      e.preventDefault();
        
       let valueCurencyInput = countryOption1.value;
       let valueCurencyOutput = countryOption2.value;
       let amountToChange = amount.value; 
      

       // check tif inputs are empty
    if (valueCurencyInput !== '' && valueCurencyOutput !== '' && amountToChange !== '') {
      calcFunct(valueCurencyInput, valueCurencyOutput, amountToChange, currency);
      }else { 
        alert.classList.remove('d-none')
        setTimeout(() => {
        alert.classList.add('d-none')
        }, 2000)
      }
 
      // clear inputs
      countryOption1.value = '';
      countryOption2.value = '';
      amount.value = '';
       
    });

 })
.catch((err) => {
   console.log(err) 
  });

  
