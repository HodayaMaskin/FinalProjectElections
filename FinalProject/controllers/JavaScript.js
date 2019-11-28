
(function (angular) {
"use strict";

angular.module("app").directive(
        "reportTile", 
        ["$templateCache", "$compile" ,function($templateCache, $compile) {
            return {
                restrict: "EA",
                scope: {
                    title: "@",
                    value: "@",
                    loading: "@"
                },
                link: function (scope, element, attribues) {
                    scope.showspinner = false;
                    scope.$watch("loading",
                        function () {
                            scope.showspinner = attribues.loading;
                            console.log("watching::loading::" + attribues.loading);

                        });
                },
                templateUrl: "app/directives/ReportTileDirective.html"
            };
        }]);
}(window.angular));


var module = angular.module("myApp", []);

module.controller("MainCtrl", MainCtrlFunc);

function MainCtrlFunc() {

}