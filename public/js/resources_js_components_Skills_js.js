"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Skills_js"],{

/***/ "./resources/js/components/Skills.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Skills.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Skills)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var devextreme_react_tree_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-react/tree-view */ "./node_modules/devextreme-react/tree-view.js");
/* harmony import */ var devextreme_react_tree_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_react_tree_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_react_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-react/button */ "./node_modules/devextreme-react/button.js");
/* harmony import */ var devextreme_react_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_react_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var skillsList = [{
  id: 1,
  name: "Front End"
}, {
  id: 2,
  name: "Back End"
}, {
  id: 3,
  name: "Other tools/concepts"
}, {
  id: 4,
  name: "Javascript",
  parentId: 1
}, {
  id: 5,
  name: "Frameworks",
  parentId: 4
}, {
  id: 6,
  name: "Laravel PHP",
  parentId: 2,
  level: 3
}, {
  id: 7,
  name: "Git / Version Control",
  parentId: 3,
  level: 3
}, {
  id: 8,
  name: "Ruby on Rails",
  parentId: 2,
  level: 3
}, {
  id: 9,
  name: "Javascript",
  parentId: 2
}, {
  id: 10,
  name: "Node Express",
  parentId: 9,
  level: 2
}, {
  id: 11,
  name: "Databases"
}, {
  id: 12,
  name: "MsSQL",
  parentId: 15,
  level: 4
}, {
  id: 13,
  name: "MySQL",
  parentId: 15,
  level: 3
}, {
  id: 14,
  name: "PlSQL",
  parentId: 15,
  level: 2
}, {
  id: 15,
  name: "Relational",
  parentId: 11
}, {
  id: 16,
  name: "Graph",
  parentId: 11
}, {
  id: 17,
  name: "Neo4j",
  parentId: 16,
  level: 2
}, {
  id: 18,
  name: "CSS",
  parentId: 1
}, {
  id: 19,
  name: "Frameworks",
  parentId: 18
}, {
  id: 20,
  name: "Preprocessors",
  parentId: 18
}, {
  id: 21,
  name: "Bootstrap",
  parentId: 19,
  level: 2
}, {
  id: 22,
  name: "Tailwind",
  parentId: 19,
  level: 2
}, {
  id: 23,
  name: "Sass/Scss",
  parentId: 20,
  level: 2
}, {
  id: 24,
  name: "React",
  parentId: 5,
  level: 4,
  expanded: true
}, {
  id: 25,
  name: "Libraries/Tools",
  parentId: 4
}, {
  id: 26,
  name: "DevExtreme",
  parentId: 25,
  level: 4
}, {
  id: 27,
  name: "D3",
  parentId: 25,
  level: 2
}, {
  id: 28,
  name: "Other Languages"
}, {
  id: 29,
  name: "C#",
  parentId: 28,
  level: 3
}, {
  id: 30,
  name: "Java",
  parentId: 28,
  level: 3
}, {
  id: 31,
  name: "Python",
  parentId: 28,
  level: 2
}, {
  id: 32,
  name: "REST API",
  parentId: 3,
  level: 4
}, {
  id: 33,
  name: "JWT",
  parentId: 3,
  level: 2
}, {
  id: 34,
  name: "Session Security",
  parentId: 3,
  level: 3
}];

var renderTreeViewItem = function renderTreeViewItem(_ref) {
  var data = _ref.data;
  var cname = data.level ? "treeView-item treeView-item-underline" : "treeView-item";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: cname,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      children: data.name
    }), data.level && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      children: [data.level, " of 5"]
    })]
  });
};

function Skills() {
  var treeViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var expandAllNodes = function expandAllNodes() {
    treeViewRef.current.instance.expandAll();
  };

  var collapseAllNodes = function collapseAllNodes() {
    treeViewRef.current.instance.collapseAll();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "button-controls",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((devextreme_react_button__WEBPACK_IMPORTED_MODULE_2___default()), {
        text: "Expand all",
        icon: "expand",
        onClick: expandAllNodes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((devextreme_react_button__WEBPACK_IMPORTED_MODULE_2___default()), {
        text: "Collapse all",
        icon: "collapse",
        onClick: collapseAllNodes
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((devextreme_react_tree_view__WEBPACK_IMPORTED_MODULE_1___default()), {
      ref: treeViewRef,
      items: skillsList,
      itemComponent: renderTreeViewItem,
      dataStructure: "plain",
      displayExpr: "name",
      parentIdExpr: "parentId",
      keyExpr: "id"
    })]
  });
}

/***/ }),

/***/ "./node_modules/devextreme-react/button.js":
/*!*************************************************!*\
  !*** ./node_modules/devextreme-react/button.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
 * devextreme-react
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-react
 */


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button = void 0;
var button_1 = __webpack_require__(/*! devextreme/ui/button */ "./node_modules/devextreme/esm/ui/button.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var component_1 = __webpack_require__(/*! ./core/component */ "./node_modules/devextreme-react/core/component.js");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._WidgetClass = button_1.default;
        _this.independentEvents = ["onClick", "onContentReady", "onDisposing", "onInitialized"];
        _this._templateProps = [{
                tmplOption: "template",
                render: "render",
                component: "component",
                keyFn: "keyFn"
            }];
        return _this;
    }
    Object.defineProperty(Button.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(component_1.Component));
exports.Button = Button;
Button.propTypes = {
    accessKey: PropTypes.string,
    activeStateEnabled: PropTypes.bool,
    disabled: PropTypes.bool,
    focusStateEnabled: PropTypes.bool,
    height: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number,
        PropTypes.string
    ]),
    hint: PropTypes.string,
    hoverStateEnabled: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    onContentReady: PropTypes.func,
    onDisposing: PropTypes.func,
    onInitialized: PropTypes.func,
    onOptionChanged: PropTypes.func,
    rtlEnabled: PropTypes.bool,
    stylingMode: PropTypes.oneOf([
        "text",
        "outlined",
        "contained"
    ]),
    tabIndex: PropTypes.number,
    text: PropTypes.string,
    type: PropTypes.oneOf([
        "back",
        "danger",
        "default",
        "normal",
        "success"
    ]),
    useSubmitBehavior: PropTypes.bool,
    validationGroup: PropTypes.string,
    visible: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number,
        PropTypes.string
    ])
};
exports.default = Button;


/***/ }),

/***/ "./node_modules/devextreme-react/tree-view.js":
/*!****************************************************!*\
  !*** ./node_modules/devextreme-react/tree-view.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
 * devextreme-react
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-react
 */


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchEditorOptions = exports.Options = exports.Item = exports.Button = exports.TreeView = void 0;
var tree_view_1 = __webpack_require__(/*! devextreme/ui/tree_view */ "./node_modules/devextreme/esm/ui/tree_view.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var component_1 = __webpack_require__(/*! ./core/component */ "./node_modules/devextreme-react/core/component.js");
var nested_option_1 = __webpack_require__(/*! ./core/nested-option */ "./node_modules/devextreme-react/core/nested-option.js");
var TreeView = /** @class */ (function (_super) {
    __extends(TreeView, _super);
    function TreeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._WidgetClass = tree_view_1.default;
        _this.subscribableOptions = ["items"];
        _this.independentEvents = ["onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemCollapsed", "onItemContextMenu", "onItemExpanded", "onItemHold", "onItemRendered"];
        _this._defaults = {
            defaultItems: "items"
        };
        _this._expectedChildren = {
            item: { optionName: "items", isCollectionItem: true },
            searchEditorOptions: { optionName: "searchEditorOptions", isCollectionItem: false }
        };
        _this._templateProps = [{
                tmplOption: "itemTemplate",
                render: "itemRender",
                component: "itemComponent",
                keyFn: "itemKeyFn"
            }];
        return _this;
    }
    Object.defineProperty(TreeView.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    return TreeView;
}(component_1.Component));
exports.TreeView = TreeView;
TreeView.propTypes = {
    accessKey: PropTypes.string,
    activeStateEnabled: PropTypes.bool,
    animationEnabled: PropTypes.bool,
    createChildren: PropTypes.func,
    dataSource: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ]),
    dataStructure: PropTypes.oneOf([
        "plain",
        "tree"
    ]),
    disabled: PropTypes.bool,
    disabledExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    displayExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    expandAllEnabled: PropTypes.bool,
    expandedExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    expandEvent: PropTypes.oneOf([
        "dblclick",
        "click"
    ]),
    expandNodesRecursive: PropTypes.bool,
    focusStateEnabled: PropTypes.bool,
    hasItemsExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    height: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number,
        PropTypes.string
    ]),
    hint: PropTypes.string,
    hoverStateEnabled: PropTypes.bool,
    itemHoldTimeout: PropTypes.number,
    items: PropTypes.array,
    itemsExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    keyExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    noDataText: PropTypes.string,
    onContentReady: PropTypes.func,
    onDisposing: PropTypes.func,
    onInitialized: PropTypes.func,
    onItemClick: PropTypes.func,
    onItemCollapsed: PropTypes.func,
    onItemContextMenu: PropTypes.func,
    onItemExpanded: PropTypes.func,
    onItemHold: PropTypes.func,
    onItemRendered: PropTypes.func,
    onItemSelectionChanged: PropTypes.func,
    onOptionChanged: PropTypes.func,
    onSelectAllValueChanged: PropTypes.func,
    onSelectionChanged: PropTypes.func,
    parentIdExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    rtlEnabled: PropTypes.bool,
    scrollDirection: PropTypes.oneOf([
        "both",
        "horizontal",
        "vertical"
    ]),
    searchEditorOptions: PropTypes.object,
    searchEnabled: PropTypes.bool,
    searchExpr: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.func,
        PropTypes.string
    ]),
    searchMode: PropTypes.oneOf([
        "contains",
        "startswith",
        "equals"
    ]),
    searchTimeout: PropTypes.number,
    searchValue: PropTypes.string,
    selectAllText: PropTypes.string,
    selectByClick: PropTypes.bool,
    selectedExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    selectionMode: PropTypes.oneOf([
        "multiple",
        "single"
    ]),
    selectNodesRecursive: PropTypes.bool,
    showCheckBoxesMode: PropTypes.oneOf([
        "none",
        "normal",
        "selectAll"
    ]),
    tabIndex: PropTypes.number,
    virtualModeEnabled: PropTypes.bool,
    visible: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number,
        PropTypes.string
    ])
};
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.OptionName = "buttons";
    Button.IsCollectionItem = true;
    Button.ExpectedChildren = {
        options: { optionName: "options", isCollectionItem: false }
    };
    return Button;
}(nested_option_1.default));
exports.Button = Button;
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.OptionName = "items";
    Item.IsCollectionItem = true;
    Item.TemplateProps = [{
            tmplOption: "template",
            render: "render",
            component: "component",
            keyFn: "keyFn"
        }];
    return Item;
}(nested_option_1.default));
exports.Item = Item;
var Options = /** @class */ (function (_super) {
    __extends(Options, _super);
    function Options() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Options.OptionName = "options";
    Options.TemplateProps = [{
            tmplOption: "template",
            render: "render",
            component: "component",
            keyFn: "keyFn"
        }];
    return Options;
}(nested_option_1.default));
exports.Options = Options;
var SearchEditorOptions = /** @class */ (function (_super) {
    __extends(SearchEditorOptions, _super);
    function SearchEditorOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchEditorOptions.OptionName = "searchEditorOptions";
    SearchEditorOptions.DefaultsProps = {
        defaultValue: "value"
    };
    SearchEditorOptions.ExpectedChildren = {
        button: { optionName: "buttons", isCollectionItem: true }
    };
    return SearchEditorOptions;
}(nested_option_1.default));
exports.SearchEditorOptions = SearchEditorOptions;
exports.default = TreeView;


/***/ }),

/***/ "./node_modules/devextreme/esm/events/double_click.js":
/*!************************************************************!*\
  !*** ./node_modules/devextreme/esm/events/double_click.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ DBLCLICK_EVENT_NAME)
/* harmony export */ });
/* harmony import */ var _events_core_events_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events/core/events_engine */ "./node_modules/devextreme/esm/events/core/events_engine.js");
/* harmony import */ var _core_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils/dom */ "./node_modules/devextreme/esm/core/utils/dom.js");
/* harmony import */ var _core_dom_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/dom_adapter */ "./node_modules/devextreme/esm/core/dom_adapter.js");
/* harmony import */ var _core_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/class */ "./node_modules/devextreme/esm/core/class.js");
/* harmony import */ var _core_event_registrator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/event_registrator */ "./node_modules/devextreme/esm/events/core/event_registrator.js");
/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./click */ "./node_modules/devextreme/esm/events/click.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/index */ "./node_modules/devextreme/esm/events/utils/index.js");
/**
 * DevExtreme (esm/events/double_click.js)
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */







