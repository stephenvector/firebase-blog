import App from "next/app";
import firebase from "firebase/app";
import "firebase/firestore";
import { Posts } from "../types";

const firebaseConfig = {
  apiKey: "AIzaSyCUwEynR3J904O8tacbVhwgxuUF7ER-rKk",
  authDomain: "blog-9ede9.firebaseapp.com",
  databaseURL: "https://blog-9ede9.firebaseio.com",
  projectId: "blog-9ede9",
  storageBucket: "blog-9ede9.appspot.com",
  messagingSenderId: "17829941699",
  appId: "1:17829941699:web:3fd94e8ada5edffebb2d76",
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const posts = await firebase
    .firestore()
    .collection("posts")
    .where("published", "==", true)
    .get()
    .then((docs) => {
      const firebasePosts: Posts = {};

      docs.forEach((doc) => {
        const docData = doc.data();
        const { title, content, date } = docData;
        if (title && content && date) {
          firebasePosts[doc.id] = {
            title,
            content,
            date,
          };
        }
      });

      return firebasePosts;
    });

  // firebase.firestore().collection("settings").get();

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, posts };
};

export default MyApp;
