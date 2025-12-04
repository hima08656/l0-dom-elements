// Get references to DOM elements
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const container = document.getElementById("paraContainer");

// Add: create a new <p> and append to the container
addBtn.addEventListener("click", function() {
    // Create a new paragraph element
    const p = document.createElement("p");
    // Set its text content
    p.textContent = "This is a new paragraph.";
    // Append to the container
    container.appendChild(p);
});

// Remove: remove the last <p> inside the container
removeBtn.addEventListener("click", function() {
    // Find the last child paragraph; ensure there is one before removing
    const lastParagraph = container.lastElementChild;
    if (lastParagraph) {
        // Remove the last paragraph from the container
        container.removeChild(lastParagraph);
    }
});