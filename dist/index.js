"use strict";
var postcss = require('postcss');
var helpers_1 = require('./helpers');
module.exports = postcss.plugin('postcss-grouper', function (opts) {
    if (opts === void 0) { opts = {}; }
    helpers_1.supported(opts, function (e) {
        throw new Error("[PostCSS Grouper]: The option " + e.opt + " isnt right...");
    });
    var touchNodes = [/rule/i];
    return function (css) {
        css.walk(function (n) {
            if (touchNodes.filter(function (v) { return v.test(n.type); }).length > 0) {
                var node = n;
            }
        });
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLHdCQUF3QixXQUFXLENBQUMsQ0FBQTtBQUVwQyxpQkFBUyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLFVBQUMsSUFBUztJQUFULG9CQUFTLEdBQVQsU0FBUztJQUNwRCxtQkFBUyxDQUFDLElBQUksRUFBRSxVQUFDLENBQWtCO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQWlDLENBQUMsQ0FBQyxHQUFHLG1CQUFnQixDQUFDLENBQUM7SUFDekUsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFNLFVBQVUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdCLE1BQU0sQ0FBQyxVQUFDLEdBQUc7UUFDVixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNULEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25FLElBQU0sSUFBSSxHQUFpQixDQUFDLENBQUM7WUFFOUIsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMifQ==