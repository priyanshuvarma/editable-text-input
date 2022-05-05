import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isSaved: false, inputText: ''}

  onClickButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onChangeTextInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {isSaved, inputText} = this.state
    const saved = isSaved ? 'withoutBorder' : 'withBorder'
    const buttonText = isSaved ? 'Edit' : 'Save'
    return (
      <div className="app-container">
        <div className="home-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {!isSaved ? (
              <input
                className={saved}
                type="text"
                value={inputText}
                onChange={this.onChangeTextInput}
              />
            ) : (
              <p className={saved}>{inputText}</p>
            )}
            <button
              type="submit"
              className="button"
              onClick={this.onClickButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
