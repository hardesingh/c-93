var firebaseConfig = {
      apiKey: "AIzaSyAo6i-aErSciIli69kSLItYsS64ocn8BY8",
      authDomain: "kwitter-a4538.firebaseapp.com",
      databaseURL: "https://kwitter-a4538-default-rtdb.firebaseio.com",
      projectId: "kwitter-a4538",
      storageBucket: "kwitter-a4538.appspot.com",
      messagingSenderId: "451546729387",
      appId: "1:451546729387:web:06c136b9023de37813e0ee",
      measurementId: "G-1WK4F59VH4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
