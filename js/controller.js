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
      .then(data => {
        const memes = data.data.memes;

        this.model.setMemes(memes);
      });
  }

  handleViewNewText = (topText, bottomText) => {
    this.model.addTextMem(topText, bottomText);
  }

  handleModelTextChanged = (textMem) => {
    this.view.renderText(textMem);
  }

  handleModelMemesChanged = (memes) => {
    this.view.renderMemes(memes);
  }

  handleModelMemImgChanged = (memUrl) => {
    this.view.renderMemImg(memUrl);
  }

  handleViewNewMem = (memName) => {
    this.model.getMem(memName);
  }
}