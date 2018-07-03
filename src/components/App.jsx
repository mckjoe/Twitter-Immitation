import React from 'react'
{/*import Moment from 'moment'*/}
import NewTweetControl from './NewTweetControl'
import TweetList from './TweetList'
import profpic1 from '../assets/images/profpic1.jpeg'
import profpic2 from '../assets/images/profpic2.jpeg'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterTweetList: []
    }
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this)
  }

  handleAddingNewTweetToList(newTweet) {
    var newMasterTweetList = this.state.masterTweetList.slice()
    newMasterTweetList.push(newTweet)
    this.setState({masterTweetList: newMasterTweetList})
  }

  render(){
    return (
      <div>
        <NewTweetControl onNewTweetCreation={this.handleAddingNewTweetToList} />
        <TweetList TweetList={this.state.masterTweetList} />
      </div>
    )
  }

}

export default App
