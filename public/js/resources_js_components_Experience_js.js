"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Experience_js"],{

/***/ "./resources/js/components/Experience.js":
/*!***********************************************!*\
  !*** ./resources/js/components/Experience.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var devextreme_react_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-react/accordion */ "./node_modules/devextreme-react/accordion.js");
/* harmony import */ var devextreme_react_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_react_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var experienceList = [{
  id: 0,
  jobtitle: "Senior Software Developer",
  location: "Quezon City",
  company: "Jeonsoft Corporation",
  years: "2017-2019",
  roles: ["Create new features (customizations) to the company product", "Trains new employees regarding the app and architecture of the system", ""]
}, {
  id: 1,
  jobtitle: "Support Developer",
  location: "Ortigas, Pasig",
  years: "2019-2020",
  company: "Devsoft PH",
  roles: ["basava"]
}, {
  id: 3,
  jobtitle: "Associate Research Developer",
  location: "Ayala Ave, Makati",
  years: "2020-2021",
  company: "Advance World Solutions, Inc",
  roles: ["aadada", "asdadsa", "adadada"]
}];

var renderBody = function renderBody(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "item-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "item-field",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "company-label",
          children: "Company:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "company-field",
          children: data.company
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "item-field",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "location-label",
          children: "Location:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "location-field",
          children: data.location
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "item-field",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "years-label",
          children: "Years:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "years-field",
          children: data.years
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "item-field-wide",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "roles-label",
          children: "Roles:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          children: data.roles.map(function (role, idx) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
              className: "roles-field",
              children: role
            }, idx);
          })
        })]
      })]
    })
  });
};

var renderTitle = function renderTitle(_ref2) {
  var data = _ref2.data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "item-title",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: "".concat(data.jobtitle, " (").concat(data.years, ")")
    })
  });
};

var Experience = function Experience() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((devextreme_react_accordion__WEBPACK_IMPORTED_MODULE_1___default()), {
      dataSource: experienceList.reverse(),
      multiple: true,
      collapsible: true,
      animationDuration: 300,
      itemTitleComponent: renderTitle,
      itemComponent: renderBody
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

/***/ }),

/***/ "./node_modules/devextreme-react/accordion.js":
/*!****************************************************!*\
  !*** ./node_modules/devextreme-react/accordion.js ***!
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
exports.Item = exports.Accordion = void 0;
var accordion_1 = __webpack_require__(/*! devextreme/ui/accordion */ "./node_modules/devextreme/esm/ui/accordion.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var component_1 = __webpack_require__(/*! ./core/component */ "./node_modules/devextreme-react/core/component.js");
var nested_option_1 = __webpack_require__(/*! ./core/nested-option */ "./node_modules/devextreme-react/core/nested-option.js");
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._WidgetClass = accordion_1.default;
        _this.useDeferUpdateFlag = true;
        _this.subscribableOptions = ["items", "selectedIndex", "selectedItem", "selectedItemKeys", "selectedItems"];
        _this.independentEvents = ["onContentReady", "onDisposing", "onInitialized", "onItemClick", "onItemContextMenu", "onItemHold", "onItemRendered", "onItemTitleClick"];
        _this._defaults = {
            defaultItems: "items",
            defaultSelectedIndex: "selectedIndex",
            defaultSelectedItem: "selectedItem",
            defaultSelectedItemKeys: "selectedItemKeys",
            defaultSelectedItems: "selectedItems"
        };
        _this._expectedChildren = {
            item: { optionName: "items", isCollectionItem: true }
        };
        _this._templateProps = [{
                tmplOption: "itemTemplate",
                render: "itemRender",
                component: "itemComponent",
                keyFn: "itemKeyFn"
            }, {
                tmplOption: "itemTitleTemplate",
                render: "itemTitleRender",
                component: "itemTitleComponent",
                keyFn: "itemTitleKeyFn"
            }];
        return _this;
    }
    Object.defineProperty(Accordion.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    return Accordion;
}(component_1.Component));
exports.Accordion = Accordion;
Accordion.propTypes = {
    accessKey: PropTypes.string,
    activeStateEnabled: PropTypes.bool,
    animationDuration: PropTypes.number,
    collapsible: PropTypes.bool,
    dataSource: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
        PropTypes.string
    ]),
    deferRendering: PropTypes.bool,
    disabled: PropTypes.bool,
    focusStateEnabled: PropTypes.bool,
    height: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number,
        PropTypes.string
    ]),
    hint: PropTypes.string,
    hoverStateEnabled: PropTypes.bool,
    itemHoldTimeout: PropTypes.number,
    items: PropTypes.array,
    keyExpr: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    multiple: PropTypes.bool,
    noDataText: PropTypes.string,
    onContentReady: PropTypes.func,
    onDisposing: PropTypes.func,
    onInitialized: PropTypes.func,
    onItemClick: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    onItemContextMenu: PropTypes.func,
    onItemHold: PropTypes.func,
    onItemRendered: PropTypes.func,
    onItemTitleClick: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
    ]),
    onOptionChanged: PropTypes.func,
    onSelectionChanged: PropTypes.func,
    repaintChangesOnly: PropTypes.bool,
    rtlEnabled: PropTypes.bool,
    selectedIndex: PropTypes.number,
    selectedItemKeys: PropTypes.array,
    selectedItems: PropTypes.array,
    tabIndex: PropTypes.number,
    visible: PropTypes.bool,
    width: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.number,
        PropTypes.string
    ])
};
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
exports.default = Accordion;


