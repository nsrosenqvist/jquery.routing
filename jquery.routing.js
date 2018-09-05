(function($) {
  let routing = {
    namespace: {},
    fire: function(func, funcname, args) {
      var fire;

      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && routing.namespace[func];
      fire = fire && typeof routing.namespace[func][funcname] === 'function';

      if (fire) {
        routing.namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      routing.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        routing.fire(classnm);
        routing.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      routing.fire('common', 'finalize');
    },
    load: function(namespace) {
      routing.namespace = namespace;
      $(document).ready(routing.loadEvents);
    }
  };

  $.routing = routing;

  // Load Events
  // $(document).ready(UTIL.loadEvents);

})(jQuery);
