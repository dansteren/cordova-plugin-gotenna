!(function(n) {
  var e = {};
  function o(t) {
    if (e[t]) return e[t].exports;
    var r = (e[t] = { i: t, l: !1, exports: {} });
    return n[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.m = n),
    (o.c = e),
    (o.d = function(n, e, t) {
      o.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
    }),
    (o.r = function(n) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (o.t = function(n, e) {
      if ((1 & e && (n = o(n)), 8 & e)) return n;
      if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (var r in n)
          o.d(
            t,
            r,
            function(e) {
              return n[e];
            }.bind(null, r)
          );
      return t;
    }),
    (o.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return o.d(e, 'a', e), e;
    }),
    (o.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (o.p = ''),
    o((o.s = 0));
})([
  function(n, e) {
    var o;
    !(function(n) {
      (n.Connected = 'CONNECTED'),
        (n.Disconnected = 'DISCONNECTED'),
        (n.Scanning = 'SCANNING');
    })(o || (o = {}));
    var t = (function() {
      function n() {}
      return (
        (n.prototype.getApplicationBuildId = function() {
          return new Promise(function(n, e) {
            cordova.exec(n, e, 'GoTenna', 'getApplicationBuildId', []);
          });
        }),
        (n.prototype.isInDebugMode = function() {
          return new Promise(function(n, e) {
            cordova.exec(
              function(e) {
                n('true' === e);
              },
              e,
              'GoTenna',
              'isInDebugMode',
              []
            );
          });
        }),
        (n.prototype.setApplicationToken = function(n) {
          cordova.exec(
            function(n) {
              console.log('goTenna: Application Token set');
            },
            function(n) {
              console.error('goTenna: Invalid goTenna App Token');
            },
            'GoTenna',
            'setApplicationToken',
            [n]
          );
        }),
        (n.prototype.tokenIsVerified = function() {
          return new Promise(function(n, e) {
            cordova.exec(
              function(e) {
                n('true' === e);
              },
              e,
              'GoTenna',
              'tokenIsVerified',
              []
            );
          });
        }),
        (n.prototype.bluetoothIsEnabled = function() {
          return new Promise(function(n, e) {
            cordova.exec(
              function(e) {
                n('true' === e);
              },
              e,
              'GoTenna',
              'bluetoothIsEnabled',
              []
            );
          });
        }),
        (n.prototype.deviceSupportsBluetooth = function() {
          return new Promise(function(n, e) {
            cordova.exec(
              function(e) {
                n('true' === e);
              },
              e,
              'GoTenna',
              'deviceSupportsBluetooth',
              []
            );
          });
        }),
        (n.prototype.disableBluetooth = function() {
          cordova.exec(
            function() {},
            function(n) {
              throw new Error(n);
            },
            'GoTenna',
            'disableBluetooth',
            []
          );
        }),
        (n.prototype.getBluetoothStatus = function() {
          return new Promise(function(n, e) {
            cordova.exec(n, e, 'GoTenna', 'getBluetoothStatus', []);
          });
        }),
        (n.prototype.showRequestBluetoothPermissionDialog = function() {
          cordova.exec(
            function() {},
            function(n) {
              throw new Error(n);
            },
            'GoTenna',
            'showRequestBluetoothPermissionDialog',
            []
          );
        }),
        (n.prototype.addGtConnectionListener = function(n) {
          return new Promise(function(e, o) {
            cordova.exec(n, o, 'GoTenna', 'addGtConnectionListener', []), e();
          });
        }),
        (n.prototype.clearConnectedGotennaAddress = function() {
          cordova.exec(
            function() {},
            function(n) {
              throw new Error(n);
            },
            'GoTenna',
            'clearConnectedGotennaAddress',
            []
          );
        }),
        (n.prototype.disconnect = function() {
          cordova.exec(
            function() {},
            function(n) {
              throw new Error(n);
            },
            'GoTenna',
            'disconnect',
            []
          );
        }),
        (n.prototype.disconnectWithRetry = function() {
          cordova.exec(
            function() {},
            function(n) {
              throw new Error(n);
            },
            'GoTenna',
            'disconnect',
            []
          );
        }),
        (n.prototype.getConnectedGotennaAddress = function() {
          return new Promise(function(n, e) {
            cordova.exec(n, e, 'GoTenna', 'getConnectedGotennaAddress', []);
          });
        }),
        (n.prototype.getGtConnectionState = function() {
          return new Promise(function(n, e) {
            cordova.exec(n, e, 'GoTenna', 'getGtConnectionState', []);
          });
        }),
        (n.prototype.isConnected = function() {
          return new Promise(function(n, e) {
            cordova.exec(
              function(e) {
                n('true' === e);
              },
              e,
              'GoTenna',
              'isConnected',
              []
            );
          });
        }),
        (n.prototype.scanAndConnect = function(n) {
          return new Promise(function(e, o) {
            cordova.exec(e, o, 'GoTenna', 'scanAndConnect', [n]);
          });
        }),
        (n.prototype.stopScan = function() {
          return new Promise(function(n, e) {
            cordova.exec(n, e, 'GoTenna', 'stopScan', []);
          });
        }),
        (n.prototype.setGoTennaGID = function(n, e) {
          return new Promise(function(o, t) {
            cordova.exec(o, t, 'GoTenna', 'setGoTennaGID', [n, e]);
          });
        }),
        (n.prototype.sendMessage = function(n, e, o) {
          return new Promise(function(t, r) {
            cordova.exec(t, r, 'GoTenna', 'sendMessage', [n, e, o]);
          });
        }),
        (n.prototype.setMessageListener = function(n) {
          return new Promise(function(e, o) {
            cordova.exec(n, o, 'GoTenna', 'setMessageListener', []), e();
          });
        }),
        n
      );
    })();
    window.gotenna = new t();
  }
]);