/***/ }),

/***/ "./node_modules/devextreme/esm/ui/accordion.js":
/*!*****************************************************!*\
  !*** ./node_modules/devextreme/esm/ui/accordion.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/renderer */ "./node_modules/devextreme/esm/core/renderer.js");
/* harmony import */ var _events_core_events_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events/core/events_engine */ "./node_modules/devextreme/esm/events/core/events_engine.js");
/* harmony import */ var _animation_fx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/fx */ "./node_modules/devextreme/esm/animation/fx.js");
/* harmony import */ var _events_click__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events/click */ "./node_modules/devextreme/esm/events/click.js");
/* harmony import */ var _core_devices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/devices */ "./node_modules/devextreme/esm/core/devices.js");
/* harmony import */ var _core_dom_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/dom_adapter */ "./node_modules/devextreme/esm/core/dom_adapter.js");
/* harmony import */ var _core_utils_extend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/utils/extend */ "./node_modules/devextreme/esm/core/utils/extend.js");
/* harmony import */ var _core_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utils/common */ "./node_modules/devextreme/esm/core/utils/common.js");
/* harmony import */ var _core_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/element */ "./node_modules/devextreme/esm/core/element.js");
/* harmony import */ var _core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/utils/iterator */ "./node_modules/devextreme/esm/core/utils/iterator.js");
/* harmony import */ var _core_utils_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/utils/type */ "./node_modules/devextreme/esm/core/utils/type.js");
/* harmony import */ var _core_component_registrator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/component_registrator */ "./node_modules/devextreme/esm/core/component_registrator.js");
/* harmony import */ var _events_utils_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../events/utils/index */ "./node_modules/devextreme/esm/events/utils/index.js");
/* harmony import */ var _collection_ui_collection_widget_live_update__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collection/ui.collection_widget.live_update */ "./node_modules/devextreme/esm/ui/collection/ui.collection_widget.live_update.js");
/* harmony import */ var _core_utils_deferred__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/utils/deferred */ "./node_modules/devextreme/esm/core/utils/deferred.js");
/* harmony import */ var _core_templates_bindable_template__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/templates/bindable_template */ "./node_modules/devextreme/esm/core/templates/bindable_template.js");
/* harmony import */ var _core_utils_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/utils/icon */ "./node_modules/devextreme/esm/core/utils/icon.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./themes */ "./node_modules/devextreme/esm/ui/themes.js");
/**
 * DevExtreme (esm/ui/accordion.js)
 * Version: 21.1.5
 * Build date: Mon Aug 02 2021
 *
 * Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */


















