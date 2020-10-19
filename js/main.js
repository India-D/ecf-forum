let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  console.log(description.value);
  console.log(title.value);

  // body of the post method

  // let newPost = {
  //   title: title.value,
  //   description: description.value,
  // };

  fetch("/form.json", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    //method to stringify the body
    // body: JSON.stringify(newPost),
  })
    .then(function (response) {
      console.log(response);
      if (response.status == 200) {
        let redirect = (location.href = "./forumPage.html");
        redirect;
        return;
      } else {
        alert("Problem. Status Code: " + response.status);
      }
      response.json().then((json) => console.log("=======>", json));
    })
    .catch((error) => console.log(error));
});
