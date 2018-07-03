import React from 'react'
import TweetForm from './TweetForm'
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
  }
  render(){

    let currentlyVisibleContent = null

    if(this.state.formVisibleOnPage) {
      currentlyVisibleContent = <TweetForm onNewTweetCreation={this.props.onNewTweetCreation}/>
    } else {
      currentlyVisibleContent = <button onClick={this.handleClick}>Lemme Tweet (tweet-tweet*)</button>
    }

    return (
      <div>
        <style jsx>{`
          background-color: skyblue;
          text-align: center;
        `}</style>
        <div className="centered">
          {currentlyVisibleContent}
        </div>
      </div>
    )
  }
}

NewTweetControl.propTypes = {
  onNewTweetCreation: PropTypes.func
}

export default NewTweetControl