var DBLCLICK_EVENT_NAME = "dxdblclick";
var DBLCLICK_NAMESPACE = "dxDblClick";
var NAMESPACED_CLICK_EVENT = (0,_utils_index__WEBPACK_IMPORTED_MODULE_6__.addNamespace)(_click__WEBPACK_IMPORTED_MODULE_5__.name, DBLCLICK_NAMESPACE);
var DBLCLICK_TIMEOUT = 300;
var DblClick = _core_class__WEBPACK_IMPORTED_MODULE_3__.default.inherit({
    ctor: function() {
        this._handlerCount = 0;
        this._forgetLastClick()
    },
    _forgetLastClick: function() {
        this._firstClickTarget = null;
        this._lastClickTimeStamp = -DBLCLICK_TIMEOUT
    },
    add: function() {
        if (this._handlerCount <= 0) {
            _events_core_events_engine__WEBPACK_IMPORTED_MODULE_0__.default.on(_core_dom_adapter__WEBPACK_IMPORTED_MODULE_2__.default.getDocument(), NAMESPACED_CLICK_EVENT, this._clickHandler.bind(this))
        }
        this._handlerCount++
    },
    _clickHandler: function(e) {
        var timeStamp = e.timeStamp || Date.now();
        var timeBetweenClicks = timeStamp - this._lastClickTimeStamp;
        var isSimulated = timeBetweenClicks < 0;
        var isDouble = !isSimulated && timeBetweenClicks < DBLCLICK_TIMEOUT;
        if (isDouble) {
            (0,_utils_index__WEBPACK_IMPORTED_MODULE_6__.fireEvent)({
                type: DBLCLICK_EVENT_NAME,
                target: (0,_core_utils_dom__WEBPACK_IMPORTED_MODULE_1__.closestCommonParent)(this._firstClickTarget, e.target),
                originalEvent: e
            });
            this._forgetLastClick()
        } else {
            this._firstClickTarget = e.target;
            this._lastClickTimeStamp = timeStamp
        }
    },
    remove: function() {
        this._handlerCount--;
        if (this._handlerCount <= 0) {
            this._forgetLastClick();
            _events_core_events_engine__WEBPACK_IMPORTED_MODULE_0__.default.off(_core_dom_adapter__WEBPACK_IMPORTED_MODULE_2__.default.getDocument(), NAMESPACED_CLICK_EVENT)
        }
    }
});
(0,_core_event_registrator__WEBPACK_IMPORTED_MODULE_4__.default)(DBLCLICK_EVENT_NAME, new DblClick);



/***/ }),

/***/ "./node_modules/devextreme/esm/ui/hierarchical_collection/ui.data_adapter.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/hierarchical_collection/ui.data_adapter.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/esm/core/class.js");
/* harmony import */ var _core_utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/esm/core/utils/common.js");
/* harmony import */ var _core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/esm/core/utils/iterator.js");
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/esm/core/utils/extend.js");
/* harmony import */ var _ui_widget_ui_errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/widget/ui.errors */ "./node_modules/devextreme/esm/ui/widget/ui.errors.js");
/* harmony import */ var _ui_widget_ui_search_box_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/widget/ui.search_box_mixin */ "./node_modules/devextreme/esm/ui/widget/ui.search_box_mixin.js");
/* harmony import */ var _core_utils_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/array */ "./node_modules/devextreme/esm/core/utils/array.js");
/* harmony import */ var _data_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/query */ "./node_modules/devextreme/esm/data/query.js");
/* harmony import */ var _data_store_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/store_helper */ "./node_modules/devextreme/esm/data/store_helper.js");
/* harmony import */ var _ui_data_converter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui.data_converter */ "./node_modules/devextreme/esm/ui/hierarchical_collection/ui.data_converter.js");
/**
 * DevExtreme (esm/ui/hierarchical_collection/ui.data_adapter.js)
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */











var EXPANDED = "expanded";
var SELECTED = "selected";
var DISABLED = "disabled";
var DataAdapter = _core_class__WEBPACK_IMPORTED_MODULE_0__.default.inherit({
    ctor: function(options) {
        this.options = {};
        (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_4__.extend)(this.options, this._defaultOptions(), options);
        this.options.dataConverter.setDataAccessors(this.options.dataAccessors);
        this._selectedNodesKeys = [];
        this._expandedNodesKeys = [];
        this._dataStructure = [];
        this._createInternalDataStructure();
        this.getTreeNodes()
    },
    setOption: function(name, value) {
        this.options[name] = value;
        if ("recursiveSelection" === name) {
            this._updateSelection()
        }
    },
    _defaultOptions: function() {
        return {
            dataAccessors: void 0,
            items: [],
            multipleSelection: true,
            recursiveSelection: false,
            recursiveExpansion: false,
            rootValue: 0,
            searchValue: "",
            dataType: "tree",
            searchMode: "contains",
            dataConverter: new _ui_data_converter__WEBPACK_IMPORTED_MODULE_10__.default,
            onNodeChanged: _core_utils_common__WEBPACK_IMPORTED_MODULE_1__.noop,
            sort: null
        }
    },
    _createInternalDataStructure: function() {
        this._initialDataStructure = this.options.dataConverter.createPlainStructure(this.options.items, this.options.rootValue, this.options.dataType);
        this._dataStructure = this.options.searchValue.length ? this.search(this.options.searchValue) : this._initialDataStructure;
        this.options.dataConverter._dataStructure = this._dataStructure;
        this._updateSelection();
        this._updateExpansion()
    },
    _updateSelection: function() {
        if (this.options.recursiveSelection) {
            this._setChildrenSelection();
            this._setParentSelection()
        }
        this._selectedNodesKeys = this._updateNodesKeysArray(SELECTED)
    },
    _updateExpansion: function(key) {
        if (this.options.recursiveExpansion) {
            key ? this._updateOneBranch(key) : this._setParentExpansion()
        }
        this._expandedNodesKeys = this._updateNodesKeysArray(EXPANDED)
    },
    _updateNodesKeysArray: function(property) {
        var that = this;
        var array = [];
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(that._getDataBySelectionMode(), (function(_, node) {
            if (!that._isNodeVisible(node)) {
                return
            }
            if (node.internalFields[property]) {
                if (property === EXPANDED || that.options.multipleSelection) {
                    array.push(node.internalFields.key)
                } else {
                    array.length && that.toggleSelection(array[0], false, true);
                    array = [node.internalFields.key]
                }
            }
        }));
        return array
    },
    _getDataBySelectionMode: function() {
        return this.options.multipleSelection ? this.getData() : this.getFullData()
    },
    _isNodeVisible: function(node) {
        return false !== node.internalFields.item.visible
    },
    _getByKey: function(data, key) {
        return data === this._dataStructure ? this.options.dataConverter._getByKey(key) : this.options.dataConverter.getByKey(data, key)
    },
    _setChildrenSelection: function() {
        var that = this;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(this._dataStructure, (function(_, node) {
            if (!node.internalFields.childrenKeys.length) {
                return
            }
            var isSelected = node.internalFields.selected;
            true === isSelected && that._toggleChildrenSelection(node, isSelected)
        }))
    },
    _setParentSelection: function() {
        var that = this;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(this._dataStructure, (function(_, node) {
            var parent = that.options.dataConverter.getParentNode(node);
            if (parent && node.internalFields.parentKey !== that.options.rootValue) {
                that._iterateParents(node, (function(parent) {
                    var newParentState = that._calculateSelectedState(parent);
                    that._setFieldState(parent, SELECTED, newParentState)
                }))
            }
        }))
    },
    _setParentExpansion: function() {
        var that = this;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(this._dataStructure, (function(_, node) {
            if (!node.internalFields.expanded) {
                return
            }
            that._updateOneBranch(node.internalFields.key)
        }))
    },
    _updateOneBranch: function(key) {
        var that = this;
        var node = this.getNodeByKey(key);
        that._iterateParents(node, (function(parent) {
            that._setFieldState(parent, EXPANDED, true)
        }))
    },
    _iterateChildren: function(node, recursive, callback, processedKeys) {
        if (!(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_3__.isFunction)(callback)) {
            return
        }
        var that = this;
        var nodeKey = node.internalFields.key;
        processedKeys = processedKeys || [];
        if (-1 === processedKeys.indexOf(nodeKey)) {
            processedKeys.push(nodeKey);
            (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(node.internalFields.childrenKeys, (function(_, key) {
                var child = that.getNodeByKey(key);
                callback(child);
                if (child.internalFields.childrenKeys.length && recursive) {
                    that._iterateChildren(child, recursive, callback, processedKeys)
                }
            }))
        }
    },
    _iterateParents: function(node, callback, processedKeys) {
        if (node.internalFields.parentKey === this.options.rootValue || !(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_3__.isFunction)(callback)) {
            return
        }
        processedKeys = processedKeys || [];
        var key = node.internalFields.key;
        if (-1 === processedKeys.indexOf(key)) {
            processedKeys.push(key);
            var parent = this.options.dataConverter.getParentNode(node);
            if (parent) {
                callback(parent);
                if (parent.internalFields.parentKey !== this.options.rootValue) {
                    this._iterateParents(parent, callback, processedKeys)
                }
            }
        }
    },
    _calculateSelectedState: function(node) {
        var itemsCount = node.internalFields.childrenKeys.length;
        var selectedItemsCount = 0;
        var invisibleItemsCount = 0;
        var result = false;
        for (var i = 0; i <= itemsCount - 1; i++) {
            var childNode = this.getNodeByKey(node.internalFields.childrenKeys[i]);
            var isChildInvisible = false === childNode.internalFields.item.visible;
            var childState = childNode.internalFields.selected;
            if (isChildInvisible) {
                invisibleItemsCount++;
                continue
            }
            if (childState) {
                selectedItemsCount++
            } else if (void 0 === childState) {
                selectedItemsCount += .5
            }
        }
        if (selectedItemsCount) {
            result = selectedItemsCount === itemsCount - invisibleItemsCount ? true : void 0
        }
        return result
    },
    _toggleChildrenSelection: function(node, state) {
        var that = this;
        this._iterateChildren(node, true, (function(child) {
            if (that._isNodeVisible(child)) {
                that._setFieldState(child, SELECTED, state)
            }
        }))
    },
    _setFieldState: function(node, field, state) {
        if (node.internalFields[field] === state) {
            return
        }
        node.internalFields[field] = state;
        if (node.internalFields.publicNode) {
            node.internalFields.publicNode[field] = state
        }
        this.options.dataAccessors.setters[field](node.internalFields.item, state);
        this.options.onNodeChanged(node)
    },
    _markChildren: function(keys) {
        var that = this;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(keys, (function(_, key) {
            var index = that.getIndexByKey(key);
            var node = that.getNodeByKey(key);
            that._dataStructure[index] = 0;
            node.internalFields.childrenKeys.length && that._markChildren(node.internalFields.childrenKeys)
        }))
    },
    _removeNode: function(key) {
        var node = this.getNodeByKey(key);
        this._dataStructure[this.getIndexByKey(key)] = 0;
        this._markChildren(node.internalFields.childrenKeys);
        var that = this;
        var counter = 0;
        var items = (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_4__.extend)([], this._dataStructure);
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(items, (function(index, item) {
            if (!item) {
                that._dataStructure.splice(index - counter, 1);
                counter++
            }
        }))
    },
    _addNode: function(item) {
        var dataConverter = this.options.dataConverter;
        var node = dataConverter._convertItemToNode(item, this.options.dataAccessors.getters.parentKey(item));
        this._dataStructure = this._dataStructure.concat(node);
        this._initialDataStructure = this._initialDataStructure.concat(node);
        dataConverter._dataStructure = dataConverter._dataStructure.concat(node)
    },
    _updateFields: function() {
        this.options.dataConverter.updateChildrenKeys();
        this._updateSelection();
        this._updateExpansion()
    },
    getSelectedNodesKeys: function() {
        return this._selectedNodesKeys
    },
    getExpandedNodesKeys: function() {
        return this._expandedNodesKeys
    },
    getData: function() {
        return this._dataStructure
    },
    getFullData: function() {
        return this._initialDataStructure
    },
    getNodeByItem: function(item) {
        var result = null;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(this._dataStructure, (function(_, node) {
            if (node.internalFields.item === item) {
                result = node;
                return false
            }
        }));
        return result
    },
    getNodesByItems: function(items) {
        var that = this;
        var nodes = [];
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(items, (function(_, item) {
            var node = that.getNodeByItem(item);
            node && nodes.push(node)
        }));
        return nodes
    },
    getNodeByKey: function(key, data) {
        return this._getByKey(data || this._getDataBySelectionMode(), key)
    },
    getTreeNodes: function() {
        return this.options.dataConverter.convertToPublicNodes(this.getRootNodes())
    },
    getItemsCount: function() {
        return this.options.dataConverter.getItemsCount()
    },
    getVisibleItemsCount: function() {
        return this.options.dataConverter.getVisibleItemsCount()
    },
    getPublicNode: function(node) {
        return node.internalFields.publicNode
    },
    getRootNodes: function() {
        return this.getChildrenNodes(this.options.rootValue)
    },
    getChildrenNodes: function(parentKey) {
        return (0,_data_query__WEBPACK_IMPORTED_MODULE_8__.default)(this._dataStructure).filter(["internalFields.parentKey", parentKey]).toArray()
    },
    getIndexByKey: function(key) {
        return this.options.dataConverter.getIndexByKey(key)
    },
    addItem: function(item) {
        this._addNode(item);
        this._updateFields()
    },
    removeItem: function(key) {
        this._removeNode(key);
        this._updateFields()
    },
    toggleSelection: function(key, state, selectRecursive) {
        var isSingleModeUnselect = this._isSingleModeUnselect(state);
        var node = this._getByKey(selectRecursive || isSingleModeUnselect ? this._initialDataStructure : this._dataStructure, key);
        this._setFieldState(node, SELECTED, state);
        if (this.options.recursiveSelection && !selectRecursive) {
            state ? this._setChildrenSelection() : this._toggleChildrenSelection(node, state);
            this._setParentSelection()
        }
        this._selectedNodesKeys = this._updateNodesKeysArray(SELECTED)
    },
    _isSingleModeUnselect: function(selectionState) {
        return !this.options.multipleSelection && !selectionState
    },
    toggleNodeDisabledState: function(key, state) {
        var node = this.getNodeByKey(key);
        this._setFieldState(node, DISABLED, state)
    },
    toggleSelectAll: function(state) {
        if (!(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_3__.isDefined)(state)) {
            return
        }
        var that = this;
        var lastSelectedKey = that._selectedNodesKeys[that._selectedNodesKeys.length - 1];
        var dataStructure = that._isSingleModeUnselect(state) ? this._initialDataStructure : this._dataStructure;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(dataStructure, (function(index, node) {
            if (!that._isNodeVisible(node)) {
                return
            }
            that._setFieldState(node, SELECTED, state)
        }));
        that._selectedNodesKeys = that._updateNodesKeysArray(SELECTED);
        if (!state && that.options.selectionRequired) {
            that.toggleSelection(lastSelectedKey, true)
        }
    },
    isAllSelected: function() {
        if (this.getSelectedNodesKeys().length) {
            return this.getSelectedNodesKeys().length === this.getVisibleItemsCount() ? true : void 0
        } else {
            return false
        }
    },
    toggleExpansion: function(key, state) {
        var node = this.getNodeByKey(key);
        this._setFieldState(node, EXPANDED, state);
        if (state) {
            this._updateExpansion(key)
        }
        this._expandedNodesKeys = this._updateNodesKeysArray(EXPANDED)
    },
    isFiltered: function(item) {
        return !this.options.searchValue.length || !!this._filterDataStructure(this.options.searchValue, [item]).length
    },
    _createCriteria: function(selector, value, operation) {
        var searchFilter = [];
        if (!Array.isArray(selector)) {
            return [selector, operation, value]
        }
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(selector, (function(i, item) {
            searchFilter.push([item, operation, value], "or")
        }));
        searchFilter.pop();
        return searchFilter
    },
    _filterDataStructure: function(filterValue, dataStructure) {
        var selector = this.options.searchExpr || this.options.dataAccessors.getters.display;
        var operation = _ui_widget_ui_search_box_mixin__WEBPACK_IMPORTED_MODULE_6__.default.getOperationBySearchMode(this.options.searchMode);
        var criteria = this._createCriteria(selector, filterValue, operation);
        dataStructure = dataStructure || this._initialDataStructure;
        return (0,_data_query__WEBPACK_IMPORTED_MODULE_8__.default)(dataStructure).filter(criteria).toArray()
    },
    search: function(searchValue) {
        var that = this;
        var matches = this._filterDataStructure(searchValue);
        var dataConverter = this.options.dataConverter;
        ! function lookForParents(matches, index) {
            var length = matches.length;
            while (index < length) {
                var node = matches[index];
                if (node.internalFields.parentKey === that.options.rootValue) {
                    index++;
                    continue
                }
                var parent = dataConverter.getParentNode(node);
                if (!parent) {
                    _ui_widget_ui_errors__WEBPACK_IMPORTED_MODULE_5__.default.log("W1007", node.internalFields.parentKey, node.internalFields.key);
                    index++;
                    continue
                }
                if (!parent.internalFields.expanded) {
                    that._setFieldState(parent, EXPANDED, true)
                }
                if ((0,_core_utils_array__WEBPACK_IMPORTED_MODULE_7__.inArray)(parent, matches) > -1) {
                    index++;
                    continue
                }
                matches.splice(index, 0, parent);
                lookForParents(matches, index)
            }
        }(matches, 0);
        if (this.options.sort) {
            matches = _data_store_helper__WEBPACK_IMPORTED_MODULE_9__.default.queryByOptions((0,_data_query__WEBPACK_IMPORTED_MODULE_8__.default)(matches), {
                sort: this.options.sort
            }).toArray()
        }
        dataConverter._indexByKey = {};
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_2__.each)(matches, (function(index, node) {
            node.internalFields.childrenKeys = [];
            dataConverter._indexByKey[node.internalFields.key] = index
        }));
        dataConverter._dataStructure = matches;
        dataConverter.setChildrenKeys();
        return dataConverter._dataStructure
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataAdapter);


/***/ }),

