app.controller('ManCtrl', function ($state, $scope, $stateParams, $http, $cookies, ionicMaterialInk) {

    //ionicMaterialInk.displayEffect();
    $scope.user = {
        u : "Anshul",
        p : "Pass"
    };

    $scope.goToOp = function(){
        $state.go('app.home')
    }



   /*

    subah 10 bje 12 bje 4-5 baje tak 

    $scope.redirectToUser = function(data){
        $cookies.put('user', JSON.stringify({
            u : data.user,
            r : data.role
        }));
        if(data.role == "admin")
            $state.go('app.fulluser'); 
        else
            $state.go('app.operator'); 
        console.log(JSON.parse($cookies.get('user')));
    };
    $scope.submitLogin = function(){
        console.log($scope.user);
        $http({
              url: "backend/login.php?u="+$scope.user.u+"&p="+$scope.user.p,
              method: "GET",
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data, status, headers, config) {
                console.log(data);
                if(data.result){
                    $scope.redirectToUser(data);
                }else{
                    alert('Wrong User id/Password');
                    $scope.user = {};
                }
            }).error(function(data, status, headers, config) {
                this.status = status;
        });
    }; */ 
});