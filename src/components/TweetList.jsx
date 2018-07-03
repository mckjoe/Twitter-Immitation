import React from 'react'
import Tweet from './Tweet'
import PropTypes from 'prop-types'

function TweetList(props) {
  return(
    <div>
      <hr />
      {props.TweetList.map((tweet) =>
      <Tweet img={tweet.img}
      title={tweet.title}
      tweetBody={tweet.tweetBody}
      key={tweet.id} />
    )}
    </div>
  )
}

TweetList.propTypes = {
  TweetList: PropTypes.array
}

export default TweetList
