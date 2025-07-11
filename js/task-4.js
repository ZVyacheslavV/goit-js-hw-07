const loginForm = document.querySelector('.login-form');

const submitHandler = ev => {
  ev.preventDefault();
  const form = ev.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '')
    return alert('All form fields must be filled in');

  const output = { email, password };
  console.log(output);

  loginForm.reset();
};

loginForm.addEventListener('submit', submitHandler);