/***/ "./node_modules/devextreme/esm/ui/hierarchical_collection/ui.data_converter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/hierarchical_collection/ui.data_converter.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/class */ "./node_modules/devextreme/esm/core/class.js");
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/esm/core/utils/extend.js");
/* harmony import */ var _ui_widget_ui_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/widget/ui.errors */ "./node_modules/devextreme/esm/ui/widget/ui.errors.js");
/* harmony import */ var _core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/esm/core/utils/iterator.js");
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/**
 * DevExtreme (esm/ui/hierarchical_collection/ui.data_converter.js)
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */





var DataConverter = _core_class__WEBPACK_IMPORTED_MODULE_0__.default.inherit({
    ctor: function() {
        this._dataStructure = [];
        this._itemsCount = 0;
        this._visibleItemsCount = 0
    },
    _indexByKey: {},
    _convertItemsToNodes: function(items, parentKey) {
        var that = this;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(items, (function(_, item) {
            var parentId = (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__.isDefined)(parentKey) ? parentKey : that._getParentId(item);
            var node = that._convertItemToNode(item, parentId);
            that._dataStructure.push(node);
            that._checkForDuplicateId(node.internalFields.key);
            that._indexByKey[node.internalFields.key] = that._dataStructure.length - 1;
            if (that._itemHasChildren(item)) {
                that._convertItemsToNodes(that._dataAccessors.getters.items(item), node.internalFields.key)
            }
        }))
    },
    _checkForDuplicateId: function(key) {
        if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__.isDefined)(this._indexByKey[key])) {
            throw _ui_widget_ui_errors__WEBPACK_IMPORTED_MODULE_2__.default.Error("E1040", key)
        }
    },
    _getParentId: function(item) {
        return "plain" === this._dataType ? this._dataAccessors.getters.parentKey(item) : void 0
    },
    _itemHasChildren: function(item) {
        if ("plain" === this._dataType) {
            return
        }
        var items = this._dataAccessors.getters.items(item);
        return items && items.length
    },
    _getUniqueKey: function(item) {
        var keyGetter = this._dataAccessors.getters.key;
        var itemKey = keyGetter(item);
        var isCorrectKey = keyGetter && (itemKey || 0 === itemKey) && (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__.isPrimitive)(itemKey);
        return isCorrectKey ? itemKey : this.getItemsCount()
    },
    _convertItemToNode: function(item, parentKey) {
        this._itemsCount++;
        false !== item.visible && this._visibleItemsCount++;
        var node = {
            internalFields: {
                disabled: this._dataAccessors.getters.disabled(item, {
                    defaultValue: false
                }),
                expanded: this._dataAccessors.getters.expanded(item, {
                    defaultValue: false
                }),
                selected: this._dataAccessors.getters.selected(item, {
                    defaultValue: false
                }),
                key: this._getUniqueKey(item),
                parentKey: (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__.isDefined)(parentKey) ? parentKey : this._rootValue,
                item: this._makeObjectFromPrimitive(item),
                childrenKeys: []
            }
        };
        (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_1__.extend)(node, item);
        delete node.items;
        return node
    },
    setChildrenKeys: function() {
        var that = this;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(this._dataStructure, (function(_, node) {
            if (node.internalFields.parentKey === that._rootValue) {
                return
            }
            var parent = that.getParentNode(node);
            parent && parent.internalFields.childrenKeys.push(node.internalFields.key)
        }))
    },
    _makeObjectFromPrimitive: function(item) {
        if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__.isPrimitive)(item)) {
            var key = item;
            item = {};
            this._dataAccessors.setters.key(item, key)
        }
        return item
    },
    _convertToPublicNode: function(node, parent) {
        if (!node) {
            return null
        }
        var publicNode = {
            text: this._dataAccessors.getters.display(node),
            key: node.internalFields.key,
            selected: node.internalFields.selected,
            expanded: node.internalFields.expanded,
            disabled: node.internalFields.disabled,
            parent: parent || null,
            itemData: node.internalFields.item,
            children: [],
            items: []
        };
        if (publicNode.parent) {
            publicNode.parent.children.push(publicNode);
            publicNode.parent.items.push(publicNode)
        }
        return publicNode
    },
    convertToPublicNodes: function(data, parent) {
        if (!data.length) {
            return []
        }
        var that = this;
        var publicNodes = [];
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(data, (function(_, node) {
            node = (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_4__.isPrimitive)(node) ? that._getByKey(node) : node;
            var publicNode = that._convertToPublicNode(node, parent);
            publicNode.children = that.convertToPublicNodes(node.internalFields.childrenKeys, publicNode);
            publicNodes.push(publicNode);
            node.internalFields.publicNode = publicNode
        }));
        return publicNodes
    },
    setDataAccessors: function(accessors) {
        this._dataAccessors = accessors
    },
    _getByKey: function(key) {
        return this._dataStructure[this.getIndexByKey(key)] || null
    },
    getParentNode: function(node) {
        return this._getByKey(node.internalFields.parentKey)
    },
    getByKey: function(data, key) {
        if (null === key || void 0 === key) {
            return null
        }
        var result = null;
        var that = this;
        var getByKey = function(data, key) {
            (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(data, (function(_, element) {
                var currentElementKey = element.internalFields && element.internalFields.key || that._dataAccessors.getters.key(element);
                if (currentElementKey.toString() === key.toString()) {
                    result = element;
                    return false
                }
            }));
            return result
        };
        return getByKey(data, key)
    },
    getItemsCount: function() {
        return this._itemsCount
    },
    getVisibleItemsCount: function() {
        return this._visibleItemsCount
    },
    updateIndexByKey: function() {
        var that = this;
        this._indexByKey = {};
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(this._dataStructure, (function(index, node) {
            that._checkForDuplicateId(node.internalFields.key);
            that._indexByKey[node.internalFields.key] = index
        }))
    },
    updateChildrenKeys: function() {
        this._indexByKey = {};
        this.removeChildrenKeys();
        this.updateIndexByKey();
        this.setChildrenKeys()
    },
    removeChildrenKeys: function() {
        this._indexByKey = {};
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(this._dataStructure, (function(index, node) {
            node.internalFields.childrenKeys = []
        }))
    },
    getIndexByKey: function(key) {
        return this._indexByKey[key]
    },
    createPlainStructure: function(items, rootValue, dataType) {
        this._itemsCount = 0;
        this._visibleItemsCount = 0;
        this._rootValue = rootValue;
        this._dataType = dataType;
        this._indexByKey = {};
        this._convertItemsToNodes(items);
        this.setChildrenKeys();
        return this._dataStructure
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataConverter);


/***/ }),

/***/ "./node_modules/devextreme/esm/ui/hierarchical_collection/ui.hierarchical_collection_widget.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/hierarchical_collection/ui.hierarchical_collection_widget.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/esm/core/renderer.js");
/* harmony import */ var _core_utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils/data */ "./node_modules/devextreme/esm/core/utils/data.js");
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/esm/core/utils/extend.js");
/* harmony import */ var _core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/esm/core/utils/iterator.js");
/* harmony import */ var _core_devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/devices */ "./node_modules/devextreme/esm/core/devices.js");
/* harmony import */ var _core_utils_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/icon */ "./node_modules/devextreme/esm/core/utils/icon.js");
/* harmony import */ var _ui_data_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui.data_adapter */ "./node_modules/devextreme/esm/ui/hierarchical_collection/ui.data_adapter.js");
/* harmony import */ var _collection_ui_collection_widget_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../collection/ui.collection_widget.edit */ "./node_modules/devextreme/esm/ui/collection/ui.collection_widget.edit.js");
/* harmony import */ var _core_templates_bindable_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/templates/bindable_template */ "./node_modules/devextreme/esm/core/templates/bindable_template.js");
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/* harmony import */ var _core_utils_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/esm/core/utils/common.js");
/**
 * DevExtreme (esm/ui/hierarchical_collection/ui.hierarchical_collection_widget.js)
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */











