# VanillaConeJS
A simple collections of utilities to make common JS authoring tasks easier.

To instantiate simple call:
```javascript
new VanillaCone();
```

## Here are the available utility methods that comes with VinillaCone:

**xhr | xhr([options])**

Performs what is known as AJAX calls to a desired url in either GET or POST methods.

### Options:
* **url** = url to request data from
* **data** = data to pass to url
* **type** = method type ('GET' or 'POST')
* **success** = callback for successful request 
* **error** = callback for unsuccessful request

**addClass | addClass(DOMElement, string)**

Adds a class to a given element.

**removeClass | removeClass(DOMElement, string)**

Removes a class from a given element.

**hasClass | hasClass(DOMElement, string)**

Returns true or false depending on if given element has said class.

**wrap | wrap(DOMElement, DOMElement)**

Wraps given element (first param), within another element (second peram).

**parents | parent(DOMElement, string)**

From a given element (first param), this method traverses up to the first found parent (second param). 
Parent selector string supports all querySelector combinations (class, id, attribute, tag etc).

**remove | remove(DOMelement)**

Removes given element from page

**insertAfter | insertAfter(DOMElement, DOMElement)**

Inserts given element (first param) after any element on the page (second param).

**serialize | serialize()**

Quick method to serialize a form into name=value& string for the above xhr method or other logic.
