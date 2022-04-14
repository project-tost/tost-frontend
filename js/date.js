window.onload = function () {
    let today = new Date();
    const prevbtn = document.querySelector('.prev');
    const nextbtn = document.querySelector('.next');


    prevEl.addEventListener('click', function () {
        today = new Date(today.getMonth() - 1);
        removeCalendar();
        buildCalendar();
      });
      nextEl.addEventListener('click', function () {
        today = new Date(today.getMonth() + 1);
        removeCalendar();
        buildCalendar();
      });
}