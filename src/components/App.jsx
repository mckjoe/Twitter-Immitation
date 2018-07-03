import React from 'react'
import Moment from 'moment'
import NewTweetControl from './NewTweetControl'
import TweetList from './TweetList'

class App extends React.Component {


  render(){
    return (
      <div>
        <NewTweetControl />
        <TweetList />
      </div>
    )
  }

}

export default App
