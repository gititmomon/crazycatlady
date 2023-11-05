// const TIMEOUT_TIME = 3000;

// setTimeout(handleClick, TIMEOUT_TIME);

function handleClick() {
    // Logic for doing something after button click
    alert("Your ad message!");
}

function promptBox() {
    console.log("Asked customer for their dessert order");
    let dessert = window.prompt("what's your favorite dessert?","tiramisu");
    let text = "Hello, my favorite dessert is "+dessert;
    console.log(text);
    document.getElementById("dessert-choice").innerHTML = "<h2>" + text + "</h2>";
    console.log("Order received!");
}
