(function() {
	function ShowInformer(obj) { var news='<img class="join_counter" src="//www.partner.join.com.ua/counter.cgi?view=3353" width=1 height=1 style="width:1px;height:1px;position:absolute;"><img class="join_counter" data-src="//www.partner.join.com.ua/counter.cgi?pid=3353&nid=73065284&nid=66677895&nid=72702483&nid=73151772&nid=72150469&url='+escape(document.location)+'" width=1 height=1 style="width:1px;height:1px;"><table cellpadding=0 cellspacing=6 border=0 width=100%><tr><td class="join_img_td" width=20% align=center><a rel="nofollow" target="_blank" href="//partner.join.com.ua/xml/go/73065284/3353/2803/" rel="nofollow"><img class="join_img" src="//partner.join.com.ua/images/clipart/_loaded01/100x100_img_1512644656.jpg" align="" hspace="" vspace="" border="0"></a></td><td class="join_img_td" width=20% align=center><a rel="nofollow" target="_blank" href="//partner.join.com.ua/xml/go/66677895/3353/2803/" rel="nofollow"><img class="join_img" src="//partner.join.com.ua/images/clipart/_loaded01/100x100_img_1491468883.jpg" align="" hspace="" vspace="" border="0"></a></td><td class="join_img_td" width=20% align=center><a rel="nofollow" target="_blank" href="//partner.join.com.ua/xml/go/72702483/3353/3021/" rel="nofollow"><img class="join_img" src="//partner.join.com.ua/images/clipart/_loaded01/100x100_img_1511478512.jpg" align="" hspace="" vspace="" border="0"></a></td><td class="join_img_td" width=20% align=center><a rel="nofollow" target="_blank" href="//partner.join.com.ua/xml/go/73151772/3353/3794/" rel="nofollow"><img class="join_img" src="//partner.join.com.ua/images/partners/3794/14/81/14816.jpg?v=1512992496" align="" hspace="" vspace="" border="0"></a></td><td class="join_img_td" width=20% align=center><a rel="nofollow" target="_blank" href="//partner.join.com.ua/xml/go/72150469/3353/3794/" rel="nofollow"><img class="join_img" src="//partner.join.com.ua/images/partners/3794/14/48/14484.jpg?v=1509533581" align="" hspace="" vspace="" border="0"></a></td></tr><tr><td class="join_text_td" width=20% align=center valign=top><p><a rel="nofollow" class="join_link" target="_blank" rel="nofollow" href="//partner.join.com.ua/xml/go/73065284/3353/2803/" class="hrefclass" >Горбачев прокомментировал выдвижение Путина</a></p></td><td class="join_text_td" width=20% align=center valign=top><p><a rel="nofollow" class="join_link" target="_blank" rel="nofollow" href="//partner.join.com.ua/xml/go/66677895/3353/2803/" class="hrefclass" >1000 автобусов с мужчинами призывного возраста движется к востоку ДНР</a></p></td><td class="join_text_td" width=20% align=center valign=top><p><a rel="nofollow" class="join_link" target="_blank" rel="nofollow" href="//partner.join.com.ua/xml/go/72702483/3353/3021/" class="hrefclass" >Циммеры превратили в бордель с малолетками</a></p></td><td class="join_text_td" width=20% align=center valign=top><p><a rel="nofollow" class="join_link" target="_blank" rel="nofollow" href="//partner.join.com.ua/xml/go/73151772/3353/3794/" class="hrefclass" >Абдулова, Задорнова и Хворостовского убили одни и те же «уколы молодости»?</a></p></td><td class="join_text_td" width=20% align=center valign=top><p><a rel="nofollow" class="join_link" target="_blank" rel="nofollow" href="//partner.join.com.ua/xml/go/72150469/3353/3794/" class="hrefclass" >Что считали развратом на Руси</a></p></td></tr></table>'; if(obj != null) obj.innerHTML=news; } s=document.createElement("style");
s.type = "text/css";
cssCode = ".join_informer_3353 { clear: none !important; }";
if (s.styleSheet) { s.styleSheet.cssText = cssCode;
} else { s.appendChild(document.createTextNode(cssCode));
}
document.getElementsByTagName("head")[0].appendChild(s);
(function (w,d) {
	var
		_supportsAddEventListener = !!w.addEventListener,
		_supportsAttachEvent = !!w.attachEvent,
		_supportsClassList = !!d.body.classList;	
		
		
		
	function log(s) {
//		window.console && console.log(s);
		return true;
	}
		
	function _addEventListener(element, eventName, callback) {
		if (_supportsAddEventListener) {
			element.addEventListener(eventName, callback);
			return;
		}
		if (_supportsAttachEvent) {
			element.attachEvent('on' + eventName, (function (el) {
				return function () {
					callback.call(el, w.event);
				};
			}(element)));
			element = null;
		}
	}

	function _removeEventListener(element, eventName, callback) {
		if (_supportsAddEventListener) {
			element.removeEventListener(eventName, callback);
			return;
		}
		if (_supportsAttachEvent) {
			element.detachEvent('on' + eventName, callback);
		}
	}

	function _isInsideViewport(element, container, threshold) {

		var ownerDocument, documentTop, documentLeft;

		function _getDocumentWidth() {
			return w.innerWidth || (ownerDocument.documentElement.clientWidth || d.body.clientWidth);
		}

		function _getDocumentHeight() {
			return w.innerHeight || (ownerDocument.documentElement.clientHeight || d.body.clientHeight);
		}

		function _getTopOffset(element) {
			return element.getBoundingClientRect().top + documentTop - ownerDocument.documentElement.clientTop;
		}

		function _getLeftOffset(element) {
			return element.getBoundingClientRect().left + documentLeft - ownerDocument.documentElement.clientLeft;
		}

		function _isBelowViewport() {
			return _getDocumentHeight() + documentTop <= _getTopOffset(element) - threshold;
		}

		function _isAtRightOfViewport() {
			return _getDocumentWidth() + w.pageXOffset <= _getLeftOffset(element) - threshold;
		}

		function _isAboveViewport() {
			return documentTop >= _getTopOffset(element) + threshold + element.offsetHeight;
		}

		function _isAtLeftOfViewport() {
			var fold;
			fold = documentLeft;
			return fold >= _getLeftOffset(element) + threshold + element.offsetWidth;
		}

		ownerDocument = element.ownerDocument;
		documentTop = w.pageYOffset || ownerDocument.body.scrollTop;
		documentLeft = w.pageXOffset || ownerDocument.body.scrollLeft;

		return !_isBelowViewport() && !_isAboveViewport() && !_isAtRightOfViewport() && !_isAtLeftOfViewport();
	}

	function _getElementsByClassName(className, node) {
		if(d.getElementsByClassName) {
			return (node || d).getElementsByClassName(className)
		} else {
			var node = node || d,
			list = node.getElementsByTagName('*'), 
			length = list.length,  
			result = [], i,j
			for(i = 0; i < length; i++) {
				if(list[i].className == className) {
					result.push(list[i])
					break
				}
			}
		
			return result
		}
	}

	function _handleScrollFn() {
		var visible = _isInsideViewport(informer, w, -100);
		if(visible) {
			log('Informer visible');
			var counters = _getElementsByClassName('join_counter', informer);
			log(counters);
			for(var i=0, counter;i<counters.length;++i,counter=counters[i]) {
				if(counter !== undefined) {
					log(counter);
					var src = counter.getAttribute('data-src');
					if (src) {
						counter.setAttribute("src", src);
					}
					
				}
			}
//			informer.style.backgroundColor = "red";
			_removeEventListener(w, "scroll", _handleScrollFn);
//			alert('a');
		}
		
//		console.log('scroll ', informer, visible, counter);
	}
	var informer;

	_addEventListener(w, "load", function() {
		log('Scroll event handler activated');
		informer = d.getElementById('join_informer_3353');
		_addEventListener(w, "scroll", _handleScrollFn);
		_handleScrollFn();
	});

		
})(window,document);

	ShowInformer(document.getElementById('join_informer_3353'));
})();