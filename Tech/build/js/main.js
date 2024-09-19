"use strict";
function hidePlaceholder(input) {
    const placeholder = input.getAttribute('placeholder') || '';
    input.addEventListener('mouseover', () => {
        input.setAttribute('placeholder', '');
    });
    input.addEventListener('mouseout', () => {
        input.setAttribute('placeholder', placeholder);
    });
}
const nameInput = document.getElementById('name');
const pwdInput = document.getElementById('password');
if (nameInput) {
    hidePlaceholder(nameInput);
}
;
if (pwdInput) {
    hidePlaceholder(pwdInput);
}
