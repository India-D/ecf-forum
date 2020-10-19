const addData = () => {
    fetch("/form.json")
    .then(response => response.json())
    .then(text => {
        document.getElementById("title").innerText= text.title;
        document.getElementById("description").innerText = text.description;
        console.log(text.title)
    }
        ).catch();
}
addData();