(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"row header\">\n    <div class=\"col he he-3\">\n        <p class=\"title\">About Section</p>\n        <p class=\"subtitle\">I develop responsive, user-centered applications.</p>\n    </div>\n</div>\n<div class=\"row header\">\n    <div class=\"col he he-2\">\n        <p class=\"title\">About Section</p>\n        <p class=\"subtitle\">I develop responsive, user-centered applications.</p>\n    </div>\n</div>-->\n<div class=\"row header\">\n    <div class=\"col he he-1\">\n        <p class=\"title\">About Section</p>\n        <p class=\"subtitle\">I develop responsive, user-centered applications.</p>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar box-shadow\">\n    <div class=\"container\">\n        <button class=\"navbar__toggler\" (click)=\"toggle()\">\n            <svg height=\"32px\" id=\"Layer_1\" style=\"enable-background:new 0 0 32 32;\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"32px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <path d=\"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z\"/>\n            </svg>\n        </button>\n\n        <div class=\"navbar-collapse\" [@toggleMenu]=\"toggleState ? 'open' : 'closed'\">\n            <ul>\n                <li>\n                    <a routerLink=\"home\" class=\"nav-link\" [routerLinkActive]=\"['active']\">Início</a>\n                </li>\n                <li>\n                    <a routerLink=\"projects\" class=\"nav-link\" [routerLinkActive]=\"['active']\">Projetos</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<main role=\"main\" [@routeAnim]=\"prepareRoute(outlet)\">\n    <router-outlet #outlet=\"outlet\"></router-outlet>\n</main>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home\">\n    <div [@fadeTrigger]>\n        <div class=\"home__header\">\n            <p class=\"title\">Oi, eu sou Pedro</p>\n            <p class=\"subtitle\">Estudante de Ciência da Computação com foco em Engenharia de Software e Desenvolvimento Web.</p>\n        </div>\n        <ul class=\"home__call-to-action\">\n            <li>\n                <a href=\"https://github.com/pedrohov\" target=\"_blank\">Meu GitHub</a>\n            </li>\n            <li routerLink=\"/projects\">\n                <a>Ver Projetos</a>\n            </li>\n        </ul>\n        <ul class=\"home__social-media\">\n            <li>\n                <a href=\"https://codepen.io/pedrohov/\" target=\"_blank\">\n                    <fa name=\"codepen\"></fa>\n                </a>\n            </li>\n            <li>\n                <a href=\"https://www.linkedin.com/in/pedro-henrique-b5677aa8/\" target=\"_blank\">\n                    <fa name=\"linkedin\"></fa>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"tags\" [@portfolioTrigger]>\n        <app-tag *ngFor=\"let tag of tags\" [tag]=\"tag\"></app-tag>\n    </div>\n\n    <div class=\"d-flex flex-wrap justify-content-center\" [@portfolioTrigger]>\n        <div project-card class=\"project-card\" *ngFor=\"let project of projects | tagFilter: getSelectedTags()\" [project]=\"project\"  ></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"project-card\" routerLink=\"/projects/{{ project.title }}\">\r\n    <img [src]=\"project.thumbnail\" alt=\"{{ project.title }}\"/>\r\n    <div class=\"project-card__wrapper\">\r\n        <div class=\"project-card__description\">\r\n            <p class=\"project-card__title\">{{ project.title }}</p>\r\n            <p>{{ project.description }}</p>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"view\" *ngIf=\"project\" [@fadeInRight] >\n        <img [src]=\"selected\" alt=\"\" [class.img-display--fit-img]=\"changed\" class=\"img-display\" id=\"img-header\"/>\n    <div class=\"content\">\n        <div class=\"content__wrapper\">\n            <h2> {{ project.title }} </h2>                                  \n            <p class=\"content__description\">\n                {{ project.content }}\n            </p>\n            <a *ngIf=\"project.website.length > 0\" href=\"{{ project.website }}\" target=\"_blank\">Ver mais sobre este projeto</a>\n            <h4>Tecnologias e Conceitos utilizados:</h4>\n            <ul>\n                <li *ngFor=\"let concept of project.tech_concepts\">\n                    {{ concept }}\n                </li>\n            </ul>\n            <h4 *ngIf=\"project.pictures.length\">Galeria:</h4>\n            <div class=\"content__picture\">\n                <img *ngFor=\"let pic of project.pictures\" [src]=\"pic\" class=\"img-fluid\" alt=\"\" (click)=\"changeImage(pic)\"/>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tag/tag.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tag/tag.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tag\" [class.disabled]=\"!tag.selected\" (click)=\"toggle()\">\n  {{ tag.name | lowercase }}\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".he {\n  padding: 3rem 2rem;\n}\n\n.he-3 {\n  background-color: #baa5e1;\n}\n\n.he-2 {\n  background-color: #9978d3;\n}\n\n.he-1 {\n  background-color: #764bc4;\n}\n\n.header p {\n  margin: 0;\n}\n\n.header ul {\n  margin: 2.5rem 0;\n  list-style: none;\n}\n\n.header li {\n  display: inline-block;\n  padding: 0.3rem 1.5rem;\n  margin: 0.4rem 1rem;\n  text-transform: uppercase;\n  border: 1px solid #4f4f4f;\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  transition: all 0.3s ease 0s;\n}\n\n.header li:focus {\n  outline: none;\n}\n\n.header li:hover {\n  background: #7f7f7f;\n  border: 1px solid #fff;\n}\n\n.header li:hover a {\n  color: #fff;\n}\n\n.header li a {\n  color: #4f4f4f;\n  text-decoration: none;\n}\n\n.title {\n  font-family: \"Roboto\";\n  font-size: 3rem;\n  color: #fff;\n}\n\n.subtitle {\n  color: #efffff;\n  font-size: 1.35rem;\n}\n\n.row, .col {\n  width: 100%;\n  margin: 0;\n}\n\n.container .col {\n  padding: 3rem 0;\n}\n\n.vertical-center {\n  min-height: calc(100% - 95px);\n  /* Fallback for browsers do NOT support vh unit */\n  min-height: calc(100vh - 95px);\n  /* These two lines are counted as one :-)       */\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxwaG92XFxEb2N1bWVudHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0UsNkJBQUE7RUFBZ0MsaURBQUE7RUFDaEMsOEJBQUE7RUFBZ0MsaURBQUE7RUFFaEMsYUFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZSB7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XHJcbn1cclxuXHJcbi5oZS0zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYWE1ZTE7XHJcbn1cclxuXHJcbi5oZS0yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTc4ZDM7XHJcbn1cclxuXHJcbi5oZS0xIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjRiYzQ7XHJcbn1cclxuXHJcbi5oZWFkZXIgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgdWwge1xyXG4gICAgbWFyZ2luOiAyLjVyZW0gMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogLjNyZW0gMS41cmVtO1xyXG4gICAgbWFyZ2luOiAwLjRyZW0gMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGY0ZjRmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLmhlYWRlciBsaTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM3ZjdmN2Y7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4uaGVhZGVyIGxpOmhvdmVyIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXIgbGkgYSB7XHJcbiAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICNlZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEuMzVyZW07XHJcbn1cclxuXHJcbi5yb3csIC5jb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNvbCB7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDk1cHgpOyAgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIGRvIE5PVCBzdXBwb3J0IHZoIHVuaXQgKi9cclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7IC8qIFRoZXNlIHR3byBsaW5lcyBhcmUgY291bnRlZCBhcyBvbmUgOi0pICAgICAgICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSIsIi5oZSB7XG4gIHBhZGRpbmc6IDNyZW0gMnJlbTtcbn1cblxuLmhlLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFhNWUxO1xufVxuXG4uaGUtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTc4ZDM7XG59XG5cbi5oZS0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2NGJjNDtcbn1cblxuLmhlYWRlciBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaGVhZGVyIHVsIHtcbiAgbWFyZ2luOiAyLjVyZW0gMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmhlYWRlciBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC4zcmVtIDEuNXJlbTtcbiAgbWFyZ2luOiAwLjRyZW0gMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRmNGY0ZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLmhlYWRlciBsaTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oZWFkZXIgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjN2Y3ZjdmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4uaGVhZGVyIGxpOmhvdmVyIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhlYWRlciBsaSBhIHtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZWZmZmZmO1xuICBmb250LXNpemU6IDEuMzVyZW07XG59XG5cbi5yb3csIC5jb2wge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyIC5jb2wge1xuICBwYWRkaW5nOiAzcmVtIDA7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA5NXB4KTtcbiAgLyogRmFsbGJhY2sgZm9yIGJyb3dzZXJzIGRvIE5PVCBzdXBwb3J0IHZoIHVuaXQgKi9cbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xuICAvKiBUaGVzZSB0d28gbGluZXMgYXJlIGNvdW50ZWQgYXMgb25lIDotKSAgICAgICAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animation.ts":
/*!******************************!*\
  !*** ./src/app/animation.ts ***!
  \******************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");


var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeAnim', [
/*
transition('* => Home', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), {optional: true}),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
    ], {optional: true}),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ], {optional: true})
  ]),
  query(':enter', animateChild(), {optional: true}),
]),*/
/*transition('Portfolio => Home', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), {optional: true}),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
    ], {optional: true}),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ], {optional: true})
  ]),
  query(':enter', animateChild(), {optional: true}),
]),
transition('About => Home', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), {optional: true}),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
    ], {optional: true}),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ], {optional: true})
  ]),
  query(':enter', animateChild(), {optional: true}),
]),
transition('* => About', [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '-100%'})
  ]),
  query(':leave', animateChild(), {optional: true}),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ left: '100%'}))
    ], {optional: true}),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ], {optional: true})
  ]),
  query(':enter', animateChild(), {optional: true}),
]),*/
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");







var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { animation: 'Home' } },
    { path: 'projects', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"], data: { animation: 'Portfolio' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], data: { animation: 'About' } },
    { path: 'projects/:title', component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsComponent"], data: { animation: 'Portfolio' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '*', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* IMPORTS */\n/* VARIABLES */\n/* Size / Media Queries*/\n/* Color Palette */\n/* HTML Elements */\n/* STYLES */\n.navbar {\n  height: 90px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1.2em;\n  font-weight: 500;\n}\n.navbar ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n}\n.navbar ul li {\n  height: 90px;\n  line-height: 90px;\n  vertical-align: middle;\n  margin-right: 4rem;\n}\n.navbar ul li a {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.54);\n}\n.navbar ul li:last-child {\n  margin-right: 0;\n}\n.navbar__toggler {\n  display: none;\n  margin: 0 auto;\n  border: none;\n  background: none;\n  cursor: pointer;\n}\n.navbar__toggler path {\n  fill: rgba(0, 0, 0, 0.54);\n}\n.box-shadow {\n  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 576px) {\n  .navbar {\n    height: auto;\n  }\n  .navbar__toggler {\n    display: block;\n    height: 90px;\n  }\n  .navbar ul {\n    flex-direction: column;\n    align-items: center;\n  }\n  .navbar ul li {\n    margin: 0;\n  }\n  .navbar .navbar-collapse {\n    max-height: 0;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxwaG92XFxEb2N1bWVudHNcXHBvcnRmb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXHBob3ZcXERvY3VtZW50c1xccG9ydGZvbGlvL3NyY1xcYXNzZXRzXFxjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBQTtBQ0FBLGNBQUE7QUFFQSx3QkFBQTtBQU1BLGtCQUFBO0FBSUEsa0JBQUE7QURSQSxXQUFBO0FBQ0E7RUFDSSxZQ09ZO0VETlosaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FFRUo7QUZBSTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUVFUjtBRkFRO0VBQ0ksWUNOSTtFRE9KLGlCQ1BJO0VEUUosc0JBQUE7RUFDQSxrQkFBQTtBRUVaO0FGQVk7RUFDSSxxQkFBQTtFQUNBLDBCQ2pCSztBQ21CckI7QUZFUTtFQUNJLGVBQUE7QUVBWjtBRklJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFRlI7QUZJUTtFQUNJLHlCQ2xDUztBQ2dDckI7QUZRQTtFQUNJLDBDQUFBO0FFTEo7QUZRQTtFQUNJO0lBQ0ksWUFBQTtFRUxOO0VGT007SUFDSSxjQUFBO0lBQ0EsWUM5Q0k7RUN5Q2Q7RUZRTTtJQUNJLHNCQUFBO0lBQ0EsbUJBQUE7RUVOVjtFRlFVO0lBQ0ksU0FBQTtFRU5kO0VGVU07SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7RUVSVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSU1QT1JUUyAqL1xyXG5AaW1wb3J0ICcuLi9hc3NldHMvY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG4vKiBTVFlMRVMgKi9cclxuLm5hdmJhciB7XHJcbiAgICBoZWlnaHQ6ICRuYXZiYXItaGVpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJG5hdmJhci1oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAkbmF2YmFyLWhlaWdodDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGk6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdG9nZ2xlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICBmaWxsOiAkZm9udC1jb2xvci1wcmltYXJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgLTNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogJHNtYWxsKSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgICZfX3RvZ2dsZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiAkbmF2YmFyLWhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyogVkFSSUFCTEVTICovXHJcblxyXG4vKiBTaXplIC8gTWVkaWEgUXVlcmllcyovXHJcbiRleHRyYS1sYXJnZTogMTIwMHB4O1xyXG4kbGFyZ2U6IDk5MnB4O1xyXG4kbWVkaXVtOiA3NjhweDtcclxuJHNtYWxsOiA1NzZweDtcclxuXHJcbi8qIENvbG9yIFBhbGV0dGUgKi9cclxuJGZvbnQtY29sb3ItcHJpbWFyeTogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuJGxpbmstY29sb3I6ICMwMDdiZmY7XHJcblxyXG4vKiBIVE1MIEVsZW1lbnRzICovXHJcbiRuYXZiYXItaGVpZ2h0OiA5MHB4OyIsIi8qIElNUE9SVFMgKi9cbi8qIFZBUklBQkxFUyAqL1xuLyogU2l6ZSAvIE1lZGlhIFF1ZXJpZXMqL1xuLyogQ29sb3IgUGFsZXR0ZSAqL1xuLyogSFRNTCBFbGVtZW50cyAqL1xuLyogU1RZTEVTICovXG4ubmF2YmFyIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5uYXZiYXIgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubmF2YmFyIHVsIGxpIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICBsaW5lLWhlaWdodDogOTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xufVxuLm5hdmJhciB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5uYXZiYXIgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5uYXZiYXJfX3RvZ2dsZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyX190b2dnbGVyIHBhdGgge1xuICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgLTNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5uYXZiYXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAubmF2YmFyX190b2dnbGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDkwcHg7XG4gIH1cbiAgLm5hdmJhciB1bCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5uYXZiYXIgdWwgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ "./src/app/animation.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.toggleState = false;
    }
    AppComponent.prototype.toggle = function () {
        this.toggleState = !this.toggleState;
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            animations: [
                _animation__WEBPACK_IMPORTED_MODULE_2__["slideInAnimation"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('toggleMenu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ maxHeight: '180px' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ maxHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('open <=> closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s ease-out')
                    ]),
                ])
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-card/project-card.component */ "./src/app/project-card/project-card.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/tag/tag.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _pipes_tag_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/tag-filter.pipe */ "./src/app/pipes/tag-filter.pipe.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCardComponent"],
                _tag_tag_component__WEBPACK_IMPORTED_MODULE_8__["TagComponent"],
                _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_9__["ProjectDetailsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _pipes_tag_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["TagFilterPipe"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* IMPORTS */\n/* VARIABLES */\n/* Size / Media Queries*/\n/* Color Palette */\n/* HTML Elements */\n/* STYLES */\n.home {\n  width: 100%;\n  height: calc(100vh - 90px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);\n  font-family: \"Source Sans Pro\", sans-serif;\n  color: #FFF;\n}\n.home ul {\n  text-align: center;\n  list-style: none;\n  padding: 0;\n}\n.home__header {\n  margin-top: -5rem;\n  text-align: center;\n}\n.home__header .title {\n  font-size: 3em;\n  margin: 0 0 1rem;\n}\n.home__header .subtitle {\n  font-family: SourceSansProLight;\n  font-size: 1.2em;\n  color: #7f7f7f;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n  padding-top: 0.5rem;\n  max-width: 400px;\n}\n.home__call-to-action {\n  margin: 2rem 0;\n}\n.home__call-to-action li {\n  display: inline-block;\n  padding: 0.6em 2rem;\n  margin: 0.4rem 1rem;\n  text-transform: uppercase;\n  border: 1px solid #fff;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.3s ease 0s, border-color 0.3s ease 0s;\n}\n.home__call-to-action li a {\n  text-decoration: none;\n  color: inherit;\n}\n.home__call-to-action li:focus {\n  outline: none;\n}\n.home__call-to-action li:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0);\n}\n.home__social-media {\n  margin: 1.5rem 0 0;\n}\n.home__social-media li {\n  display: inline-block;\n  font-size: 1.2em;\n  margin-right: 2rem;\n}\n.home__social-media li:last-child {\n  margin-right: 0;\n}\n.home__social-media a {\n  text-decoration: none;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHBob3ZcXERvY3VtZW50c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xccGhvdlxcRG9jdW1lbnRzXFxwb3J0Zm9saW8vc3JjXFxhc3NldHNcXGNzc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FDQUEsY0FBQTtBQUVBLHdCQUFBO0FBTUEsa0JBQUE7QUFJQSxrQkFBQTtBRFJBLFdBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0VBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7QUVFSjtBRkFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUVFUjtBRkNJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBRUNSO0FGQ1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUVDWjtBRkVRO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FFQVo7QUZJSTtFQUNJLGNBQUE7QUVGUjtBRklRO0VBQ0kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLDhEQUFBO0FFSFo7QUZLWTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRUhoQjtBRk9RO0VBQ0ksYUFBQTtBRUxaO0FGUVE7RUFDSSxvQ0FBQTtFQUNBLG9DQUFBO0FFTlo7QUZXSTtFQUNJLGtCQUFBO0FFVFI7QUZXUTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRVRaO0FGWVE7RUFDSSxlQUFBO0FFVlo7QUZhUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBRVhaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSU1QT1JUUyAqL1xyXG5AaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcblxyXG4vKiBTVFlMRVMgKi9cclxuLmhvbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRuYXZiYXItaGVpZ2h0fSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjOWRjNjZiIDUlLCAjNGZhNDlhIDMwJSwgIzQzNjFjMik7XHJcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byb0xpZ2h0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzdmN2Y3ZjtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY2FsbC10by1hY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogLjZlbSAycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNHJlbSAxcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2UgMHMsIGJvcmRlci1jb2xvciAuM3MgZWFzZSAwcywgO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGk6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgJl9fc29jaWFsLW1lZGlhIHtcclxuICAgICAgICBtYXJnaW46IDEuNXJlbSAwIDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsIi8qIFZBUklBQkxFUyAqL1xyXG5cclxuLyogU2l6ZSAvIE1lZGlhIFF1ZXJpZXMqL1xyXG4kZXh0cmEtbGFyZ2U6IDEyMDBweDtcclxuJGxhcmdlOiA5OTJweDtcclxuJG1lZGl1bTogNzY4cHg7XHJcbiRzbWFsbDogNTc2cHg7XHJcblxyXG4vKiBDb2xvciBQYWxldHRlICovXHJcbiRmb250LWNvbG9yLXByaW1hcnk6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbiRsaW5rLWNvbG9yOiAjMDA3YmZmO1xyXG5cclxuLyogSFRNTCBFbGVtZW50cyAqL1xyXG4kbmF2YmFyLWhlaWdodDogOTBweDsiLCIvKiBJTVBPUlRTICovXG4vKiBWQVJJQUJMRVMgKi9cbi8qIFNpemUgLyBNZWRpYSBRdWVyaWVzKi9cbi8qIENvbG9yIFBhbGV0dGUgKi9cbi8qIEhUTUwgRWxlbWVudHMgKi9cbi8qIFNUWUxFUyAqL1xuLmhvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM5ZGM2NmIgNSUsICM0ZmE0OWEgMzAlLCAjNDM2MWMyKTtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjRkZGO1xufVxuLmhvbWUgdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uaG9tZV9faGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogLTVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lX19oZWFkZXIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG4uaG9tZV9faGVhZGVyIC5zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvTGlnaHQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiAjN2Y3ZjdmO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG4uaG9tZV9fY2FsbC10by1hY3Rpb24ge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbi5ob21lX19jYWxsLXRvLWFjdGlvbiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC42ZW0gMnJlbTtcbiAgbWFyZ2luOiAwLjRyZW0gMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlIDBzLCBib3JkZXItY29sb3IgMC4zcyBlYXNlIDBzO1xufVxuLmhvbWVfX2NhbGwtdG8tYWN0aW9uIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmhvbWVfX2NhbGwtdG8tYWN0aW9uIGxpOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5ob21lX19jYWxsLXRvLWFjdGlvbiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuLmhvbWVfX3NvY2lhbC1tZWRpYSB7XG4gIG1hcmdpbjogMS41cmVtIDAgMDtcbn1cbi5ob21lX19zb2NpYWwtbWVkaWEgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbn1cbi5ob21lX19zb2NpYWwtbWVkaWEgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5ob21lX19zb2NpYWwtbWVkaWEgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('750ms ease-in-out'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()
                    ]),
                ])
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/model/tag.ts":
/*!******************************!*\
  !*** ./src/app/model/tag.ts ***!
  \******************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Tag = /** @class */ (function () {
    function Tag() {
    }
    return Tag;
}());



