const searchPageCheckboxesFieldset = document.querySelector(
  '#search-page-checkboxes'
);

const searchPageCheckboxes =
  searchPageCheckboxesFieldset.querySelectorAll('input');

const searchType = document.querySelector('#search-type');

searchPageCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let searchTypeValue = '';
    searchPageCheckboxes.forEach((input) => {
      if (input.checked) {
        searchTypeValue = searchTypeValue.concat(input.name + ',');
      }
    });
    searchType.value = searchTypeValue;
  });
});

const searchBarForm = document.querySelector('#search-bar-form');
searchBarForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let searchTypeValue = '';
  searchPageCheckboxes.forEach((input) => {
    if (input.checked) {
      searchTypeValue = searchTypeValue.concat(input.name + ',');
    }
  });
  searchType.value = searchTypeValue;
  searchBarForm.submit();
});
