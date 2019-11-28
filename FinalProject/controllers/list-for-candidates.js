(function () {
    angular.module("myClassesApp", [])
    .controller("myClassesController", myControllerFunction);

    myControllerFunction.$inject = ["$scope", "$http"];

    function myControllerFunction($scope, $http) {

        $scope.hello = "hello there";
        alert("hhhhh");

        //$scope.directive('linkk', function () {
        //    return {
        //        restrict: 'E',
        //        transclude: true,
        //        replace: true,
        //        //scope: {
        //        //    url: '@'
        //        //},
        //        template: '<div><p>rrrrrr</p></div>'
        //    }
        //});

  //      $http({
  //          url: "http://localhost:24731/Help/Api/GET-api-Account-UserInfo",
  //          method: 'GET',
  //      })
  //.success(function (status, data) {
  //   alert(  status);
  //   alert( data);
  //    $scope.result = "ok";
  //}).error(function (data) {
  //    $scope.result = "ko";
  //});
        //$http.get('http://localhost:24731/Help/Api/GET').
        //               then(function (response) {
        //                   alert(response);
        //                   $scope.listCandidate = response.data;
        //               });
       
    };

    angular.module("myClassesApp", []).directive("addButtonsButton", function () {
        return {
            restrict: "E",
            template: "<button add-buttons>Click to add buttons</button>"
        }
    });

    //angular.module("myClassesApp", []).directive("addButtons", function ($compile) {
    //    return function (scope, element, attrs) {
    //        element.bind("click", function () {
    //            scope.count++;
    //            angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert=" + scope.count + ">Show alert #" + scope.count + "</button></div>")(scope));
    //        });
    //    };
    //});

})();