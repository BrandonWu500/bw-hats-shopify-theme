const expandOrCollapseFilter = (button) => {
  const filterSection = button.closest('.filter-section');
  const filterSectionValues = filterSection.querySelector(
    '.filter-section-values'
  );
  filterSectionValues.classList.toggle('hidden');

  const svgArrow = filterSection.querySelector('svg');
  svgArrow.classList.toggle('rotate-0');
  svgArrow.classList.toggle('-rotate-180');

  // if (button.classList.contains('filter-section-button-expanded')) {
  //   const expandIcon = button.querySelector('.expand-icon');
  //   expandIcon.classList.add('hidden');
  //   const collapseIcon = button.querySelector('.collapse-icon');
  //   collapseIcon.classList.remove('hidden');

  //   const filterSectionMobile = button.closest('.filter-section-mobile');
  //   filterSectionMobile
  //     .querySelector('.filter-section-mobile-values')
  //     .classList.remove('hidden');
  // } else {
  //   const expandIcon = button.querySelector('.expand-icon');
  //   expandIcon.classList.remove('hidden');
  //   const collapseIcon = button.querySelector('.collapse-icon');
  //   collapseIcon.classList.add('hidden');

  //   const filterSectionMobile = button.closest('.filter-section-mobile');
  //   filterSectionMobile
  //     .querySelector('.filter-section-mobile-values')
  //     .classList.add('hidden');
  // }
};

const expandCollapseFilterButtons = document.querySelectorAll(
  '.expand-collapse-filter-button'
);

expandCollapseFilterButtons.forEach((button) => {
  button.addEventListener('click', () => expandOrCollapseFilter(button));
});

const sortForm = document.querySelector('#sort-form');
const sortSelect = document.querySelector('#sort-form select');
sortSelect.addEventListener('change', () => {
  sortForm.submit();
});

// const filterCheckboxes = sortForm.querySelectorAll(
//   'input[type="checkbox"]'
// );
// filterCheckboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', () => {
//     sortForm.submit();
//   });
// });
