// Select all product boxes and the default description
const productBoxes = document.querySelectorAll(".product-box");
const defaultDescription = document.querySelector(".featured-description");
const featuredItems = document.querySelectorAll('[class^="featured-item"]');

// Hover functionality for each product box
productBoxes.forEach((box, index) => {
  const currentImageClass = `.product-image-${index + 1}`;
  const currentItemClass = `.featured-item-${index + 1}`;

  // On hover (mouseenter)
  box.addEventListener("mouseenter", () => {
    // Change bg color to red
    productBoxes.forEach((productBox) => {
      productBox.style.backgroundColor = "#C53338";
    });

    // Fade out except the one being hovered
    productBoxes.forEach((otherBox, otherIndex) => {
      const otherImageClass = `.product-image-${otherIndex + 1}`;
      const otherImage = document.querySelector(otherImageClass);
      if (otherIndex !== index) {
        otherImage.style.opacity = "0"; // Fade out
      } else {
        otherImage.style.opacity = "1";
      }
    });

    // Hide the default description and all featured descriptions
    defaultDescription.style.display = "none";
    featuredItems.forEach((item) => {
      item.style.display = "none";
      item.style.opacity = "0";
    });

    // Show and fade in the corresponding featured description
    const currentItem = document.querySelector(currentItemClass);
    if (currentItem) {
      currentItem.style.display = "block"; 
      setTimeout(() => {
        currentItem.style.opacity = "1"; // Fade in the description
      }, 50);
    }
  });

  // On hover end (mouseleave)
  box.addEventListener("mouseleave", () => {
    // Reset background color for all product-boxes
    productBoxes.forEach((productBox) => {
      productBox.style.backgroundColor = "#fffceb";
    });

    // Reset all product images to be fully visible
    productBoxes.forEach((otherBox, otherIndex) => {
      const otherImageClass = `.product-image-${otherIndex + 1}`;
      const otherImage = document.querySelector(otherImageClass);
      otherImage.style.opacity = "1"; // Reset opacity for all images
    });

    // Hide the currently visible featured descrpt
    const currentItem = document.querySelector(currentItemClass);
    if (currentItem) {
      currentItem.style.opacity = "0"; // Fade out the descrp
      currentItem.style.display = "none"; // Hide after fading out
    }

    // Show and fade in the default descrpt
    defaultDescription.style.display = "block"; // Show default descrp again
    setTimeout(() => {
      defaultDescription.style.opacity = "1"; // Fade in the default descrp
    }, 50);
  });
});