/***/ }),

/***/ "./src/app/pipes/tag-filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/tag-filter.pipe.ts ***!
  \******************************************/
/*! exports provided: TagFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagFilterPipe", function() { return TagFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TagFilterPipe = /** @class */ (function () {
    function TagFilterPipe() {
    }
    TagFilterPipe.prototype.transform = function (projects, filter) {
        if (!projects || !filter)
            return projects;
        return projects.filter(function (element, index, array) {
            var hasTag = false;
            filter.forEach(function (tag) {
                if (element.tags.indexOf(tag.name) > -1) {
                    hasTag = true;
                }
            });
            return hasTag;
        });
    };
    TagFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'tagFilter'
        })
    ], TagFilterPipe);
    return TagFilterPipe;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* IMPORTS */\n/* VARIABLES */\n/* Size / Media Queries*/\n/* Color Palette */\n/* HTML Elements */\n/* VARIABLES */\n/* STYLES */\n.tags {\n  margin: 2rem 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  color: rgba(0, 0, 0, 0.54);\n}\n.project-card {\n  width: 32%;\n  min-width: 300px;\n  margin: 2px;\n}\n/* MEDIA QUERIES */\n@media (max-width: 768px) {\n  .project-card {\n    width: 100%;\n    margin: 2px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0M6XFxVc2Vyc1xccGhvdlxcRG9jdW1lbnRzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHBvcnRmb2xpb1xccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vQzpcXFVzZXJzXFxwaG92XFxEb2N1bWVudHNcXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FDQUEsY0FBQTtBQUVBLHdCQUFBO0FBTUEsa0JBQUE7QUFJQSxrQkFBQTtBRFJBLGNBQUE7QUFLQSxXQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQ05pQjtBQ0lyQjtBRktBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FmVTtBRWFkO0FGS0Esa0JBQUE7QUFDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUVGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIElNUE9SVFMgKi9cclxuQGltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5cclxuLyogVkFSSUFCTEVTICovXHJcbiRjYXJkLWhlaWdodDogMzUwcHg7XHJcbiRjYXJkLW1hcmdpbjogMnB4O1xyXG5cclxuXHJcbi8qIFNUWUxFUyAqL1xyXG4udGFncyB7XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkZm9udC1jb2xvci1wcmltYXJ5O1xyXG59XHJcblxyXG4ucHJvamVjdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMiU7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAkY2FyZC1tYXJnaW47XHJcbn1cclxuXHJcbi8qIE1FRElBIFFVRVJJRVMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6ICRtZWRpdW0pIHtcclxuICAgIC5wcm9qZWN0LWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogJGNhcmQtbWFyZ2luIDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLyogVkFSSUFCTEVTICovXHJcblxyXG4vKiBTaXplIC8gTWVkaWEgUXVlcmllcyovXHJcbiRleHRyYS1sYXJnZTogMTIwMHB4O1xyXG4kbGFyZ2U6IDk5MnB4O1xyXG4kbWVkaXVtOiA3NjhweDtcclxuJHNtYWxsOiA1NzZweDtcclxuXHJcbi8qIENvbG9yIFBhbGV0dGUgKi9cclxuJGZvbnQtY29sb3ItcHJpbWFyeTogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuJGxpbmstY29sb3I6ICMwMDdiZmY7XHJcblxyXG4vKiBIVE1MIEVsZW1lbnRzICovXHJcbiRuYXZiYXItaGVpZ2h0OiA5MHB4OyIsIi8qIElNUE9SVFMgKi9cbi8qIFZBUklBQkxFUyAqL1xuLyogU2l6ZSAvIE1lZGlhIFF1ZXJpZXMqL1xuLyogQ29sb3IgUGFsZXR0ZSAqL1xuLyogSFRNTCBFbGVtZW50cyAqL1xuLyogVkFSSUFCTEVTICovXG4vKiBTVFlMRVMgKi9cbi50YWdzIHtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcbiAgd2lkdGg6IDMyJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi8qIE1FRElBIFFVRVJJRVMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvamVjdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDJweCAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tag.service */ "./src/app/services/tag.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");





var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(projectService, tagService) {
        this.projectService = projectService;
        this.tagService = tagService;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getProjects();
        this.getTags();
    };
    PortfolioComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (projects) { return _this.projects = projects; });
    };
    PortfolioComponent.prototype.getTags = function () {
        var _this = this;
        this.tagService.getTags()
            .subscribe(function (tags) { return _this.tags = tags; });
    };
    PortfolioComponent.prototype.getSelectedTags = function () {
        return this.tags.filter(function (tag) { return tag.selected === true; });
    };
    PortfolioComponent.ctorParameters = function () { return [
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
        { type: _services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"] }
    ]; };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/portfolio/portfolio.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('portfolioTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ marginTop: '-15px', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])(200, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('350ms ease-in-out'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])()])
                        ], { optional: true })
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('750ms ease-in-out'), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animateChild"])()
                    ]),
                ])
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/project-card/project-card.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/project-card/project-card.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* IMPORTS */\n/* VARIABLES */\n/* Size / Media Queries*/\n/* Color Palette */\n/* HTML Elements */\n/* VARIABLES */\n/* STYLES */\n.project-card {\n  height: 350px;\n  overflow: hidden;\n  color: #FFF;\n  font-family: \"Montserrat\", sans-serif;\n  line-height: 1.5;\n  position: relative;\n}\n.project-card img {\n  width: 100%;\n  height: auto;\n  transform: scale(1.01);\n  -webkit-filter: blur(0px);\n          filter: blur(0px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  min-height: 350px;\n  transition: transform 0.4s, -webkit-filter 0.4s;\n  transition: filter 0.4s, transform 0.4s;\n  transition: filter 0.4s, transform 0.4s, -webkit-filter 0.4s;\n}\n.project-card__wrapper {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  transition: background-color 0.4s;\n}\n.project-card__title {\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin-bottom: 20px;\n  margin: 0 0 1rem;\n}\n.project-card__description {\n  padding: 2rem;\n  font-size: 15px;\n  opacity: 0;\n}\n.project-card:hover .project-card__wrapper {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.project-card:hover img {\n  transform: scale(1.07);\n  -webkit-filter: brightness(100%) blur(2px);\n          filter: brightness(100%) blur(2px);\n}\n.project-card:hover .project-card__description {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1jYXJkL0M6XFxVc2Vyc1xccGhvdlxcRG9jdW1lbnRzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHByb2plY3QtY2FyZFxccHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0LWNhcmQvQzpcXFVzZXJzXFxwaG92XFxEb2N1bWVudHNcXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FDQUEsY0FBQTtBQUVBLHdCQUFBO0FBTUEsa0JBQUE7QUFJQSxrQkFBQTtBRFJBLGNBQUE7QUFLQSxXQUFBO0FBQ0E7RUFDSSxhQU5VO0VBT1YsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FFRko7QUZJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7RUFFQSxpQkFyQk07RUFzQk4sK0NBQUE7RUFBQSx1Q0FBQTtFQUFBLDREQUFBO0FFSFI7QUZNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtBRUpSO0FGT0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRUxSO0FGUUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUVOUjtBRlVRO0VBQ0ksb0NBQUE7QUVSWjtBRldRO0VBQ0ksc0JBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0FFVFo7QUZZUTtFQUNJLFVBQUE7QUVWWiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJTVBPUlRTICovXHJcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9jc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuXHJcbi8qIFZBUklBQkxFUyAqL1xyXG4kY2FyZC1oZWlnaHQ6IDM1MHB4O1xyXG4kY2FyZC1tYXJnaW46IDJweDtcclxuXHJcblxyXG4vKiBTVFlMRVMgKi9cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgICBoZWlnaHQ6ICRjYXJkLWhlaWdodDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDBweCk7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIG1pbi1oZWlnaHQ6ICRjYXJkLWhlaWdodDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgLjRzLCB0cmFuc2Zvcm0gLjRzO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3dyYXBwZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC40cztcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDAgMCAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5wcm9qZWN0LWNhcmRfX3dyYXBwZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSkgYmx1cigycHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3QtY2FyZF9fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qIFZBUklBQkxFUyAqL1xyXG5cclxuLyogU2l6ZSAvIE1lZGlhIFF1ZXJpZXMqL1xyXG4kZXh0cmEtbGFyZ2U6IDEyMDBweDtcclxuJGxhcmdlOiA5OTJweDtcclxuJG1lZGl1bTogNzY4cHg7XHJcbiRzbWFsbDogNTc2cHg7XHJcblxyXG4vKiBDb2xvciBQYWxldHRlICovXHJcbiRmb250LWNvbG9yLXByaW1hcnk6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbiRsaW5rLWNvbG9yOiAjMDA3YmZmO1xyXG5cclxuLyogSFRNTCBFbGVtZW50cyAqL1xyXG4kbmF2YmFyLWhlaWdodDogOTBweDsiLCIvKiBJTVBPUlRTICovXG4vKiBWQVJJQUJMRVMgKi9cbi8qIFNpemUgLyBNZWRpYSBRdWVyaWVzKi9cbi8qIENvbG9yIFBhbGV0dGUgKi9cbi8qIEhUTUwgRWxlbWVudHMgKi9cbi8qIFZBUklBQkxFUyAqL1xuLyogU1RZTEVTICovXG4ucHJvamVjdC1jYXJkIHtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2plY3QtY2FyZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMsIHRyYW5zZm9ybSAwLjRzO1xufVxuLnByb2plY3QtY2FyZF9fd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC40cztcbn1cbi5wcm9qZWN0LWNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuLnByb2plY3QtY2FyZF9fZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG9wYWNpdHk6IDA7XG59XG4ucHJvamVjdC1jYXJkOmhvdmVyIC5wcm9qZWN0LWNhcmRfX3dyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4ucHJvamVjdC1jYXJkOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNyk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKSBibHVyKDJweCk7XG59XG4ucHJvamVjdC1jYXJkOmhvdmVyIC5wcm9qZWN0LWNhcmRfX2Rlc2NyaXB0aW9uIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/project-card/project-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-card/project-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectCardComponent = /** @class */ (function () {
    function ProjectCardComponent() {
    }
    ProjectCardComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProjectCardComponent.prototype, "project", void 0);
    ProjectCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[project-card]',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-card/project-card.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-card.component.scss */ "./src/app/project-card/project-card.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectCardComponent);
    return ProjectCardComponent;
}());



