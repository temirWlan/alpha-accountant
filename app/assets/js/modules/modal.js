import { showItem, hideItem } from '../utils/toggle';

export default function(triggerSelector, modalSelector, activeClass) {
	const triggers = document.querySelectorAll(triggerSelector);
	const modal = document.querySelector(modalSelector);

	triggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			showItem(modalSelector, activeClass);
		});
	})

	modal.addEventListener('click', (e) => {
		if (e.target.classList.contains(activeClass)) {
			modal.classList.remove(activeClass)
		}
	});
}