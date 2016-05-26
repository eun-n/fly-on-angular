var services = angular.module('AirplaneServices', ['ngResource']);

services.factory('AirplaneAPI', ['$resource', function($resource) {
	return $resource('/api/airplanes/:id');
}]);
