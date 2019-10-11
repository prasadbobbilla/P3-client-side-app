const add = (x, y) => { return x + y }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}
const updateWithJoke = async (event) => {
  document.querySelector('#result1').innerHTML = ''
  const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
  const response = await fetch(url)
  const obj = await response.json()
  const joke = obj.value.joke || 'No joke for you.';
  document.querySelector('#result1').innerHTML = joke
}

function count() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result1").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result1").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
const updateWithAdd = async (event) => {
  document.querySelector('#result1').innerHTML = ''
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
   // const regex = /[^a-zA-Z_]/g
    const s = parseInt(document.querySelector('#secondNumber').value)
    const i = parseInt(document.querySelector('#firstNumber').value)
   
    const ans = ` Addition of Two Numbers   ${add(s,i)}.`
    document.querySelector('#result1').innerHTML = ans
  }
}
document.addEventListener('click', event => {
  if (event.target && event.target.id == 'result') { updateWithAdd(event) }
})


document.addEventListener('click', event => {
  if (event.target && event.target.id === 'result5') { updateWithJoke(event) }
});
