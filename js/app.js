document.addEventListener("DOMContentLoaded", () => {
	main = document.querySelector("main")
	/*APP*/
	function isPageVisible() {
		return !document.hidden;
	}

	// Ajoute un écouteur d'événements pour détecter le changement de visibilité de la page
	document.addEventListener('visibilitychange', function () {
		if (isPageVisible()) {
			console.log('La page est visible.');
		  } else {
			Swal.fire({
				icon: 'error',
				title: 'ATTENTION !',
				text: 'Attention, vous quittez la page.',
			  })
			// alert('Attention, vous quittez la page.');
		  }
	});
});
