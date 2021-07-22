 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAkRRXZWY7JajW3LojpTn_lUohHY4H1f-s",
    authDomain: "kwitter-832a3.firebaseapp.com",
    databaseURL: "https://kwitter-832a3-default-rtdb.firebaseio.com",
    projectId: "kwitter-832a3",
    storageBucket: "kwitter-832a3.appspot.com",
    messagingSenderId: "236811274501",
    appId: "1:236811274501:web:28489b6b4ea439fc784f6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose:"adding user"})
      document.getElementById("user_name").value=""
  }
