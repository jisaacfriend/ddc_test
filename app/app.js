(function() {

	var app = angular.module('ddcTestApp', []);

	app.controller('ddcTestForm', ['$scope', function($scope) {

		//Instantiate the ddcTest object
		$scope.ddcTest = {};

		//populate default values
		$scope.ddcTest.values = 'John: 2\nJane: 3\nJohn: 4\nJane: 5';

		//define the function to calculate the totals
		$scope.ddcTest.showResults = function() {
			//instantiate the names object
			$scope.ddcTest.names = {};

			//separate the entries into an array and iterate through it
			$scope.ddcTest.values.split('\n').forEach(function(entry) {
				var person = entry.split(':');
				var name = person[0].trim();
				if (!entry.trim() || !person.length) return;
				var key = name.toLowerCase();
				$scope.ddcTest.names[key] = $scope.ddcTest.names[key] || {name:name.trim(), count:0};
				$scope.ddcTest.names[key].count += +person[1] || 0;
			});
		}

		$scope.palindrome = function(string) {
			string = string.toLowerCase().replace(/[^a-z]+/g, '');
			return string === string.split('').reverse().join('');
		}

	}]);

})();