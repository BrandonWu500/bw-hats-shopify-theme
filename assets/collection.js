const expandOrCollapseFilter = (button) => {
  const filterSection = button.closest('.filter-section');
  const filterSectionValues = filterSection.querySelector(
    '.filter-section-values'
  );
  collpaseAllFiltersExcept(filterSectionValues);

  filterSectionValues.classList.toggle('hidden');

  button.setAttribute(
    'aria-expanded',
    button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
  );

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

const collpaseAllFiltersExcept = (filterSection = null) => {
  const allFilterSectionValuesElements = document.querySelectorAll(
    '.filter-section-values.desktop'
  );
  let allFilterSectionValues = Array.from(allFilterSectionValuesElements);
  if (filterSection) {
    allFilterSectionValues = allFilterSectionValues.filter(
      (section) => section.id !== filterSection.id
    );
  }
  allFilterSectionValues.forEach((section) => {
    section.classList.add('hidden');
  });
};

const expandCollapseFilterButtons = document.querySelectorAll(
  '.expand-collapse-filter-button'
);

expandCollapseFilterButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    expandOrCollapseFilter(button);
  });
});

const dekstopFilterAndSortForm = document.querySelector(
  '#desktop-filter-and-sort-form'
);
const desktopSortSelect = dekstopFilterAndSortForm.querySelector(
  '#desktop-sort-select'
);

desktopSortSelect.addEventListener('change', () => {
  dekstopFilterAndSortForm.submit();
});

// const filterCheckboxes = filterAndSortForm.querySelectorAll(
//   'input[type="checkbox"]'
// );
// filterCheckboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', () => {
//     filterAndSortForm.submit();
//   });
// });

const allFilterSectionValues = document.querySelectorAll(
  '.filter-section-values'
);

document.body.addEventListener('click', collpaseAllFiltersExcept);

allFilterSectionValues.forEach((section) => {
  section.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});
