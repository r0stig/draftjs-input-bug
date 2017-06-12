import React, { Component } from 'react'
import {Editor, EditorState} from 'draft-js'

class App extends Component {
  constructor(props) {
    super(props);
    this.references = {}
    this.state = {editorState: EditorState.createEmpty()}
    this.onChange = (editorState) => this.setState({editorState})
    this.handleWindowKeyDown = (event) => {
      this.references.editor.focus()
    }
  }

  componentDidMount () {
    window.addEventListener('keydown', this.handleWindowKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleWindowKeyDown)
  }

  render() {
    return (
      <Editor ref={node => this.references.editor = node} editorState={this.state.editorState} onChange={this.onChange} />
    )
  }
}

export default App
