import React, { Component } from "react";
import marked from "marked";
import { placeholder } from "./placeholder";
import * as expandFunc from "./expandButtonFunctions";

let editExpand = 0;
let editPreview = 0;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: placeholder
    };
    this.updateInput = this.updateInput.bind(this);
    this.markdown = this.markdown.bind(this);
    this.clearEditor = this.clearEditor.bind(this);
  }

  clearEditor() {
    this.setState({
      input: ""
    });
  }
  markdown(string) {
    return { __html: marked(string, { breaks: true }) };
  }
  updateInput(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div id="editor-container">
          <div id="editor-header-container">
            <div id="editor-header" className="headers">
              <div className="header-container">Editor</div>{" "}
              <button id="clear-btn" onClick={this.clearEditor}>
                CLEAR
              </button>
              <button className="expandBtn">
                <i
                  id="editor-btn"
                  className="fas fa-expand-arrows-alt"
                  onClick={expandFunc.toggleExpandEditor}
                ></i>
              </button>
            </div>
          </div>
          <textarea
            id="editor"
            placeholder="try '# Hello World!'"
            value={this.state.input}
            onChange={this.updateInput}
          />
        </div>
        <div id="preview-container">
          <div id="preview-header" className="headers">
            <div className="header-container"> Preview </div>
            <button className="expandBtn">
              <i
                id="preview-btn"
                class="fas fa-expand-arrows-alt"
                onClick={expandFunc.toggleExpandPreview}
              ></i>
            </button>
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={this.markdown(this.state.input)}
          />
        </div>
      </div>
    );
  }
}

export default App;
