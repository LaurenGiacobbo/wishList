'use strict';

angular.module('myWishListApp.register', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope','$location','$firebaseAuth', function($scope,$location,$firebaseAuth) {
 	$scope.mesg = 'Hello';
 	var firebaseObj = new Firebase("https://mywishlistlg.firebaseio.com");
	var auth = $firebaseAuth(firebaseObj);
    var yourCategories = ["You have no lists"];


 	var login={};
	$scope.login=login;

    $scope.signUp = function() {
        if (!$scope.regForm.$invalid) {
            var email = $scope.user.email;
            var username = $scope.user.username;
            var password = $scope.user.password;
            if (email && username && password ) {
        		login.loading = true;
                auth.$createUser($scope.user)
                    .then(function() {
                        // do things if success
                        console.log('User creation success');
                        AddUserArray();
                        $location.path('/home');
                        
                    }, function(error) {
                        // do things if failure
                        console.log(error);
                        $scope.regError = true;
                        $scope.regErrorMessage = error.message;
                    });
            }
        }
    };

    function AddUserArray(username, email, password){
        console.log("pushName"+ username);
        var nameRef = new Firebase('https://mywishlistlg.firebaseio.com/theUsers/');
        var email = $scope.user.email;
        var username = $scope.user.username;
        var password = $scope.user.password;
        nameRef.push().set({email:email, username:username, yourCategories:yourCategories}, function(error){
            if(error){
                console.log("Error:", error);
            }else{
                console.log("loading");
                var newPostRef = nameRef.push();
                // Get the unique ID generated by push()
                var postID = newPostRef.key();
                console.log(postID)
                //addCategoryArray(postID);

            }
        })  

    };

    function addCategoryArray(postID){
        var catRef = new Firebase('https://mywishlistlg.firebaseio.com/theUsers/'+postID+"/");

        catRef.push({yourCategories}, function(error){
            if(error){
                console.log("Error:", error);
            }else{
                console.log("loading");
                // Get the unique ID generated by push()
            }
        })  

    };


}]);
