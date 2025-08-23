document.addEventListener('DOMContentLoaded', function() {
    const ratingCard = document.getElementById('ratingCard');
    const thankYouCard = document.getElementById('thank-you-card');
    const ratingButtons = document.querySelectorAll('.rating-options button');
    const submitButton = document.getElementById('submit');
    const selectedRatingSpan = document.getElementById('selectedRating');
    let selectedRating = '';

    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            selectedRating = button.dataset.rating;
        })
    })

    submitButton.addEventListener('click', function(){
        if (selectedRating) {
            ratingCard.classList.add('hidden');
            selectedRatingSpan.textContent = selectedRating;
            thankYouCard.classList.remove('hidden');
            } else {
                alert('Please select a rating before submitting');
            }
    })
})