/***/ }),

/***/ "./src/app/project-details/project-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/project-details/project-details.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* IMPORTS */\n/* VARIABLES */\n/* Size / Media Queries*/\n/* Color Palette */\n/* HTML Elements */\n/* STYLES */\n.view {\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.img-display {\n  max-width: 60%;\n  height: 100vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: middle;\n     object-position: middle;\n  position: absolute;\n  right: 0;\n  z-index: -1;\n}\n.img-display--fit-img {\n  width: 100%;\n  height: auto !important;\n  -o-object-fit: fit !important;\n     object-fit: fit !important;\n}\n.content {\n  width: 40%;\n  color: rgba(0, 0, 0, 0.54);\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n.content__wrapper {\n  padding: 2.5rem 2rem;\n  color: #4F4F4F;\n}\n.content__description {\n  text-align: justify;\n  font-size: 1.05em;\n  line-height: 1.5;\n}\n.content__picture img {\n  max-width: 150px;\n  max-height: 150px;\n  margin: 0 2px 2px 0;\n  display: inline-block;\n  cursor: pointer;\n}\n.content a {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n}\n.content h2 {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: bold;\n  font-size: 2em;\n  margin: 0 0 2rem;\n}\n.content h4 {\n  margin: 1rem 0;\n  font-size: 20px;\n}\n.content ul li {\n  margin: 0.5rem 0;\n}\n/* MEDIA QUERIES */\n@media (max-width: 576px) {\n  .img-display {\n    max-height: 250px;\n  }\n}\n@media (max-width: 992px) {\n  .img-display {\n    max-width: 100%;\n    max-height: 400px;\n    -o-object-position: top;\n       object-position: top;\n    position: relative;\n    margin: 0 auto;\n  }\n\n  .content {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL0M6XFxVc2Vyc1xccGhvdlxcRG9jdW1lbnRzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHByb2plY3QtZGV0YWlsc1xccHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0LWRldGFpbHMvQzpcXFVzZXJzXFxwaG92XFxEb2N1bWVudHNcXHBvcnRmb2xpby9zcmNcXGFzc2V0c1xcY3NzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FDQUEsY0FBQTtBQUVBLHdCQUFBO0FBTUEsa0JBQUE7QUFJQSxrQkFBQTtBRFRBLFdBQUE7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRUdKO0FGQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBRUdKO0FGREk7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtLQUFBLDBCQUFBO0FFR1I7QUZDQTtFQUNJLFVBQUE7RUFDQSwwQkNuQmlCO0VEb0JqQiwwQ0FBQTtBRUVKO0FGQUk7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUVFUjtBRkNJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FFQ1I7QUZFSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRUFSO0FGR0k7RUFDSSxjQ3pDSztFRDBDTCxxQkFBQTtFQUNBLDZCQUFBO0FFRFI7QUZJSTtFQUNJLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUVGUjtBRktJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUVIUjtBRk9RO0VBQ0ksZ0JBQUE7QUVMWjtBRldBLGtCQUFBO0FBQ0E7RUFDSTtJQUNJLGlCQUFBO0VFUk47QUFDRjtBRldBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSx1QkFBQTtPQUFBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VFVE47O0VGWUU7SUFDSSxXQUFBO0VFVE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJTVBPUlRTICovXHJcbkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9jc3MvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLyogU1RZTEVTICovXHJcbi52aWV3IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5pbWctZGlzcGxheSB7XHJcbiAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogbWlkZGxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAmLS1maXQtaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBvYmplY3QtZml0OiBmaXQgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGNvbG9yOiAkZm9udC1jb2xvci1wcmltYXJ5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICZfX3dyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSAycmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcGljdHVyZSBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDJweCAycHggMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAkbGluay1jb2xvcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogTUVESUEgUVVFUklFUyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5pbWctZGlzcGxheSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmltZy1kaXNwbGF5IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSIsIi8qIFZBUklBQkxFUyAqL1xyXG5cclxuLyogU2l6ZSAvIE1lZGlhIFF1ZXJpZXMqL1xyXG4kZXh0cmEtbGFyZ2U6IDEyMDBweDtcclxuJGxhcmdlOiA5OTJweDtcclxuJG1lZGl1bTogNzY4cHg7XHJcbiRzbWFsbDogNTc2cHg7XHJcblxyXG4vKiBDb2xvciBQYWxldHRlICovXHJcbiRmb250LWNvbG9yLXByaW1hcnk6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbiRsaW5rLWNvbG9yOiAjMDA3YmZmO1xyXG5cclxuLyogSFRNTCBFbGVtZW50cyAqL1xyXG4kbmF2YmFyLWhlaWdodDogOTBweDsiLCIvKiBJTVBPUlRTICovXG4vKiBWQVJJQUJMRVMgKi9cbi8qIFNpemUgLyBNZWRpYSBRdWVyaWVzKi9cbi8qIENvbG9yIFBhbGV0dGUgKi9cbi8qIEhUTUwgRWxlbWVudHMgKi9cbi8qIFNUWUxFUyAqL1xuLnZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmltZy1kaXNwbGF5IHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IG1pZGRsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogLTE7XG59XG4uaW1nLWRpc3BsYXktLWZpdC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGZpdCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudCB7XG4gIHdpZHRoOiA0MCU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbn1cbi5jb250ZW50X193cmFwcGVyIHtcbiAgcGFkZGluZzogMi41cmVtIDJyZW07XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuLmNvbnRlbnRfX2Rlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxLjA1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uY29udGVudF9fcGljdHVyZSBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAwIDJweCAycHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGVudCBhIHtcbiAgY29sb3I6ICMwMDdiZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29udGVudCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAgMCAycmVtO1xufVxuLmNvbnRlbnQgaDQge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRlbnQgdWwgbGkge1xuICBtYXJnaW46IDAuNXJlbSAwO1xufVxuXG4vKiBNRURJQSBRVUVSSUVTICovXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmltZy1kaXNwbGF5IHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pbWctZGlzcGxheSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/project-details/project-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");






