// Function to toggle between showing more and less text
function toggleParagraph() {
  var paragraph = document.getElementById('paragraph');
  var button = document.getElementById('toggleButton');

  // Check if the paragraph is currently showing less text
  var isTruncated = paragraph.textContent.includes('...');

  if (isTruncated) {
      // If currently showing less text, switch to full text
      paragraph.textContent = paragraph.getAttribute('data-full-text');
      button.textContent = 'Show Less ⇧';
  } else {
      // If currently showing full text, switch to truncated text
      var truncatedText = paragraph.textContent.slice(0, 300) + '...';
      paragraph.textContent = truncatedText;
      button.textContent = 'Show More ⇩';
  }
}

// Save the full text to a data attribute for easy retrieval
var paragraph = document.getElementById('paragraph');
paragraph.setAttribute('data-full-text', paragraph.textContent);

// Check if the button already exists
var button = document.getElementById('toggleButton');
if (!button) {
  // Create "Show More" button only if it doesn't exist
  button = document.createElement('button');
  button.id = 'toggleButton';
  button.onclick = toggleParagraph;
}
var truncatedText = paragraph.textContent.slice(0, 300) + '...';
paragraph.textContent = truncatedText;
