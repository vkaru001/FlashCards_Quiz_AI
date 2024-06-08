"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/quiz/generate/route";
exports.ids = ["app/api/quiz/generate/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:fs/promises":
/*!***********************************!*\
  !*** external "node:fs/promises" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:fs/promises");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("perf_hooks");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate%2Froute&page=%2Fapi%2Fquiz%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fvyshnavikarumuru%2FDesktop%2FFlashCards_Quiz_AI%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvyshnavikarumuru%2FDesktop%2FFlashCards_Quiz_AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate%2Froute&page=%2Fapi%2Fquiz%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fvyshnavikarumuru%2FDesktop%2FFlashCards_Quiz_AI%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvyshnavikarumuru%2FDesktop%2FFlashCards_Quiz_AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _Users_vyshnavikarumuru_Desktop_FlashCards_Quiz_AI_src_app_api_quiz_generate_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/quiz/generate/route.ts */ \"(rsc)/./src/app/api/quiz/generate/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/quiz/generate/route\",\n        pathname: \"/api/quiz/generate\",\n        filename: \"route\",\n        bundlePath: \"app/api/quiz/generate/route\"\n    },\n    resolvedPagePath: \"/Users/vyshnavikarumuru/Desktop/FlashCards_Quiz_AI/src/app/api/quiz/generate/route.ts\",\n    nextConfigOutput,\n    userland: _Users_vyshnavikarumuru_Desktop_FlashCards_Quiz_AI_src_app_api_quiz_generate_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/quiz/generate/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZxdWl6JTJGZ2VuZXJhdGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnF1aXolMkZnZW5lcmF0ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnF1aXolMkZnZW5lcmF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnZ5c2huYXZpa2FydW11cnUlMkZEZXNrdG9wJTJGRmxhc2hDYXJkc19RdWl6X0FJJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnZ5c2huYXZpa2FydW11cnUlMkZEZXNrdG9wJTJGRmxhc2hDYXJkc19RdWl6X0FJJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNtRDtBQUNsSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1mb3JtLWJ1aWxkZXItdHV0b3JpYWwvPzRhY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3Z5c2huYXZpa2FydW11cnUvRGVza3RvcC9GbGFzaENhcmRzX1F1aXpfQUkvc3JjL2FwcC9hcGkvcXVpei9nZW5lcmF0ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcXVpei9nZW5lcmF0ZS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3F1aXovZ2VuZXJhdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3F1aXovZ2VuZXJhdGUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvdnlzaG5hdmlrYXJ1bXVydS9EZXNrdG9wL0ZsYXNoQ2FyZHNfUXVpel9BSS9zcmMvYXBwL2FwaS9xdWl6L2dlbmVyYXRlL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3F1aXovZ2VuZXJhdGUvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate%2Froute&page=%2Fapi%2Fquiz%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fvyshnavikarumuru%2FDesktop%2FFlashCards_Quiz_AI%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvyshnavikarumuru%2FDesktop%2FFlashCards_Quiz_AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/quiz/generate/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/quiz/generate/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _langchain_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @langchain/openai */ \"(rsc)/./node_modules/@langchain/openai/index.js\");\n/* harmony import */ var _langchain_core_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @langchain/core/messages */ \"(rsc)/./node_modules/@langchain/core/messages.js\");\n/* harmony import */ var langchain_document_loaders_fs_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! langchain/document_loaders/fs/pdf */ \"(rsc)/./node_modules/langchain/document_loaders/fs/pdf.js\");\n/* harmony import */ var langchain_output_parsers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! langchain/output_parsers */ \"(rsc)/./node_modules/langchain/output_parsers.js\");\n/* harmony import */ var _saveToDb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saveToDb */ \"(rsc)/./src/app/api/quiz/generate/saveToDb.tsx\");\n\n\n\n\n\n\nasync function POST(req) {\n    const body = await req.formData();\n    const document = body.get(\"pdf\");\n    try {\n        const pdfLoader = new langchain_document_loaders_fs_pdf__WEBPACK_IMPORTED_MODULE_3__.PDFLoader(document, {\n            parsedItemSeparator: \" \"\n        });\n        const docs = await pdfLoader.load();\n        const selectedDocuments = docs.filter((doc)=>doc.pageContent !== undefined);\n        const texts = selectedDocuments.map((doc)=>doc.pageContent);\n        const prompt = \"given the text which is a summary of the document, generate a quiz based on the text. Return json only that contains a quiz object with fields: name, description and questions. The questions is an array of objects with fields: questionText, answers. The answers is an array of objects with fields: answerText, isCorrect.\";\n        if (!process.env.OPENAI_API_KEY) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"OpenAI API key not provided\"\n            }, {\n                status: 500\n            });\n        }\n        const model = new _langchain_openai__WEBPACK_IMPORTED_MODULE_1__.ChatOpenAI({\n            openAIApiKey: process.env.OPENAI_API_KEY,\n            modelName: \"gpt-4-1106-preview\"\n        });\n        const parser = new langchain_output_parsers__WEBPACK_IMPORTED_MODULE_4__.JsonOutputFunctionsParser();\n        const extractionFunctionsSchema = {\n            name: \"extractor\",\n            description: \"Extracts fields from the output\",\n            parameters: {\n                type: \"object\",\n                properties: {\n                    quiz: {\n                        type: \"object\",\n                        properties: {\n                            name: {\n                                type: \"string\"\n                            },\n                            description: {\n                                type: \"string\"\n                            },\n                            questions: {\n                                type: \"array\",\n                                items: {\n                                    type: \"object\",\n                                    properties: {\n                                        questionText: {\n                                            type: \"string\"\n                                        },\n                                        answers: {\n                                            type: \"array\",\n                                            items: {\n                                                type: \"object\",\n                                                properties: {\n                                                    answerText: {\n                                                        type: \"string\"\n                                                    },\n                                                    isCorrect: {\n                                                        type: \"boolean\"\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        };\n        const runnable = model.bind({\n            functions: [\n                extractionFunctionsSchema\n            ],\n            function_call: {\n                name: \"extractor\"\n            }\n        }).pipe(parser);\n        const message = new _langchain_core_messages__WEBPACK_IMPORTED_MODULE_2__.HumanMessage({\n            content: [\n                {\n                    type: \"text\",\n                    text: prompt + \"\\n\" + texts.join(\"\\n\")\n                }\n            ]\n        });\n        const result = await runnable.invoke([\n            message\n        ]);\n        console.log(result);\n        const { quizId } = await (0,_saveToDb__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(result.quiz);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: \"created successfully\"\n        }, {\n            status: 200\n        });\n    } catch (e) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: e.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9xdWl6L2dlbmVyYXRlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFFWDtBQUNRO0FBRVE7QUFDSztBQUVoQztBQUUzQixlQUFlTSxLQUFLQyxHQUFlO0lBQ3RDLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsUUFBUTtJQUMvQixNQUFNQyxXQUFXRixLQUFLRyxHQUFHLENBQUM7SUFDMUIsSUFBRztRQUNDLE1BQU1DLFlBQVksSUFBSVQsd0VBQVNBLENBQUNPLFVBQWlCO1lBQzdDRyxxQkFBcUI7UUFDekI7UUFDQSxNQUFNQyxPQUFPLE1BQU1GLFVBQVVHLElBQUk7UUFDakMsTUFBTUMsb0JBQW9CRixLQUFLRyxNQUFNLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsV0FBVyxLQUFLQztRQUNuRSxNQUFNQyxRQUFRTCxrQkFBa0JNLEdBQUcsQ0FBQyxDQUFDSixNQUFRQSxJQUFJQyxXQUFXO1FBQzVELE1BQU1JLFNBQVM7UUFDZixJQUFHLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxFQUFDO1lBQzNCLE9BQU8xQixrRkFBWUEsQ0FBQzJCLElBQUksQ0FDcEI7Z0JBQUNDLE9BQU87WUFBNkIsR0FDckM7Z0JBQUNDLFFBQU87WUFBRztRQUVuQjtRQUVBLE1BQU1DLFFBQVMsSUFBSTdCLHlEQUFVQSxDQUFDO1lBQzFCOEIsY0FBY1AsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO1lBQ3hDTSxXQUFXO1FBQ2Y7UUFDQSxNQUFNQyxTQUFTLElBQUk3QiwrRUFBeUJBO1FBQzVDLE1BQU04Qiw0QkFBNEI7WUFDOUJDLE1BQU07WUFDTkMsYUFBYTtZQUNiQyxZQUFXO2dCQUNQQyxNQUFNO2dCQUNOQyxZQUFXO29CQUNQQyxNQUFLO3dCQUNERixNQUFNO3dCQUNOQyxZQUFZOzRCQUNSSixNQUFLO2dDQUFDRyxNQUFLOzRCQUFROzRCQUNuQkYsYUFBWTtnQ0FBQ0UsTUFBSzs0QkFBUTs0QkFDMUJHLFdBQVU7Z0NBQ05ILE1BQUs7Z0NBQ0xJLE9BQU07b0NBQ0ZKLE1BQUs7b0NBQ0xDLFlBQVc7d0NBQ1BJLGNBQWE7NENBQUNMLE1BQUs7d0NBQVE7d0NBQzNCTSxTQUFROzRDQUNKTixNQUFLOzRDQUNMSSxPQUFNO2dEQUNGSixNQUFLO2dEQUNMQyxZQUFXO29EQUNQTSxZQUFXO3dEQUFDUCxNQUFLO29EQUFRO29EQUN6QlEsV0FBVTt3REFBQ1IsTUFBSztvREFBUztnREFDN0I7NENBQ0o7d0NBQ0o7b0NBQ0o7Z0NBQ0o7NEJBQ0o7d0JBQ0o7b0JBQ0o7Z0JBQ0o7WUFDSjtRQUNKO1FBQ0EsTUFBTVMsV0FBV2pCLE1BQU1rQixJQUFJLENBQUM7WUFDeEJDLFdBQVc7Z0JBQUNmO2FBQTBCO1lBQ3RDZ0IsZUFBZTtnQkFBQ2YsTUFBTTtZQUFXO1FBQ3JDLEdBQ0NnQixJQUFJLENBQUNsQjtRQUNOLE1BQU1tQixVQUFVLElBQUlsRCxrRUFBWUEsQ0FBQztZQUM3Qm1ELFNBQVM7Z0JBQ0w7b0JBQ0lmLE1BQU07b0JBQ05nQixNQUFNL0IsU0FBUyxPQUFPRixNQUFNa0MsSUFBSSxDQUFDO2dCQUNyQzthQUNIO1FBQ0w7UUFDQSxNQUFNQyxTQUFTLE1BQU1ULFNBQVNVLE1BQU0sQ0FBQztZQUFDTDtTQUFRO1FBQzlDTSxRQUFRQyxHQUFHLENBQUNIO1FBRVosTUFBTSxFQUFDSSxNQUFNLEVBQUMsR0FBRyxNQUFNdkQscURBQVFBLENBQUNtRCxPQUFPaEIsSUFBSTtRQUUzQyxPQUFPeEMsa0ZBQVlBLENBQUMyQixJQUFJLENBQUM7WUFDckJ5QixTQUFTO1FBQXNCLEdBQy9CO1lBQUN2QixRQUFPO1FBQUc7SUFFbkIsRUFDQSxPQUFNZ0MsR0FBTTtRQUNSLE9BQU83RCxrRkFBWUEsQ0FBQzJCLElBQUksQ0FDcEI7WUFBQ0MsT0FBT2lDLEVBQUVULE9BQU87UUFBQSxHQUNqQjtZQUFDdkIsUUFBUTtRQUFHO0lBRXBCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1mb3JtLWJ1aWxkZXItdHV0b3JpYWwvLi9zcmMvYXBwL2FwaS9xdWl6L2dlbmVyYXRlL3JvdXRlLnRzP2YyODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5pbXBvcnQgeyBDaGF0T3BlbkFJfSBmcm9tIFwiQGxhbmdjaGFpbi9vcGVuYWlcIlxuaW1wb3J0IHtIdW1hbk1lc3NhZ2V9IGZyb20gXCJAbGFuZ2NoYWluL2NvcmUvbWVzc2FnZXNcIlxuXG5pbXBvcnQgeyBQREZMb2FkZXIgfSBmcm9tIFwibGFuZ2NoYWluL2RvY3VtZW50X2xvYWRlcnMvZnMvcGRmXCJcbmltcG9ydCB7SnNvbk91dHB1dEZ1bmN0aW9uc1BhcnNlcn0gZnJvbSBcImxhbmdjaGFpbi9vdXRwdXRfcGFyc2Vyc1wiXG5cbmltcG9ydCBzYXZlUXVpeiBmcm9tIFwiLi9zYXZlVG9EYlwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6TmV4dFJlcXVlc3QpeyBcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XG4gICAgY29uc3QgZG9jdW1lbnQgPSBib2R5LmdldChcInBkZlwiKTtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHBkZkxvYWRlciA9IG5ldyBQREZMb2FkZXIoZG9jdW1lbnQgYXMgQmxvYix7XG4gICAgICAgICAgICBwYXJzZWRJdGVtU2VwYXJhdG9yOiBcIiBcIlxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IHBkZkxvYWRlci5sb2FkKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRG9jdW1lbnRzID0gZG9jcy5maWx0ZXIoKGRvYykgPT4gZG9jLnBhZ2VDb250ZW50ICE9PSB1bmRlZmluZWQpO1xuICAgICAgICBjb25zdCB0ZXh0cyA9IHNlbGVjdGVkRG9jdW1lbnRzLm1hcCgoZG9jKSA9PiBkb2MucGFnZUNvbnRlbnQpO1xuICAgICAgICBjb25zdCBwcm9tcHQgPSBcImdpdmVuIHRoZSB0ZXh0IHdoaWNoIGlzIGEgc3VtbWFyeSBvZiB0aGUgZG9jdW1lbnQsIGdlbmVyYXRlIGEgcXVpeiBiYXNlZCBvbiB0aGUgdGV4dC4gUmV0dXJuIGpzb24gb25seSB0aGF0IGNvbnRhaW5zIGEgcXVpeiBvYmplY3Qgd2l0aCBmaWVsZHM6IG5hbWUsIGRlc2NyaXB0aW9uIGFuZCBxdWVzdGlvbnMuIFRoZSBxdWVzdGlvbnMgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGZpZWxkczogcXVlc3Rpb25UZXh0LCBhbnN3ZXJzLiBUaGUgYW5zd2VycyBpcyBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggZmllbGRzOiBhbnN3ZXJUZXh0LCBpc0NvcnJlY3QuXCJcbiAgICAgICAgaWYoIXByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZKXtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICAgICAgICB7ZXJyb3I6IFwiT3BlbkFJIEFQSSBrZXkgbm90IHByb3ZpZGVkXCJ9LFxuICAgICAgICAgICAgICAgIHtzdGF0dXM6NTAwfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZGVsID0gIG5ldyBDaGF0T3BlbkFJKHtcbiAgICAgICAgICAgIG9wZW5BSUFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG4gICAgICAgICAgICBtb2RlbE5hbWU6IFwiZ3B0LTQtMTEwNi1wcmV2aWV3XCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBKc29uT3V0cHV0RnVuY3Rpb25zUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IGV4dHJhY3Rpb25GdW5jdGlvbnNTY2hlbWEgPSB7XG4gICAgICAgICAgICBuYW1lOiBcImV4dHJhY3RvclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRXh0cmFjdHMgZmllbGRzIGZyb20gdGhlIG91dHB1dFwiLFxuICAgICAgICAgICAgcGFyYW1ldGVyczp7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOntcbiAgICAgICAgICAgICAgICAgICAgcXVpejp7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6e3R5cGU6XCJzdHJpbmdcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246e3R5cGU6XCJzdHJpbmdcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDp7dHlwZTpcInN0cmluZ1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTpcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6XCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlclRleHQ6e3R5cGU6XCJzdHJpbmdcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNDb3JyZWN0Ont0eXBlOlwiYm9vbGVhblwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJ1bm5hYmxlID0gbW9kZWwuYmluZCh7XG4gICAgICAgICAgICBmdW5jdGlvbnM6IFtleHRyYWN0aW9uRnVuY3Rpb25zU2NoZW1hXSxcbiAgICAgICAgICAgIGZ1bmN0aW9uX2NhbGw6IHtuYW1lOiBcImV4dHJhY3RvclwifSxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUocGFyc2VyKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBIdW1hbk1lc3NhZ2Uoe1xuICAgICAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHByb21wdCArIFwiXFxuXCIgKyB0ZXh0cy5qb2luKFwiXFxuXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBydW5uYWJsZS5pbnZva2UoW21lc3NhZ2VdKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgICAgIGNvbnN0IHtxdWl6SWR9ID0gYXdhaXQgc2F2ZVF1aXoocmVzdWx0LnF1aXopO1xuXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IFxuICAgICAgICAgICAgbWVzc2FnZTogXCJjcmVhdGVkIHN1Y2Nlc3NmdWxseVwifSwgXG4gICAgICAgICAgICB7c3RhdHVzOjIwMH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgY2F0Y2goZTphbnkpe1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgICB7ZXJyb3I6IGUubWVzc2FnZX0sXG4gICAgICAgICAgICB7c3RhdHVzOiA1MDB9XG4gICAgICAgICk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJDaGF0T3BlbkFJIiwiSHVtYW5NZXNzYWdlIiwiUERGTG9hZGVyIiwiSnNvbk91dHB1dEZ1bmN0aW9uc1BhcnNlciIsInNhdmVRdWl6IiwiUE9TVCIsInJlcSIsImJvZHkiLCJmb3JtRGF0YSIsImRvY3VtZW50IiwiZ2V0IiwicGRmTG9hZGVyIiwicGFyc2VkSXRlbVNlcGFyYXRvciIsImRvY3MiLCJsb2FkIiwic2VsZWN0ZWREb2N1bWVudHMiLCJmaWx0ZXIiLCJkb2MiLCJwYWdlQ29udGVudCIsInVuZGVmaW5lZCIsInRleHRzIiwibWFwIiwicHJvbXB0IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwibW9kZWwiLCJvcGVuQUlBcGlLZXkiLCJtb2RlbE5hbWUiLCJwYXJzZXIiLCJleHRyYWN0aW9uRnVuY3Rpb25zU2NoZW1hIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicGFyYW1ldGVycyIsInR5cGUiLCJwcm9wZXJ0aWVzIiwicXVpeiIsInF1ZXN0aW9ucyIsIml0ZW1zIiwicXVlc3Rpb25UZXh0IiwiYW5zd2VycyIsImFuc3dlclRleHQiLCJpc0NvcnJlY3QiLCJydW5uYWJsZSIsImJpbmQiLCJmdW5jdGlvbnMiLCJmdW5jdGlvbl9jYWxsIiwicGlwZSIsIm1lc3NhZ2UiLCJjb250ZW50IiwidGV4dCIsImpvaW4iLCJyZXN1bHQiLCJpbnZva2UiLCJjb25zb2xlIiwibG9nIiwicXVpeklkIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/quiz/generate/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/quiz/generate/saveToDb.tsx":
/*!************************************************!*\
  !*** ./src/app/api/quiz/generate/saveToDb.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveQuiz)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db */ \"(rsc)/./src/db/index.ts\");\n/* harmony import */ var _db_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/schema */ \"(rsc)/./src/db/schema.ts\");\n\n\nasync function saveQuiz(quizData) {\n    const { name, description, questions } = quizData;\n    const newQuiz = await _db__WEBPACK_IMPORTED_MODULE_0__.db.insert(_db_schema__WEBPACK_IMPORTED_MODULE_1__.quizes).values({\n        name,\n        description\n    }).returning({\n        insertedId: _db_schema__WEBPACK_IMPORTED_MODULE_1__.quizes.id\n    });\n    const quizId = newQuiz[0].insertedId;\n    await _db__WEBPACK_IMPORTED_MODULE_0__.db.transaction(async (tx)=>{\n        for (const question of questions){\n            const [{ questionId }] = await tx.insert(_db_schema__WEBPACK_IMPORTED_MODULE_1__.questions).values({\n                questionText: question.questionText,\n                quizId\n            }).returning({\n                questionId: _db_schema__WEBPACK_IMPORTED_MODULE_1__.questions.id\n            });\n            if (question.answers && question.answers.length > 0) {\n                await tx.insert(_db_schema__WEBPACK_IMPORTED_MODULE_1__.questionAnswers).values(question.answers.map((answer)=>({\n                        answerText: answer.answerText,\n                        isCorrect: answer.isCorrect,\n                        questionId\n                    })));\n            }\n        }\n    });\n    return {\n        quizId\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9xdWl6L2dlbmVyYXRlL3NhdmVUb0RiLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDc0Q7QUFZakUsZUFBZUssU0FBU0MsUUFBc0I7SUFDekQsTUFBTSxFQUFDQyxJQUFJLEVBQUNDLFdBQVcsRUFBQ04sU0FBUyxFQUFDLEdBQUdJO0lBQ3JDLE1BQU1HLFVBQVUsTUFBTVQsbUNBQUVBLENBQ3ZCVSxNQUFNLENBQUNULDhDQUFNQSxFQUNiVSxNQUFNLENBQUM7UUFDSko7UUFDQUM7SUFDSixHQUNDSSxTQUFTLENBQUM7UUFBRUMsWUFBWVosOENBQU1BLENBQUNhLEVBQUU7SUFBQTtJQUNsQyxNQUFNQyxTQUFTTixPQUFPLENBQUMsRUFBRSxDQUFDSSxVQUFVO0lBRXBDLE1BQU1iLG1DQUFFQSxDQUFDZ0IsV0FBVyxDQUFDLE9BQU1DO1FBQ3ZCLEtBQUssTUFBTUMsWUFBWWhCLFVBQVU7WUFDN0IsTUFBTSxDQUFDLEVBQUNpQixVQUFVLEVBQUMsQ0FBQyxHQUFHLE1BQU1GLEdBQzVCUCxNQUFNLENBQUNQLGlEQUFXQSxFQUNsQlEsTUFBTSxDQUFDO2dCQUNKUyxjQUFjRixTQUFTRSxZQUFZO2dCQUNuQ0w7WUFDSixHQUNDSCxTQUFTLENBQUM7Z0JBQUNPLFlBQVdoQixpREFBV0EsQ0FBQ1csRUFBRTtZQUFBO1lBRXJDLElBQUdJLFNBQVNHLE9BQU8sSUFBSUgsU0FBU0csT0FBTyxDQUFDQyxNQUFNLEdBQUcsR0FBRTtnQkFDL0MsTUFBTUwsR0FBR1AsTUFBTSxDQUFDTix1REFBZUEsRUFBRU8sTUFBTSxDQUNuQ08sU0FBU0csT0FBTyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsU0FBVzt3QkFDN0JDLFlBQVlELE9BQU9DLFVBQVU7d0JBQzdCQyxXQUFXRixPQUFPRSxTQUFTO3dCQUMzQlA7b0JBQ0o7WUFHUjtRQUNKO0lBQ0o7SUFFQSxPQUFPO1FBQUNKO0lBQU07QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9haS1mb3JtLWJ1aWxkZXItdHV0b3JpYWwvLi9zcmMvYXBwL2FwaS9xdWl6L2dlbmVyYXRlL3NhdmVUb0RiLnRzeD85MTNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSBcIkAvZGJcIjtcbmltcG9ydCB7IHF1aXplcywgcXVlc3Rpb25zIGFzIGRiUXVlc3Rpb25zLCBxdWVzdGlvbkFuc3dlcnMgfSBmcm9tIFwiQC9kYi9zY2hlbWFcIjtcbmltcG9ydCB7IEluZmVySW5zZXJ0TW9kZWwgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IGlzQ29udGV4dCB9IGZyb20gXCJ2bVwiO1xuXG50eXBlIFF1aXogPSBJbmZlckluc2VydE1vZGVsPHR5cGVvZiBxdWl6ZXM+O1xudHlwZSBRdWVzdGlvbiA9IEluZmVySW5zZXJ0TW9kZWw8dHlwZW9mIGRiUXVlc3Rpb25zPjtcbnR5cGUgQW5zd2VyID0gSW5mZXJJbnNlcnRNb2RlbDx0eXBlb2YgcXVlc3Rpb25BbnN3ZXJzPjtcblxuaW50ZXJmYWNlIFNhdmVRdWl6RGF0YSBleHRlbmRzIFF1aXoge1xuICAgIHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb24gJiB7YW5zd2VycyA/OiBBbnN3ZXJbXX0+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzYXZlUXVpeihxdWl6RGF0YTogU2F2ZVF1aXpEYXRhKSB7XG4gICAgY29uc3Qge25hbWUsZGVzY3JpcHRpb24scXVlc3Rpb25zfSA9IHF1aXpEYXRhO1xuICAgIGNvbnN0IG5ld1F1aXogPSBhd2FpdCBkYlxuICAgIC5pbnNlcnQocXVpemVzKVxuICAgIC52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvblxuICAgIH0pXG4gICAgLnJldHVybmluZyh7IGluc2VydGVkSWQ6IHF1aXplcy5pZH0pO1xuICAgIGNvbnN0IHF1aXpJZCA9IG5ld1F1aXpbMF0uaW5zZXJ0ZWRJZDtcblxuICAgIGF3YWl0IGRiLnRyYW5zYWN0aW9uKGFzeW5jKHR4KSA9PntcbiAgICAgICAgZm9yIChjb25zdCBxdWVzdGlvbiBvZiBxdWVzdGlvbnMpe1xuICAgICAgICAgICAgY29uc3QgW3txdWVzdGlvbklkfV0gPSBhd2FpdCB0eFxuICAgICAgICAgICAgLmluc2VydChkYlF1ZXN0aW9ucylcbiAgICAgICAgICAgIC52YWx1ZXMoe1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDogcXVlc3Rpb24ucXVlc3Rpb25UZXh0LFxuICAgICAgICAgICAgICAgIHF1aXpJZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXR1cm5pbmcoe3F1ZXN0aW9uSWQ6ZGJRdWVzdGlvbnMuaWR9KTtcblxuICAgICAgICAgICAgaWYocXVlc3Rpb24uYW5zd2VycyAmJiBxdWVzdGlvbi5hbnN3ZXJzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGF3YWl0IHR4Lmluc2VydChxdWVzdGlvbkFuc3dlcnMpLnZhbHVlcyhcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFuc3dlcikgPT4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyVGV4dDogYW5zd2VyLmFuc3dlclRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvcnJlY3Q6IGFuc3dlci5pc0NvcnJlY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbklkXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHtxdWl6SWR9O1xufSJdLCJuYW1lcyI6WyJkYiIsInF1aXplcyIsInF1ZXN0aW9ucyIsImRiUXVlc3Rpb25zIiwicXVlc3Rpb25BbnN3ZXJzIiwic2F2ZVF1aXoiLCJxdWl6RGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIm5ld1F1aXoiLCJpbnNlcnQiLCJ2YWx1ZXMiLCJyZXR1cm5pbmciLCJpbnNlcnRlZElkIiwiaWQiLCJxdWl6SWQiLCJ0cmFuc2FjdGlvbiIsInR4IiwicXVlc3Rpb24iLCJxdWVzdGlvbklkIiwicXVlc3Rpb25UZXh0IiwiYW5zd2VycyIsImxlbmd0aCIsIm1hcCIsImFuc3dlciIsImFuc3dlclRleHQiLCJpc0NvcnJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/quiz/generate/saveToDb.tsx\n");

