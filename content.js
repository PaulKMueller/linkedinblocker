// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    hideLinkedInStats();
});

// Function to hide LinkedIn stats
function hideLinkedInStats() {

    // Hide the stats in the feed
    hideFeedStats();
        
    // Define the patterns to match
    var patterns = [
        /\d+ profile views/,
        /\d+ post impressions/,
        /\d+ search appearances/,
        /Who's viewed your profile \d+/,
        /Impressions of your post \d+/
    ];

    // Recursive function to hide matching text nodes
    function hideMatchingTextNodes(element) {
        for (var i = 0; i < element.childNodes.length; i++) {
            var node = element.childNodes[i];

            // If this is a text node...
            if (node.nodeType === 3) {
                // Check if it matches any of the patterns
                var nodeText = node.nodeValue.trim();
                for (var j = 0; j < patterns.length; j++) {
                    if (patterns[j].test(nodeText)) {
                        // If it matches, hide it
                        node.parentNode.style.display = 'none';
                        break;
                    }
                }
            } else if (node.nodeType === 1) {
                // If this is an element node, check its child nodes
                hideMatchingTextNodes(node);
            }
        }
    }

    // Start at the body and check all nodes
    hideMatchingTextNodes(document.body);
}

function hideFeedStats(){
    var searchAppearances = document.querySelector('.feed-identity-widget-item__stat');
    if (searchAppearances) searchAppearances.style.display = 'none';
}

// Create a new MutationObserver instance
var observer = new MutationObserver(hideLinkedInStats);

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });
