'use strict';

var cov_9hpfsnhzr = function () {
  var path = 'C:\\Users\\gsimeon\\Desktop\\angularjs\\src\\index.js',
      hash = '955d3140bfbc2c09a0f43a0703076cc3aff4d30f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\gsimeon\\Desktop\\angularjs\\src\\index.js',
    statementMap: {
      '0': {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 2,
          column: 32
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0
    },
    f: {},
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

++cov_9hpfsnhzr.s[0];
angular.module('app', ['ui.router']);