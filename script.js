const WHATSAPP_NUMBER = "+224610132773"; // Mettez votre numéro

function reserverPrestation(type) {
    const text = `Bonjour DMSK Events, je souhaite avoir des informations et un devis pour : *${type}*.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

document.getElementById('eventsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const event = document.getElementById('event').value;
    const guests = document.getElementById('guests').value;
    const date = document.getElementById('date').value;

    const msg = `*DEMANDE DE DEVIS - DMSK EVENTS*\n\n` +
                `👤 *Client :* ${name}\n` +
                `🎉 *Événement :* ${event}\n` +
                `👥 *Invités :* ${guests} personnes\n` +
                `📅 *Date :* ${date}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});