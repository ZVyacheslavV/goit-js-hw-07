const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const inputHandler = ev => {
  const curInp = ev.currentTarget.value.trim();
  curInp === ''
    ? (nameOutput.textContent = 'Anonymous')
    : (nameOutput.textContent = curInp);
};

nameInput.addEventListener('input', inputHandler);
