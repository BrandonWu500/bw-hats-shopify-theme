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

const desktopFilterAndSortForm = document.querySelector(
  '#desktop-filter-and-sort-form'
);

if (desktopFilterAndSortForm) {
  const desktopSortSelect = desktopFilterAndSortForm.querySelector(
    '#desktop-sort-select'
  );

  desktopSortSelect.addEventListener('change', () => {
    desktopFilterAndSortForm.submit();
  });
}

const allFilterSectionValues = document.querySelectorAll(
  '.filter-section-values'
);

document.body.addEventListener('click', collpaseAllFiltersExcept);

allFilterSectionValues.forEach((section) => {
  section.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});
