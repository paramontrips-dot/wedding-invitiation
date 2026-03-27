document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const envelope = document.getElementById('envelopeWrapper');
    const preview = document.getElementById('caricaturePreview');

    openBtn.addEventListener('click', () => {
        // Trigger the flip
        envelope.classList.add('open');

        // Fade out the floating caricature preview
        if (preview) {
            preview.style.opacity = '0';
            setTimeout(() => {
                preview.style.display = 'none';
            }, 800);
        }
    });
    /* 1. Add the variable for the back button */
const backBtn = document.getElementById('backBtn');

/* 2. Add the listener to reverse the animation */
backBtn.addEventListener('click', (e) => {
    // Prevents the click from interfering with other elements
    e.stopPropagation(); 
    
    // Remove the 'open' class to flip the card back into the envelope
    envelope.classList.remove('open');
    
    // Smoothly bring back the floating caricature preview
    if (preview) {
        preview.style.display = 'block';
        setTimeout(() => {
            preview.style.opacity = '1';
        }, 100);
    }
});
});