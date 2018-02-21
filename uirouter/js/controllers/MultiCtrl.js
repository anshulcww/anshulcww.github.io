app.controller('MultiCtrl', ['$state', '$timeout', '$scope', '$http', '$stateParams', '$cookies', 'ionicMaterialInk', 'loginService', function ($state, $timeout, $scope, $http, $stateParams, $cookies, ionicMaterialInk, loginService) {
    ionicMaterialInk.displayEffect();
    $scope.regexDevice = '\\d{3}\.\\d{1}\-\\d{3}\-\\w{12}';
    $scope.validState = function(){
        if(!(typeof($cookies.get('user')) === "undefined")){
            $scope.user = JSON.parse($cookies.get('user')).u;
        }else{
            loginService.logout();           
        }
    };
    $scope.eventNote = {};
    $scope.backToMenu = function(){
        if(JSON.parse($cookies.get('user')).r == "admin")
            $state.go('app.fulluser');
        else
            $state.go('app.operator');
    };
    $scope.reset = function(){
        $scope.success = false;
        $scope.failure = false;
        $scope.eventOK = false;
        $scope.eventNote.device = "";
        $http({
              url: "backend/get_last_events.php",
              method: "GET",
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data, status, headers, config) {
                console.log(data);
                $scope.lastEvents = data.slice(0, 4);
            }).error(function(data, status, headers, config) {
                this.status = status;
        }); 
        console.log($scope.eventNote);
    };
    $scope.reset();
    $scope.eventEntered = function(){        
        console.log($scope.eventNote);
        $scope.eventOK = true;
    };
    $scope.saveEvent = function(){
        var str = $scope.eventNote.device;
        var tempArr = str.split("-");
        var model = tempArr[0];
        var order = tempArr[1];
        var nrf = tempArr[2];
        $http({
              url: "backend/add_event.php?e="+$scope.eventNote.event+"&d="+$scope.eventNote.device+"&o="+order+"&m="+model+"&n="+nrf+"&u="+$scope.user,
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
    };
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}]);