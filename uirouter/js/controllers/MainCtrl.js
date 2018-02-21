app.controller('MainCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, ionicMaterialInk, ionicMaterialMotion) {
    $timeout(function() {
        //ionic.material.ink.displayEffect();
        ionicMaterialInk.displayEffect();
    }, 0);

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };
    $scope.blinds();
   /* // Triggered on a button click, or some other target
    $scope.actionSheet = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: '<b>Share</b> This'
            }, {
                text: 'Move'
            }],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 2000);

    };

    $scope.loading = function() {
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
        $timeout(function () {
            $scope.modal.hide();
        }, 2000);
    };
    // Cleanup the modal when we're done with it
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // Popover
    $scope.popover = function() {
        $scope.$parent.popover.show();
        $timeout(function () {
            $scope.$parent.popover.hide();
        }, 2000);
    };

    // Confirm
    $scope.showPopup = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'You are now my subscribed to Cat Facts',
            template: 'You will meow receive fun daily facts about CATS!'
        });

       
    };
*/
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});