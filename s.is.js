var S = require('s');

var is = {
  eq     : S.curry( function( a, b ) { return a == b; } ),
  exact  : S.curry( function( a, b ) { return a === b; } ),
  nor    : S.curry( function( a, b ) { return !(a||b); } ),
  nand   : S.curry( function( a, b ) { return !(a&&b); } ),
  not    : function( a ) { return !a; },
  and    : S.curry( function( a, b ) { return a&&b; } ),
  lte    : S.curry( function( a, b ) { return a <= b; } ),
  gte    : S.curry( function( a, b ) { return a >= b; } ),
  gt     : S.curry( function( a, b ) { return a > b; } ),
  lt     : S.curry( function( a, b ) { return a < b; } ),
  neq    : S.curry( function( a, b ) { return a != b; } ),
};

exports = module.exports = is;
