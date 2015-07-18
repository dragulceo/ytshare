var alt = require('../alt');
var Firebase = require('firebase');

class YoutubeStore {
  initFirebase(url) {
    "use strict";
    //this.bindActions(FirebaseActions);

    var firebase = new Firebase(url);
    firebase.on('value', function (dataSnapshot) {
      this.data = dataSnapshot.val();
      //TODO find a replacement for this
      console.log(this.data);
      //FirebaseActions.update();
    }.bind(this), function () {
      console.log('StudentStore cancelCallback');
    });
    return firebase;
  }
  onUpdate() {
    "use strict";
    console.log('Firebase updated');
  }
  constructor() {
    this.bindListeners({
    });

    this.initFirebase('https://ytshare.firebaseio.com/demo1');
  }
} 

export default alt.createStore(YoutubeStore, 'YoutubeStore'); 
