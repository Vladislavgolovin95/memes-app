export class Model {
  constructor ({onTextChanged, onMemesChanged, onMemImgChange}) {
    this.textMem = {};
    this.memes = [];

    this.onMemesChanged = onMemesChanged;
    this.onMemImgChange = onMemImgChange;
    this.onTextChanged = onTextChanged;
  }

  addTextMem = (topText, bottomText) => {
      this.textMem = {
        topText,
        bottomText
      }
    this.onTextChanged(this.textMem)
    console.log('addTextMem');
  }

  setMemes = (memes) => {
    this.memes = memes;
    console.log(this.memes)
    
    this.onMemesChanged(this.memes);
    console.log('setMemes');
  }

  getMem = (memName) => {
    let memUrl;
    console.log(this.memes)
    this.memes.forEach(mem => {
      if (mem.name === memName) {
        console.log(mem.url)
        memUrl = mem.url;
      }
      return memUrl;
    });
    this.onMemImgChange(memUrl);
    console.log('getMem');
  }
} 