/* ========================================================================
* BootJStrap: bootjstrap.js v0.1.0
* ========================================================================
* Mail me : shirazy.sajjad@gmail.com
* ======================================================================== */
var bootJStrap = (function ($) {
    return {
        //--------------------------------------------------------------
        // utility
        head: $(document.head),
        body: $(document.body),
        dom: function (name, attr) {
            //console.log('B.dom',name,attr);
            var dom = $(document.createElement(name));
            if (attr) dom.attr(attr);
            return dom;
        },
        _UID: Date.now(),
        topmenusCount: 0,
        uniqueId: function () {
            return (B._UID++).toString(36);
        },        
        each: function (target, func, bind) {
            return $.each(target || [], bind ? func.bind(bind) : func);
        },
        uniqe:function(array){
            return array.filter(function(value, index, self) {return self.indexOf(value) === index;});
        },
        //--------------------------------------------------------------
        // basic elements
        p: function (attr) {
            return B.dom('p', attr);
        },
        em: function (attr) {
            return B.dom('em', attr);
        },
        hr: function (attr) {
            return B.dom('hr', attr);
        },
        h1: function (attr) {
            return B.dom('h1', attr);
        },
        h2: function (attr) {
            return B.dom('h2', attr);
        },
        h3: function (attr) {
            return B.dom('h3', attr);
        },
        h4: function (attr) {
            return B.dom('h4', attr);
        },
        h5: function (attr) {
            return B.dom('h5', attr);
        },
        small: function (attr) {
            return B.dom('small', attr);
        },
        br: function (times, attr) {
            if (times) {
                return Array.apply(null, new Array(times)).map(function () { return B.br(null, attr) });
            } else {
                return B.dom('br', attr);
            }
        },
        center: function (attr) {
            return B.dom('center', attr);
        },
        kbd: function (content) {
            return B.dom('kbd').append(content);
        },
        div: function (attr) {
            return B.dom('div', attr);
        },
        img: function (attr) {
            return B.dom('img', attr);
        },
        span: function (attr) {
            return B.dom('span', attr);
        },
        strong: function (childs,attr) {
            return B.dom('strong', attr).append(childs);
        },
        ul: function (items, attr) {
            var ul = B.dom('ul', attr);
            if (items && items instanceof Array) {
                $.each(items, function (index, item) {
                    if (item) {
                        if (item instanceof String || item instanceof Array || !item.is('li'))
                            item = B.dom('li').append(item);
                        ul.append(item);
                    }
                });
            } else {
                ul.append(items);
            }
            return ul;
        },
        li: function (attr) {
            return B.dom('li', attr);
        },
        svg:function(attr){
            return B.dom('svg',$.extend({'xmlns': "http://www.w3.org/2000/svg", 'xmlns:xlink': "http://www.w3.org/1999/xlink" },attr));
        },
        //--------------------------------------------------------------
        // UI
        a: function (attr, icon) {
            return B.dom('a', $.extend({ href: '#' }, attr)).append((icon ? [B.glyphicon(icon), ' '] : null));
        },
        button: function (attr, icon) {
            return B.dom('button', $.extend({ type: 'button', 'class': 'btn' }, attr)).append((icon ? [B.glyphicon(icon), ' '] : null));
        },
        input: function (attr) {
            return B.dom('input', attr).addClass('form-control');
        },
        text: function (attr) {
            return B.input(attr).attr('type', 'text');
        },
        textarea: function (attr) {
            return B.dom('textarea', attr).addClass('form-control');
        },
        email: function (attr) {
            return B.input(attr).attr('type', 'email');
        },
        password: function (attr) {
            return B.input(attr).attr('type', 'password');
        },
        checkbox: function (attr, desc) {
            return B.div().addClass('checkbox').append(B.dom('label').append(B.dom('input', attr).attr('type', 'checkbox')).append(desc));
        },
        radio: function (attr, desc) {
            return B.div().addClass('radio').append(B.dom('label').append(B.dom('input', attr).attr('type', 'radio')).append(desc));
        },
        option: function (attr) {
            return B.dom('option', attr);
        },
        //data : [item1,item2,...]
        //data : [[item1,value1],[item2,value2],...]
        options: function (data) {
            var result = new Array();
            if (data) {
                if (data instanceof Array) {
                    $.each(data, function (index, value) {
                        if (value instanceof Array) {
                            result.push(B.option({ 'value': value[1] }).append(value[0]));
                        } else {
                            result.push(B.option().append(value));
                        }
                    });
                }
            }
            return result;
        },
        //items : [item1,item2,...]
        //items : [[item1,value1],[item2,value2],...]
        select: function (items, attr) {
            return B.dom('select', attr).addClass('form-control').append(B.options(items));
        },
        submit: function (attr, icon) {
            return B.button(attr, icon).attr('type', 'submit');
        },
        form: function (attr) {
            return B.dom('form', attr).attr('rol', 'form');
        },
        formGroup: function (attr) {
            return B.div(attr).addClass('form-group');
        },
        inputGroup: function (attr) {
            return B.div(attr).addClass('input-group');
        },
        inputAddon: function (minWidth, attr) {
            return B.span(attr).addClass('input-group-addon').css('min-width', minWidth + 'px');
        },
        inputAddonControl: function (minWidth, attr) {
            return B.span(attr).addClass('input-group-btn').css('min-width', minWidth + 'px');
        },
        label: function (forId, text, desc) {
            return B.dom('label', { 'class': 'control-label', 'for': forId }).append(text, (desc ? B.dom('h6').append(desc) : null));
        },
        table: function (columns, rows) {
            var head = B.dom('thead').append(B.tr(columns, 'th'));
            var body = B.dom('tbody');
            if (rows) $.each(rows, function (index, row) {
                body.append(B.tr(row));
            });
            return B.dom('table').addClass('table').append(head, body);
        },
        tr: function (cells, cellTag) {
            var row = B.dom('tr');
            if (cells) {
                cellTag = cellTag || 'td';
                $.each(cells, function (index, cell) {
                    row.append(B.dom(cellTag).append(cell));
                });
            }
            return row;
        },
        fieldset: function (attr) {
            return B.dom('fieldset', attr);
        },
        //--------------------------------------------------------------
        //--------------------------------------------------------------
        //--------------------------------------------------------------
        //--------------------------------------------------------------
        // components
        //--------------------------------------------------------------
        pageHeader: function (attr) {
            return B.div(attr).addClass('page-header');
        },
        pageFooter: function (attr) {
            return B.div(attr).addClass('footer');
        },
        labeledControl: function (id, label, desc, lWidth, control) {
            if (!id) control.attr('id', id = B.uniqueId());
            if (lWidth && lWidth < 12) {
                return B.formGroup().append(B.label(id, label, desc).addClass('col-lg-' + lWidth), B.div().addClass('col-lg-' + (12 - lWidth)).append(control));
            } else {
                return B.formGroup().append(B.label(id, label, desc), control);
            }
        },
        panel: function (header, body, footer) {
            return B.div().addClass('panel').append(header ? B.div().addClass('panel-heading').append(header) : null, B.div().addClass('panel-body').append(body), footer ? B.div().addClass('panel-footer').append(footer) : null);
        },
        alert: function (icon) {
            return B.div({ role: 'alert' }).addClass('alert alert-dismissible').append(B.button({ 'data-dismiss': 'alert', 'aria-hidden': 'true' }).append('&times;').addClass('close'), icon ? [B.glyphicon(icon), ' '] : null);
        },
        progress: function () {
            return B.div().addClass('progress');
        },
        progressBar: function (value, min, max) {
            min |= 0;
            max |= 100;
            value |= 0;
            return B.div({ 'role': 'progressbar', 'aria-valuenow': value, 'aria-valuemin': min, 'aria-valuemax': max }).addClass('progress-bar').css('width', value + '%');
        },
        collapse: function (id) {
            return B.div({ 'id': id, 'class': 'collapse' });
        },
        glyphicon: function (name) {
            return name ? B.span().addClass('glyphicon glyphicon-' + name) : null;
        },
        dropdown: function (tag, title, items, icon) {
            var title = B.a({ 'class': 'dropdown-toggle', 'data-toggle': 'dropdown' }, icon).append((title ? [title + ' ', B.dom('b').addClass('caret')] : null));
            return B.dom(tag).addClass('dropdown').append(title, B.ul(items).addClass('dropdown-menu'));
        },
        navbar: $.extend(function (brand, left_menu, left_things, right_menu) {
            var collapseId = B.uniqueId();
            return B.dom('nav', { 'class': 'navbar', role: 'navigation' }).append(
		        B.div().append(
			        B.navbar.header(collapseId).append((brand && brand instanceof jQuery ? brand : B.span().append(brand)).addClass('navbar-brand')),
                    B.collapse(collapseId).append(
                        B.ul(left_menu).addClass('nav navbar-nav'),
                        left_things,
                        B.ul(right_menu).addClass('nav navbar-nav navbar-right')
                    ).addClass('navbar-collapse')
		        ).addClass('container')
	        );
        }, {
            header: function (collapseId) {
                var sr_only = B.span().addClass('sr-only').append('Toggle navigation');
                var icon_bar = B.span().addClass('icon-bar');
                var btn_toggle = B.button({ 'class': 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#' + collapseId }).append(sr_only, icon_bar, icon_bar.clone(), icon_bar.clone());
                return B.div().addClass('navbar-header').append(btn_toggle);
            }
        }),
        breadcrumb: function () {
            return B.dom('ol').addClass('breadcrumb');
        },
        topmenu: function (brand, left_menu, left_things, right_menu) {
            var top_padding = ++B.topmenusCount * 50;
            B.body.css('paddingTop', top_padding + 10 + 'px');
            return B.navbar(brand, left_menu, left_things, right_menu).css('top', top_padding - 50).css('z-index', 1030 - B.topmenusCount).addClass('navbar-fixed-top');
        },
        modal: $.extend(function (size,header, body, footer) {
            return B.div({ 'class': 'modal fade', role: 'dialog', tabindex: -1, 'aria-hidden': true, 'aria-labelledby': B.uniqueId() }).append(
                B.div().append(
                    B.div().append(
                        (header ? B.div().addClass('modal-header').append(header) : null),
                        (body ? B.div().addClass('modal-body').append(body) : null),
                        (footer ? B.div().addClass('modal-footer').append(footer) : null)
                    ).addClass('modal-content')
                ).addClass('modal-dialog ' + size)
            );
        }, {
            header: function (icon, title, showCloseButton) {
                return [(showCloseButton ? B.button({ 'class': 'close', 'data-dismiss': 'modal', 'aria-hidden': true }).append(B.span({ 'aria-hidden': true }).html('&times;'), B.span().text('Close').addClass('sr-only')) : null), B.dom('h4').addClass('modal-title').append((icon ? B.glyphicon(icon) : null), ' ', title)];
            },
            ok_close: function (attr, header, body, ok, close, onok) {
                return B.modal(attr, header, body, [
                        B.button().addClass('btn-success').append(ok).on('click', onok),
                        ' ',
                        B.button({ 'data-dismiss': 'modal' }).append('&times;', ' ', close)
                    ]);
            }
        }),
        jumbotron: function () {
            return B.div().addClass('jumbotron');
        }
    };
})(jQuery);
var B = bootJStrap;