import { showItem, hideItem } from '../utils/toggle';

export default function(triggerSelector, modalSelector, activeClass) {
	const triggers = document.querySelectorAll(triggerSelector);

	triggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			showItem(modalSelector, activeClass);
		});
	})
}