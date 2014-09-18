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
    B.a({ href: '' }, 'star').addClass('btn btn-danger btn-lg').append('Getting Started')
    );
    B.body.append(topMenu, div_container.append(jumbotron));
}
```
Components
-------------
head: JQuery;
    body: JQuery;
    _UID: Date;
    topmenusCount: number;
    dom(name, attr?): JQuery;
    uniqueId(): string;
    each(target: any, func: Function, bind?: any);
    uniqe(array: any[]): any[];
    //--------------------------------------------------------------
    // basic elements
    p(attr?): JQuery;
    em(attr?): JQuery;
    hr(attr?): JQuery;
    h1(attr?): JQuery;
    h2(attr?): JQuery;
    h3(attr?): JQuery;
    h4(attr?): JQuery;
    h5(attr?): JQuery;
    small(attr?): JQuery;
    br(times?,attr?): JQuery;
    center(attr?): JQuery;
    kbd(content?): JQuery;
    div(attr?): JQuery;
    img(attr?): JQuery;
    span(attr?): JQuery;
    strong(childs?, attr?): JQuery;
    ul(items?, attr?): JQuery;
    li(attr?): JQuery;
    svg(attr?): JQuery;
    //--------------------------------------------------------------
    // UI
    a(attr?, icon?): JQuery;
    button(attr?, icon?): JQuery;
    input(attr?): JQuery;
    text(attr?): JQuery;
    textarea(attr?): JQuery;
    email(attr?): JQuery;
    password(attr?): JQuery;
    checkbox(attr?, desc?): JQuery;
    radio(attr?, desc?): JQuery;
    option(attr?): JQuery;
    /**
    * data : [item1,item2,...]
    * data : [[item1,value1],[item2,value2],...]
    */
    options(data): any[];
    /**
    * items : [item1,item2,...]
    * items : [[item1,value1],[item2,value2],...]
    */
    select(items?, attr?): JQuery;
    submit(attr?, icon?): JQuery;
    form(attr?): JQuery;
    formGroup(attr?): JQuery;
    inputGroup(attr?): JQuery;
    inputAddon(minWidth, attr?): JQuery;
    inputAddonControl(minWidth, attr?): JQuery;
    label(forId, text, desc): JQuery;
    table(columns, rows): JQuery;
    tr(cells, cellTag): JQuery;
    fieldset(attr?);
    //--------------------------------------------------------------
    // components
    pageHeader(attr?): JQuery;
    pageFooter(attr?): JQuery;
    labeledControl(id?, label?, desc?, lWidth?, control?): JQuery;
    panel(header?: any, body?: any, footer?: any): JQuery;
    progress(): JQuery;
    progressBar(value?: number, min?: number, max?: number): JQuery;
    alert(icon?: string): JQuery;
    collapse(id): JQuery;
    glyphicon(name): JQuery;
    dropdown(tag, title, items, icon?): JQuery;
    navbar(brand, left_menu, left_things, right_menu): JQuery;
    breadcrumb(): JQuery;
    topmenu(brand?, left_menu?, left_things?, right_menu?): JQuery;
    modal(size, header, body, footer);
    jumbotron(): JQuery;
[Demo]:https://rawgit.com/sajjad-shirazy/BootJStrap/master/test/index.htm
