export class View {
  constructor({onNewText, onNewMem}) {
    this.topTextNode = document.getElementById('top-text');
    this.bottomTextNode = document.getElementById('bottom-text');
    this.topOutputNode = document.getElementById('top-output');
    this.bottomOutputNode = document.getElementById('bottom-output');
    this.selectNode = document.getElementById('select');
    this.previewImgNode = document.getElementById('previewImg');
    this.errorMessageNode = document.getElementById('error');

    this.onNewText = onNewText;
    this.onNewMem = onNewMem;

    this.topTextNode.addEventListener('input', this._handleTextInput);
    this.bottomTextNode.addEventListener('input', this._handleTextInput);
    this.selectNode.addEventListener('change', this._handleSelectClick);
  }
  
  _handleTextInput = () => {
    const topText = this.topTextNode.value;
    const bottomText = this.bottomTextNode.value;

    this.onNewText(topText, bottomText);
  }

  renderText = (textMem) => {
    this.topOutputNode.innerHTML = textMem.topText;
    this.bottomOutputNode.innerHTML = textMem.bottomText;
    console.log('renderText');
  }

  renderMemes = (memes) => {
    memes.forEach(mem => {
      this.selectNode.innerHTML += `
        <option value="${mem.name}">${mem.name}</option>
      `;

      this.previewImgNode.setAttribute("src", mem.url);
    });
    console.log('renderMemes');
  }

  renderMemImg = (memUrl) => {
    this.previewImgNode.setAttribute("src", `${memUrl}`);
    console.log('renderMemImg');
  }

  _handleSelectClick = () => {
    const memName = this.selectNode.value;
    this.onNewMem(memName);
  }
}