import alt from 'components/Dispatcher';
import YoutubeActions from 'actions/YoutubeActions';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from '../constants/Globals.js'

export class YoutubeStore {
  constructor() {
    this.bindListeners({
      resultsLoaded: YoutubeActions.resultsLoaded
    });
    this.bindActions(YoutubeActions);
  }
  resultsLoaded(data) {
    this.setState({
      data: data.items
    })
  }
  onSearch(data) {
    /*eslint-disable no-console */
    console.log('search youtube ', data);
    //$.get('')
    fetch(YOUTUBE_API_URL + '?part=snippet&q=' + data + '&key=' + YOUTUBE_API_KEY)
      .then((data) => data.json().then((data) => this.resultsLoaded(data)));
  }
}

export default alt.createStore(YoutubeStore, 'YoutubeStore');
