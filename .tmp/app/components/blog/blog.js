'use strict';

var cov_7gvi1cua1 = function () {
  var path = 'C:\\Users\\gsimeon\\Desktop\\angularjs\\src\\app\\components\\blog\\blog.js',
      hash = '0d7a301bbf897e85d1d66bedbed0d0de7d6bb7c1',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\gsimeon\\Desktop\\angularjs\\src\\app\\components\\blog\\blog.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 22
        }
      },
      '1': {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 16
        }
      },
      '2': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 17,
          column: 5
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 2,
            column: 3
          }
        },
        loc: {
          start: {
            line: 2,
            column: 21
          },
          end: {
            line: 5,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 15
          },
          end: {
            line: 9,
            column: 3
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlogController = function () {
  function BlogController($http) {
    _classCallCheck(this, BlogController);

    ++cov_7gvi1cua1.f[0];
    ++cov_7gvi1cua1.s[0];

    this.http = $http;
    ++cov_7gvi1cua1.s[1];
    that = this;
  }

  _createClass(BlogController, [{
    key: 'getEntries',
    value: function getEntries() {
      //that.http.get('http://localhost:8081/blog');

      ++cov_7gvi1cua1.f[1];
    }
  }]);

  return BlogController;
}();

++cov_7gvi1cua1.s[2];


angular.module('app').component('blogComponent', {
  templateUrl: 'app/components/blog/blog.html',
  controller: BlogController
});