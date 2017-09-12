'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VanillaCone = function () {
	function VanillaCone() {
		_classCallCheck(this, VanillaCone);
	}

	_createClass(VanillaCone, null, [{
		key: 'xhr',
		value: function xhr(options) {
			options = options || {
				url: url,
				data: data,
				type: 'GET',
				success: success,
				error: error
			};
			var xhr, done, ok;
			xhr = new XMLHttpRequest();
			xhr.open(options.type, options.url);
			xhr.send(options.data);
			xhr.onreadystatechange = function () {
				done = 4; // readyState 4 means the request is done.
				ok = 200; // status 200 is a successful return.
				if (xhr.readyState === done) {
					if (xhr.status === ok) {
						if (typeof options.success == 'function') {
							options.success(xhr.responseText);
						}
					} else {
						if (typeof options.success == 'function') {
							options.error(xhr.status);
						}
					}
				}
			};
		}
	}, {
		key: 'addClass',
		value: function addClass(obj, newClass) {
			if (!obj.className.match(newClass)) {
				obj.className += ' ' + newClass;
			}
		}
	}, {
		key: 'removeClass',
		value: function removeClass(obj, oldClass) {
			obj.className = obj.className.replace(' ' + oldClass, '');
		}
	}, {
		key: 'wrap',
		value: function wrap(obj, newWrap) {
			if (typeof obj != 'undefined') {
				obj.parentNode.insertBefore(newWrap, obj);
				newWrap.appendChild(obj);
			}
		}
	}, {
		key: 'hasClass',
		value: function hasClass(obj, searchingClass) {
			var i, classNames, className, hasClass;
			classNames = obj.className.split(' ');
			hasClass = false;
			i = classNames.length;
			while (i--) {
				className = classNames[i].replace(/ /g, '');
				if (className == searchingClass) {
					hasClass = true;
				}
			}
			return hasClass;
		}
	}, {
		key: 'parents',
		value: function parents(obj, parent) {
			var classNAME, ID, el;
			el = obj;

			if (parent.indexOf('.') === 0) {
				while (el.parentNode) {
					el = el.parentNode;
					classNAME = el.className;
					if (classNAME && typeof classNAME.match == 'function') {
						var classes = classNAME.split(" ");
						var j = classes.length;
						var hunted = parent.toLowerCase().replace('.', '');
						while (j--) {
							if (classes[j] == hunted) return el;
						}
					}
				}
			} else if (parent.indexOf('#') === 0) {
				while (el.parentNode) {
					el = el.parentNode;
					ID = el.id;
					if (ID && typeof ID.match == 'function') {
						if (ID.match(parent.toLowerCase().replace('#', ''))) return el;
					}
				}
			} else {
				while (el.parentNode) {
					el = el.parentNode;
					if (el.tagName) {
						if (typeof parent != 'undefined') {
							if (el.tagName.toLowerCase() === parent.toLowerCase()) return el;
						}
					}
				}
			}

			return null;
		}
	}, {
		key: 'remove',
		value: function remove(obj) {
			obj.parentNode.removeChild(obj);
		}
	}, {
		key: 'inserAfter',
		value: function inserAfter(obj, node) {
			obj.parentNode.insertBefore(node, obj.nextSibling);
		}

		/*Form utilities*/

	}, {
		key: 'removeError',
		value: function removeError(obj) {
			RX.removeClass(obj, 'error');
		}
	}, {
		key: 'addError',
		value: function addError(obj) {
			RX.addClass(obj, 'error');
		}
	}, {
		key: 'addErrorDisplay',
		value: function addErrorDisplay(obj, parent) {
			var errorDisplay;
			if (obj.dataset.errorDisplay && !parent.querySelector('.error-display')) {
				errorDisplay = document.createElement('span');
				errorDisplay.className = 'error-display';
				errorDisplay.innerHTML = obj.dataset.errorDisplay;
				parent.appendChild(errorDisplay);
			}
		}
	}, {
		key: 'addDays',
		value: function addDays(obj, numDays) {
			obj.setDate(obj.getDate() + numDays);
			return obj;
		}
	}]);

	return VanillaCone;
}();

if (typeof HTMLElement != 'undefined') {
	HTMLElement.prototype.serialize = function () {
		var obj = {};
		var elements = this.querySelectorAll("input, select, textarea");
		for (var i = 0; i < elements.length; ++i) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if (name) {
				obj[name] = value;
			}
		}
		return JSON.stringify(obj);
	};
}