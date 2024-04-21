// Remplace les valeurs 'ville' et 'pays' par l'endroit où habite l'utilisateur
const ville = 'Paris';
const pays = 'France';

// Récupère les données météo à partir de l'API de Prévision-meteo.ch
fetch(`https://www.prevision-meteo.ch/services/json/${ville}`)
  .then(response => response.json())
  .then(data => {
    // Affiche les prévisions pour les prochains jours
    const jours = data.fcst_day_0.day_long; // Jour actuel
    const tempsMax = data.fcst_day_0.tmax; // Température maximale
    const tempsMin = data.fcst_day_0.tmin; // Température minimale

    console.log(`Prévisions météo pour ${jours}:`);
    console.log(`Température maximale: ${tempsMax}°C`);
    console.log(`Température minimale: ${tempsMin}°C`);
  })
  .catch(error => {
    console.log('Une erreur est survenue lors de la récupération des prévisions météo.');
    console.log(error);
  });