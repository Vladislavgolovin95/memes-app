import { API } from "./api.js";
import { Model } from "./model.js";
import { View } from "./view.js";

export class Controller {
  constructor() {
    this.api = new API();
    this.model = new Model({
      onTextChanged: this.handleModelTextChanged,
      onMemesChanged: this.handleModelMemesChanged,
      onMemImgChange: this.handleModelMemImgChanged,
    });
    this.view = new View({
      onNewText: this.handleViewNewText,
      onNewMem: this.handleViewNewMem,
    });
  }

  init () {
    this.api.fetchMemes()
      .then(memes => {
        this.model.setMemes(memes);
      });
  }

  handleViewNewText = (topText, bottomText) => {
    console.log('handleViewNewText')
    this.model.addTextMem(topText, bottomText);
  }

  handleModelTextChanged = (textMem) => {
    console.log('handleModelTextChanged')
    this.view.renderText(textMem);
  }

  handleModelMemesChanged = (memes) => {
    console.log('handleModelTextChanged')
    this.view.renderMemes(memes);
  }

  handleModelMemImgChanged = (memUrl) => {
    console.log('handleModelMemImgChanged')
    this.view.renderMemImg(memUrl);
  }

  handleViewNewMem = (memName) => {
    console.log('handleViewNewMem')
    this.model.getMem(memName);
  }
}