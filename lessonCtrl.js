angular.module('directivePractice').controller('mainCtrl', function ($scope) {

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.removeLesson = function (name) {
    for (var i = 0; i < $scope.lessons.length; i++) {
      if (name === $scope.lessons[i]) {
        $scope.lessons.splice(i, 1);
      }
    }

  }

  $scope.test = 'two way data binding bro!';

  $scope.announceDay = function (lesson, day) {
    if (!day) {
      console.log(lesson + ' is not currently scheduled');
    } else {
      console.log(lesson + ' is scheduled on ' + day + '.');
    }
  }

});