// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngCookies']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
app.service('loginService', ['$cookies', '$state', function($cookies, $state){
    var logout = function(){
        $cookies.remove('user');
        $state.go('app.home');
    };
    return {
        logout : logout
    }
}]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })
    
    .state('app.manager', {
        url: '/manager',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'templates/man.html',
                controller: 'ManCtrl'
            }
        }
    })

    .state('app.fulluser', {
        url: '/fulluser',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'templates/fulluser.html',
                controller: 'FullUserCtrl'
            }
        }
    })

    .state('app.operator', {
        url: '/operator',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'templates/operator.html',
                controller: 'DataEntryCtrl'
            }
        }
    })

    .state('app.search', {
        url: '/search',
        cache: false, 
        params : {
            newSearch : null,
            prevObj : null
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            }
        }
    })

    .state('app.results', {
        url: '/results',
        cache: false,
        params : {
            result : null,
            input : null
        },
        views: {
            'menuContent': {
                templateUrl: 'templates/results.html',
                controller: 'ResCtrl'
            }
        }
    })

    .state('app.singledeviceevent', {
        url: '/singledeviceevent',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'templates/single.html',
                controller: 'SingleCtrl'
            }
        }
    })

    .state('app.multideviceevent', {
        url: '/multideviceevent',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'templates/multi.html',
                controller: 'MultiCtrl'
            }
        }
    })

    .state('app.ordernote', {
        url: '/ordernote',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'templates/order.html',
                controller: 'OrderCtrl'
            }
        }
    })

    .state('app.modelnote', {
        url: '/modelnote',
        cache: false,
        views: {
            'menuContent': {
                templateUrl: 'templates/model.html',
                controller: 'ModelCtrl'
            }
        }
    })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
