import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Tweet(props) {
  return(
    <div>
      <style jsx>{`
          .flex {
            display: flex;
            align-items: center;
            margin: 25px 0 25px;
            justify-content: center;
            text-align: center;
          }
          img {
            width: 100px;
            height: 100px;
            margin-right: 25px;
          }
      `}</style>
      <div className="flex">
        <img src={props.img} />
        <div>
          <h4>{props.title}</h4>
          <p>{props.tweetBody}</p>
          <h6> {displayTimeOpen(props.timeOpen)}</h6>
        </div>
      </div>
      <hr />
    </div>
  )
}

function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}

Tweet.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tweetBody: PropTypes.string.isRequired,
  timeOpen: PropTypes.instanceOf(Moment).isRequired
}

export default Tweet
