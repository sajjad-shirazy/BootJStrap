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

[Demo]:https://rawgit.com/sajjad-shirazy/BootJStrap/master/test/index.htm
