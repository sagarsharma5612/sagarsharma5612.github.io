var typed = new Typed(".typed", {
  strings: ["Sagar Sharma","Coder", "Web Designer", "Reactjs", "Programmer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixnav);

function fixnav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

			const scriptURL = "https://script.google.com/macros/s/AKfycbxueyTeKowCpgHVrVVJk1-tuDgkYBleGBGV8u_t1qzpA_jCN_QZ8nMiIYYppxTan2YAeA/exec"
			const form = document.forms['form']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})
