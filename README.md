jQuery Routing
==============

A jQuery plugin to enable simple script execution on different pages from the same
script file. The code has been extracted from the [Sage](https://github.com/roots/sage/)
Wordpress theme and packaged as a jQuery plugin.

## Installation

```bash
npm install jquery.routing
```

## Usage

Include script then pass a routing map to `$.routing()`. The router then fires the
code depending on classes on the body HTML element matching with the maps property
names.

```js
  $.routing.load({
    // Fires on all pages
    'common': {
      init: function() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Fires only on the contact page (<body class="contact">)
    'contact': {
      init: function() {
        // Set up form validation
        $('#contact-form').validate({
          ignore: ':hidden',
          rules: {
            name: {required: true},
            subject: {required: true},
            message: {required: true},
            email: {required: true, email: true},
          },
          messages: {}
        });
      }
    },
  });
```

## License
MIT
