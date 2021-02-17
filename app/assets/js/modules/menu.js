import { showItem, hideItem } from '../utils/toggle';

export default function (selectors) {
	const { triggerSelector, menuSelector, triggerActiveClass, menuActiveClass } = selectors;

	const trigger = document.querySelector(triggerSelector),
				menu = document.querySelector(menuSelector);

	trigger.addEventListener('click', () => {
		trigger.classList.toggle(triggerActiveClass);

		trigger.classList.contains(triggerActiveClass)
			? showItem(menuSelector, menuActiveClass)
			: hideItem(menuSelector, menuActiveClass);
	})

	menu.addEventListener('click', () => {
		trigger.classList.toggle(triggerActiveClass);
		hideItem(menuSelector, menuActiveClass)
	});
}