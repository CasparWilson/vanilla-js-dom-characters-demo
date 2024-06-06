//Modern browsers support ES5 modules with import/export as normal
// import { getElementByIdOrFail } from "./utils.js";
import { characters } from "./characters.js";
// import { antiHeroes } from "./antiheroes.js";

setupSearchButton();
renderCharacterListToHTML();

function renderCharacterListToHTML() {
    const characterLiElements = makeLiElementsForCharacters();
    const myList = document.getElementById("charactersUL");
    for (const li of characterLiElements) {
        myList.appendChild(li);
    }
}

function makeLiElementsForCharacters() {
    const focusedCharacterParagraph = document.getElementById(
        "focusedCharacterParagraph"
    );

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

function setupSearchButton() {
    const searchTermDisplay = document.getElementById("searchTermDisplay");

    const myButton = document.getElementById("myButton1");
    myButton.addEventListener("click", () => {
        const searchTerm = prompt("input search term");
        searchTermDisplay.outerHTML =
            "You said: " +
            searchTerm +
            " but we don't do anything with this info yet";
    });
}
