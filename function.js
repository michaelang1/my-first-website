window.addEventListener("load", function() {
  const form = document.getElementById('admiration_form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      // alert("Thank you!");
      window.location.href = "thank_you.html";
    })
  });
});
