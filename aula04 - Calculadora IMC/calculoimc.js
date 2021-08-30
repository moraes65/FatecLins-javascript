function calcularIMC() {
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	var calculo = peso / (altura * altura);
	document.getElementById('resultado').innerHTML = calculo.toFixed(2);
	if (calculo < 17) {
		document.getElementById('alert').innerHTML = `
  <div class="alert alert-warning" role="alert">
    Muito Abaixo do Peso
  </div>`;
	} else if (calculo >= 17 && calculo <= 18.49) {
		document.getElementById('alert').innerHTML = `
  <div class="alert alert-warning" role="alert">
     Abaixo do Peso
  </div>`;
	} else if (calculo >= 18.5 && calculo <= 24.99) {
		document.getElementById('alert').innerHTML = `
  <div class="alert alert-primary" role="alert">
     Peso Normal
  </div>`;
	} else if (calculo >= 25 && calculo <= 29.99) {
		document.getElementById('alert').innerHTML = `
  <div class="alert alert-primary" role="alert">
     Acima do Peso
  </div>`;
	} else if (calculo >= 30 && calculo <= 34.99) {
		document.getElementById('alert').innerHTML = `
  <div class="alert alert-danger" role="alert">
     Obesidade I
  </div>`;
	} else if (calculo >= 35 && calculo <= 39.99) {
		document.getElementById('alert').innerHTML = `
  <div class="alert alert-danger" role="alert">
     Obesidade II
  </div>`;
	} else if (calculo >= 40) {
		document.getElementById('alert').innerHTML = `
  <div class="alert alert-danger" role="alert">
     Obesidade III
  </div>`;
	}

	//   <div class="alert alert-danger" role="alert">
	//   A simple danger alert—check it out!
	// </div>
	// <div class="alert alert-warning" role="alert">
	//   A simple warning alert—check it out!
	// </div>
}
