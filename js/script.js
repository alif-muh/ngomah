// Get the hamburger and navigation menu elements
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

// For "contact us" form
window.addEventListener('load', function () {
  const form = document.getElementById('message-from-portfolio');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    }).then(() => {
      alert('Thanks for sending messege to us! ;D');
    });
  });
});
