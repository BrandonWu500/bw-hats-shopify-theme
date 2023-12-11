const countryCodeValueInput = document.querySelector(
  '.localization-country-code-value'
);
const countryCodeOptions = document.querySelectorAll(
  '.localization-country-code-option'
);
const languageCodeValueInput = document.querySelector(
  '.localization-language-code-value'
);
const languageCodeOptions = document.querySelectorAll(
  '.localization-language-code-option'
);
const localizationForm = document.querySelector('#localization_form');
countryCodeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    countryCodeValueInput.value = option.dataset.countryIsoCode;
    localizationForm.submit();
  });
});
languageCodeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    languageCodeValueInput.value = option.dataset.languageIsoCode;
    localizationForm.submit();
  });
});
