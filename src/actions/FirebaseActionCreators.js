import alt from 'components/Dispatcher';

class FirebaseActionCreators {
  constructor() {
    this.generateActions(
      'update',
      'add'
    );
  }
}

export default alt.createActions(FirebaseActionCreators);
