document.addEventListener("DOMContentLoaded", () => {
	main = document.querySelector("main")
	/*APP*/
	function isPageVisible() {
		return !document.hidden;
	}
	document.addEventListener('beforeunload', function (e) {
		e.preventDefault();
		if (isPageVisible()) {
			console.log('La page est visible.');
		  } else {
			Swal.fire({
				icon: 'error',
				title: 'ATTENTION !',
				text: 'Attention, vous quittez la page.',
			  })
		  }
	});
	document.addEventListener('visibilitychange', function () {
		if (isPageVisible()) {
			console.log('La page est visible.');
		  } else {
			Swal.fire({
				icon: 'error',
				title: 'ATTENTION !',
				text: 'Attention, vous quittez la page.',
			  })
		  }
	});
});