var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(route, projectService, location) {
        this.route = route;
        this.projectService = projectService;
        this.location = location;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        this.getProject();
        this.selected = this.getSource();
        this.changed = false;
    };
    ProjectDetailsComponent.prototype.getProject = function () {
        var _this = this;
        var title = this.route.snapshot.paramMap.get('title');
        this.projectService.getProject(title)
            .subscribe(function (project) { return _this.project = project; });
    };
    ProjectDetailsComponent.prototype.getSource = function () {
        console.log(this.project.thumbnail.substr(0, this.project.thumbnail.indexOf('-')));
        return this.project.thumbnail.substr(0, this.project.thumbnail.indexOf('-')) + '.jpg';
    };
    ProjectDetailsComponent.prototype.changeImage = function (pic) {
        this.selected = pic;
        this.changed = true;
        console.log(this.selected);
    };
    ProjectDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-details/project-details.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeInRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])('.content', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(-50%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms ease-in-out')
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])('.img-display', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateX(50%)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms ease-in-out')
                            ])
                        ])
                    ]),
                ]),
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-details.component.scss */ "./src/app/project-details/project-details.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.projects = [
            {
                title: 'IFlightController',
                description: 'Controlador de voo para drones quadrirotores desenvolvido em Python e JavaScript com comunicação por WebSockets.',
                tags: ['Python', 'WebSockets', 'HTML Canvas'],
                thumbnail: './assets/images/iflight-thumb.jpg',
                website: 'https://github.com/pedrohov/IFlightController',
                content: 'Implementação de um sistema de controle e estabilidade para quadrirotores. Foi desenvolvido um algoritmo de estabilidade utilizando controladores PID sobre a plataforma Raspberry Pi. O controlador foi desenvolvido em JavaScript e HTML/CSS utilizando a tag <canvas> para desenhar os joysticks.',
                tech_concepts: ['Threads', 'WebSockets', 'Elemento <canvas>', 'Controlador PID', 'Comunicação Wi-Fi'],
                pictures: ['./assets/images/iflightcontroller/prototipo.jpg', './assets/images/iflightcontroller/interface_controle.png', './assets/images/iflightcontroller/arquitetura.png']
            },
            {
                title: 'Scrabble',
                description: 'Implementação de uma inteligência artificial para jogar o famoso jogo de palavras cruzadas Scrabble. Tanto o jogo quanto a IA foram desenvolvidos em Python.',
                tags: ['Python'],
                thumbnail: './assets/images/scrabble-thumb.jpg',
                website: 'https://github.com/pedrohov/Scrabble',
                content: 'Scrabble é um jogo de tabuleiro em que os jogadores procuram marcar pontos formando palavras válidas. As palavras formadas são sempre ortogonalmente interligadas a outras palavras no tabuleiro. Foi projetada e desenvolvida uma aplicação para gerenciar e jogar partidas de Scrabble entre dois jogadores que podem ser tanto usuários humanos quanto computadores. O computador é capaz de consultar um dicionário de aproximadamente 400.000 palavras de forma eficiente, descobrindo a melhor jogada possível em milésimos de segundos.',
                tech_concepts: ['Backtracking', 'Estrutura de Dados', 'DAWG'],
                pictures: ['./assets/images/scrabble/scrabble1.png', './assets/images/scrabble/scrabble2.png']
            },
            {
                title: 'PRYSM',
                description: 'Jogo de plataforma 2D minimalista ilustrado com formas geométricas. Desenvolvido em JavaScript/Phaser e empacotado para Android com Cordova Apache.',
                tags: ['JavaScript'],
                thumbnail: './assets/images/prysm-thumb.jpg',
                website: 'https://www.youtube.com/watch?v=3uc9dal6t7E',
                content: 'Jogos para browser sempre foram populares devido a sua facilidade de acesso, não precisam ser instalados e funcionam em qualquer dispositivo que possua um web browser. PRYSM está sendo desenvolvido com a framework Phaser para JavaScript e pode ser adicionado a qualquer página web. Tecnologias como Apache Cordova e Phonegap possibilitam que aplicativos desenvolvidos com tecnologia web possam ser exportados para dispositivos móveis como Android e iOS.',
                tech_concepts: ['Apache Cordova', 'Dados em JSON', 'Controle Touchscreen/Mouse', 'Ads com Chartboost e Admob', 'Integração com API do Google Play', 'Sistema de Conquistas'],
                pictures: ['./assets/images/prysm/prysm1.png', './assets/images/prysm/prysm2.png', './assets/images/prysm/prysm3.png']
            },
            {
                title: 'Cayman Solar',
                description: 'Design e implementação da landing page da Cayman Solar. Desenvolvido com HTML/CSS e Bootstrap.',
                tags: ['HTML/CSS'],
                thumbnail: './assets/images/caymans-thumb.jpg',
                website: 'http://caymansolar.com.br/',
                content: 'Landing Page desenvolvida para aumentar a visibilidade online da Cayman Solar, mostrando os produtos, objetivo da empresa, localização e formas de contato para clientes interessados.',
                tech_concepts: ['Web design', 'Design responsivo'],
                pictures: []
            },
            {
                title: 'Sistema de Pedidos',
                description: 'Protótipo de um sistema de pedidos para restaurantes. Permite ao cliente realizar pedidos por celular. O restaurante controla os pedidos de acordo com o tempo de espera. Desenvolvido em Arduino/Processing e React Native.',
                tags: ['React Native', 'Arduino'],
                thumbnail: './assets/images/sistemapedidos-thumb.jpg',
                website: 'https://github.com/pedrohov/Sistemas-de-Pedidos',
                content: 'Sistema de atendimento automatizado para restaurantes ou lanchonetes. Permite ao cliente realizar pedidos, e ao estabelecimento a gerenciar com melhor facilidade seus pedidos. Os clientes das mesas se comunicam com o sistema central, que apresenta uma interface desenvolvida utilizando a ferramenta Processing. O aplicativo de pedido foi desenvolvido com React Native, realizando a comunicação bluetooth com o pacote Bluetooth Classic.',
                tech_concepts: ['Comunicação Bluetooth', 'Comunicação Serial', 'Display LCD', 'Buzzer'],
                pictures: ['./assets/images/pedidos/pedidos1.png', './assets/images/pedidos/pedidos2.png']
            },
            {
                title: 'Sistema para Gerenciamento de Lojas',
                description: 'Sistema para gerenciar lojas e estabelecimentos de atendimento de pequeno e médio porte. Back end desenvolvido em Java, JPA e o banco de dados relacional MySQL. Segurança e autenticação com Spring Security.',
                tags: ['Java', 'JPA/MySQL'],
                thumbnail: './assets/images/sistvendasjava-thumb.jpg',
                website: 'https://github.com/pedrohov/Sistema-Web-de-Vendas-e-Atendimentos',
                content: 'Desenvolvimento de um sistema com o objetivo de facilitar o gerenciamento dos clientes, dos produtos, das vendas e dos atendimentos de uma empresa. A persistência de dados é feita em um servidor - que pode ser local ou remoto - com um banco de dados. O projeto conta com sistema de autenticação com a framework Spring Security, permitindo diferentes tipos de usuários, como administradores e vendedores.',
                tech_concepts: ['Banco de dados relacional', 'Autenticação com Spring Security', 'Webdesign em HTML/CSS', 'Servidor Tomcat'],
                pictures: ['./assets/images/gerenciamentoJava/sistvendasjava2.png', './assets/images/gerenciamentoJava/sistvendasjava3.png', './assets/images/gerenciamentoJava/sistvendasjava4.png', './assets/images/gerenciamentoJava/sistvendasjava5.png', './assets/images/gerenciamentoJava/sistvendasjava6.png']
            },
            {
                title: 'Protótipo de eCommerce com Angular',
                description: 'Aplicação para gerenciamento de lojas utilizando API RESTful e banco de dados não relacionais. Desenvolvido em Angular e empacotado para Windows e Ubuntu com a framework Electron.',
                tags: ['Angular', 'RESTful API', 'NeDB/MongoDB'],
                thumbnail: './assets/images/vendasAngular-thumb.jpg',
                website: '',
                content: 'Sistema de gerenciamento de lojas com o objetivo de simplificar a movimentação do caixa e os registros de estoques e clientes. Front end desenvolvido com Angular 7 e Angular Material, com REST api utilizando Express e Node para realizar persistência de dados em NeDB.',
                tech_concepts: ['Banco de dados não relacional (NeDB)', 'Angular Routes', 'Webdesign em HTML/CSS', 'RESTful API com Express/Node'],
                pictures: ['./assets/images/vendasAngular/vendasAngular1.jpg', './assets/images/vendasAngular/vendasAngular2.jpg', './assets/images/vendasAngular/vendasAngular3.jpg', './assets/images/vendasAngular/vendasAngular4.jpg', './assets/images/vendasAngular/vendasAngular5.jpg']
            }
        ];
    }
    ProjectService.prototype.getProjects = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.projects);
    };
    ProjectService.prototype.getProject = function (title) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.projects.find(function (project) { return project.title === title; }));
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/tag.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tag.service.ts ***!
  \*****************************************/
