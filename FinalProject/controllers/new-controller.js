(function () {
    angular.module("ProductApp", [])
    .controller("ProductController", myControllerFunction);

    myControllerFunction.$inject = ["$scope", "$http"];

    function myControllerFunction($scope, $http) {
        alert("hhhhh");
        //$http.get('http://localhost:24731/api/Product').
        //      success(function (data, status, headers, config) {
        //          $scope.products = data;
        //      }).
        //      error(function (data, status, headers, config) {
        //          alert("eror");
        //      });

        //$http({
        //    method: 'GET',
        //    url: 'http://localhost:24731/api/Product'
        //}).then(function (response){
        //    $scope.products = response;
        //},function (error){
        //    alert("eror");
        //});
        $scope.products = $http.get('http://localhost:24731/api/Product');
    };

})();

