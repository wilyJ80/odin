const store = {
	products: [
		{ title: 'Bread', id: 0 },
		{ title: 'Apple', id: 1 },
		{ title: 'Flour', id: 2 }
	],
	storeIsClosed: false,
	spent: 0
};

/**
 * @param {Array} products 
 * @param {HTMLElement} parent 
 * @param {boolean} storeIsClosed
 */
function updateProductList(store, parent, spentEl) {
	parent.innerHTML = '';
	store.products.forEach((product) => {
		const el = !store.storeIsClosed ? `<li>${product.title}<button id="buy-btn">BUY</button></li>` : '<li>Unavailable</li>';

		parent.innerHTML += el;

		const buyBtns = document.querySelectorAll('#buy-btn');

		buyBtns.forEach((buyBtn) => {
			buyBtn.addEventListener('click', () => {
				store.spent++;
				spentEl.textContent = `Spent: ${store.spent}`;
			});
		});

	});
}

document.addEventListener('DOMContentLoaded', () => {
	const ul = document.querySelector('ul');
	const spentEl = document.querySelector('span');
	updateProductList(store, ul, spentEl);

	const closeStoreEl = document.querySelector('#close-store');
	closeStoreEl.addEventListener('click', () => {
		store.storeIsClosed = !store.storeIsClosed;
		updateProductList(store, ul, spentEl);
		store.storeIsClosed ? closeStoreEl.textContent = 'OPEN STORE' : closeStoreEl.textContent = 'CLOSE STORE';
	});
});
