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
  }

  getMem = (memName) => {
    const memesArr = this.memes;
    let memUrl;
    memesArr.data.memes.forEach(mem => {
      if (mem.name === memName) {
        console.log(mem.url)
        memUrl = mem.url;
      }
      return memUrl;
    });
    this.onMemImgChange(memUrl);
  }

  setMemes = (memes) => {
    this.memes = memes;
    this.onMemesChanged(this.memes);
  }
} 