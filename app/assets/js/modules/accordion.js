export default function(triggerSelector, activeClass) {
	const triggers = document.querySelectorAll(triggerSelector);

	triggers.forEach(trigger => {
		trigger.addEventListener('click', () => {
			trigger.classList.toggle(activeClass);
		});
	});
}