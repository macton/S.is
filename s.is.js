var S = require('s');

var is = {
  eq     : function( a, b ) { return a == b; },
  exact  : function( a, b ) { return a === b; },
  nor    : function( a, b ) { return !(a||b); },
  nand   : function( a, b ) { return !(a&&b); },
  not    : function( a )    { return !a; },
  and    : function( a, b ) { return a&&b; },
  lte    : function( a, b ) { return a <= b; },
  gte    : function( a, b ) { return a >= b; },
  gt     : function( a, b ) { return a > b; },
  lt     : function( a, b ) { return a < b; },
  neq    : function( a, b ) { return a != b; },
};

exports = module.exports = is;
