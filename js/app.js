var app = angular.module('HomeworkApp', []);
var path = 'http://github.com/jeanmariano/'

app.factory('Homework', function () {
  return [{
        assignment: 'Test First JavaScript',
        url: path+'FullStackTestFirst_public',
        status: 'completed',
        show: false
      },
      {
        assignment: 'Flash Cards Day 1',
        url: path+'flashcards-day1',
        status: 'completed',
        show: false
      },
      {
        assignment: 'Flash Cards Day 2',
        url: path+'flash-cards',
        status: 'completed',
        show: false
      },
      {
        assignment: 'Flash Cards Day 3',
        url: 'http://learn.fullstackacademy.com/',
        status: 'incomplete',
        show: false
      },
      {
        assignment: 'Flash Cards Day 4',
        url: 'http://learn.fullstackacademy.com/',
        status: 'incomplete',
        show: false
      }
    ]
});

app.controller('MainController', function ($scope, Homework) {
  $scope.Homeworks = Homework;

  $scope.toggleShow = function (hw) {
    if (hw.show === true)
      hw.show = false;
    else
      hw.show = true; 

    console.log(hw.show);
  }
});
