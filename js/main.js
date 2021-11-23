window.onload = function () {
	const goToLinks = document.querySelectorAll('.go-to-links > a');

	goToLinks.forEach(goLink => {
		goLink.addEventListener('click', (e) => {
			e.preventDefault();
			let sectionClass = e.target.href.split('#');
			document.querySelector(`#${sectionClass[1]}`).scrollIntoView({ 
				behavior: 'smooth' 
			});
		});
	});
};