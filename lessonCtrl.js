angular.module('directivePractice').controller('mainCtrl', function ($scope) {
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.test = 'two way data binding bro!';

  $scope.announceDay = function (lesson, day) {
    console.log(lesson + ' is active on ' + day + '.');

  }
});