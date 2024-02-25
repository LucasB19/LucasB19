const fs = require('fs').promises;
const readmeTemplate = require('./readme');

// Fonction pour obtenir la date actuelle dans un format lisible
function getTodayDate() {
    const today = new Date();
    return today.toDateString();
}

// Fonction pour déterminer l'humeur basée sur le jour de la semaine
function getGabotSigning() {
    const moodByDay = {
        0: 'relaxation',
        1: 'motivation',
        2: 'productivity',
        3: 'busy',
        4: 'inspiration',
        5: 'happiness',
        6: 'gratitude'
    };
    const today = new Date();
    const mood = moodByDay[today.getDay()];
    return `🤖 Ce README.md est mis à jour avec ${mood}, par Gabot.`;
}

// Fonction pour mettre à jour les marqueurs dans le template README
function updateReadmeTemplate() {
    let updatedReadme = readmeTemplate
        .replace('<#today_date>', getTodayDate())
        .replace('<#gabot_signing>', getGabotSigning());

    return updatedReadme;
}

// Fonction principale pour générer et sauvegarder le nouveau README
async function generateNewReadme() {
    const newReadmeContent = updateReadmeTemplate();
    await fs.writeFile('README.md', newReadmeContent);
    console.log('README.md a été mis à jour avec succès.');
}

// Exécution de la fonction principale
generateNewReadme().catch(console.error);
