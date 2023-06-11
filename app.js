(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkLunchItems = function () {
      if (!$scope.lunchItems) {
        $scope.message = 'Please enter data first';
        return;
      }

      var items = $scope.lunchItems.split(',');
      var itemCount = items.length;

      // Exclude empty items if you want (bonus feature)
      // items = items.filter(function (item) {
      //   return item.trim() !== '';
      // });
      // itemCount = items.length;

      if (itemCount <= 3) {
        $scope.message = 'Enjoy!';
      } else {
        $scope.message = 'Too much!';
      }
    };
  }
})();
