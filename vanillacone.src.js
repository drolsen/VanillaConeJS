class VanillaCone {
	static xhr(options){
		options = options || {
			url, 
			data, 
			type: 'GET', 
			success, 
			error			
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
		            if(typeof options.success == 'function'){
		                options.success(xhr.responseText);
		            }
		        } else {
		            if(typeof options.success == 'function'){
		                options.error(xhr.status);
		            }
		        }
		    }
		};		
	}

	static addClass(obj, newClass){
		if(!obj.className.match(newClass)){
			obj.className += ' '+newClass;
		}
	}

	static removeClass(obj, oldClass){
		obj.className = obj.className.replace(' '+oldClass, '');
	}

	static wrap(obj, newWrap){
		if(typeof obj != 'undefined'){
			obj.parentNode.insertBefore(newWrap, obj);
			newWrap.appendChild(obj);
		}
	}

	static hasClass(obj, searchingClass){
		var i, classNames, className, hasClass;
		classNames = obj.className.split(' ');
		hasClass = false;
		i = classNames.length;
		while(i--){
			className = classNames[i].replace(/ /g, '');
			if(className == searchingClass){
				hasClass = true;
			}
		}
		return hasClass;		
	}

	static parents(obj, parent){
		var classNAME, ID, el;
		el = obj;

		if(parent.indexOf('.') === 0){
			while (el.parentNode) {
				el = el.parentNode;
				classNAME = el.className;
				if(classNAME && typeof classNAME.match == 'function'){
					var classes = classNAME.split(" ");
					var j = classes.length;
					var hunted = parent.toLowerCase().replace('.','');
					while(j--){
						if(classes[j] == hunted)
							return el;
					}
				}
			}
		}else if(parent.indexOf('#') === 0){
			while (el.parentNode) {
				el = el.parentNode;
				ID = el.id;
				if(ID && typeof ID.match == 'function'){
					if (ID.match(parent.toLowerCase().replace('#', '')))
						return el;
				}
			}
		}else{
			while (el.parentNode) {
				el = el.parentNode;
				if(el.tagName){
					if(typeof parent != 'undefined'){
						if (el.tagName.toLowerCase() === parent.toLowerCase())
							return el;
					}
				}
			}
		}

		return null;		
	}

	static remove(obj){
		obj.parentNode.removeChild(obj);		
	}

	static inserAfter(obj, node){
		obj.parentNode.insertBefore(node, obj.nextSibling);		
	}

	/*Form utilities*/
	static removeError(obj){
		RX.removeClass(obj, 'error');
	}

	static addError(obj){
		RX.addClass(obj, 'error');
	}

	static addErrorDisplay(obj, parent){
		var errorDisplay;
		if(obj.dataset.errorDisplay && !parent.querySelector('.error-display')){
			errorDisplay = document.createElement('span');
			errorDisplay.className = 'error-display';
			errorDisplay.innerHTML = obj.dataset.errorDisplay;
			parent.appendChild(errorDisplay);
		}
	}

	static addDays(obj, numDays){
		obj.setDate(obj.getDate() + numDays);
		return obj;
	}	
}

if(typeof HTMLElement != 'undefined'){
	HTMLElement.prototype.serialize = function(){
		var obj = {};
		var elements = this.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}
		return JSON.stringify( obj );
	}
}