export class Model {
  constructor ({onTextChanged, onMemesChanged, onMemImgChange}) {
    this.textMem = {};
    this.memes = [];

    this.onTextChanged = onTextChanged;
    this.onMemesChanged = onMemesChanged;
    this.onMemImgChange = onMemImgChange;
  }

  addTextMem = (topText, bottomText) => {
    this.textMem = {
      topText,
      bottomText
    }
    this.onTextChanged(this.textMem)
  }

  setMemes = (memes) => {
    this.memes = memes;
    this.onMemesChanged(this.memes);
    console.log(memes);
  }

  getMem = (memName) => {
    let memUrl;
    this.memes.data.memes.forEach(mem => {
      if (mem.name === memName) {
        memUrl = mem.url;
      }
      console.log(memUrl);
      return memUrl;
    });
    this.onMemImgChange(memUrl);
  }
} 