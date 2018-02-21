app.controller('ModelCtrl', ['$state', '$timeout', '$scope', '$http', '$stateParams', '$cookies', 'ionicMaterialInk', 'loginService', function ($state, $timeout, $scope, $http, $stateParams, $cookies, ionicMaterialInk, loginService) {
    ionicMaterialInk.displayEffect();
    $scope.validState = function(){
        if(!(typeof($cookies.get('user')) === "undefined")){
            $scope.user = JSON.parse($cookies.get('user')).u;
        }else{
            loginService.logout();           
        }
    };
    $scope.validState();
    $scope.modelNote = {};
    $scope.backToMenu = function(){
        if(JSON.parse($cookies.get('user')).r == "admin")
            $state.go('app.fulluser');
        else
            $state.go('app.operator');
    };
    $scope.reset = function(){
        $scope.success = false;
        $scope.failure = false;
        $scope.modelNote.notes = "";
    };
    $scope.reset();
    $scope.saveModel = function(){
        var str = $scope.modelNote.model,
        patt1 = /\d{3}[.]\d{1}/g,
        result = str.match(patt1);
        console.log($scope.modelNote);
        if(result == $scope.modelNote.model){
            $http({
                  url: "backend/add_model.php?m="+$scope.modelNote.model+"&n="+$scope.modelNote.notes+"&u="+$scope.user,
                  method: "GET",
                  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(data, status, headers, config) {
                    console.log(data);
                    if(data.result){
                        $scope.success = true;
                        $scope.failure = false;
                    }else{
                        $scope.success = false;
                        $scope.failure = true;
                    }
                    $timeout($scope.reset, 1500);
                }).error(function(data, status, headers, config) {
                    this.status = status;
            });        
        }else{
            alert("Please check model number");
        }
    };
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}]);