var ACCORDION_CLASS = "dx-accordion";
var ACCORDION_WRAPPER_CLASS = "dx-accordion-wrapper";
var ACCORDION_ITEM_CLASS = "dx-accordion-item";
var ACCORDION_ITEM_OPENED_CLASS = "dx-accordion-item-opened";
var ACCORDION_ITEM_CLOSED_CLASS = "dx-accordion-item-closed";
var ACCORDION_ITEM_TITLE_CLASS = "dx-accordion-item-title";
var ACCORDION_ITEM_BODY_CLASS = "dx-accordion-item-body";
var ACCORDION_ITEM_TITLE_CAPTION_CLASS = "dx-accordion-item-title-caption";
var ACCORDION_ITEM_DATA_KEY = "dxAccordionItemData";
var Accordion = _collection_ui_collection_widget_live_update__WEBPACK_IMPORTED_MODULE_13__.default.inherit({
    _activeStateUnit: "." + ACCORDION_ITEM_CLASS,
    _getDefaultOptions: function() {
        return (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_6__.extend)(this.callBase(), {
            hoverStateEnabled: true,
            height: void 0,
            itemTitleTemplate: "title",
            onItemTitleClick: null,
            selectedIndex: 0,
            collapsible: false,
            multiple: false,
            animationDuration: 300,
            deferRendering: true,
            selectionByClick: true,
            activeStateEnabled: true,
            _itemAttributes: {
                role: "tab"
            },
            _animationEasing: "ease"
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
        }, {
            device: function() {
                return (0,_themes__WEBPACK_IMPORTED_MODULE_17__.isMaterial)()
            },
            options: {
                animationDuration: 200,
                _animationEasing: "cubic-bezier(0.4, 0, 0.2, 1)"
            }
        }])
    },
    _itemElements: function() {
        return this._itemContainer().children(this._itemSelector())
    },
    _init: function() {
        this.callBase();
        this.option("selectionRequired", !this.option("collapsible"));
        this.option("selectionMode", this.option("multiple") ? "multiple" : "single");
        var $element = this.$element();
        $element.addClass(ACCORDION_CLASS);
        this._$container = (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").addClass(ACCORDION_WRAPPER_CLASS);
        $element.append(this._$container)
    },
    _initTemplates: function() {
        this.callBase();
        this._templateManager.addDefaultTemplates({
            title: new _core_templates_bindable_template__WEBPACK_IMPORTED_MODULE_15__.BindableTemplate((function($container, data) {
                if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_10__.isPlainObject)(data)) {
                    var $iconElement = (0,_core_utils_icon__WEBPACK_IMPORTED_MODULE_16__.getImageContainer)(data.icon);
                    if ($iconElement) {
                        $container.append($iconElement)
                    }
                    if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_10__.isDefined)(data.title) && !(0,_core_utils_type__WEBPACK_IMPORTED_MODULE_10__.isPlainObject)(data.title)) {
                        $container.append(_core_dom_adapter__WEBPACK_IMPORTED_MODULE_5__.default.createTextNode(data.title))
                    }
                } else if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_10__.isDefined)(data)) {
                    $container.text(String(data))
                }
                $container.wrapInner((0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").addClass(ACCORDION_ITEM_TITLE_CAPTION_CLASS))
            }), ["title", "icon"], this.option("integrationOptions.watchMethod"))
        })
    },
    _initMarkup: function() {
        this._deferredItems = [];
        this.callBase();
        this.setAria({
            role: "tablist",
            multiselectable: this.option("multiple")
        });
        (0,_core_utils_common__WEBPACK_IMPORTED_MODULE_7__.deferRender)(() => {
            var selectedItemIndices = this._getSelectedItemIndices();
            this._renderSelection(selectedItemIndices, [])
        })
    },
    _render: function() {
        this.callBase();
        this._updateItemHeightsWrapper(true)
    },
    _itemDataKey: function() {
        return ACCORDION_ITEM_DATA_KEY
    },
    _itemClass: function() {
        return ACCORDION_ITEM_CLASS
    },
    _itemContainer: function() {
        return this._$container
    },
    _itemTitles: function() {
        return this._itemElements().find("." + ACCORDION_ITEM_TITLE_CLASS)
    },
    _itemContents: function() {
        return this._itemElements().find("." + ACCORDION_ITEM_BODY_CLASS)
    },
    _getItemData: function(target) {
        return (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(target).parent().data(this._itemDataKey()) || this.callBase.apply(this, arguments)
    },
    _executeItemRenderAction: function(itemData) {
        if (itemData.type) {
            return
        }
        this.callBase.apply(this, arguments)
    },
    _itemSelectHandler: function(e) {
        if ((0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(e.target).closest(this._itemContents()).length) {
            return
        }
        this.callBase.apply(this, arguments)
    },
    _afterItemElementDeleted: function($item, deletedActionArgs) {
        this._deferredItems.splice(deletedActionArgs.itemIndex, 1);
        this.callBase.apply(this, arguments)
    },
    _renderItemContent: function(args) {
        var itemTitle = this.callBase((0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_6__.extend)({}, args, {
            contentClass: ACCORDION_ITEM_TITLE_CLASS,
            templateProperty: "titleTemplate",
            defaultTemplateName: this.option("itemTitleTemplate")
        }));
        this._attachItemTitleClickAction(itemTitle);
        var deferred = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_14__.Deferred;
        if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_10__.isDefined)(this._deferredItems[args.index])) {
            this._deferredItems[args.index] = deferred
        } else {
            this._deferredItems.push(deferred)
        }
        if (!this.option("deferRendering") || this._getSelectedItemIndices().indexOf(args.index) >= 0) {
            deferred.resolve()
        }
        deferred.done(this.callBase.bind(this, (0,_core_utils_extend__WEBPACK_IMPORTED_MODULE_6__.extend)({}, args, {
            contentClass: ACCORDION_ITEM_BODY_CLASS,
            container: (0,_core_element__WEBPACK_IMPORTED_MODULE_8__.getPublicElement)((0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)("<div>").appendTo((0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(itemTitle).parent()))
        })))
    },
    _attachItemTitleClickAction: function(itemTitle) {
        var eventName = (0,_events_utils_index__WEBPACK_IMPORTED_MODULE_12__.addNamespace)(_events_click__WEBPACK_IMPORTED_MODULE_3__.name, this.NAME);
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_1__.default.off(itemTitle, eventName);
        _events_core_events_engine__WEBPACK_IMPORTED_MODULE_1__.default.on(itemTitle, eventName, this._itemTitleClickHandler.bind(this))
    },
    _itemTitleClickHandler: function(e) {
        this._itemDXEventHandler(e, "onItemTitleClick")
    },
    _renderSelection: function(addedSelection, removedSelection) {
        this._itemElements().addClass(ACCORDION_ITEM_CLOSED_CLASS);
        this.setAria("hidden", true, this._itemContents());
        this._updateItems(addedSelection, removedSelection)
    },
    _updateSelection: function(addedSelection, removedSelection) {
        this._updateItems(addedSelection, removedSelection);
        this._updateItemHeightsWrapper(false)
    },
    _updateItems: function(addedSelection, removedSelection) {
        var $items = this._itemElements();
        _core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each(addedSelection, (_, index) => {
            this._deferredItems[index].resolve();
            var $item = $items.eq(index).addClass(ACCORDION_ITEM_OPENED_CLASS).removeClass(ACCORDION_ITEM_CLOSED_CLASS);
            this.setAria("hidden", false, $item.find("." + ACCORDION_ITEM_BODY_CLASS))
        });
        _core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each(removedSelection, (_, index) => {
            var $item = $items.eq(index).removeClass(ACCORDION_ITEM_OPENED_CLASS);
            this.setAria("hidden", true, $item.find("." + ACCORDION_ITEM_BODY_CLASS))
        })
    },
    _updateItemHeightsWrapper: function(skipAnimation) {
        if (this.option("templatesRenderAsynchronously")) {
            this._animationTimer = setTimeout(function() {
                this._updateItemHeights(skipAnimation)
            }.bind(this))
        } else {
            this._updateItemHeights(skipAnimation)
        }
    },
    _updateItemHeights: function(skipAnimation) {
        var that = this;
        var deferredAnimate = that._deferredAnimate;
        var itemHeight = this._splitFreeSpace(this._calculateFreeSpace());
        clearTimeout(this._animationTimer);
        return _core_utils_deferred__WEBPACK_IMPORTED_MODULE_14__.when.apply(_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default, [].slice.call(this._itemElements()).map((function(item) {
            return that._updateItemHeight((0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(item), itemHeight, skipAnimation)
        }))).done((function() {
            if (deferredAnimate) {
                deferredAnimate.resolveWith(that)
            }
        }))
    },
    _updateItemHeight: function($item, itemHeight, skipAnimation) {
        var $title = $item.children("." + ACCORDION_ITEM_TITLE_CLASS);
        if (_animation_fx__WEBPACK_IMPORTED_MODULE_2__.default.isAnimating($item)) {
            _animation_fx__WEBPACK_IMPORTED_MODULE_2__.default.stop($item)
        }
        var startItemHeight = $item.outerHeight();
        var finalItemHeight = $item.hasClass(ACCORDION_ITEM_OPENED_CLASS) ? itemHeight + $title.outerHeight() || $item.height("auto").outerHeight() : $title.outerHeight();
        return this._animateItem($item, startItemHeight, finalItemHeight, skipAnimation, !!itemHeight)
    },
    _animateItem: function($element, startHeight, endHeight, skipAnimation, fixedHeight) {
        var d;
        if (skipAnimation || startHeight === endHeight) {
            $element.css("height", endHeight);
            d = (new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_14__.Deferred).resolve()
        } else {
            d = _animation_fx__WEBPACK_IMPORTED_MODULE_2__.default.animate($element, {
                type: "custom",
                from: {
                    height: startHeight
                },
                to: {
                    height: endHeight
                },
                duration: this.option("animationDuration"),
                easing: this.option("_animationEasing")
            })
        }
        return d.done((function() {
            if ($element.hasClass(ACCORDION_ITEM_OPENED_CLASS) && !fixedHeight) {
                $element.css("height", "")
            }
            $element.not("." + ACCORDION_ITEM_OPENED_CLASS).addClass(ACCORDION_ITEM_CLOSED_CLASS)
        }))
    },
    _splitFreeSpace: function(freeSpace) {
        if (!freeSpace) {
            return freeSpace
        }
        return freeSpace / this.option("selectedItems").length
    },
    _calculateFreeSpace: function() {
        var height = this.option("height");
        if (void 0 === height || "auto" === height) {
            return
        }
        var $titles = this._itemTitles();
        var itemsHeight = 0;
        _core_utils_iterator__WEBPACK_IMPORTED_MODULE_9__.each($titles, (function(_, title) {
            itemsHeight += (0,_core_renderer__WEBPACK_IMPORTED_MODULE_0__.default)(title).outerHeight()
        }));
        return this.$element().height() - itemsHeight
    },
    _visibilityChanged: function(visible) {
        if (visible) {
            this._dimensionChanged()
        }
    },
    _dimensionChanged: function() {
        this._updateItemHeights(true)
    },
    _clean: function() {
        clearTimeout(this._animationTimer);
        this.callBase()
    },
    _tryParseItemPropertyName: function(fullName) {
        var matches = fullName.match(/.*\.(.*)/);
        if ((0,_core_utils_type__WEBPACK_IMPORTED_MODULE_10__.isDefined)(matches) && matches.length >= 1) {
            return matches[1]
        }
    },
    _optionChanged: function(args) {
        switch (args.name) {
            case "items":
                this.callBase(args);
                if ("title" === this._tryParseItemPropertyName(args.fullName)) {
                    this._renderSelection(this._getSelectedItemIndices(), [])
                }
                if ("visible" === this._tryParseItemPropertyName(args.fullName)) {
                    this._updateItemHeightsWrapper(true)
                }
                if (true === this.option("repaintChangesOnly") && "items" === args.fullName) {
                    this._updateItemHeightsWrapper(true);
                    this._renderSelection(this._getSelectedItemIndices(), [])
                }
                break;
            case "animationDuration":
            case "onItemTitleClick":
            case "_animationEasing":
                break;
            case "collapsible":
                this.option("selectionRequired", !this.option("collapsible"));
                break;
            case "itemTitleTemplate":
            case "height":
            case "deferRendering":
                this._invalidate();
                break;
            case "multiple":
                this.option("selectionMode", args.value ? "multiple" : "single");
                break;
            default:
                this.callBase(args)
        }
    },
    expandItem: function(index) {
        this._deferredAnimate = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_14__.Deferred;
        this.selectItem(index);
        return this._deferredAnimate.promise()
    },
    collapseItem: function(index) {
        this._deferredAnimate = new _core_utils_deferred__WEBPACK_IMPORTED_MODULE_14__.Deferred;
        this.unselectItem(index);
        return this._deferredAnimate.promise()
    },
    updateDimensions: function() {
        return this._updateItemHeights(false)
    }
});
(0,_core_component_registrator__WEBPACK_IMPORTED_MODULE_11__.default)("dxAccordion", Accordion);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ })

}]);