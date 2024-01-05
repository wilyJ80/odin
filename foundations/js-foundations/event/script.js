const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
	{alert("Hello World!");}
});

btn.addEventListener('click', function (e) {
	e.target.style.background = 'blue';
});
