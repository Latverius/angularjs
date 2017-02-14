'use strict';

var cov_1yd0sq8cg4 = function () {
  var path = 'C:\\Users\\gsimeon\\Desktop\\angularjs\\src\\app\\components\\about\\about.js',
      hash = '342d3daf57d6215b49e5e0dc938e4f526b4324b3',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\gsimeon\\Desktop\\angularjs\\src\\app\\components\\about\\about.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 12,
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
            column: 16
          },
          end: {
            line: 4,
            column: 3
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0
    },
    f: {
      '0': 0
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AboutController = function AboutController() {
  _classCallCheck(this, AboutController);

  ++cov_1yd0sq8cg4.f[0];
};

++cov_1yd0sq8cg4.s[0];


angular.module('app').component('aboutComponent', {
  templateUrl: 'app/components/about/about.html',
  controller: HeaderController
});