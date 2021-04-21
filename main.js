//select all element
let allSpan = document.querySelectorAll(".control-buttons span");
let result = document.querySelector(".result > span");
let theInput = document.getElementById("the-input");

/*  find the order  */
allSpan.forEach(span => {
  span.addEventListener("click", _ => {
    if (span.classList.contains("check-item")) {
      checkItem();
    }
    else if (span.classList.contains("add-item")) {
      addItem();
    }
    else if (span.classList.contains("delet-item")) {
      deletItem();
    }
    else if (span.classList.contains("show-items")) {
      showItems();
    }

  })
});

/*   //   function to buttons   //   */
/*  1) Function  ChickItem     */
function checkItem() {
  let input = theInput.value;
  if (input !== "") {
    if (localStorage.getItem(input)) {
      result.innerHTML = `Found local storeg item called <span>${input}</span>`;
    }
    else {
      result.innerHTML = `Not found local storeg item called <span>${input}</span>`;
    }
  }
  else {
    showMasseg();
  }
}
/*   2) Function  Add      */
function addItem() {
  let input = theInput.value;
  if (input !== "") {
    localStorage.setItem(input, "test");
    result.innerHTML = `local storeg item called <span>${input}</span> Added`;
    theInput.value = '';
  }
  else {
    showMasseg();
  }
}

/*  3) Function  Delet    */
function deletItem() {
  let input = theInput.value;
  if (input !== "") {
    if (localStorage.getItem(input)) {
      localStorage.removeItem(input);
      result.innerHTML = `The item <span>${input}</span> Deleted`;
    }
    else {
      result.innerHTML = `not found local storeg item called <span>${input}</span> !!!`;
    }
    theInput.value = '';
  }
  else {
    showMasseg();
  }
}

/*  4) Function  Show     */
function showItems() {
  result.innerHTML = '';
  if (localStorage.length) {
    console.log("found " + localStorage.length + " element in local storeg.");
    for (let [key, value] of Object.entries(localStorage)) {
      result.innerHTML += `<span class="keys" id="keys">${key}</span>`;
    }
  }
  else
    result.textContent = "Not found items";
}
/*   //  End function of buttons   //   */

/*  function  to  chick  the  input */
function showMasseg() {
  result.innerHTML = "input can not be empety !!!";
}