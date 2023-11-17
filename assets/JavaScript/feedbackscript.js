document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');
    const selectedRating = document.getElementById('selectedRating');

    stars.forEach(function (star) {
        star.addEventListener('mouseover', function () {
            resetStars();
            const ratingValue = this.getAttribute('data-rating');
            highlightStars(ratingValue);
        });

        star.addEventListener('mouseout', function () {
            resetStars();
        });

        star.addEventListener('click', function () {
            const ratingValue = this.getAttribute('data-rating');
            selectedRating.innerHTML = 'Hai valutato con ' + ratingValue + ' stella(e).';
            resetStars();
            highlightStars(ratingValue);
        });
    });

    function resetStars() {
        stars.forEach(function (star) {
            star.classList.remove('active');
        });
    }

    function highlightStars(value) {
        for (let i = 0; i < value; i++) {
            stars[i].classList.add('active');
        }
    }
});