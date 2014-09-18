BootJStrap
==========

Bootstrap Javascript Building Blocks

Basic Example
--------------

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap core CSS -->
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
        <title>BootJStrap</title>
    </head>
    <body onload="main()">
        <!-- JQuery -->
        <script src="//code.jquery.com/jquery-latest.min.js"></script>
        <!-- Bootstrap core JS -->
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>        
        <!-- Boot JS trap -->
        <script src="js/bootjstrap.min.js"></script>
        <!-- Main of Your WEB Application -->
        <script type="text/javascript">
            function main() {
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
        </script>
    </body>
</html>
```
