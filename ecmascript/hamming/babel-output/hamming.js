'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Hamming = (function () {
	function Hamming() {
		_classCallCheck(this, Hamming);

		this.compute = this.compute.bind(this);
	}

	_createClass(Hamming, [{
		key: 'compute',
		value: function compute(string1, string2) {
			var hamming_count = 0;
			if (string1.length !== string2.length) {
				throw new Error('DNA strands must be of equal length.');
			}
			for (var i = 0; i < string1.length; i++) {
				string1.charAt(i) !== string2.charAt(i) ? hamming_count++ : null;
			}
			return hamming_count;
		}
	}]);

	return Hamming;
})();

module.exports = Hamming;