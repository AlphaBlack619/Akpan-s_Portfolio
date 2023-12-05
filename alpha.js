// toggle navbar
let menuIcon = document.querySelector('#menu-icon');
let navigationBar = document.querySelector('.navigationBar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navigationBar.classList.toggle('active');
}

// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = ()=>{

  // scroll section
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      // active navigationBar
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id +']').classList.add('active');
      });
      // active section for animate
      sec.classList.add('show-animate');
    }
    else{
      sec.classList.remove('show-animate');
    }
  })

  // making header stick
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links(scroll)
  menuIcon.classList.remove    ('bx-x');
  navigationBar.classList.remove('active');
}
function clearFields() {
  // Select input fields by class name 'input-field1'
  const inputFields = document.getElementsByClassName('input-field1');

  // Loop through each input field and set its value to an empty string
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = ''; // Clear the value of each input field
  }

  // Select textarea field by class name 'textarea-field1'
  const textareaField = document.querySelector('.textarea-field1');

  // Clear the value of the textarea field
  textareaField.value = '';

  alert('Message Send Successfully');
}