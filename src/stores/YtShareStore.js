import alt from 'components/Dispatcher';
import Firebase from 'firebase';
import FirebaseActions from 'actions/FirebaseActionCreators'

export class YtShareStore {
  initFirebase(url) {
    this.bindActions(FirebaseActions);

    var firebase = new Firebase(url);
    firebase.on('value', function(dataSnapshot) {
      this.data = dataSnapshot.val();
      //TODO check ohter methods to do this
      FirebaseActions.update();
    }.bind(this), function() {
      /*eslint-disable no-console */
      console.log('StudentStore cancelCallback');
    });
    return firebase;
  }

  onUpdate() {
    /*eslint-disable no-console */
    console.log('Firebase updated');
  }
  constructor() {
    this.bindListeners({});

    this.initFirebase('https://ytshare.firebaseio.com/demo1');
  }
}

export default alt.createStore(YtShareStore, 'YtShareStore');
