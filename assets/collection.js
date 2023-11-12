const handleFilterSectionButtonState = (button) => {
  if (button.classList.contains('filter-section-button-expanded')) {
    const expandIcon = button.querySelector('.expand-icon');
    expandIcon.classList.add('hidden');
    const collapseIcon = button.querySelector('.collapse-icon');
    collapseIcon.classList.remove('hidden');

    const filterSectionMobile = button.closest('.filter-section-mobile');
    filterSectionMobile
      .querySelector('.filter-section-mobile-values')
      .classList.remove('hidden');

    button.classList.toggle('filter-section-button-expanded');
  } else {
    const expandIcon = button.querySelector('.expand-icon');
    expandIcon.classList.remove('hidden');
    const collapseIcon = button.querySelector('.collapse-icon');
    collapseIcon.classList.add('hidden');

    const filterSectionMobile = button.closest('.filter-section-mobile');
    filterSectionMobile
      .querySelector('.filter-section-mobile-values')
      .classList.add('hidden');

    button.classList.toggle('filter-section-button-expanded');
  }
};

const mobileFilterSectionButtons = document.querySelectorAll(
  '.filter-section-button'
);

mobileFilterSectionButtons.forEach((button) => {
  handleFilterSectionButtonState(button);

  button.addEventListener('click', () =>
    handleFilterSectionButtonState(button)
  );
});

const mobileFilterForm = document.querySelector('#mobile-filter-form');
if (mobileFilterForm) {
  const sortSelect = document.querySelector('#mobile-filter-form select');
  sortSelect.addEventListener('change', () => {
    mobileFilterForm.submit();
  });
}
