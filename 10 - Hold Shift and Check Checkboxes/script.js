const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);

let lastChecked;

function handleCheck (e) {
  lastChecked = this;
  console.log(e);
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
});