var DISABLED_STATE_CLASS = "dx-state-disabled";
var HierarchicalCollectionWidget = _collection_ui_collection_widget_edit__WEBPACK_IMPORTED_MODULE_7__.default.inherit({
    _getDefaultOptions: function() {
        return (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_2__.extend)(this.callBase(), {
            keyExpr: "id",
            displayExpr: "text",
            selectedExpr: "selected",
            disabledExpr: "disabled",
            itemsExpr: "items",
            hoverStateEnabled: true,
            parentIdExpr: "parentId",
            expandedExpr: "expanded"
        })
    },
    _defaultOptionsRules: function() {
        return this.callBase().concat([{
            device: function() {
                return "desktop" === _core_devices__WEBPACK_IMPORTED_MODULE_4__.default.real().deviceType && !_core_devices__WEBPACK_IMPORTED_MODULE_4__.default.isSimulator()
            },
            options: {
                focusStateEnabled: true
            }
        }])
    },
    _init: function() {
        this.callBase();
        this._initAccessors();
        this._initDataAdapter();
        this._initDynamicTemplates()
    },
    _initDataSource: function() {
        this.callBase();
        this._dataSource && this._dataSource.paginate(false)
    },
    _initDataAdapter: function() {
        var accessors = this._createDataAdapterAccessors();
        this._dataAdapter = new _ui_data_adapter__WEBPACK_IMPORTED_MODULE_6__.default((0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_2__.extend)({
            dataAccessors: {
                getters: accessors.getters,
                setters: accessors.setters
            },
            items: this.option("items")
        }, this._getDataAdapterOptions()))
    },
    _getDataAdapterOptions: _core_utils_common__WEBPACK_IMPORTED_MODULE_10__.noop,
    _initDynamicTemplates: function() {
        var that = this;
        this._templateManager.addDefaultTemplates({
            item: new _core_templates_bindable_template__WEBPACK_IMPORTED_MODULE_8__.BindableTemplate(function($container, itemData) {
                $container.html(itemData.html).append(this._getIconContainer(itemData)).append(this._getTextContainer(itemData)).append(this._getPopoutContainer(itemData));
                that._addContentClasses(itemData, $container.parent())
            }.bind(this), ["text", "html", "items", "icon"], this.option("integrationOptions.watchMethod"), {
                text: this._displayGetter,
                items: this._itemsGetter
            })
        })
    },
    _getIconContainer: function(itemData) {
        return itemData.icon ? (0,_core_utils_icon__WEBPACK_IMPORTED_MODULE_5__.getImageContainer)(itemData.icon) : void 0
    },
    _getTextContainer: function(itemData) {
        return (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<span>").text(itemData.text)
    },
    _getPopoutContainer: _core_utils_common__WEBPACK_IMPORTED_MODULE_10__.noop,
    _addContentClasses: _core_utils_common__WEBPACK_IMPORTED_MODULE_10__.noop,
    _initAccessors: function() {
        var that = this;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(this._getAccessors(), (function(_, accessor) {
            that._compileAccessor(accessor)
        }));
        this._compileDisplayGetter()
    },
    _getAccessors: function() {
        return ["key", "selected", "items", "disabled", "parentId", "expanded"]
    },
    _getChildNodes: function(node) {
        var that = this;
        var arr = [];
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(node.internalFields.childrenKeys, (function(_, key) {
            var childNode = that._dataAdapter.getNodeByKey(key);
            arr.push(childNode)
        }));
        return arr
    },
    _hasChildren: function(node) {
        return node && node.internalFields.childrenKeys.length
    },
    _compileAccessor: function(optionName) {
        var getter = "_" + optionName + "Getter";
        var setter = "_" + optionName + "Setter";
        var optionExpr = this.option(optionName + "Expr");
        if (!optionExpr) {
            this[getter] = _core_utils_common__WEBPACK_IMPORTED_MODULE_10__.noop;
            this[setter] = _core_utils_common__WEBPACK_IMPORTED_MODULE_10__.noop;
            return
        } else if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_9__.isFunction)(optionExpr)) {
            this[setter] = function(obj, value) {
                obj[optionExpr()] = value
            };
            this[getter] = function(obj) {
                return obj[optionExpr()]
            };
            return
        }
        this[getter] = (0,_core_utils_data__WEBPACK_IMPORTED_MODULE_1__.compileGetter)(optionExpr);
        this[setter] = (0,_core_utils_data__WEBPACK_IMPORTED_MODULE_1__.compileSetter)(optionExpr)
    },
    _createDataAdapterAccessors: function() {
        var that = this;
        var accessors = {
            getters: {},
            setters: {}
        };
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_3__.each)(this._getAccessors(), (function(_, accessor) {
            var getterName = "_" + accessor + "Getter";
            var setterName = "_" + accessor + "Setter";
            var newAccessor = "parentId" === accessor ? "parentKey" : accessor;
            accessors.getters[newAccessor] = that[getterName];
            accessors.setters[newAccessor] = that[setterName]
        }));
        accessors.getters.display = !this._displayGetter ? itemData => itemData.text : this._displayGetter;
        return accessors
    },
    _initMarkup: function() {
        this.callBase();
        this._addWidgetClass()
    },
    _addWidgetClass: function() {
        this._focusTarget().addClass(this._widgetClass())
    },
    _widgetClass: _core_utils_common__WEBPACK_IMPORTED_MODULE_10__.noop,
    _renderItemFrame: function(index, itemData) {
        var $itemFrame = this.callBase.apply(this, arguments);
        $itemFrame.toggleClass(DISABLED_STATE_CLASS, !!this._disabledGetter(itemData));
        return $itemFrame
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "displayExpr":
            case "keyExpr":
                this._initAccessors();
                this._initDynamicTemplates();
                this.repaint();
                break;
            case "itemsExpr":
            case "selectedExpr":
            case "disabledExpr":
            case "expandedExpr":
            case "parentIdExpr":
                this._initAccessors();
                this._initDataAdapter();
                this.repaint();
                break;
            case "items":
                this._initDataAdapter();
                this.callBase(args);
                break;
            default:
                this.callBase(args)
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HierarchicalCollectionWidget);


/***/ }),

/***/ "./node_modules/devextreme/esm/ui/tree_view.js":
/*!*****************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/tree_view.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tree_view_ui_tree_view_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree_view/ui.tree_view.search */ "./node_modules/devextreme/esm/ui/tree_view/ui.tree_view.search.js");
/**
 * DevExtreme (esm/ui/tree_view.js)
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_tree_view_ui_tree_view_search__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/devextreme/esm/ui/tree_view/ui.tree_view.base.js":
/*!***********************************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/tree_view/ui.tree_view.base.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/esm/core/renderer.js");
/* harmony import */ var _core_dom_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/dom_adapter */ "./node_modules/devextreme/esm/core/dom_adapter.js");
/* harmony import */ var _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../events/core/events_engine */ "./node_modules/devextreme/esm/events/core/events_engine.js");
/* harmony import */ var _localization_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../localization/message */ "./node_modules/devextreme/esm/localization/message.js");
/* harmony import */ var _events_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../events/click */ "./node_modules/devextreme/esm/events/click.js");
/* harmony import */ var _core_utils_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/utils/common */ "./node_modules/devextreme/esm/core/utils/common.js");
/* harmony import */ var _core_utils_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/utils/window */ "./node_modules/devextreme/esm/core/utils/window.js");
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/esm/core/utils/extend.js");
/* harmony import */ var _core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/utils/iterator */ "./node_modules/devextreme/esm/core/utils/iterator.js");
/* harmony import */ var _core_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/element */ "./node_modules/devextreme/esm/core/element.js");
/* harmony import */ var _check_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../check_box */ "./node_modules/devextreme/esm/ui/check_box.js");
/* harmony import */ var _hierarchical_collection_ui_hierarchical_collection_widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hierarchical_collection/ui.hierarchical_collection_widget */ "./node_modules/devextreme/esm/ui/hierarchical_collection/ui.hierarchical_collection_widget.js");
/* harmony import */ var _events_utils_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../events/utils/index */ "./node_modules/devextreme/esm/events/utils/index.js");
/* harmony import */ var _events_pointer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../events/pointer */ "./node_modules/devextreme/esm/events/pointer.js");
/* harmony import */ var _events_double_click__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../events/double_click */ "./node_modules/devextreme/esm/events/double_click.js");
/* harmony import */ var _animation_fx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../animation/fx */ "./node_modules/devextreme/esm/animation/fx.js");
/* harmony import */ var _scroll_view_ui_scrollable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../scroll_view/ui.scrollable */ "./node_modules/devextreme/esm/ui/scroll_view/ui.scrollable.js");
/* harmony import */ var _load_indicator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../load_indicator */ "./node_modules/devextreme/esm/ui/load_indicator.js");
/* harmony import */ var _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/utils/deferred */ "./node_modules/devextreme/esm/core/utils/deferred.js");
/* harmony import */ var _widget_ui_errors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../widget/ui.errors */ "./node_modules/devextreme/esm/ui/widget/ui.errors.js");
/**
 * DevExtreme (esm/ui/tree_view/ui.tree_view.base.js)
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */





















