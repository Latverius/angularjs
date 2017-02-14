class HomeController {
  constructor() {

  }
}

angular
  .module('app')
  .component('homeComponent', {
    templateUrl: 'app/components/home/home.html',
    controller: HomeController
  });
