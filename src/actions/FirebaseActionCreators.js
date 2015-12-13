import alt from 'components/Dispatcher';

class FirebaseActionCreators {
  constructor() {
    this.generateActions(
      'update'
    );
  }
}

export default alt.createActions(FirebaseActionCreators);
