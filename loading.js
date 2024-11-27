const loading = document.querySelector(".loading");

/**
 * Make the gif fade out after 3 seconds
 */
setTimeout(() => {
  loading.style.opacity = "0";
  setTimeout(() => {
    loading.style.display = "none";
  }, 5000);
}, 5000);
