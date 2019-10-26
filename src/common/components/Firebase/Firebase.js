import app from 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDfCipIpx3piID_4u4IrWdDebusbZd1qFg',
  authDomain: 'braingardentest.firebaseapp.com',
  databaseURL: 'https://braingardentest.firebaseio.com',
  projectId: 'braingardentest',
  storageBucket: 'braingardentest.appspot.com',
  messagingSenderId: '620327297446',
  appId: '1:620327297446:web:1e7a46c94cee516179ef67',
};

app.initializeApp(config);

const storage = app.storage();

export { storage, app as default };
