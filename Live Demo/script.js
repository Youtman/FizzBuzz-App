function play(a, b) {
	let getIt = '';
	for (let i = 1; i <= 100; i++) {
		getIt +=
			((i % a == 0 ? 'Fizz' : '') + (i % b == 0 ? 'Buzz' : '') || i) + ' ';
	}
	return getIt;
}

//Call and use it
function show() {
	let output = '';
	let val1 = document.getElementById('fizz').value;
	let val2 = document.getElementById('buzz').value;
	output = play(val1, val2);
	document.getElementById('results').innerHTML = output;
}
