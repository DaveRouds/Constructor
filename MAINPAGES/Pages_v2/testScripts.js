const ezhednevnik = document.querySelector('.firstBlock');
var lastClickedRow = null;

ezhednevnik.addEventListener("click", function(event){
  var clickedRow = event.target.closest('tbody tr');

  for (var i = document.querySelector('.secondBlock').children.length - 1; i >= 0; i--) {
    document.querySelector('.secondBlock').children[i].classList.remove('activeDiscription');
}

  if (clickedRow) {
    if (clickedRow === lastClickedRow) {
      // Повторное нажатие на строку
      document.querySelector('.firstBlock').style.width = "100%";
      document.querySelector('.secondBlock').style.display = "none";
      lastClickedRow = null;
      } 
    else {
      // event.target.closest('button').classList.add('activeButton');
      document.querySelector('.firstBlock').style.width = "70%";
      document.querySelector('.secondBlock').style.display = "block";
      document.getElementById(event.target.closest('tbody tr').getAttribute('data-target')).classList.add('activeDiscription');
      lastClickedRow = clickedRow;
    }
  }
});
