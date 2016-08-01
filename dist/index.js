"use strict";

var postcss = require("postcss");

module.exports = postcss.plugin("postcss-grouper", function(r) {
    if (r === void 0) {
        r = {};
    }
    var t = [ /rule/i ];
    return function(e) {
        var n = {};
        e.walk(function(e) {
            if (t.filter(function(r) {
                return r.test(e.type);
            }).length > 0) {
                var o = e;
                if (r.group) {
                    r.group.forEach(function(r) {
                        if (r.test(o.selector)) {
                            var t = r.exec(o.selector)[0];
                            n[t] = function(r) {
                                return r.push(o), r;
                            }(n[t] || []);
                        }
                    });
                }
            }
        });
        for (var o in n) {
            var s = [ n[o][0] ];
            var u = 1;
            while (s.length < n[o].length) {
                n[o][u].moveAfter(s[s.length - 1]);
                s.push(n[o][u]);
                ++u;
            }
        }
    };
});
//# sourceMappingURL=index.js.map