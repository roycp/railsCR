var phonecatApp = angular.module('todoApp',[]);

phonecatApp.controller('todoCtrl', function  ($scope) {
  $scope.activities = [
    {'name': 'wash the disches', isDone: false},
    {'name': 'learn Angular', isDone: false},
    {'name': 'do the homework', isDone: false},
    {'name': 'fix the server issue', isDone: false}
  ];

  function isActivityDoneListener() {
    $scope.doneActivities = [];
    $scope.unDoneActivities = [];

    for (index in $scope.activities) {
      if ($scope.activities[index].isDone) {
        $scope.doneActivities[$scope.doneActivities.length] = $scope.activities[index];
      } else {
        $scope.unDoneActivities[$scope.unDoneActivities.length] = $scope.activities[index];
      }
    }
  }

  $scope.$watch('activities', isActivityDoneListener, true);
});
