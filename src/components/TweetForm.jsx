import React from 'react'

function TweetForm() {
  return(
    <div>
      <form>
        <input
          type='text'
          id='title'
          placeholder='Name Your Tweet'
          />
        <br/>
        <br />
        <textarea
          id="tweetBody"
          placeholder="Gimme the tweet" />
        <br />
        <button type="submit">Tweet Thah</button>
      </form>
    </div>
  )
}
export default TweetForm
