'use strict';
// ci:coverage:exclude

angular.module('app.greenHand')
    .controller('GreenHandCtrl', ['$scope', 'config', 'features', function ($scope, config, features) {

        $scope.env = config.env;
        $scope.features = features;

    }]);
