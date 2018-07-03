import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import profpic3 from '../assets/images/profpic3.jpeg'

function TweetForm(props) {
  let _title = null
  let _tweetBody = null


  function handleNewTweetFormSubmission(event) {
    event.preventDefault()
    props.onNewTweetCreation({img: profpic3, title: _title.value, tweetBody: _tweetBody.value, id: v4()})
    _title.value = ''
    _tweetBody.value = ''
  }

  return(
    <div onSubmit={handleNewTweetFormSubmission}>
      <form>
        <input
          type='text'
          id='title'
          placeholder='Name Your Tweet'
          ref= {(input) => {_title = input}} />
        <br/>
        <br />
        <textarea
          id="tweetBody"
          placeholder="Gimme the tweet"
          ref= {(input) => {_tweetBody = input}} />
        <br />
        <button type="submit">Tweet Thah</button>
      </form>
    </div>
  )
}

TweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
}

export default TweetForm
