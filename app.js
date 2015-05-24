var app = angular.module('angular-typed', []);
app.directive('typed', ["$timeout", function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.typed({
                strings: [element[0].innerText],
                typeSpeed: 0
            });
        }
    }
}]);