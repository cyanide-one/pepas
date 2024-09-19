function hidePlaceholder(input:HTMLInputElement):void{
    const placeholder = input.getAttribute('placeholder') || '';

    input.addEventListener('mouseover', () => {
        input.setAttribute('placeholder','');
    });

    input.addEventListener('mouseout', () => {
        input.setAttribute('placeholder', placeholder)
    });

}

const nameInput = document.getElementById('name') as HTMLInputElement;
const pwdInput = document.getElementById('password') as HTMLInputElement;

if (nameInput) {
    hidePlaceholder(nameInput)
};
if (pwdInput) {
    hidePlaceholder(pwdInput)
}