/*! exports provided: TagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagService", function() { return TagService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var TagService = /** @class */ (function () {
    function TagService() {
        this.tags = [
            { name: 'Python', color: 'yellow', selected: true },
            { name: 'JavaScript', color: 'blue', selected: true },
            { name: 'HTML/CSS', color: 'green', selected: true },
            { name: 'WebSockets', color: 'red', selected: true },
            { name: 'React Native', color: 'red', selected: true },
            { name: 'Arduino', color: 'red', selected: true },
            { name: 'JPA/MySQL', color: 'red', selected: true },
            { name: 'Java', color: 'red', selected: true },
            { name: 'Angular 7', color: 'red', selected: true },
            { name: 'RESTful API', color: 'red', selected: true },
            { name: 'NeDB/MongoDB', color: 'red', selected: true }
        ];
    }
    TagService.prototype.getTags = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.tags);
    };
    TagService.prototype.getTag = function (name) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.tags.find(function (tag) { return tag.name === name; }));
    };
    TagService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TagService);
    return TagService;
}());



/***/ }),

/***/ "./src/app/tag/tag.component.scss":
/*!****************************************!*\
  !*** ./src/app/tag/tag.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tag {\n  padding: 5px 10px;\n  border: 1px solid #E0E1E1;\n  width: auto;\n  font-family: \"Montserrat\";\n  font-size: 14px;\n  cursor: pointer;\n  margin-right: -1px;\n  transition: all 0.3s ease 0s;\n}\n\n.tag:fst-child {\n  margin-right: 0;\n}\n\n.tag:hover {\n  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.2);\n  transform: translateY(-5%);\n}\n\n.disabled {\n  color: #E0E1E1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFnL0M6XFxVc2Vyc1xccGhvdlxcRG9jdW1lbnRzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXHRhZ1xcdGFnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWcvdGFnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksOENBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGFnL3RhZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWcge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTBFMUUxO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4udGFnOmZzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi50YWc6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjJyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogI0UwRTFFMTtcclxufSIsIi50YWcge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UwRTFFMTtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogLTFweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLnRhZzpmc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi50YWc6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAuMnJlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbn1cblxuLmRpc2FibGVkIHtcbiAgY29sb3I6ICNFMEUxRTE7XG59Il19 */");

/***/ }),

/***/ "./src/app/tag/tag.component.ts":
/*!**************************************!*\
  !*** ./src/app/tag/tag.component.ts ***!
  \**************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/tag */ "./src/app/model/tag.ts");
/* harmony import */ var _services_tag_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tag.service */ "./src/app/services/tag.service.ts");




var TagComponent = /** @class */ (function () {
    function TagComponent(tagService) {
        this.tagService = tagService;
    }
    TagComponent.prototype.ngOnInit = function () {
        this.getTag(this.tag.name);
    };
    TagComponent.prototype.getTag = function (name) {
        var _this = this;
        this.tagService.getTag(name)
            .subscribe(function (tag) { return _this.tag = tag; });
    };
    TagComponent.prototype.toggle = function () {
        this.tag.selected = !this.tag.selected;
    };
    TagComponent.ctorParameters = function () { return [
        { type: _services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_tag__WEBPACK_IMPORTED_MODULE_2__["Tag"])
    ], TagComponent.prototype, "tag", void 0);
    TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tag',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tag.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tag/tag.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tag.component.scss */ "./src/app/tag/tag.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tag_service__WEBPACK_IMPORTED_MODULE_3__["TagService"]])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\phov\Documents\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map