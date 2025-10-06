// https://codepen.io/evgpak/pen/wBMgLjg

const textarea = document.querySelector('textarea');
const indentCharacter = ' ';
const numOfIndentCharacters = 2;
const indentation = indentCharacter.repeat(numOfIndentCharacters);

textarea.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();

        const start = this.selectionStart;
        const end = this.selectionEnd;

        this.value = this.value.substring(0, start) + indentation + this.value.substring(end);

        this.selectionStart = this.selectionEnd = start + numOfIndentCharacters;
    }
});
