const countryCodeValueInput = document.querySelector(
  '.localization-country-code-value'
);
const countryCodeOptions = document.querySelectorAll(
  '.localization-country-code-option'
);
const localizationForm = document.querySelector('#localization_form');
countryCodeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    countryCodeValueInput.value = option.dataset.isoCode;
    localizationForm.submit();
  });
});
