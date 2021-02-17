export const showItem = (itemSelector, activeClass) => {
	const item = document.querySelector(itemSelector);

	item.classList.add(activeClass);
	document.body.style.overflow = 'hidden';
};

export const hideItem = (itemSelector, activeClass) => {
	const item = document.querySelector(itemSelector);

	item.classList.remove(activeClass);
	document.body.style.overflow = '';
};