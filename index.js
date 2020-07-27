function getDogImage(){
    const inputBreed = $('.js-breed').val();
    let url = `https://dog.ceo/api/breed/${inputBreed}/images/random`;
    const options = {method: 'GET'};
    fetch(url, options)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert("Breed not found. Please input another breed."));
};

function handleForm(){
  $('form').submit(event => {
    event.preventDefault();
    $('.results-img').remove();
    getDogImage();
  });
};

function displayResults(responseJson){
  console.log(responseJson);
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`
  )
}

$(function() {
  console.log('App Loaded');
  handleForm();
});