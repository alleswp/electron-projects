System.register(["react"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var react_1, HelloWorld;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            HelloWorld = (function (_super) {
                __extends(HelloWorld, _super);
                function HelloWorld() {
                    return _super.apply(this, arguments) || this;
                }
                HelloWorld.prototype.render = function () {
                    return (react_1.default.createElement("div", { className: "hello-world" },
                        react_1.default.createElement("strong", null,
                            react_1.default.createElement("h1", null, "Hello, Universe!"))));
                };
                return HelloWorld;
            }(react_1.default.Component));
            exports_1("default", HelloWorld);
        }
    };
});
//# sourceMappingURL=hello-world.js.map