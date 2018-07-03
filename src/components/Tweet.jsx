import React from 'react'


function Tweet(props) {
  return(
    <div>
      <style jsx>{`
          .flex {
            display: flex;
            align-items: center;
            margin: 25px 0 25px;
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
        </div>
      </div>
      <hr />
    </div>
  )
}
export default Tweet
