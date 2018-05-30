import * as firebase from 'firebase';

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
