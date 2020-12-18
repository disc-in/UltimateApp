import firebase from 'firebase/app';
import 'firebase/database';

//Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const reference = (uuid) => {
  return firebase.database().ref(`customPlays/${uuid}`);
};

export const upload = (play) => {
  return reference(play.uuid).set(play);
};

export const download = (uuid) => {
  return reference(uuid)
    .once('value')
    .then((snapshot) => snapshot.val());
};
