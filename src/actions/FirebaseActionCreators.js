var alt = require('../alt');

class FirebaseActionCreators {
  constructor() {
    this.generateActions(
      'update'
    );
  }
}

export default alt.createActions(FirebaseActionCreators);
