//Modern browsers support ES5 modules with import/export as normal
// import { getElementByIdOrFail } from "./utils.js";
import { characters } from "./characters.js";
// import { antiHeroes } from "./antiheroes.js";

const myButton = document.getElementById("myButton1");
const focusedCharacterParagraph = document.getElementById(
    "focusedCharacterParagraph"
);
const myList = document.getElementById("charactersUL");

myButton.addEventListener("click", () => {
    const searchTerm = prompt("input search term");
    focusedCharacterParagraph.outerHTML = "You said: " + searchTerm;
});

function makeLiElementsForCharacters() {
    return characters.map((character) => {
        //Not yet attached to any point in the DOM tree
        const element = document.createElement("li");
        element.innerHTML = character.name + " from " + character.book;

        element.addEventListener("click", () => {
            alert(character.powers.join(", "));
        });
        element.addEventListener("mouseover", () => {
            focusedCharacterParagraph.innerText =
                character.name + ": " + character.powers.join(", ");
        });

        return element;
    });
}
const characterLiElements = makeLiElementsForCharacters();

for (const li of characterLiElements) {
    myList.appendChild(li);
}
