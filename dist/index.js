"use strict";
exports.__esModule = true;
var ForceBoolean = function (value, strict) {
    if (strict === void 0) { strict = true; }
    switch (typeof value) {
        case "boolean":
            if (value)
                return true;
        case "number":
            return value > 0;
        case "object":
            return !(value === null);
        case "string":
            if (!strict) {
                if (value === "false" || value === "0")
                    return false;
                return true;
            }
            return value === "true" || value === "1";
        case "undefined":
        default:
            return false;
    }
};
exports["default"] = ForceBoolean;
//# sourceMappingURL=index.js.map