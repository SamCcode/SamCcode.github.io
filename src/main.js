"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _App = _interopRequireDefault(require("./App"));
require("./index.scss");
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _padelReducers = _interopRequireDefault(require("./reducers/padelReducers"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var store = (0, _redux.legacy_createStore)(_padelReducers["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
_client["default"].createRoot(document.getElementById('root')).render(
/*#__PURE__*/
// <React.StrictMode>
_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)))
// </React.StrictMode>
);
