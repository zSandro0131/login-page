const pageModeIcon = document.getElementById('pageModeIcon');
const light = document.getElementById('modeIconLight');
const dark = document.getElementById('modeIconDark');

pageModeIcon.addEventListener('click', () => {
    pageModeIcon.classList.toggle('dark');
    pageModeIcon.classList.toggle('light');

})