// To prevent brief flicker on screen before alpine js has loaded to hide stuff
document.querySelector('#mobile-menu').classList.remove('hidden');
document.querySelector('#mobile-filters')?.classList.remove('hidden');

const countrySelectorValues = document.querySelectorAll(
  '.country-selector-values'
);
countrySelectorValues.forEach((el) => {
  el.classList.remove('hidden');
  el.classList.add('flex');
});

const languageSelectorValues = document.querySelectorAll(
  '.language-selector-values'
);
languageSelectorValues.forEach((el) => {
  el.classList.remove('hidden');
  el.classList.add('flex');
});
