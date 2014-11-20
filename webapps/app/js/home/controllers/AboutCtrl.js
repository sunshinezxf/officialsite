'use strict';
// ci:coverage:exclude

angular.module('app.about')
    .controller('AboutCtrl', ['$scope', 'config', 'features', function ($scope, config, features) {

        $scope.env = config.env;
        $scope.features = features;

    }]);