/***/ }),

/***/ "(rsc)/./src/db/index.ts":
/*!*************************!*\
  !*** ./src/db/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_postgres_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/postgres-js */ \"(rsc)/./node_modules/drizzle-orm/postgres-js/driver.js\");\n/* harmony import */ var postgres__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postgres */ \"(rsc)/./node_modules/postgres/src/index.js\");\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ \"(rsc)/./src/db/schema.ts\");\n\n\n\nconst connectionString = process.env.DATABASE_URL || \"postgres://postgres:postgres@localhost:5432/postgres\";\nconst client = (0,postgres__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(connectionString);\nconst db = (0,drizzle_orm_postgres_js__WEBPACK_IMPORTED_MODULE_2__.drizzle)(client, {\n    schema: _schema__WEBPACK_IMPORTED_MODULE_1__\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNsQjtBQUNHO0FBRW5DLE1BQU1HLG1CQUNKQyxRQUFRQyxHQUFHLENBQUNDLFlBQVksSUFDeEI7QUFFRixNQUFNQyxTQUFTTixvREFBUUEsQ0FBQ0U7QUFDakIsTUFBTUssS0FBS1IsZ0VBQU9BLENBQUNPLFFBQVE7SUFBRUwsTUFBTUEsc0NBQUFBO0FBQUMsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWZvcm0tYnVpbGRlci10dXRvcmlhbC8uL3NyYy9kYi9pbmRleC50cz9kYWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRyaXp6bGUgfSBmcm9tIFwiZHJpenpsZS1vcm0vcG9zdGdyZXMtanNcIjtcbmltcG9ydCBwb3N0Z3JlcyBmcm9tIFwicG9zdGdyZXNcIjtcbmltcG9ydCAqIGFzIHNjaGVtYSBmcm9tIFwiLi9zY2hlbWFcIjtcblxuY29uc3QgY29ubmVjdGlvblN0cmluZyA9XG4gIHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB8fFxuICBcInBvc3RncmVzOi8vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjU0MzIvcG9zdGdyZXNcIjtcblxuY29uc3QgY2xpZW50ID0gcG9zdGdyZXMoY29ubmVjdGlvblN0cmluZyk7XG5leHBvcnQgY29uc3QgZGIgPSBkcml6emxlKGNsaWVudCwgeyBzY2hlbWEgfSk7XG4iXSwibmFtZXMiOlsiZHJpenpsZSIsInBvc3RncmVzIiwic2NoZW1hIiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJjbGllbnQiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/db/index.ts\n");

