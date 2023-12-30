const card = document.getElementById("card");
const thanksCard = document.getElementById("thanks-card");
const submitButton = document.querySelector(".btn-submit");
const ratingSelection = document.querySelectorAll(".btn");
const finalRating = document.getElementById('final-rating');

ratingSelection.forEach(rating => {
    rating.addEventListener('click', () =>{
        finalRating.innerText = rating.innerText
    })
})

submitButton.addEventListener('click', () =>{
    if(finalRating.innerText != 'n'){
        thanksCard.classList.remove('hidden');
        card.classList.add('hidden');
    }
});