angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'homeComponent'
    })
    .state('about', {
      url: '/about',
      component: 'aboutComponent'
    })
    .state('blog', {
      url: '/blog',
      component: 'blogComponent'
    });
}
