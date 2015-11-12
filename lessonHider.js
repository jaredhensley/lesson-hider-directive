angular.module('directivePractice')
  .directive('lessonHider', function () {
    return {
      templateUrl: 'templates/lessonHider.html',
      restrict: 'E',
      scope: {
        removeLesson: '&',
        lesson: '=',
        dayAlert: '&'
      },
      controller: function ($scope, lessonService) {
        $scope.getSchedule = lessonService.getSchedule();
        $scope.delete = function (elem) {

        }
      },
      link: function (scope, elem, attr) {
        // scope.isChecked = true;


        scope.toggleChecked = function () {
          if (scope.isChecked === false) {
            elem.css('text-decoration', 'none')
              // scope.isChecked = false;
          } else {
            // scope.isChecked = true;
            elem.css('text-decoration', 'line-through');
          }
        }
        scope.getSchedule.then(function (sched) {
          scope.schedule = sched.data;
          var formatData = function (arr, lesson) {
            for (var i = 0; i < arr.length; i++) {
              if (arr[i].lesson === lesson) {
                scope.lessonDay = arr[i].weekday
                elem.css('text-decoration', 'line-through')
                scope.isChecked = true;
                break;
              } else {
                scope.isChecked = false;
              }
            };
          };
          formatData(scope.schedule, scope.lesson)
        });
      }
    }
  });