class BlogController {
  constructor($http) {
    this.http = $http;
    that = this;
  }

  getEntries() {
    //that.http.get('http://localhost:8081/blog');
  }
}

angular
  .module('app')
  .component('blogComponent', {
    templateUrl: 'app/components/blog/blog.html',
    controller: BlogController
  });
