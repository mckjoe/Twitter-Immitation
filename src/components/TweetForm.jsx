import React from 'react'

function TweetForm() {
  let _title = null;
  let _tweetBody = null;


  function handleNewTweetFormSubmission(event) {
    event.preventDefault()
    console.log(_title.value)
    console.log(_tweetBody.value)
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
export default TweetForm
