"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_create-card-adder_js"],{

/***/ "./src/create-card-adder.js":
/*!**********************************!*\
  !*** ./src/create-card-adder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCardAdder: () => (/* binding */ createCardAdder)\n/* harmony export */ });\nfunction createCardAdder(main) {\n  var cardAdderBtn;\n  var input, activitiesTextArea;\n  var card = document.createElement('div');\n  card.classList.add('card', 'bg-base-100', 'shadow-xl');\n  (function (card) {\n    var cardBody = document.createElement('div');\n    cardBody.classList.add('card-body');\n    (function (cardBody) {\n      var cardTitle = document.createElement('h2');\n      cardTitle.textContent = 'Create a new TODO!';\n      cardTitle.classList.add('card-title');\n      cardBody.appendChild(cardTitle);\n    })(cardBody);\n    (function (cardBody) {\n      var nameLabel = document.createElement('label');\n      nameLabel.textContent = 'Name';\n      nameLabel.classList.add('input', 'input-bordered', 'flex', 'items-center', 'gap-2');\n      (function (nameLabel) {\n        input = document.createElement('input');\n        input.type = 'text';\n        input.placeholder = 'Your TODO name';\n        nameLabel.appendChild(input);\n      })(nameLabel);\n      var activitiesForm = document.createElement('label');\n      activitiesForm.classList.add('form-control');\n      (function (activitiesForm) {\n        var activitiesLabel = document.createElement('div');\n        activitiesLabel.classList.add('label', 'p-0');\n        (function (activitiesLabel) {\n          activitiesTextArea = document.createElement('textarea');\n          activitiesTextArea.classList.add('textarea', 'textarea-bordered', 'h-24', 'w-full');\n          activitiesTextArea.placeholder = 'What do you want to do?';\n          activitiesLabel.appendChild(activitiesTextArea);\n        })(activitiesLabel);\n        activitiesForm.appendChild(activitiesLabel);\n      })(activitiesForm);\n      var cardActions = document.createElement('div');\n      cardActions.classList.add('card-actions', 'justify-end');\n      cardAdderBtn = function (cardActions) {\n        var createBtn = document.createElement('button');\n        createBtn.classList.add('btn', 'btn-primary');\n        createBtn.textContent = 'Add';\n        cardActions.appendChild(createBtn);\n        return createBtn;\n      }(cardActions);\n      cardBody.appendChild(cardActions);\n      cardBody.insertBefore(cardActions, null);\n      cardBody.insertBefore(activitiesForm, cardActions);\n      cardBody.insertBefore(nameLabel, activitiesForm);\n    })(cardBody);\n    card.appendChild(cardBody);\n  })(card);\n  main.appendChild(card);\n  return {\n    button: cardAdderBtn,\n    getInputValues: function getInputValues() {\n      return {\n        name: input.value,\n        activities: activitiesTextArea.value\n      };\n    },\n    resetForm: function resetForm() {\n      input.value = '';\n      activitiesTextArea.value = '';\n    }\n  };\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/create-card-adder.js?");

/***/ })

}]);