app.controller('DataEntryCtrl', ['$state', '$scope', '$cookies', '$stateParams', 'ionicMaterialInk', 'loginService', function ($state, $scope, $cookies, $stateParams, ionicMaterialInk, loginService) {
    ionicMaterialInk.displayEffect();
    $scope.validState = function(){
        if(!(typeof($cookies.get('user')) === "undefined")){
            $scope.user = JSON.parse($cookies.get('user')).u;
        }else{
            loginService.logout();           
        }
    };
    $scope.validState();
    $scope.singleEvent = function(){
        $state.go('app.singledeviceevent');
    }
    $scope.multiEvent = function(){
        $state.go('app.multideviceevent');
    }
    $scope.orderNote = function(){
        $state.go('app.ordernote');
    }
    $scope.logout = function(){
        loginService.logout();           
    }
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}]);