var WIDGET_CLASS = "dx-treeview";
var NODE_CLASS = "".concat(WIDGET_CLASS, "-node");
var NODE_CONTAINER_CLASS = "".concat(NODE_CLASS, "-container");
var NODE_LOAD_INDICATOR_CLASS = "".concat(NODE_CLASS, "-loadindicator");
var OPENED_NODE_CONTAINER_CLASS = "".concat(NODE_CLASS, "-container-opened");
var IS_LEAF = "".concat(NODE_CLASS, "-is-leaf");
var ITEM_CLASS = "".concat(WIDGET_CLASS, "-item");
var ITEM_WITH_CHECKBOX_CLASS = "".concat(ITEM_CLASS, "-with-checkbox");
var ITEM_WITHOUT_CHECKBOX_CLASS = "".concat(ITEM_CLASS, "-without-checkbox");
var ITEM_DATA_KEY = "".concat(ITEM_CLASS, "-data");
var TOGGLE_ITEM_VISIBILITY_CLASS = "".concat(WIDGET_CLASS, "-toggle-item-visibility");
var LOAD_INDICATOR_CLASS = "".concat(WIDGET_CLASS, "-loadindicator");
var LOAD_INDICATOR_WRAPPER_CLASS = "".concat(WIDGET_CLASS, "-loadindicator-wrapper");
var TOGGLE_ITEM_VISIBILITY_OPENED_CLASS = "".concat(WIDGET_CLASS, "-toggle-item-visibility-opened");
var SELECT_ALL_ITEM_CLASS = "".concat(WIDGET_CLASS, "-select-all-item");
var INVISIBLE_STATE_CLASS = "dx-state-invisible";
var DISABLED_STATE_CLASS = "dx-state-disabled";
var SELECTED_ITEM_CLASS = "dx-state-selected";
var EXPAND_EVENT_NAMESPACE = "dxTreeView_expand";
var DATA_ITEM_ID = "data-item-id";
var TreeViewBase = _hierarchical_collection_ui_hierarchical_collection_widget__WEBPACK_IMPORTED_MODULE_12__.default.inherit({
    _supportedKeys: function(e) {
        var click = e => {
            var $itemElement = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this.option("focusedElement"));
            if (!$itemElement.length) {
                return
            }
            e.target = $itemElement;
            e.currentTarget = $itemElement;
            this._itemClickHandler(e, $itemElement.children("." + ITEM_CLASS));
            var expandEventName = this._getEventNameByOption(this.option("expandEvent"));
            var expandByClick = expandEventName === (0,_events_utils_index__WEBPACK_IMPORTED_MODULE_13__.addNamespace)(_events_click__WEBPACK_IMPORTED_MODULE_4__.name, EXPAND_EVENT_NAMESPACE);
            if (expandByClick) {
                this._expandEventHandler(e)
            }
        };
        var select = e => {
            e.preventDefault();
            var $focusedElement = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this.option("focusedElement"));
            var checkboxInstance = this._getCheckBoxInstance($focusedElement);
            if (!checkboxInstance.option("disabled")) {
                var currentState = checkboxInstance.option("value");
                this._updateItemSelection(!currentState, $focusedElement.find("." + ITEM_CLASS).get(0), true)
            }
        };
        var toggleExpandedNestedItems = function(state, e) {
            if (!this.option("expandAllEnabled")) {
                return
            }
            e.preventDefault();
            var $rootElement = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this.option("focusedElement"));
            if (!$rootElement.length) {
                return
            }
            var rootItem = this._getItemData($rootElement.find(".".concat(ITEM_CLASS)));
            this._toggleExpandedNestedItems([rootItem], state)
        };
        return (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_8__.extend)(this.callBase(), {
            enter: this._showCheckboxes() ? select : click,
            space: this._showCheckboxes() ? select : click,
            asterisk: toggleExpandedNestedItems.bind(this, true),
            minus: toggleExpandedNestedItems.bind(this, false)
        })
    },
    _toggleExpandedNestedItems: function(items, state) {
        if (!items) {
            return
        }
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            var node = this._dataAdapter.getNodeByItem(item);
            this._toggleExpandedState(node, state);
            this._toggleExpandedNestedItems(item.items, state)
        }
    },
    _getNodeElement: function(node, cache) {
        var key = this._encodeString(node.internalFields.key);
        if (cache) {
            if (!cache.$nodeByKey) {
                cache.$nodeByKey = {};
                this.$element().find(".".concat(NODE_CLASS)).each((function() {
                    var $node = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this);
                    var key = $node.attr(DATA_ITEM_ID);
                    cache.$nodeByKey[key] = $node
                }))
            }
            return cache.$nodeByKey[key] || (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)()
        }
        var element = this.$element().get(0).querySelector("[".concat(DATA_ITEM_ID, '="').concat(key, '"]'));
        return (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(element)
    },
    _activeStateUnit: "." + ITEM_CLASS,
    _widgetClass: function() {
        return WIDGET_CLASS
    },
    _getDefaultOptions: function() {
        var defaultOptions = (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_8__.extend)(this.callBase(), {
            animationEnabled: true,
            dataStructure: "tree",
            deferRendering: true,
            expandAllEnabled: false,
            hasItemsExpr: "hasItems",
            selectNodesRecursive: true,
            expandNodesRecursive: true,
            showCheckBoxesMode: "none",
            selectAllText: _localization_message__WEBPACK_IMPORTED_MODULE_3__.default.format("dxList-selectAll"),
            onItemSelectionChanged: null,
            onItemExpanded: null,
            onItemCollapsed: null,
            scrollDirection: "vertical",
            virtualModeEnabled: false,
            rootValue: 0,
            focusStateEnabled: false,
            selectionMode: "multiple",
            expandEvent: "dblclick",
            selectByClick: false,
            createChildren: null,
            onSelectAllValueChanged: null
        });
        return (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_8__.extend)(true, defaultOptions, {
            integrationOptions: {
                useDeferUpdateForTemplates: false
            }
        })
    },
    _initSelectedItems: _core_utils_common__WEBPACK_IMPORTED_MODULE_5__.noop,
    _syncSelectionOptions: _core_utils_common__WEBPACK_IMPORTED_MODULE_5__.asyncNoop,
    _fireSelectionChanged: function() {
        var selectionChangePromise = this._selectionChangePromise;
        (0,_core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.when)(selectionChangePromise).done(function() {
            this._createActionByOption("onSelectionChanged", {
                excludeValidators: ["disabled", "readOnly"]
            })()
        }.bind(this))
    },
    _createSelectAllValueChangedAction: function() {
        this._selectAllValueChangedAction = this._createActionByOption("onSelectAllValueChanged", {
            excludeValidators: ["disabled", "readOnly"]
        })
    },
    _fireSelectAllValueChanged: function(value) {
        this._selectAllValueChangedAction({
            value: value
        })
    },
    _checkBoxModeChange: function(value, previousValue) {
        if ("none" === previousValue || "none" === value) {
            this.repaint();
            return
        }
        var selectAllExists = this._$selectAllItem && this._$selectAllItem.length;
        switch (value) {
            case "selectAll":
                if (!selectAllExists) {
                    this._createSelectAllValueChangedAction();
                    this._renderSelectAllItem()
                }
                break;
            case "normal":
                if (selectAllExists) {
                    this._$selectAllItem.remove();
                    delete this._$selectAllItem
                }
        }
    },
    _removeSelection: function() {
        var that = this;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each)(this._dataAdapter.getFullData(), (function(_, node) {
            if (!that._hasChildren(node)) {
                return
            }
            that._dataAdapter.toggleSelection(node.internalFields.key, false, true)
        }))
    },
    _optionChanged: function(args) {
        var {
            name: name,
            value: value,
            previousValue: previousValue
        } = args;
        switch (name) {
            case "selectAllText":
                if (this._$selectAllItem) {
                    this._$selectAllItem.dxCheckBox("instance").option("text", value)
                }
                break;
            case "showCheckBoxesMode":
                this._checkBoxModeChange(value, previousValue);
                break;
            case "scrollDirection":
                this._scrollableContainer.option("direction", value);
                break;
            case "items":
                delete this._$selectAllItem;
                this.callBase(args);
                break;
            case "dataSource":
                this.callBase(args);
                this._initDataAdapter();
                this._filter = {};
                break;
            case "hasItemsExpr":
                this._initAccessors();
                this.repaint();
                break;
            case "expandEvent":
                this._initExpandEvent();
                break;
            case "deferRendering":
            case "dataStructure":
            case "rootValue":
            case "createChildren":
            case "expandNodesRecursive":
            case "onItemSelectionChanged":
            case "onItemExpanded":
            case "onItemCollapsed":
            case "expandAllEnabled":
            case "animationEnabled":
            case "virtualModeEnabled":
            case "selectByClick":
                break;
            case "selectionMode":
                this._initDataAdapter();
                this.callBase(args);
                break;
            case "onSelectAllValueChanged":
                this._createSelectAllValueChangedAction();
                break;
            case "selectNodesRecursive":
                this._dataAdapter.setOption("recursiveSelection", args.value);
                this.repaint();
                break;
            default:
                this.callBase(args)
        }
    },
    _initDataSource: function() {
        if (this._useCustomChildrenLoader()) {
            this._loadChildrenByCustomLoader(null).done(function(newItems) {
                if (newItems && newItems.length) {
                    this.option("items", newItems)
                }
            }.bind(this))
        } else {
            this.callBase();
            this._isVirtualMode() && this._initVirtualMode()
        }
    },
    _initVirtualMode: function() {
        var filter = this._filter;
        if (!filter.custom) {
            filter.custom = this._dataSource.filter()
        }
        if (!filter.internal) {
            filter.internal = [this.option("parentIdExpr"), this.option("rootValue")]
        }
    },
    _useCustomChildrenLoader: function() {
        return (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isFunction)(this.option("createChildren")) && this._isDataStructurePlain()
    },
    _loadChildrenByCustomLoader: function(parentNode) {
        var invocationResult = this.option("createChildren").call(this, parentNode);
        if (Array.isArray(invocationResult)) {
            return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).resolve(invocationResult).promise()
        }
        if (invocationResult && (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isFunction)(invocationResult.then)) {
            return (0,_core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.fromPromise)(invocationResult)
        }
        return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).resolve([]).promise()
    },
    _combineFilter: function() {
        if (!this._filter.custom || !this._filter.custom.length) {
            return this._filter.internal
        }
        return [this._filter.custom, this._filter.internal]
    },
    _dataSourceLoadErrorHandler: function() {
        this._renderEmptyMessage()
    },
    _init: function() {
        this._filter = {};
        this.callBase();
        this._initStoreChangeHandlers()
    },
    _dataSourceChangedHandler: function(newItems) {
        var items = this.option("items");
        if (this._initialized && this._isVirtualMode() && items.length) {
            return
        }
        this.option("items", newItems)
    },
    _removeTreeViewLoadIndicator: function() {
        if (!this._treeViewLoadIndicator) {
            return
        }
        this._treeViewLoadIndicator.remove();
        this._treeViewLoadIndicator = null
    },
    _createTreeViewLoadIndicator: function() {
        this._treeViewLoadIndicator = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").addClass(LOAD_INDICATOR_CLASS);
        this._createComponent(this._treeViewLoadIndicator, _load_indicator__WEBPACK_IMPORTED_MODULE_18__.default, {});
        return this._treeViewLoadIndicator
    },
    _dataSourceLoadingChangedHandler: function(isLoading) {
        var resultFilter;
        if (this._isVirtualMode()) {
            resultFilter = this._combineFilter();
            this._dataSource.filter(resultFilter)
        }
        if (isLoading && !this._dataSource.isLoaded()) {
            this.option("items", []);
            var $wrapper = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").addClass(LOAD_INDICATOR_WRAPPER_CLASS);
            this._createTreeViewLoadIndicator().appendTo($wrapper);
            this.itemsContainer().append($wrapper);
            if (this._isVirtualMode() && this._dataSource.filter() !== resultFilter) {
                this._dataSource.filter([])
            }
        } else {
            this._removeTreeViewLoadIndicator()
        }
    },
    _initStoreChangeHandlers: function() {
        if ("plain" !== this.option("dataStructure")) {
            return
        }
        this._dataSource && this._dataSource.store().on("inserted", newItem => {
            this.option().items = this.option("items").concat(newItem);
            this._dataAdapter.addItem(newItem);
            if (!this._dataAdapter.isFiltered(newItem)) {
                return
            }
            this._updateLevel(this._parentIdGetter(newItem))
        }).on("removed", removedKey => {
            var node = this._dataAdapter.getNodeByKey(removedKey);
            if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isDefined)(node)) {
                this.option("items")[this._dataAdapter.getIndexByKey(node.internalFields.key)] = 0;
                this._markChildrenItemsToRemove(node);
                this._removeItems();
                this._dataAdapter.removeItem(removedKey);
                this._updateLevel(this._parentIdGetter(node))
            }
        })
    },
    _markChildrenItemsToRemove: function(node) {
        var keys = node.internalFields.childrenKeys;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each)(keys, (_, key) => {
            this.option("items")[this._dataAdapter.getIndexByKey(key)] = 0;
            this._markChildrenItemsToRemove(this._dataAdapter.getNodeByKey(key))
        })
    },
    _removeItems: function() {
        var items = (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_8__.extend)(true, [], this.option("items"));
        var counter = 0;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each)(items, (index, item) => {
            if (!item) {
                this.option("items").splice(index - counter, 1);
                counter++
            }
        })
    },
    _updateLevel: function(parentId) {
        var $container = this._getContainerByParentKey(parentId);
        this._renderItems($container, this._dataAdapter.getChildrenNodes(parentId))
    },
    _getOldContainer: function($itemElement) {
        if ($itemElement.length) {
            return $itemElement.children(".".concat(NODE_CONTAINER_CLASS))
        }
        if (this._scrollableContainer) {
            return this._scrollableContainer.$content().children()
        }
        return (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)()
    },
    _getContainerByParentKey: function(parentId) {
        var node = this._dataAdapter.getNodeByKey(parentId);
        var $itemElement = node ? this._getNodeElement(node) : [];
        this._getOldContainer($itemElement).remove();
        var $container = this._renderNodeContainer($itemElement);
        if (this._isRootLevel(parentId)) {
            if (!this._scrollableContainer) {
                this._renderScrollableContainer()
            }
            this._scrollableContainer.$content().append($container)
        }
        return $container
    },
    _isRootLevel: function(parentId) {
        return parentId === this.option("rootValue")
    },
    _getAccessors: function() {
        var accessors = this.callBase();
        accessors.push("hasItems");
        return accessors
    },
    _getDataAdapterOptions: function() {
        return {
            rootValue: this.option("rootValue"),
            multipleSelection: !this._isSingleSelection(),
            recursiveSelection: this._isRecursiveSelection(),
            recursiveExpansion: this.option("expandNodesRecursive"),
            selectionRequired: this.option("selectionRequired"),
            dataType: this.option("dataStructure"),
            sort: this._dataSource && this._dataSource.sort()
        }
    },
    _initMarkup: function() {
        this._renderScrollableContainer();
        this._renderEmptyMessage(this._dataAdapter.getRootNodes());
        this.callBase();
        this.setAria("role", "tree")
    },
    _renderContentImpl: function() {
        var $nodeContainer = this._renderNodeContainer();
        this._scrollableContainer.$content().append($nodeContainer);
        if (!this.option("items") || !this.option("items").length) {
            return
        }
        this._renderItems($nodeContainer, this._dataAdapter.getRootNodes());
        this._initExpandEvent();
        if (this._selectAllEnabled()) {
            this._createSelectAllValueChangedAction();
            this._renderSelectAllItem($nodeContainer)
        }
    },
    _isVirtualMode: function() {
        return this.option("virtualModeEnabled") && this._isDataStructurePlain() && !!this.option("dataSource")
    },
    _isDataStructurePlain: function() {
        return "plain" === this.option("dataStructure")
    },
    _fireContentReadyAction: function() {
        var dataSource = this.getDataSource();
        var skipContentReadyAction = dataSource && !dataSource.isLoaded();
        if (this._scrollableContainer && (0,_core_utils_window__WEBPACK_IMPORTED_MODULE_6__.hasWindow)()) {
            this._scrollableContainer.update()
        }
        if (!skipContentReadyAction) {
            this.callBase()
        }
        if (this._scrollableContainer && (0,_core_utils_window__WEBPACK_IMPORTED_MODULE_6__.hasWindow)()) {
            this._scrollableContainer.update()
        }
    },
    _renderScrollableContainer: function() {
        this._scrollableContainer = this._createComponent((0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").appendTo(this.$element()), _scroll_view_ui_scrollable__WEBPACK_IMPORTED_MODULE_17__.default, {
            direction: this.option("scrollDirection"),
            useKeyboard: false
        })
    },
    _renderNodeContainer: function($parent) {
        var $container = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<ul>").addClass(NODE_CONTAINER_CLASS);
        this.setAria("role", "group", $container);
        if ($parent && $parent.length) {
            var itemData = this._getItemData($parent.children("." + ITEM_CLASS));
            if (this._expandedGetter(itemData)) {
                $container.addClass(OPENED_NODE_CONTAINER_CLASS)
            }
            $container.appendTo($parent)
        }
        return $container
    },
    _createDOMElement: function($nodeContainer, node) {
        var $node = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<li>").addClass(NODE_CLASS).attr(DATA_ITEM_ID, this._encodeString(node.internalFields.key)).prependTo($nodeContainer);
        this.setAria({
            role: "treeitem",
            label: this._displayGetter(node.internalFields.item) || "",
            expanded: node.internalFields.expanded || false,
            level: this._getLevel($nodeContainer)
        }, $node);
        return $node
    },
    _getLevel: function($nodeContainer) {
        var parent = $nodeContainer.parent();
        return parent.hasClass("dx-scrollable-content") ? 1 : parseInt(parent.attr("aria-level")) + 1
    },
    _showCheckboxes: function() {
        return "none" !== this.option("showCheckBoxesMode")
    },
    _selectAllEnabled: function() {
        return "selectAll" === this.option("showCheckBoxesMode") && !this._isSingleSelection()
    },
    _renderItems: function($nodeContainer, nodes) {
        var length = nodes.length - 1;
        for (var i = length; i >= 0; i--) {
            this._renderItem(i, nodes[i], $nodeContainer)
        }
        this._renderedItemsCount += nodes.length
    },
    _renderItem: function(nodeIndex, node, $nodeContainer) {
        var $node = this._createDOMElement($nodeContainer, node);
        var nodeData = node.internalFields;
        var showCheckBox = this._showCheckboxes();
        $node.addClass(showCheckBox ? ITEM_WITH_CHECKBOX_CLASS : ITEM_WITHOUT_CHECKBOX_CLASS);
        $node.toggleClass(INVISIBLE_STATE_CLASS, false === nodeData.item.visible);
        showCheckBox && this._renderCheckBox($node, node);
        this.setAria("selected", nodeData.selected, $node);
        this._toggleSelectedClass($node, nodeData.selected);
        this.callBase(this._renderedItemsCount + nodeIndex, nodeData.item, $node);
        if (false !== nodeData.item.visible) {
            this._renderChildren($node, node)
        }
    },
    _setAriaSelected: function() {},
    _renderChildren: function($node, node) {
        if (!this._hasChildren(node)) {
            this._addLeafClass($node);
            return
        }
        this._renderToggleItemVisibilityIcon($node, node);
        if (this.option("deferRendering") && !node.internalFields.expanded) {
            return
        }
        this._loadSublevel(node).done(childNodes => {
            this._renderSublevel($node, this._getActualNode(node), childNodes)
        })
    },
    _getActualNode: function(cachedNode) {
        return this._dataAdapter.getNodeByKey(cachedNode.internalFields.key)
    },
    _hasChildren: function(node) {
        if (this._isVirtualMode() || this._useCustomChildrenLoader()) {
            return false !== this._hasItemsGetter(node.internalFields.item)
        }
        return this.callBase(node)
    },
    _loadSublevel: function(node) {
        var deferred = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred;
        var childrenNodes = this._getChildNodes(node);
        if (childrenNodes.length) {
            deferred.resolve(childrenNodes)
        } else {
            this._loadNestedItems(node).done(items => {
                deferred.resolve(this._dataAdapter.getNodesByItems(items))
            })
        }
        return deferred.promise()
    },
    _renderSublevel: function($node, node, childNodes) {
        var $nestedNodeContainer = this._renderNodeContainer($node, node);
        var childNodesByChildrenKeys = childNodes.filter(childNode => -1 !== node.internalFields.childrenKeys.indexOf(childNode.internalFields.key));
        this._renderItems($nestedNodeContainer, childNodesByChildrenKeys);
        if (childNodesByChildrenKeys.length && !node.internalFields.selected) {
            var firstChild = childNodesByChildrenKeys[0];
            this._updateParentsState(firstChild, this._getNodeElement(firstChild))
        }
        this._normalizeIconState($node, childNodesByChildrenKeys.length);
        if (node.internalFields.expanded) {
            $nestedNodeContainer.addClass(OPENED_NODE_CONTAINER_CLASS)
        }
    },
    _executeItemRenderAction: function(itemIndex, itemData, itemElement) {
        var node = this._getNode(itemElement);
        this._getItemRenderAction()({
            itemElement: itemElement,
            itemIndex: itemIndex,
            itemData: itemData,
            node: this._dataAdapter.getPublicNode(node)
        })
    },
    _addLeafClass: function($node) {
        $node.addClass(IS_LEAF)
    },
    _expandEventHandler: function(e) {
        var $nodeElement = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(e.currentTarget.parentNode);
        if (!$nodeElement.hasClass(IS_LEAF)) {
            this._toggleExpandedState(e.currentTarget, void 0, e)
        }
    },
    _initExpandEvent: function() {
        var expandedEventName = this._getEventNameByOption(this.option("expandEvent"));
        var $itemsContainer = this._itemContainer();
        var itemSelector = this._itemSelector();
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__.default.off($itemsContainer, "." + EXPAND_EVENT_NAMESPACE, itemSelector);
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__.default.on($itemsContainer, expandedEventName, itemSelector, this._expandEventHandler.bind(this))
    },
    _getEventNameByOption: function(name) {
        var event = "click" === name ? _events_click__WEBPACK_IMPORTED_MODULE_4__.name : _events_double_click__WEBPACK_IMPORTED_MODULE_15__.name;
        return (0,_events_utils_index__WEBPACK_IMPORTED_MODULE_13__.addNamespace)(event, EXPAND_EVENT_NAMESPACE)
    },
    _getNode: function(identifier) {
        if (!(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isDefined)(identifier)) {
            return null
        }
        if (identifier.internalFields) {
            return identifier
        }
        if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isPrimitive)(identifier)) {
            return this._dataAdapter.getNodeByKey(identifier)
        }
        var itemElement = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(identifier).get(0);
        if (!itemElement) {
            return null
        }
        if (_core_dom_adapter__WEBPACK_IMPORTED_MODULE_1__.default.isElementNode(itemElement)) {
            return this._getNodeByElement(itemElement)
        }
        return this._dataAdapter.getNodeByItem(itemElement)
    },
    _getNodeByElement: function(itemElement) {
        var $node = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(itemElement).closest("." + NODE_CLASS);
        var key = this._decodeString($node.attr(DATA_ITEM_ID));
        return this._dataAdapter.getNodeByKey(key)
    },
    _toggleExpandedState: function(itemElement, state, e) {
        var node = this._getNode(itemElement);
        if (!node) {
            return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).reject().promise()
        }
        if (node.internalFields.disabled) {
            return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).reject().promise()
        }
        var currentState = node.internalFields.expanded;
        if (currentState === state) {
            return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).resolve().promise()
        }
        if (this._hasChildren(node)) {
            var $node = this._getNodeElement(node);
            if ($node.find(".".concat(NODE_LOAD_INDICATOR_CLASS, ":not(.").concat(INVISIBLE_STATE_CLASS, ")")).length) {
                return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).reject().promise()
            }
            this._createLoadIndicator($node)
        }
        if (!(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isDefined)(state)) {
            state = !currentState
        }
        this._dataAdapter.toggleExpansion(node.internalFields.key, state);
        return this._updateExpandedItemsUI(node, state, e)
    },
    _createLoadIndicator: function($node) {
        var $icon = $node.children("." + TOGGLE_ITEM_VISIBILITY_CLASS);
        var $nodeContainer = $node.children(".".concat(NODE_CONTAINER_CLASS));
        if ($icon.hasClass(TOGGLE_ITEM_VISIBILITY_OPENED_CLASS) || $nodeContainer.not(":empty").length) {
            return
        }
        this._createComponent((0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").addClass(NODE_LOAD_INDICATOR_CLASS), _load_indicator__WEBPACK_IMPORTED_MODULE_18__.default, {}).$element().appendTo($node);
        $icon.hide()
    },
    _renderToggleItemVisibilityIcon: function($node, node) {
        var $icon = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").addClass(TOGGLE_ITEM_VISIBILITY_CLASS).appendTo($node);
        if (node.internalFields.expanded) {
            $icon.addClass(TOGGLE_ITEM_VISIBILITY_OPENED_CLASS);
            $node.parent().addClass(OPENED_NODE_CONTAINER_CLASS)
        }
        if (node.internalFields.disabled) {
            $icon.addClass(DISABLED_STATE_CLASS)
        }
        this._renderToggleItemVisibilityIconClick($icon, node)
    },
    _renderToggleItemVisibilityIconClick: function($icon, node) {
        var eventName = (0,_events_utils_index__WEBPACK_IMPORTED_MODULE_13__.addNamespace)(_events_click__WEBPACK_IMPORTED_MODULE_4__.name, this.NAME);
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__.default.off($icon, eventName);
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__.default.on($icon, eventName, e => {
            this._toggleExpandedState(node.internalFields.key, void 0, e)
        })
    },
    _updateExpandedItemsUI: function(node, state, e) {
        var $node = this._getNodeElement(node);
        var isHiddenNode = !$node.length || state && $node.is(":hidden");
        if (this.option("expandNodesRecursive") && isHiddenNode) {
            var parentNode = this._getNode(node.internalFields.parentKey);
            if (parentNode) {
                this._updateExpandedItemsUI(parentNode, state, e)
            }
        }
        var $icon = $node.children("." + TOGGLE_ITEM_VISIBILITY_CLASS);
        var $nodeContainer = $node.children(".".concat(NODE_CONTAINER_CLASS));
        $icon.toggleClass(TOGGLE_ITEM_VISIBILITY_OPENED_CLASS, state);
        var nodeContainerExists = $nodeContainer.length > 0;
        var completionCallback = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred;
        if (!state || nodeContainerExists && !$nodeContainer.is(":empty")) {
            this._animateNodeContainer(node, state, e, completionCallback);
            return completionCallback.promise()
        }
        if (0 === node.internalFields.childrenKeys.length && (this._isVirtualMode() || this._useCustomChildrenLoader())) {
            this._loadNestedItemsWithUpdate(node, state, e, completionCallback);
            return completionCallback.promise()
        }
        this._renderSublevel($node, node, this._getChildNodes(node));
        this._fireContentReadyAction();
        this._animateNodeContainer(node, state, e, completionCallback);
        return completionCallback.promise()
    },
    _loadNestedItemsWithUpdate: function(node, state, e, completionCallback) {
        var $node = this._getNodeElement(node);
        this._loadNestedItems(node).done(items => {
            var actualNodeData = this._getActualNode(node);
            this._renderSublevel($node, actualNodeData, this._dataAdapter.getNodesByItems(items));
            if (!items || !items.length) {
                return
            }
            this._fireContentReadyAction();
            this._animateNodeContainer(actualNodeData, state, e, completionCallback)
        })
    },
    _loadNestedItems: function(node) {
        if (this._useCustomChildrenLoader()) {
            var publicNode = this._dataAdapter.getPublicNode(node);
            return this._loadChildrenByCustomLoader(publicNode).done(newItems => {
                if (!this._areNodesExists(newItems)) {
                    this._appendItems(newItems)
                }
            })
        }
        if (!this._isVirtualMode()) {
            return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).resolve([]).promise()
        }
        this._filter.internal = [this.option("parentIdExpr"), node.internalFields.key];
        this._dataSource.filter(this._combineFilter());
        return this._dataSource.load().done(newItems => {
            if (!this._areNodesExists(newItems)) {
                this._appendItems(newItems)
            }
        })
    },
    _areNodesExists: function(newItems, items) {
        var keyOfRootItem = this.keyOf(newItems[0]);
        var fullData = this._dataAdapter.getFullData();
        return !!this._dataAdapter.getNodeByKey(keyOfRootItem, fullData)
    },
    _appendItems: function(newItems) {
        this.option().items = this.option("items").concat(newItems);
        this._initDataAdapter()
    },
    _animateNodeContainer: function(node, state, e, completionCallback) {
        var $node = this._getNodeElement(node);
        var $nodeContainer = $node.children(".".concat(NODE_CONTAINER_CLASS));
        if (node && completionCallback && 0 === $nodeContainer.length) {
            completionCallback.resolve()
        }
        $nodeContainer.addClass(OPENED_NODE_CONTAINER_CLASS);
        var nodeHeight = $nodeContainer.height();
        _animation_fx__WEBPACK_IMPORTED_MODULE_16__.default.stop($nodeContainer, true);
        _animation_fx__WEBPACK_IMPORTED_MODULE_16__.default.animate($nodeContainer, {
            type: "custom",
            duration: this.option("animationEnabled") ? 400 : 0,
            from: {
                maxHeight: state ? 0 : nodeHeight
            },
            to: {
                maxHeight: state ? nodeHeight : 0
            },
            complete: function() {
                $nodeContainer.css("maxHeight", "none");
                $nodeContainer.toggleClass(OPENED_NODE_CONTAINER_CLASS, state);
                this.setAria("expanded", state, $node);
                this._scrollableContainer.update();
                this._fireExpandedStateUpdatedEvent(state, node, e);
                if (completionCallback) {
                    completionCallback.resolve()
                }
            }.bind(this)
        })
    },
    _fireExpandedStateUpdatedEvent: function(isExpanded, node, e) {
        if (!this._hasChildren(node)) {
            return
        }
        var optionName = isExpanded ? "onItemExpanded" : "onItemCollapsed";
        if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isDefined)(e)) {
            this._itemDXEventHandler(e, optionName, {
                node: this._dataAdapter.getPublicNode(node)
            })
        } else {
            var target = this._getNodeElement(node);
            this._itemEventHandler(target, optionName, {
                event: e,
                node: this._dataAdapter.getPublicNode(node)
            })
        }
    },
    _normalizeIconState: function($node, hasNewItems) {
        var $loadIndicator = $node.find(".".concat(NODE_LOAD_INDICATOR_CLASS));
        $loadIndicator.length && _load_indicator__WEBPACK_IMPORTED_MODULE_18__.default.getInstance($loadIndicator).option("visible", false);
        if (hasNewItems) {
            var $icon = $node.find("." + TOGGLE_ITEM_VISIBILITY_CLASS);
            $icon.show();
            return
        }
        $node.find("." + TOGGLE_ITEM_VISIBILITY_CLASS).removeClass(TOGGLE_ITEM_VISIBILITY_CLASS);
        $node.addClass(IS_LEAF)
    },
    _emptyMessageContainer: function() {
        return this._scrollableContainer ? this._scrollableContainer.content() : this.callBase()
    },
    _renderContent: function() {
        var items = this.option("items");
        if (items && items.length) {
            this._contentAlreadyRendered = true
        }
        this.callBase()
    },
    _renderSelectAllItem: function($container) {
        $container = $container || this.$element().find(".".concat(NODE_CONTAINER_CLASS)).first();
        this._$selectAllItem = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").addClass(SELECT_ALL_ITEM_CLASS);
        var value = this._dataAdapter.isAllSelected();
        this._createComponent(this._$selectAllItem, _check_box__WEBPACK_IMPORTED_MODULE_11__.default, {
            value: value,
            text: this.option("selectAllText"),
            onValueChanged: this._onSelectAllCheckboxValueChanged.bind(this)
        });
        this._toggleSelectedClass(this._$selectAllItem, value);
        $container.before(this._$selectAllItem)
    },
    _onSelectAllCheckboxValueChanged: function(args) {
        this._toggleSelectAll(args);
        this._fireSelectAllValueChanged(args.value)
    },
    _toggleSelectAll: function(args) {
        this._dataAdapter.toggleSelectAll(args.value);
        this._updateItemsUI();
        this._fireSelectionChanged()
    },
    _renderCheckBox: function($node, node) {
        var $checkbox = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").appendTo($node);
        this._createComponent($checkbox, _check_box__WEBPACK_IMPORTED_MODULE_11__.default, {
            value: node.internalFields.selected,
            onValueChanged: this._changeCheckboxValue.bind(this),
            focusStateEnabled: false,
            disabled: this._disabledGetter(node)
        })
    },
    _toggleSelectedClass: function($node, value) {
        $node.toggleClass(SELECTED_ITEM_CLASS, !!value)
    },
    _toggleNodeDisabledState: function(node, state) {
        var $node = this._getNodeElement(node);
        var $item = $node.find("." + ITEM_CLASS).eq(0);
        this._dataAdapter.toggleNodeDisabledState(node.internalFields.key, state);
        $item.toggleClass(DISABLED_STATE_CLASS, !!state);
        if (this._showCheckboxes()) {
            var checkbox = this._getCheckBoxInstance($node);
            checkbox.option("disabled", !!state)
        }
    },
    _itemOptionChanged: function(item, property, value) {
        var node = this._dataAdapter.getNodeByItem(item);
        if (property === this.option("disabledExpr")) {
            this._toggleNodeDisabledState(node, value)
        }
    },
    _changeCheckboxValue: function(e) {
        var $node = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(e.element).parent("." + NODE_CLASS);
        var $item = $node.children("." + ITEM_CLASS);
        var item = this._getItemData($item);
        var node = this._getNodeByElement($item);
        var value = e.value;
        if (node && node.internalFields.selected === value) {
            return
        }
        this._updateItemSelection(value, item, e.event)
    },
    _isSingleSelection: function() {
        return "single" === this.option("selectionMode")
    },
    _isRecursiveSelection: function() {
        return this.option("selectNodesRecursive") && "single" !== this.option("selectionMode")
    },
    _isLastSelectedBranch: function(publicNode, selectedNodesKeys, deep) {
        var keyIndex = selectedNodesKeys.indexOf(publicNode.key);
        if (keyIndex >= 0) {
            selectedNodesKeys.splice(keyIndex, 1)
        }
        if (deep) {
            (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each)(publicNode.children, function(_, childNode) {
                this._isLastSelectedBranch(childNode, selectedNodesKeys, true)
            }.bind(this))
        }
        if (publicNode.parent) {
            this._isLastSelectedBranch(publicNode.parent, selectedNodesKeys)
        }
        return 0 === selectedNodesKeys.length
    },
    _isLastRequired: function(node) {
        var selectionRequired = this.option("selectionRequired");
        var isSingleMode = this._isSingleSelection();
        var selectedNodesKeys = this.getSelectedNodeKeys();
        if (!selectionRequired) {
            return
        }
        if (isSingleMode) {
            return 1 === selectedNodesKeys.length
        } else {
            return this._isLastSelectedBranch(node.internalFields.publicNode, selectedNodesKeys.slice(), true)
        }
    },
    _updateItemSelection: function(value, itemElement, dxEvent) {
        var node = this._getNode(itemElement);
        if (!node || false === node.visible) {
            return false
        }
        if (node.internalFields.selected === value) {
            return true
        }
        if (!value && this._isLastRequired(node)) {
            if (this._showCheckboxes()) {
                var $node = this._getNodeElement(node);
                this._getCheckBoxInstance($node).option("value", true)
            }
            return false
        }
        if (value && this._isSingleSelection()) {
            var selectedKeys = this.getSelectedNodeKeys();
            (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each)(selectedKeys, (index, key) => {
                this._dataAdapter.toggleSelection(key, false);
                this._updateItemsUI();
                this._fireItemSelectionChanged(this._getNode(key))
            })
        }
        this._dataAdapter.toggleSelection(node.internalFields.key, value);
        var isAllSelected = this._dataAdapter.isAllSelected();
        var needFireSelectAllChanged = this._selectAllEnabled() && this._$selectAllItem.dxCheckBox("instance").option("value") !== isAllSelected;
        this._updateItemsUI();
        this._fireItemSelectionChanged(node, dxEvent);
        this._fireSelectionChanged();
        if (needFireSelectAllChanged) {
            this._fireSelectAllValueChanged(isAllSelected)
        }
        return true
    },
    _fireItemSelectionChanged: function(node, dxEvent) {
        var initiator = dxEvent || this._findItemElementByItem(node.internalFields.item);
        var handler = dxEvent ? this._itemDXEventHandler : this._itemEventHandler;
        handler.call(this, initiator, "onItemSelectionChanged", {
            node: this._dataAdapter.getPublicNode(node),
            itemData: node.internalFields.item
        })
    },
    _getCheckBoxInstance: function($node) {
        return $node.children(".dx-checkbox").dxCheckBox("instance")
    },
    _updateItemsUI: function() {
        var cache = {};
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each)(this._dataAdapter.getData(), (_, node) => {
            var $node = this._getNodeElement(node, cache);
            var nodeSelection = node.internalFields.selected;
            if (!$node.length) {
                return
            }
            this._toggleSelectedClass($node, nodeSelection);
            this.setAria("selected", nodeSelection, $node);
            if (this._showCheckboxes()) {
                this._getCheckBoxInstance($node).option("value", nodeSelection)
            }
        });
        if (this._selectAllEnabled()) {
            var selectAllCheckbox = this._$selectAllItem.dxCheckBox("instance");
            selectAllCheckbox.option("onValueChanged", void 0);
            selectAllCheckbox.option("value", this._dataAdapter.isAllSelected());
            selectAllCheckbox.option("onValueChanged", this._onSelectAllCheckboxValueChanged.bind(this))
        }
    },
    _updateParentsState: function(node, $node) {
        if (!$node) {
            return
        }
        var parentNode = this._dataAdapter.getNodeByKey(node.internalFields.parentKey);
        var $parentNode = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)($node.parents("." + NODE_CLASS)[0]);
        if (this._showCheckboxes()) {
            var parentValue = parentNode.internalFields.selected;
            this._getCheckBoxInstance($parentNode).option("value", parentValue);
            this._toggleSelectedClass($parentNode, parentValue)
        }
        if (parentNode.internalFields.parentKey !== this.option("rootValue")) {
            this._updateParentsState(parentNode, $parentNode)
        }
    },
    _itemEventHandlerImpl: function(initiator, action, actionArgs) {
        var $itemElement = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(initiator).closest("." + NODE_CLASS).children("." + ITEM_CLASS);
        return action((0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_8__.extend)(this._extendActionArgs($itemElement), actionArgs))
    },
    _itemContextMenuHandler: function(e) {
        this._createEventHandler("onItemContextMenu", e)
    },
    _itemHoldHandler: function(e) {
        this._createEventHandler("onItemHold", e)
    },
    _createEventHandler: function(eventName, e) {
        var node = this._getNodeByElement(e.currentTarget);
        this._itemDXEventHandler(e, eventName, {
            node: this._dataAdapter.getPublicNode(node)
        })
    },
    _itemClass: function() {
        return ITEM_CLASS
    },
    _itemDataKey: function() {
        return ITEM_DATA_KEY
    },
    _attachClickEvent: function() {
        var clickSelector = "." + this._itemClass();
        var pointerDownSelector = "." + NODE_CLASS + ", ." + SELECT_ALL_ITEM_CLASS;
        var eventName = (0,_events_utils_index__WEBPACK_IMPORTED_MODULE_13__.addNamespace)(_events_click__WEBPACK_IMPORTED_MODULE_4__.name, this.NAME);
        var pointerDownEvent = (0,_events_utils_index__WEBPACK_IMPORTED_MODULE_13__.addNamespace)(_events_pointer__WEBPACK_IMPORTED_MODULE_14__.default.down, this.NAME);
        var $itemContainer = this._itemContainer();
        var that = this;
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__.default.off($itemContainer, eventName, clickSelector);
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__.default.off($itemContainer, pointerDownEvent, pointerDownSelector);
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__.default.on($itemContainer, eventName, clickSelector, (function(e) {
            that._itemClickHandler(e, (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this))
        }));
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_2__.default.on($itemContainer, pointerDownEvent, pointerDownSelector, (function(e) {
            that._itemPointerDownHandler(e)
        }))
    },
    _itemClickHandler: function(e, $item) {
        var itemData = this._getItemData($item);
        var node = this._getNodeByElement($item);
        this._itemDXEventHandler(e, "onItemClick", {
            node: this._dataAdapter.getPublicNode(node)
        });
        if (this.option("selectByClick") && !e.isDefaultPrevented()) {
            this._updateItemSelection(!node.internalFields.selected, itemData, e)
        }
    },
    _updateSelectionToFirstItem: function($items, startIndex) {
        var itemIndex = startIndex;
        while (itemIndex >= 0) {
            var $item = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)($items[itemIndex]);
            this._updateItemSelection(true, $item.find("." + ITEM_CLASS).get(0));
            itemIndex--
        }
    },
    _updateSelectionToLastItem: function($items, startIndex) {
        var length = $items.length;
        var itemIndex = startIndex;
        while (itemIndex < length) {
            var $item = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)($items[itemIndex]);
            this._updateItemSelection(true, $item.find("." + ITEM_CLASS).get(0));
            itemIndex++
        }
    },
    _focusInHandler: function(e) {
        this._updateFocusState(e, true);
        if (this.option("focusedElement")) {
            clearTimeout(this._setFocusedItemTimeout);
            this._setFocusedItemTimeout = setTimeout(() => {
                this._setFocusedItem((0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this.option("focusedElement")))
            });
            return
        }
        var $activeItem = this._getActiveItem();
        this.option("focusedElement", (0,_core_element__WEBPACK_IMPORTED_MODULE_10__.getPublicElement)($activeItem.closest("." + NODE_CLASS)))
    },
    _setFocusedItem: function($target) {
        if (!$target || !$target.length) {
            return
        }
        if (!$target.children().hasClass(DISABLED_STATE_CLASS)) {
            this.callBase($target)
        }
    },
    _itemPointerDownHandler: function(e) {
        if (!this.option("focusStateEnabled")) {
            return
        }
        var $target = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(e.target).closest("." + NODE_CLASS + ", ." + SELECT_ALL_ITEM_CLASS);
        if (!$target.length) {
            return
        }
        var itemElement = $target.hasClass(DISABLED_STATE_CLASS) ? null : $target;
        this.option("focusedElement", (0,_core_element__WEBPACK_IMPORTED_MODULE_10__.getPublicElement)(itemElement))
    },
    _findNonDisabledNodes: function($nodes) {
        return $nodes.not((function() {
            return (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this).children("." + ITEM_CLASS).hasClass(DISABLED_STATE_CLASS)
        }))
    },
    _moveFocus: function(location, e) {
        var FOCUS_UP = "up";
        var FOCUS_DOWN = "down";
        var FOCUS_FIRST = "first";
        var FOCUS_LAST = "last";
        var FOCUS_LEFT = this.option("rtlEnabled") ? "right" : "left";
        var FOCUS_RIGHT = this.option("rtlEnabled") ? "left" : "right";
        this.$element().find(".".concat(NODE_CONTAINER_CLASS)).each((function() {
            _animation_fx__WEBPACK_IMPORTED_MODULE_16__.default.stop(this, true)
        }));
        var $items = this._findNonDisabledNodes(this._nodeElements());
        if (!$items || !$items.length) {
            return
        }
        switch (location) {
            case FOCUS_UP:
                var $prevItem = this._prevItem($items);
                this.option("focusedElement", (0,_core_element__WEBPACK_IMPORTED_MODULE_10__.getPublicElement)($prevItem));
                var prevItemElement = this._getNodeItemElement($prevItem);
                this._scrollableContainer.scrollToElement(prevItemElement);
                if (e.shiftKey && this._showCheckboxes()) {
                    this._updateItemSelection(true, prevItemElement)
                }
                break;
            case FOCUS_DOWN:
                var $nextItem = this._nextItem($items);
                this.option("focusedElement", (0,_core_element__WEBPACK_IMPORTED_MODULE_10__.getPublicElement)($nextItem));
                var nextItemElement = this._getNodeItemElement($nextItem);
                this._scrollableContainer.scrollToElement(nextItemElement);
                if (e.shiftKey && this._showCheckboxes()) {
                    this._updateItemSelection(true, nextItemElement)
                }
                break;
            case FOCUS_FIRST:
                var $firstItem = $items.first();
                if (e.shiftKey && this._showCheckboxes()) {
                    this._updateSelectionToFirstItem($items, $items.index(this._prevItem($items)))
                }
                this.option("focusedElement", (0,_core_element__WEBPACK_IMPORTED_MODULE_10__.getPublicElement)($firstItem));
                this._scrollableContainer.scrollToElement(this._getNodeItemElement($firstItem));
                break;
            case FOCUS_LAST:
                var $lastItem = $items.last();
                if (e.shiftKey && this._showCheckboxes()) {
                    this._updateSelectionToLastItem($items, $items.index(this._nextItem($items)))
                }
                this.option("focusedElement", (0,_core_element__WEBPACK_IMPORTED_MODULE_10__.getPublicElement)($lastItem));
                this._scrollableContainer.scrollToElement(this._getNodeItemElement($lastItem));
                break;
            case FOCUS_RIGHT:
                this._expandFocusedContainer();
                break;
            case FOCUS_LEFT:
                this._collapseFocusedContainer();
                break;
            default:
                this.callBase.apply(this, arguments);
                return
        }
    },
    _getNodeItemElement: function($node) {
        return $node.find("." + ITEM_CLASS).get(0)
    },
    _nodeElements: function() {
        return this.$element().find("." + NODE_CLASS).not(":hidden")
    },
    _expandFocusedContainer: function() {
        var $focusedNode = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this.option("focusedElement"));
        if (!$focusedNode.length || $focusedNode.hasClass(IS_LEAF)) {
            return
        }
        var $node = $focusedNode.find(".".concat(NODE_CONTAINER_CLASS)).eq(0);
        if ($node.hasClass(OPENED_NODE_CONTAINER_CLASS)) {
            var $nextItem = this._nextItem(this._findNonDisabledNodes(this._nodeElements()));
            this.option("focusedElement", (0,_core_element__WEBPACK_IMPORTED_MODULE_10__.getPublicElement)($nextItem));
            this._scrollableContainer.scrollToElement(this._getNodeItemElement($nextItem));
            return
        }
        var node = this._getNodeByElement($focusedNode.children("." + ITEM_CLASS));
        this._toggleExpandedState(node, true)
    },
    _getClosestNonDisabledNode: function($node) {
        do {
            $node = $node.parent().closest("." + NODE_CLASS)
        } while ($node.children(".dx-treeview-item.dx-state-disabled").length);
        return $node
    },
    _collapseFocusedContainer: function() {
        var $focusedNode = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this.option("focusedElement"));
        if (!$focusedNode.length) {
            return
        }
        var nodeElement = $focusedNode.find(".".concat(NODE_CONTAINER_CLASS)).eq(0);
        if (!$focusedNode.hasClass(IS_LEAF) && nodeElement.hasClass(OPENED_NODE_CONTAINER_CLASS)) {
            var node = this._getNodeByElement($focusedNode.children("." + ITEM_CLASS));
            this._toggleExpandedState(node, false)
        } else {
            var collapsedNode = this._getClosestNonDisabledNode($focusedNode);
            collapsedNode.length && this.option("focusedElement", (0,_core_element__WEBPACK_IMPORTED_MODULE_10__.getPublicElement)(collapsedNode));
            this._scrollableContainer.scrollToElement(this._getNodeItemElement(collapsedNode))
        }
    },
    _encodeString: function(value) {
        return (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isString)(value) ? encodeURI(value) : value
    },
    _decodeString: function(value) {
        return (0,_core_utils_type__WEBPACK_IMPORTED_MODULE_7__.isString)(value) ? decodeURI(value) : value
    },
    updateDimensions: function() {
        var deferred = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred;
        if (this._scrollableContainer) {
            this._scrollableContainer.update().done(() => {
                deferred.resolveWith(this)
            })
        } else {
            deferred.resolveWith(this)
        }
        return deferred.promise()
    },
    selectItem: function(itemElement) {
        return this._updateItemSelection(true, itemElement)
    },
    unselectItem: function(itemElement) {
        return this._updateItemSelection(false, itemElement)
    },
    expandItem: function(itemElement) {
        return this._toggleExpandedState(itemElement, true)
    },
    collapseItem: function(itemElement) {
        return this._toggleExpandedState(itemElement, false)
    },
    getNodes: function() {
        return this._dataAdapter.getTreeNodes()
    },
    getSelectedNodes: function() {
        return this.getSelectedNodeKeys().map(key => {
            var node = this._dataAdapter.getNodeByKey(key);
            return this._dataAdapter.getPublicNode(node)
        })
    },
    getSelectedNodesKeys: function() {
        _widget_ui_errors__WEBPACK_IMPORTED_MODULE_20__.default.log("W0002", "dxTreeView", "getSelectedNodesKeys", "20.1", "Use the 'getSelectedNodeKeys' method instead");
        return this.getSelectedNodeKeys()
    },
    getSelectedNodeKeys: function() {
        return this._dataAdapter.getSelectedNodesKeys()
    },
    selectAll: function() {
        if (this._selectAllEnabled()) {
            this._$selectAllItem.dxCheckBox("instance").option("value", true)
        } else {
            this._toggleSelectAll({
                value: true
            })
        }
    },
    unselectAll: function() {
        if (this._selectAllEnabled()) {
            this._$selectAllItem.dxCheckBox("instance").option("value", false)
        } else {
            this._toggleSelectAll({
                value: false
            })
        }
    },
    expandAll: function() {
        var dataAdapter = this._dataAdapter;
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each)(dataAdapter.getData(), (_, node) => dataAdapter.toggleExpansion(node.internalFields.key, true));
        this.repaint()
    },
    collapseAll: function() {
        (0,_core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each)(this._dataAdapter.getExpandedNodesKeys(), function(_, key) {
            this._toggleExpandedState(key, false)
        }.bind(this))
    },
    scrollToItem: function(keyOrItemOrElement) {
        var node = this._getNode(keyOrItemOrElement);
        if (!node) {
            return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).reject().promise()
        }
        var nodeKeysToExpand = [];
        var parentNode = node.internalFields.publicNode.parent;
        while (null != parentNode) {
            if (!parentNode.expanded) {
                nodeKeysToExpand.push(parentNode.key)
            }
            parentNode = parentNode.parent
        }
        var scrollCallback = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred;
        this._expandNodes(nodeKeysToExpand.reverse()).always(() => {
            var $element = this._getNodeElement(node);
            if ($element && $element.length) {
                this._scrollableContainer.scrollToElementTopLeft($element);
                scrollCallback.resolve()
            } else {
                scrollCallback.reject()
            }
        });
        return scrollCallback.promise()
    },
    _expandNodes: function(keysToExpand) {
        if (!keysToExpand || 0 === keysToExpand.length) {
            return (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred).resolve().promise()
        }
        var resultCallback = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.Deferred;
        var callbacksByNodes = keysToExpand.map(key => this.expandItem(key));
        _core_utils_deferred__WEBPACK_IMPORTED_MODULE_19__.when.apply(_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default, callbacksByNodes).done(() => resultCallback.resolve()).fail(() => resultCallback.reject());
        return resultCallback.promise()
    },
    _dispose: function() {
        this.callBase();
        clearTimeout(this._setFocusedItemTimeout)
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeViewBase);


