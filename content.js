// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    hideLinkedInStats();
});

// Function to hide LinkedIn stats
function hideLinkedInStats() {
    // Selectors might change as LinkedIn updates their website
    var searchAppearances = document.querySelector('.feed-identity-widget-item__stat');
    var onProfile1 = document.querySelector('.pvs-list__item--three-column');
    var onProfile2 = document.querySelector('.visually-hidden');

    if (searchAppearances) searchAppearances.style.display = 'none';
    if (searchAppearances) onProfile1.style.display = 'none';
    if (searchAppearances) onProfile2.style.display = 'none';
}

// Create a new MutationObserver instance
var observer = new MutationObserver(hideLinkedInStats);

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });

