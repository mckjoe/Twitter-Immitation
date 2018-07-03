import React from 'react'
import TweetForm from './TweetForm'
import TweetButton from './TweetButton'
import PropTypes from 'prop-types'

class NewTweetControl extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      formVisibleOnPage: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({formVisibleOnPage: true})
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage)
  }

  render(){
    let currentlyVisibleContent = null;

    if(this.state.formVisibleOnPage) {
      currentlyVisibleContent = <TweetForm onNewTweetCreation={this.props.onNewTweetCreation}/>
    } else {
      currentlyVisibleContent = <button onClick={this.handleClick}>Lemme Tweet (tweet-tweet*)</button>
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    )
  }
}

NewTweetControl.propTypes = {
  onNewTweetCreation: PropTypes.func
}

export default NewTweetControl
