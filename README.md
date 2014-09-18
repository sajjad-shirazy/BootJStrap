BootJStrap
==========

Bootstrap Javascript Building Blocks

Advantages
--------------
- Removing client side processes from server side.
- Decrease Data transfer between client and server.
- Having a clear MVC design.
- Removing HTML codes from your programming pipeline.
- Leave using HTML id`s forever.
- Increasing your client side running speed with leaving using of Javascript selectors, because you have all pointers to your elements.
	
Basic Example
--------------
[Demo]
```js
var topMenu = B.topmenu(B.a().append('BootJStrap')).addClass('navbar-default');
var div_container = B.div().addClass('container');
var jumbotron = B.jumbotron().css('text-align', 'center').append(B.h1().append(
        B.kbd('With BOOTJSTRAP ...')
    ),
    B.h3().append('you can remove html from your coding :)'),
    B.br(3),
    B.a({ href: '...' }, 'star').addClass('btn btn-danger btn-lg').append('Getting Started')
    );
    B.body.append(topMenu, div_container.append(jumbotron));
}
```


## Components
###utils
```js
head: JQuery;
```
```js
body: JQuery;
```
```js
_UID: Date;
```
```js
topmenusCount: number;
```
```js
dom(name, attr?): JQuery;
```
```js
uniqueId(): string;
```
```js
each(target: any, func: Function, bind?: any);
```
```js
uniqe(array: any[]): any[];
```
---
###basic elements
```js
p(attr?): JQuery;
```
```js
em(attr?): JQuery;
```
```js
hr(attr?): JQuery;
```
```js
h1(attr?): JQuery;
```
```js
h2(attr?): JQuery;
```
```js
h3(attr?): JQuery;
```
```js
h4(attr?): JQuery;
```
```js
h5(attr?): JQuery;
```
```js
small(attr?): JQuery;
```
```js
br(times?,attr?): JQuery;
```
```js
center(attr?): JQuery;
```
```js
kbd(content?): JQuery;
```
```js
div(attr?): JQuery;
```
```js
img(attr?): JQuery;
```
```js
span(attr?): JQuery;
```
```js
strong(childs?, attr?): JQuery;
```
```js
ul(items?, attr?): JQuery;
```
```js
li(attr?): JQuery;
```
```js
svg(attr?): JQuery;
```
---
###ui
```js
a(attr?, icon?): JQuery;
```
```js
button(attr?, icon?): JQuery;
```
```js
input(attr?): JQuery;
```
```js
text(attr?): JQuery;
```
```js
textarea(attr?): JQuery;
```
```js
email(attr?): JQuery;
```
```js
password(attr?): JQuery;
```
```js
checkbox(attr?, desc?): JQuery;
```
```js
radio(attr?, desc?): JQuery;
```
```js
option(attr?): JQuery;
```
- data : [item1,item2,...]
- data : [[item1,value1],[item2,value2],...]

```js
options(data): any[];
```
- items : [item1,item2,...]
- items : [[item1,value1],[item2,value2],...]

```js
select(items?, attr?): JQuery;
```
```js
submit(attr?, icon?): JQuery;
```
```js
form(attr?): JQuery;
```
```js
formGroup(attr?): JQuery;
```
```js
inputGroup(attr?): JQuery;
```
```js
inputAddon(minWidth, attr?): JQuery;
```
```js
inputAddonControl(minWidth, attr?): JQuery;
```
```js
label(forId, text, desc): JQuery;
```
```js
table(columns, rows): JQuery;
```
```js
tr(cells, cellTag): JQuery;
```
```js
fieldset(attr?);
```
---
###components
```js
pageHeader(attr?): JQuery;
```
```js
pageFooter(attr?): JQuery;
```
```js
labeledControl(id?, label?, desc?, lWidth?, control?): JQuery;
```
```js
panel(header?: any, body?: any, footer?: any): JQuery;
```
```js
progress(): JQuery;
```
```js
progressBar(value?: number, min?: number, max?: number): JQuery;
```
```js
alert(icon?: string): JQuery;
```
```js
collapse(id): JQuery;
```
```js
glyphicon(name): JQuery;
```
```js
dropdown(tag, title, items, icon?): JQuery;
```
```js
navbar(brand, left_menu, left_things, right_menu): JQuery;
```
```js
breadcrumb(): JQuery;
```
```js
topmenu(brand?, left_menu?, left_things?, right_menu?): JQuery;
```
```js
modal(size, header, body, footer);
```
```js
jumbotron(): JQuery;
```

	
License
----
MIT

[Demo]:https://rawgit.com/sajjad-shirazy/BootJStrap/master/test/index.htm
