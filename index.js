let headerText = document.getElementById("#broken-code-header");

let greetingParagraph = document.getElementById("#paragraph");

let btn = document.getElementById("#btn");

let firstName = document.getElementById("#first-name");
let lastName = document.getElementById("#last-name");

btn.addEventListener("onclick", handleClick());

function handleClick(event) {
  let greetingReplacedText = greetingParagraph.innerText
    .replaceAll("{{firstName}}", firstName.value)
    .replaceAll("{{lastName}}", lastName.value);

  greetingParagraph.innerText = greetingReplacedText;
  greetingParagraph.style.display = "block";
}
