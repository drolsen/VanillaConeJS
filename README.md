# VanillaConeJS
A simple collections of utilities to make common JS authoring tasks easier.

To instantiate simple call:

```javascript
new VanillaCone();
```

## Here are the available utility methods that comes with VinillaCone:
------
**xhr | xhr([options])**

Performs what is known as AJAX calls to a desired url in either GET or POST methods.

**Options:**
* **url** = url to request data from
* **data** = data to pass to url
* **type** = method type ('GET' or 'POST')
* **success** = callback for successful request 
* **error** = callback for unsuccessful request

------

**addClass | addClass(DOMElement, string)**

Adds a class to a given element.

```javascript
addClass(document.querySelector('#some-elm'), 'new-class-name');
```

------

**removeClass | removeClass(DOMElement, string)**

Removes a class from a given element.

```javascript
removeClass(document.querySelector('#some-elm'), 'class-name-to-remove');
```

------

**hasClass | hasClass(DOMElement, string)**

Returns true or false depending on if given element has said class.

```javascript
if(hasClass(document.querySelector('#some-elm'), 'class-to-search')){
	...
}
```

------

**wrap | wrap(DOMElement, DOMElement)**

Wraps given element (first param), within another element (second peram).

```javascript
wrap(document.querySelector('#element-to-be-wrapped'), document.querySelector('#element-to-wrap-in'));
```

------

**parents | parent(DOMElement, string)**

From a given element (first param), this method traverses up to the first found parent (second param). 
Parent selector string supports all querySelector combinations (class, id, attribute, tag etc).

```javascript
parents(document.querySelector('#any-element'), '#parent-element-to-search-for');
```

------

**remove | remove(DOMelement)**

Removes given element from page.

```javascript
remove(document.querySelector('#any-element'));
```

------

**insertAfter | insertAfter(DOMElement, DOMElement)**

Inserts a given element (first param) after any element on the page (second param).

```javascript
insertAfter(document.querySelector('#element-to-be-moved'), document.querySelector('#element-we-insert-after'));
```

------

**serialize | serialize()**

Quick method to serialize a form into name=value& string for the above xhr method or other logic.

```javascript
serialize();
```