/***/ }),

/***/ "(rsc)/./src/db/schema.ts":
/*!**************************!*\
  !*** ./src/db/schema.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   questionAnswers: () => (/* binding */ questionAnswers),\n/* harmony export */   questionAnswersRelations: () => (/* binding */ questionAnswersRelations),\n/* harmony export */   questions: () => (/* binding */ questions),\n/* harmony export */   questionsRelations: () => (/* binding */ questionsRelations),\n/* harmony export */   quizes: () => (/* binding */ quizes),\n/* harmony export */   quizesRelations: () => (/* binding */ quizesRelations)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/table.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/serial.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/text.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/integer.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/boolean.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/relations.js\");\n\n\nconst quizes = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"quizes\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    name: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"name\"),\n    description: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"description\"),\n    userId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"user_id\")\n});\nconst quizesRelations = (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.relations)(quizes, ({ many, one })=>({\n        questions: many(questions)\n    }));\nconst questions = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"questions\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    questionText: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"question_text\"),\n    quizId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__.integer)(\"quiz_id\")\n});\nconst questionsRelations = (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.relations)(questions, ({ one, many })=>({\n        quiz: one(quizes, {\n            fields: [\n                questions.quizId\n            ],\n            references: [\n                quizes.id\n            ]\n        }),\n        answers: many(questionAnswers)\n    }));\nconst questionAnswers = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"answers\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.serial)(\"id\").primaryKey(),\n    questionId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_4__.integer)(\"question_id\"),\n    answerText: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.text)(\"answer_text\"),\n    isCorrect: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_5__.boolean)(\"is_correct\")\n});\nconst questionAnswersRelations = (0,drizzle_orm__WEBPACK_IMPORTED_MODULE_3__.relations)(questionAnswers, ({ one })=>({\n        question: one(questions, {\n            fields: [\n                questionAnswers.questionId\n            ],\n            references: [\n                questions.id\n            ]\n        })\n    }));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvc2NoZW1hLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVM2QjtBQUVTO0FBRS9CLE1BQU1NLFNBQVNOLDREQUFPQSxDQUFDLFVBQVM7SUFDbkNPLElBQUlKLDJEQUFNQSxDQUFDLE1BQU1LLFVBQVU7SUFDM0JDLE1BQU1SLHlEQUFJQSxDQUFDO0lBQ1hTLGFBQWFULHlEQUFJQSxDQUFDO0lBQ2xCVSxRQUFRVix5REFBSUEsQ0FBQztBQUVqQixHQUFHO0FBRUksTUFBTVcsa0JBQWtCUCxzREFBU0EsQ0FBQ0MsUUFBTyxDQUFDLEVBQUNPLElBQUksRUFBRUMsR0FBRyxFQUFDLEdBQUk7UUFDNURDLFdBQVdGLEtBQUtFO0lBQ3BCLElBQUk7QUFFRyxNQUFNQSxZQUFZZiw0REFBT0EsQ0FBQyxhQUFZO0lBQ3pDTyxJQUFJSiwyREFBTUEsQ0FBQyxNQUFNSyxVQUFVO0lBQzNCUSxjQUFjZix5REFBSUEsQ0FBQztJQUNuQmdCLFFBQVFmLDREQUFPQSxDQUFDO0FBQ3BCLEdBQUc7QUFFSSxNQUFNZ0IscUJBQXFCYixzREFBU0EsQ0FBQ1UsV0FBVyxDQUFDLEVBQUNELEdBQUcsRUFBRUQsSUFBSSxFQUFDLEdBQUs7UUFDcEVNLE1BQUtMLElBQUlSLFFBQU87WUFDWmMsUUFBTztnQkFBQ0wsVUFBVUUsTUFBTTthQUFDO1lBQ3pCSSxZQUFZO2dCQUFDZixPQUFPQyxFQUFFO2FBQUM7UUFDM0I7UUFDQWUsU0FBU1QsS0FBS1U7SUFDbEIsSUFBSTtBQUVHLE1BQU1BLGtCQUFrQnZCLDREQUFPQSxDQUFDLFdBQVU7SUFDN0NPLElBQUlKLDJEQUFNQSxDQUFDLE1BQU1LLFVBQVU7SUFDM0JnQixZQUFZdEIsNERBQU9BLENBQUM7SUFDcEJ1QixZQUFZeEIseURBQUlBLENBQUM7SUFDakJ5QixXQUFXdEIsNERBQU9BLENBQUM7QUFDdkIsR0FBRztBQUVJLE1BQU11QiwyQkFBMkJ0QixzREFBU0EsQ0FBQ2tCLGlCQUFpQixDQUFDLEVBQUNULEdBQUcsRUFBQyxHQUFJO1FBQ3pFYyxVQUFVZCxJQUFJQyxXQUFVO1lBQ3BCSyxRQUFPO2dCQUFDRyxnQkFBZ0JDLFVBQVU7YUFBQztZQUNuQ0gsWUFBWTtnQkFBQ04sVUFBVVIsRUFBRTthQUFDO1FBQzlCO0lBQ0osSUFBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2FpLWZvcm0tYnVpbGRlci10dXRvcmlhbC8uL3NyYy9kYi9zY2hlbWEudHM/ZjAxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7XG4gICAgdGltZXN0YW1wLFxuICAgIHBnVGFibGUsXG4gICAgdGV4dCxcbiAgICBwcmltYXJ5S2V5LFxuICAgIGludGVnZXIsXG4gICAgc2VyaWFsLFxuICAgIGJvb2xlYW4sXG4gICAgcGdFbnVtLFxufSBmcm9tIFwiZHJpenpsZS1vcm0vcGctY29yZVwiO1xuaW1wb3J0IHR5cGUge0FkYXB0ZXJBY2NvdW50fSBmcm9tIFwiQGF1dGgvY29yZS9hZGFwdGVyc1wiO1xuaW1wb3J0IHtyZWxhdGlvbnN9IGZyb20gXCJkcml6emxlLW9ybVwiO1xuXG5leHBvcnQgY29uc3QgcXVpemVzID0gcGdUYWJsZShcInF1aXplc1wiLHtcbiAgICBpZDogc2VyaWFsKFwiaWRcIikucHJpbWFyeUtleSgpLFxuICAgIG5hbWU6IHRleHQoXCJuYW1lXCIpLFxuICAgIGRlc2NyaXB0aW9uOiB0ZXh0KFwiZGVzY3JpcHRpb25cIiksXG4gICAgdXNlcklkOiB0ZXh0KFwidXNlcl9pZFwiKSxcblxufSk7XG5cbmV4cG9ydCBjb25zdCBxdWl6ZXNSZWxhdGlvbnMgPSByZWxhdGlvbnMocXVpemVzLCh7bWFueSwgb25lfSk9Pih7XG4gICAgcXVlc3Rpb25zOiBtYW55KHF1ZXN0aW9ucyksXG59KSk7XG5cbmV4cG9ydCBjb25zdCBxdWVzdGlvbnMgPSBwZ1RhYmxlKFwicXVlc3Rpb25zXCIse1xuICAgIGlkOiBzZXJpYWwoXCJpZFwiKS5wcmltYXJ5S2V5KCksXG4gICAgcXVlc3Rpb25UZXh0OiB0ZXh0KFwicXVlc3Rpb25fdGV4dFwiKSxcbiAgICBxdWl6SWQ6IGludGVnZXIoXCJxdWl6X2lkXCIpXG59KTtcblxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uc1JlbGF0aW9ucyA9IHJlbGF0aW9ucyhxdWVzdGlvbnMsICh7b25lLCBtYW55fSkgPT4oe1xuICAgIHF1aXo6b25lKHF1aXplcyx7XG4gICAgICAgIGZpZWxkczpbcXVlc3Rpb25zLnF1aXpJZF0sXG4gICAgICAgIHJlZmVyZW5jZXM6IFtxdWl6ZXMuaWRdLFxuICAgIH0pLFxuICAgIGFuc3dlcnM6IG1hbnkocXVlc3Rpb25BbnN3ZXJzKSxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uQW5zd2VycyA9IHBnVGFibGUoXCJhbnN3ZXJzXCIse1xuICAgIGlkOiBzZXJpYWwoXCJpZFwiKS5wcmltYXJ5S2V5KCksXG4gICAgcXVlc3Rpb25JZDogaW50ZWdlcihcInF1ZXN0aW9uX2lkXCIpLFxuICAgIGFuc3dlclRleHQ6IHRleHQoXCJhbnN3ZXJfdGV4dFwiKSxcbiAgICBpc0NvcnJlY3Q6IGJvb2xlYW4oXCJpc19jb3JyZWN0XCIpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBxdWVzdGlvbkFuc3dlcnNSZWxhdGlvbnMgPSByZWxhdGlvbnMocXVlc3Rpb25BbnN3ZXJzLCAoe29uZX0pPT4oe1xuICAgIHF1ZXN0aW9uOiBvbmUocXVlc3Rpb25zLHtcbiAgICAgICAgZmllbGRzOltxdWVzdGlvbkFuc3dlcnMucXVlc3Rpb25JZF0sXG4gICAgICAgIHJlZmVyZW5jZXM6IFtxdWVzdGlvbnMuaWRdXG4gICAgfSlcbn0pKVxuXG4iXSwibmFtZXMiOlsicGdUYWJsZSIsInRleHQiLCJpbnRlZ2VyIiwic2VyaWFsIiwiYm9vbGVhbiIsInJlbGF0aW9ucyIsInF1aXplcyIsImlkIiwicHJpbWFyeUtleSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVzZXJJZCIsInF1aXplc1JlbGF0aW9ucyIsIm1hbnkiLCJvbmUiLCJxdWVzdGlvbnMiLCJxdWVzdGlvblRleHQiLCJxdWl6SWQiLCJxdWVzdGlvbnNSZWxhdGlvbnMiLCJxdWl6IiwiZmllbGRzIiwicmVmZXJlbmNlcyIsImFuc3dlcnMiLCJxdWVzdGlvbkFuc3dlcnMiLCJxdWVzdGlvbklkIiwiYW5zd2VyVGV4dCIsImlzQ29ycmVjdCIsInF1ZXN0aW9uQW5zd2Vyc1JlbGF0aW9ucyIsInF1ZXN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/db/schema.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/langchain","vendor-chunks/@langchain","vendor-chunks/formdata-node","vendor-chunks/drizzle-orm","vendor-chunks/openai","vendor-chunks/zod-to-json-schema","vendor-chunks/form-data-encoder","vendor-chunks/postgres","vendor-chunks/langsmith","vendor-chunks/uuid","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/js-tiktoken","vendor-chunks/tr46","vendor-chunks/zod","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/web-streams-polyfill","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/eventemitter3","vendor-chunks/event-target-shim","vendor-chunks/decamelize","vendor-chunks/base64-js","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fquiz%2Fgenerate%2Froute&page=%2Fapi%2Fquiz%2Fgenerate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquiz%2Fgenerate%2Froute.ts&appDir=%2FUsers%2Fvyshnavikarumuru%2FDesktop%2FFlashCards_Quiz_AI%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fvyshnavikarumuru%2FDesktop%2FFlashCards_Quiz_AI&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();