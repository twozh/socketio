var sioApp = angular.module('sioApp', []);

sioApp.controller('sioCtrl', ['$scope', '$http',
  function ($scope, $http) {

    $scope.ngmStatus = "init";

    var socket = io.connect();

    socket.on('connect', function(){
      $scope.ngmStatus = "connect";
      $scope.$apply();
    });

    socket.on('disconnect', function(){
      $scope.ngmStatus = "disconnect";
      $scope.$apply();
    });

    socket.on('news', function (data) {
      alert('websocket server send: ' + data.hello);
    });

    socket.on('message', function(message){
      $scope.ngmOutput = message;
      $scope.$apply();
    });

    $scope.ngfClick = function(){

      if ("" !== $scope.ngmInput){
        socket.send($scope.ngmInput);
      }

      $scope.ngmInput = "";
    };

  }]);
