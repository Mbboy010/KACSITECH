"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var handAside_1 = require("../reduxComponent/slicerCom/handAside");
var HandleMs_1 = require("../reduxComponent/slicerCom/HandleMs");
var isAuth_1 = require("../reduxComponent/slicerCom/isAuth");
var isVerified_1 = require("../reduxComponent/slicerCom/isVerified");
var cookies_1 = require("../reduxComponent/slicerCom/cookies");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        counter: handAside_1.default,
        handms: HandleMs_1.default,
        isAuth: isAuth_1.default,
        isVerified: isVerified_1.default,
        isCoc: cookies_1.default,
    },
});
