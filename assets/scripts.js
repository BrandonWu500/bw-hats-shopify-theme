const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

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
        'opacity-0',
        'lg:hidden'
      );
      globalCartPopover.classList.add(
        'transition',
        'ease-out',
        'duration-200',
        'opacity-100',
        'lg:block'
      );

      const showVariantTitle = addedItem.variant_title ? 'block' : 'hidden';

      document.querySelector(
        '#global-cart-popover-item'
      ).innerHTML = `<div class='flex items-center justify-between py-6'>
        <div class='flex items-center'>
          <img
            src='${addedItem.image}'
            alt=''
            class='h-16 w-16 object-cover flex-none rounded-md border border-slate-200'
          >
          <div class='ml-4 flex-auto'>
            <h3 class='font-medium text-slate-700'>
              <a href='${addedItem.url}'>
                ${addedItem.product_title}
              </a>
            </h3>
            <p class='text-slate-600 ${showVariantTitle}'>
              ${addedItem.variant_title}
            </p>
          </div>
        </div>
        <p class='text-slate-600'>
          Qty: ${addedItem.quantity}
        </p>
      </div>`;

      document
        .querySelector('#product-page-variant-quantity')
        .parentElement.classList.add('hidden');
      const addToCartButton = document.querySelector('#add-to-cart');
      addToCartButton.textContent = 'Item in bag';
      addToCartButton.disabled = true;
    } catch (error) {
      console.error(error);
    }
  });
});

const closeGlobalCartPopover = document.querySelector(
  '#close-global-cart-popover'
);
const globalCartPopover = document.querySelector('#global-cart-popover');

closeGlobalCartPopover.addEventListener('click', () => {
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
    'opacity-0',
    'lg:hidden'
  );
});

document.body.addEventListener('click', () => {
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
    'opacity-0',
    'lg:hidden'
  );
});

globalCartPopover.addEventListener('click', (event) => {
  event.stopPropagation();
});
