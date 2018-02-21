app.controller('ResCtrl', ['$scope', '$state', '$stateParams', 'ionicMaterialInk', function ($scope, $state, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
    console.log($stateParams);
    $scope.inputObj = $stateParams.input;
    $scope.results = $stateParams.result;

    $scope.backToSearch = function(){
        $state.go('app.search', {newSearch:false, prevObj:$scope.inputObj});
    }
    $scope.newSearch = function(){
        $state.go('app.search', {newSearch:true});
    }
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}]);