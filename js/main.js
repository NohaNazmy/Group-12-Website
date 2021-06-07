var getUserName = prompt("Hello! Who are you?");

console.log(getUserName);

document.getElementById("username").innerText = getUserName;

/* Tooltip JS */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });