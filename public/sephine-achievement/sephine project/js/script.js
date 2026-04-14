document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmiForm');
    const resetBtn = document.getElementById('resetBtn');
    const hasilBMI = document.getElementById('hasilBMI');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateBMI();
    });

    resetBtn.addEventListener('click', function() {
        form.reset();
        hasilBMI.classList.add('hidden');
    });

    function calculateBMI() {
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseInt(document.getElementById('age').value);

        if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
            alert('Mohon masukkan data yang valid.');
            return;
        }

        // Convert height from cm to m
        const heightInMeters = height / 100;
        const bmi = weight / Math.pow(heightInMeters, 2);
        const roundedBMI = bmi.toFixed(1);

        let category, status;
        if (bmi < 18.5) {
            category = 'Kekurangan berat badan';
            status = 'Berat Badan Kurang';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal (ideal)';
            status = 'Berat Badan Normal';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Kelebihan berat badan';
            status = 'Berat Badan Lebih';
        } else {
            category = 'Kegemukan (Obesitas)';
            status = 'Kegemukan (Obesitas)';
        }

        displayResult(roundedBMI, category, status, gender);
    }

    function displayResult(bmi, category, status, gender) {
        hasilBMI.querySelector('.status-bmi').textContent = status;
        hasilBMI.querySelector('.bmi-value').textContent = bmi;
        hasilBMI.querySelector('.status-description').textContent = `Anda memiliki ${category.toLowerCase()}`;
        hasilBMI.querySelector('.bmi-range').textContent = `Hasil BMI diantara ${Math.floor(bmi)} dan ${Math.ceil(bmi)}`;
        hasilBMI.querySelector('.category-explanation').textContent = `Anda berada dalam kategori ${category.toLowerCase()}.`;
        hasilBMI.querySelector('.recommendation').textContent = 'Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.';

        // Show the result section
        hasilBMI.classList.remove('hidden');

        // Scroll to result
        hasilBMI.scrollIntoView({ behavior: 'smooth' });
    }

    // Add event listeners for the buttons
    document.querySelector('.btn-download').addEventListener('click', function() {
        alert('Fitur download akan segera tersedia');
    });

    const consultButtons = document.querySelectorAll('.btn-konsultasi, .btn-konsultasi-dokter');
    consultButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Fitur konsultasi akan segera tersedia');
        });
    });

    const registerButtons = document.querySelectorAll('.btn-registrasi, .btn-registrasi-sekarang');
    registerButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Fitur registrasi akan segera tersedia');
        });
    });
});