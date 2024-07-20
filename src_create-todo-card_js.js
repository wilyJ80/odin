"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_create-todo-card_js"],{

/***/ "./src/create-todo-card.js":
/*!*********************************!*\
  !*** ./src/create-todo-card.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoCard: () => (/* binding */ createTodoCard)\n/* harmony export */ });\nfunction createTodoCard(main, name, activities) {\n  var cardRemoveBtn;\n  var card = document.createElement('div');\n  card.classList.add('card', 'bg-primary', 'w-fit', 'shadow-xl', 'text-primary-content', 'h-full', 'w-full');\n  (function (card) {\n    var cardBody = document.createElement('div');\n    cardBody.classList.add('card-body');\n    (function (cardBody) {\n      var cardTitle = document.createElement('h2');\n      cardTitle.textContent = name;\n      cardTitle.classList.add('card-title');\n      cardBody.appendChild(cardTitle);\n    })(cardBody);\n    (function (cardBody) {\n      var cardContent = document.createElement('p');\n      cardContent.textContent = activities;\n      cardBody.appendChild(cardContent);\n    })(cardBody);\n    var cardActions = document.createElement('div');\n    cardActions.classList.add('card-actions', 'justify-end');\n    cardRemoveBtn = function (cardActions) {\n      var removeBtn = document.createElement('button');\n      removeBtn.classList.add('btn', 'btn-error');\n      removeBtn.textContent = 'Remove';\n      cardActions.appendChild(removeBtn);\n      return removeBtn;\n    }(cardActions);\n    cardBody.appendChild(cardActions);\n    card.appendChild(cardBody);\n  })(card);\n  main.appendChild(card);\n  return {\n    card: card,\n    button: cardRemoveBtn\n  };\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/create-todo-card.js?");

/***/ })

}]);