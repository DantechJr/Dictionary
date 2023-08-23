const dictionary = (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "506d877b42mshe1556de09a46cccp14df51jsnfbf0dd90d271",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };
  fetch(
    "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=" +
      word,
    options
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      wordHeading.innerHTML = "Meaning of: " + res.word;

      definition.innerHTML = res.definition
        .replace("2.", "<br><br>2.")
        .replace("3.", "<br><br>3.")
        .replace("4.", "<br><br>4.");
    })
    .catch((err) => console.log.error(err));
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchInput.value);
});
