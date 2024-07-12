document.addEventListener('DOMContentLoaded', function() {
    const featuredImage = document.querySelector('#featured-image');
    const figcaption = document.querySelector('figcaption');
    const thumbnails = document.querySelectorAll('#thumbnail-list img');

    // Function to handle thumbnail click
    function handleThumbnailClick(event) {
        const clickedThumbnail = event.target;
        // Update featured image src
        featuredImage.src = clickedThumbnail.src.replace('-small.jpg', '-large.jpg');
        // Update figcaption using alt text
        figcaption.textContent = clickedThumbnail.alt;

        // Reset all thumbnails to grayscale
        thumbnails.forEach(thumbnail => {
            thumbnail.classList.remove('active');
        });
        // Set the clicked thumbnail to active (full color)
        clickedThumbnail.classList.add('active');
    }

    // Add click event listener to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', handleThumbnailClick);
    });

    // Initial setup for the first thumbnail
    if (thumbnails.length > 0) {
        handleThumbnailClick({ target: thumbnails[0] });
    }
});
