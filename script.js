function calculate() {
    const total = parseFloat(document.getElementById('total').value);
    if (!isNaN(total) && total > 0) {
        const cuota = total / 5;
        const entrega = 2 * cuota;

        document.getElementById('entrega').innerText = entrega.toFixed(2);
        document.getElementById('cuota1').innerText = cuota.toFixed(2);
        document.getElementById('cuota2').innerText = cuota.toFixed(2);
        document.getElementById('cuota3').innerText = cuota.toFixed(2);
    } else {
        alert('Por favor, ingresa un total válido.');
    }
}
