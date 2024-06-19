let isCelsiusToFahrenheit = true;

document.getElementById('convertButton').addEventListener('click', function() {
    let tempInput = document.getElementById('temperatureInput').value;
    let convertedTemp, explanation;
    
    if (isCelsiusToFahrenheit) {
        convertedTemp = (tempInput * 9/5) + 32;
        explanation = `(${tempInput}°C × 9/5) + 32 = ${convertedTemp.toFixed(2)}°F`;
    } else {
        convertedTemp = (tempInput - 32) * 5/9;
        explanation = `(${tempInput}°F - 32) × 5/9 = ${convertedTemp.toFixed(2)}°C`;
    }
    
    document.getElementById('convertedTemperature').value = convertedTemp.toFixed(2);
    document.getElementById('explanation').textContent = explanation;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('temperatureInput').value = '';
    document.getElementById('convertedTemperature').value = '';
    document.getElementById('explanation').textContent = '';
});

document.getElementById('reverseButton').addEventListener('click', function() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
    document.getElementById('inputLabel').textContent = isCelsiusToFahrenheit ? 'Masukkan Suhu (°C):' : 'Masukkan Suhu (°F):';
    document.getElementById('outputLabel').textContent = isCelsiusToFahrenheit ? 'Hasil dalam (°F):' : 'Hasil dalam (°C):';
    document.getElementById('temperatureInput').value = '';
    document.getElementById('convertedTemperature').value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    const konversiSuhuLink = document.getElementById('konversiSuhuLink');
    const celsiusLink = document.getElementById('celsiusLink');
    const fahrenheitLink = document.getElementById('fahrenheitLink');
    const konversiSuhuInfo = document.getElementById('konversiSuhuInfo');
    const celsiusInfo = document.getElementById('celsiusInfo');
    const fahrenheitInfo = document.getElementById('fahrenheitInfo');
    const navbar = document.getElementById('navbar');

    konversiSuhuLink.addEventListener('click', (e) => {
        e.preventDefault();
        konversiSuhuInfo.style.display = 'block';
        celsiusInfo.style.display = 'none';
        fahrenheitInfo.style.display = 'none';
    });

    celsiusLink.addEventListener('click', (e) => {
        e.preventDefault();
        celsiusInfo.style.display = 'block';
        konversiSuhuInfo.style.display = 'none';
        fahrenheitInfo.style.display = 'none';
    });

    fahrenheitLink.addEventListener('click', (e) => {
        e.preventDefault();
        fahrenheitInfo.style.display = 'block';
        konversiSuhuInfo.style.display = 'none';
        celsiusInfo.style.display = 'none';
    });

    // Display the "Konfersi Suhu" info by default
    konversiSuhuInfo.style.display = 'block';
});


document.getElementById('menuToggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});
