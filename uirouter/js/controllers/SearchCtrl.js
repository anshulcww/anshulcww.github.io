app.controller('SearchCtrl', ['$state', '$timeout', '$scope', '$http', '$stateParams', '$cookies', 'ionicMaterialInk', 'loginService', '$filter', function ($state, $timeout, $scope, $http, $stateParams, $cookies, ionicMaterialInk, loginService, $filter) {
    ionicMaterialInk.displayEffect();
    $scope.regexModel = '\\d{3}\.\\d{1}';
    $scope.regexOrder = '\\d{3}';
    $scope.regexNrf = '\\w{12}';
    $scope.regexDevice = '\\d{3}\.\\d{1}\-\\d{3}\-\\w{12}';
    $scope.backToMenu = function(){
        $state.go('app.fulluser');
    };
    $scope.reset = function(){
        $scope.noResultsFound = false;
        $scope.searchObj = {
            model : "",
            order : "",
            nrfId : "",
            device : "",
            event : "",
            creator : "",
            date : new Date()
        };
    };
    if(!$stateParams.newSearch){
        $scope.searchObj = $stateParams.prevObj;
    }else{       
        $scope.reset();
    }
    $scope.search = function(){
        console.log($scope.searchObj);
        var tmpDate = $filter('date')($scope.searchObj.date, "yyyy-MM-dd hh:mm:ss");
        $http({
              url: "backend/search.php?m="+$scope.searchObj.model+"&o="+$scope.searchObj.order+"&n="+$scope.searchObj.nrfId+"&d="+$scope.searchObj.device+"&e="+$scope.searchObj.event+"&c="+$scope.searchObj.creator+"&date="+tmpDate,
              method: "GET",
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data, status, headers, config) {
                console.log(data);
                if(data.result.length > 0){
                    $state.go('app.results', {input:$scope.searchObj, result: data.result});
                }else{
                    $scope.noResultsFound = true;
                }
                $timeout($scope.reset, 1500);
            }).error(function(data, status, headers, config) {
                this.status = status;
        }); 
    };
    $scope.validState = function(){
        if(!(typeof($cookies.get('user')) === "undefined")){
            $scope.user = JSON.parse($cookies.get('user')).u;
        }else{
            loginService.logout();           
        }
    };
    $scope.validState();
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}]);