/***/ }),

/***/ "./node_modules/devextreme/esm/ui/tree_view/ui.tree_view.search.js":
/*!*************************************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/tree_view/ui.tree_view.search.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/renderer */ "./node_modules/devextreme/esm/core/renderer.js");
/* harmony import */ var _core_component_registrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/component_registrator */ "./node_modules/devextreme/esm/core/component_registrator.js");
/* harmony import */ var _widget_ui_search_box_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget/ui.search_box_mixin */ "./node_modules/devextreme/esm/ui/widget/ui.search_box_mixin.js");
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/extend */ "./node_modules/devextreme/esm/core/utils/extend.js");
/* harmony import */ var _ui_tree_view_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui.tree_view.base */ "./node_modules/devextreme/esm/ui/tree_view/ui.tree_view.base.js");
/**
 * DevExtreme (esm/ui/tree_view/ui.tree_view.search.js)
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */





var WIDGET_CLASS = "dx-treeview";
var NODE_CONTAINER_CLASS = "".concat(WIDGET_CLASS, "-node-container");
var TreeViewSearch = _ui_tree_view_base__WEBPACK_IMPORTED_MODULE_4__.default.inherit(_widget_ui_search_box_mixin__WEBPACK_IMPORTED_MODULE_2__.default).inherit({
    _addWidgetPrefix: function(className) {
        return "".concat(WIDGET_CLASS, "-").concat(className)
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "searchValue":
                if (this._showCheckboxes() && this._isRecursiveSelection()) {
                    this._removeSelection()
                }
                this._initDataAdapter();
                this._updateSearch();
                this._repaintContainer();
                break;
            case "searchExpr":
                this._initDataAdapter();
                this.repaint();
                break;
            case "searchMode":
                this.option("expandNodesRecursive") ? this._updateDataAdapter() : this._initDataAdapter();
                this.repaint();
                break;
            default:
                this.callBase(args)
        }
    },
    _updateDataAdapter: function() {
        this._setOptionWithoutOptionChange("expandNodesRecursive", false);
        this._initDataAdapter();
        this._setOptionWithoutOptionChange("expandNodesRecursive", true)
    },
    _getDataAdapterOptions: function() {
        return (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_3__.extend)(this.callBase(), {
            searchValue: this.option("searchValue"),
            searchMode: this.option("searchMode") || "contains",
            searchExpr: this.option("searchExpr")
        })
    },
    _updateSearch: function() {
        if (this._searchEditor) {
            var editorOptions = this._getSearchEditorOptions();
            this._searchEditor.option(editorOptions)
        }
    },
    _repaintContainer: function() {
        var $container = this.$element().find(".".concat(NODE_CONTAINER_CLASS)).first();
        var rootNodes;
        if ($container.length) {
            $container.empty();
            rootNodes = this._dataAdapter.getRootNodes();
            this._renderEmptyMessage(rootNodes);
            this._renderItems($container, rootNodes);
            this._fireContentReadyAction()
        }
    },
    _itemContainer: function(isSearchMode) {
        if (this._scrollableContainer && isSearchMode) {
            return (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(this._scrollableContainer.content())
        }
        return this.callBase()
    },
    _addWidgetClass: function() {
        this.$element().addClass(this._widgetClass())
    },
    _clean: function() {
        this.callBase();
        this._removeSearchBox()
    }
});
(0,_core_component_registrator__WEBPACK_IMPORTED_MODULE_1__.default)("dxTreeView", TreeViewSearch);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeViewSearch);


/***/ })

}]);