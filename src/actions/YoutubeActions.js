import alt from 'components/Dispatcher';

class YoutubeActions {
  constructor() {
    this.generateActions(
      'search',
      'resultsLoaded'
    );
  }
}

export default alt.createActions(YoutubeActions);
