document.getElementById('calculForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const tailleEnCm = parseFloat(document.getElementById('taille').value);
            const poids = parseFloat(document.getElementById('poids').value);

            if (isNaN(tailleEnCm) || isNaN(poids) || tailleEnCm <= 0 || poids <= 0) {
                document.getElementById('resultat').textContent = "Veuillez entrer des valeurs valides pour la taille et le poids.";
                document.getElementById('interpretation').textContent = "";
                return;
            }

            




            const tailleEnM = tailleEnCm / 100;
            const imc = poids / (tailleEnM * tailleEnM);
            const imcArrondi = imc.toFixed(2);

            document.getElementById('resultat').textContent = `Votre IMC est de ${imcArrondi}`;

            let interpretation = "";
            if (imc < 18.5) {
                interpretation = "Insuffisance pondérale (maigreur)";
            } else if (imc >= 18.5 && imc < 25) {
                interpretation = "Poids normal";
            } else if (imc >= 25 && imc < 30) {
                interpretation = "Surpoids";
            } else if (imc >= 30 && imc < 35) {
                interpretation = "Obésité modérée";
            } else if (imc >= 35 && imc < 40) {
                interpretation = "Obésité sévère";
            } else {
                interpretation = "Obésité morbide ou massive";
            }
            document.getElementById('interpretation').textContent = interpretation;
        });

        const displayC =document.getElementsById('displayConseil');
            const Consieil =document.querySelector('Conseil');

            if (imc > 0){ Consieil.classList.add('displayConseil');
                
            }