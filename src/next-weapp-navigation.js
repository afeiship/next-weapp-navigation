(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxCapitalize = nx.capitalize || require('next-capitalize');
  var nxWxPromisify = nx.wxPromisify || require('next-wx-promisify');
  var wx = global.wx;

  var NxWeappNavigation = nx.declare('nx.WeappNavigation', {
    statics: {
      loading: function(inValue, inOptions) {
        var action = inValue ? 'showNavigationBarLoading' : 'hideNavigationBarLoading';
        return new Promise(function(resolve, reject) {
          wx[action](nx.mix(nxWxPromisify(resolve, reject), inOptions));
        });
      },
      'title,color': function(inName) {
        return function(inOptions) {
          return new Promise(function(resolve, reject) {
            wx['setNavigationBar' + nxCapitalize(inName)](
              nx.mix(nxWxPromisify(resolve, reject), inOptions)
            );
          });
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappNavigation;
  }
})();
