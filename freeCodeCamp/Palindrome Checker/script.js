const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function takeInput () {
    let txt = textInput.value.trim();
    txt = txt.toLowerCase();
    let cleanedText = txt.replace(/[^a-z0-9]/gi, '');

    if (txt.length === 0) {
        alert("Please input a value");
    } else {
        showResult(cleanedText, txt);
    }
}

function reverseText (txt) {
    let splitText = txt.split("");

    let reversedArray = splitText.reverse();

    let reversedText = reversedArray.join("");

    // You can use for loop instead of this method.
    /*
    let reversedText = "";
    for (let i = txt.length - 1; i >= 0; i--) {
        reversedText += txt[i];
    }
    return reversedText;
    */

    return reversedText
    
}

function checkPalindrome (text) {

    if (text === reverseText(text)) {
        result.style.color = "green";

        return "a palindrome";
    } else {
        result.style.color = "crimson";
        return "not a palindrome";
    }

}

function showResult (cleanedText, text) {
    
    result.classList.remove("hidden");

    result.innerHTML = `"${text}" is ${checkPalindrome(cleanedText)}.`
}

checkBtn.addEventListener("click", takeInput);