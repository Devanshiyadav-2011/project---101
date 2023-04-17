// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDX943ZfOsPnidGQxwyxpb2z46yYDIcxIU",
    authDomain: "project-eb01a.firebaseapp.com",
    databaseURL: "https://project-eb01a-default-rtdb.firebaseio.com",
    projectId: "project-eb01a",
    storageBucket: "project-eb01a.appspot.com",
    messagingSenderId: "306336417969",
    appId: "1:306336417969:web:eebaa703bc4d7a6e25fa90",
    measurementId: "G-P2XWL7P1J0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



