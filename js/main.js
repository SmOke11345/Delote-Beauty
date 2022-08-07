const open = document.querySelectorAll('.btn'),
      sideBar = document.querySelector('.sidebar');

for (let index = 0; index < open.length; index++) {
    const element = open[index];
    element.addEventListener('click', () => {
        sideBar.classList.toggle('active');
    })
}