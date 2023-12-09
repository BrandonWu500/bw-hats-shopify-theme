// To prevent brief flicker on screen before alpine js has loaded to hide stuff
document.querySelector('#mobile-menu').classList.remove('hidden');
document.querySelector('#mobile-filters')?.classList.remove('hidden');
document.querySelector('.country-selector-values')?.classList.remove('hidden');
document.querySelector('.country-selector-values')?.classList.add('flex');
