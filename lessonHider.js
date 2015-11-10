angular.module('directivePractice')
  .directive('lessonHider', function () {
    return {
      templateUrl: 'templates/lessonHider.html',
      restrict: 'E',
      scope: {
        lesson: '=',
        dayAlert: '&'
      },
      controller: function ($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
      },
      link: function (scope, element, attributes) {
        scope.getSchedule.then(function (response) {

          scope.schedule = response.data;
          console.log(scope.schedule, scope.lesson);

          scope.schedule.forEach(function (value) {
            if (value.lesson === scope.lesson) {
              scope.lessonDay = value.weekday;

              element.css('text-decoration', 'line-through');
              return;
            }


          });

        });
      }

    }
  });