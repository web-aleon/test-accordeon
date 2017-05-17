var accordeon = document.getElementById('accordeon');

function action(e) {
	var elem = document.getElementsByClassName('active')[0];
	if (elem){
		elem.classList.toggle('active');
	}
	e.target.classList.toggle('active');
}

accordeon.addEventListener('click', action);