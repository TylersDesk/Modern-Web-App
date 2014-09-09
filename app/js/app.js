var app = (function(document, $) {
	console.log('App IFFE was called;');

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},

		_init = function() {
			console.log('I was called');
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	console.log('Calling app.init');
	app.init();

})();