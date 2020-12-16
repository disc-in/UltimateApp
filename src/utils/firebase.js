import firebase from 'firebase/app';
import 'firebase/database';

//Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const reference = (uuid) => {
  return firebase.database().ref(`drills/${uuid}`);
};

export const upload = (play) => {
  reference(play.uuid).set(play);
};

export const download = (uuid) => {
  reference(uuid).once('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
};
