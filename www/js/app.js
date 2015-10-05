// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, $cordovaPreferences) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    
    //On ready
    $ionicPlatform.ready(function() {
      
      
      $rootScope.store = function(){
          $cordovaPreferences.store('key', 'myMagicValue')
            .success(function(value){
                alert("Success: " + value);
            })
            .error(function(error){
                alert("Error: " + error);
            })
      };
      
      $rootScope.fetch = function(){
          $cordovaPreferences.fetch('key')
            .success(function(value){
                alert("Success: " + value);
            })
            .error(function(error){
                alert("Error: " + error);
            })
      };
      
      $rootScope.remove = function(){
          $cordovaPreferences.remove('key')
            .success(function(value){
                alert("Success: " + value);
            })
            .error(function(error){
                alert("Error: " + error);
            })
      };
      
      $rootScope.show = function(){
          $cordovaPreferences.show()
            .success(function(value){
                alert("Success: " + value);
            })
            .error(function(error){
                alert("Error: " + error);
            })
      };
      
      
      //Dictionaries
      
      $rootScope.storeDict = function(){
          $cordovaPreferences.store('key', 'myDictMagicValue', 'dict')
            .success(function(value){
                alert("Success: " + value);
            })
            .error(function(error){
                alert("Error: " + error);
            })
      };
      
      $rootScope.fetchDict = function(){
          $cordovaPreferences.fetch('key', 'dict')
            .success(function(value){
                alert("Success: " + value);
            })
            .error(function(error){
                alert("Error: " + error);
            })
      };
      
      $rootScope.removeDict = function(){
          $cordovaPreferences.remove('key', 'dict')
            .success(function(value){
                alert("Success: " + value);
            })
            .error(function(error){
                alert("Error: " + error);
            })
      };
    });
  });
})
