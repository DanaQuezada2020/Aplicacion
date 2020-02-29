 var firebaseConfig = {
    apiKey: "AIzaSyDECWTVXYcx5QKb8lepVREee19t10F7Ric",
    authDomain: "maxapp-f35f8.firebaseapp.com",
    databaseURL: "https://maxapp-f35f8.firebaseio.com",
    projectId: "maxapp-f35f8",
    storageBucket: "maxapp-f35f8.appspot.com",
    messagingSenderId: "676825114501",
    appId: "1:676825114501:web:bb36fe627473e24a11c6ec",
    measurementId: "G-N1V566V5EJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.registrar = function(usuario){
    firebase.auth().createUserWithEmailAndPassword(usuario.correo, usuario.contrasena).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
