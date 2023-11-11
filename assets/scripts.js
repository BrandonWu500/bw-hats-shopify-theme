const addToCartForms = document.querySelectorAll('form[action="/cart/add');

addToCartForms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const addToCartButtonText = form.querySelector('.add-to-cart p');
    const loadingSpinner = form.querySelector('.add-to-cart .loading-spinner');

    addToCartButtonText.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');

    try {
      const addToCartRes = await fetch('/cart/add.js', {
        method: 'post',
        body: new FormData(form),
      });
      const addedItem = await addToCartRes.json();

      const cartRes = await fetch('/cart.json');
      const cart = await cartRes.json();

      loadingSpinner.classList.add('hidden');
      addToCartButtonText.classList.remove('hidden');

      document.querySelector('#header-cart-item-count').textContent =
        cart.item_count;
      const globalCartPopover = document.querySelector('#global-cart-popover');

      globalCartPopover.classList.remove(
        'transition',
        'ease-in',
        'duration-150',
        'opacity-0'
      );
      globalCartPopover.classList.add(
        'transition',
        'ease-out',
        'duration-200',
        'opacity-100'
      );

      document.querySelector(
        '#global-cart-popover-item'
      ).innerHTML = `<div class='flex items-center py-6'>
        <img
          src='${addedItem.image}'
          alt=''
          class='h-16 w-16 object-cover flex-none rounded-md border border-gray-200'
        >
        <div class='ml-4 flex-auto'>
          <h3 class='font-medium text-gray-900'>
            <a href='${addedItem.url}'>
              ${addedItem.product_title}
            </a>
          </h3>
          <p class='text-gray-500'>
            ${addedItem.variant_title}
          </p>
        </div>
      </div>`;
    } catch (error) {
      console.error(error);
    }
  });
});

const closeGlobalCartPopover = document.querySelector(
  '#close-global-cart-popover'
);
closeGlobalCartPopover.addEventListener('click', () => {
  const globalCartPopover = document.querySelector('#global-cart-popover');
  globalCartPopover.classList.remove(
    'transition',
    'ease-out',
    'duration-200',
    'opacity-100'
  );
  globalCartPopover.classList.add(
    'transition',
    'ease-in',
    'duration-150',
    'opacity-0'
  );
});
