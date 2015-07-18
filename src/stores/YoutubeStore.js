var alt = require('../alt');
var Firebase = require('firebase');
var FirebaseActions = require('../actions/FirebaseActionCreators');

class YoutubeStore {
  initFirebase(url) {
    this.bindActions(FirebaseActions);

    var firebase = new Firebase(url);
    firebase.on('value', function (dataSnapshot) {
      this.data = dataSnapshot.val();
      //TODO check ohter methods to do this
      FirebaseActions.update();
    }.bind(this), function () {
      console.log('StudentStore cancelCallback');
    });
    return firebase;
  }
  onUpdate() {
    console.log('Firebase updated');
  }
  constructor() {
    this.bindListeners({
    });

    this.initFirebase('https://ytshare.firebaseio.com/demo1');
  }
} 

export default alt.createStore(YoutubeStore, 'YoutubeStore'); 
