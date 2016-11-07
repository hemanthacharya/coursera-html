requirejs.config({
  // Path mappings for the logical module names
  paths: {
    'knockout': '//cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
    'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min',
    "jqueryui": "//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui",
    "jqueryui-amd": "//cdn.rawgit.com/jquery/jquery-ui/1-11-stable/ui",

    "promise": "//cdn.rawgit.com/components/es6-promise/c95149ffaa2e8162601c57d4282362eac84f929b/promise.min",
    "hammerjs": "//cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.4/hammer.min",
    // 2.0.1: 49fcbbde7c8e178a3a21625d44485536e3ad1aaf
    "ojdnd": "//cdn.rawgit.com/oracle/oraclejet/2.0.1/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min",
    "ojs": "//cdn.rawgit.com/oracle/oraclejet/2.0.1/dist/js/libs/oj/debug",
    "ojL10n": "//cdn.rawgit.com/oracle/oraclejet/2.0.1/dist/js/libs/oj/ojL10n",
    "ojtranslations": "//cdn.rawgit.com/oracle/oraclejet/2.0.1/dist/js/libs/oj/resources",
    "text": "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
    "signals": "//cdnjs.cloudflare.com/ajax/libs/js-signals/1.0.0/js-signals.min",

    // non-jet libraries
    // Lazy is not necessarily necessary, but it makes for a nice polyfill
    "lazy": "//cdnjs.cloudflare.com/ajax/libs/lazy.js/0.4.2/lazy.min"
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jqueryui-amd': {
      exports: "$",
      deps: ['jquery']
    },
    'jquery': {
      exports: ['jQuery', '$']
    }
  },
  config: {
    ojL10n: {
      merge: {
        //'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
        // The following addes en-US to the r.js bundle
        //'ojtranslations/nls/ojtranslations': '../../oj/resources/nls/en-US/localeElements'
      }
    }
  }
});

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojselectcombobox','ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojcheckboxset'],
function(oj, ko, $)
{   
  $(document).ready(
    function()
    {
      function ValueModel() {
        this.automaticCommitMessage = ko.observable("Somewhat long value");
        this.options = ko.observableArray(["Squash","Delete"]);
        this.issuesToCloseIds = ko.observableArray();
      }
      ko.applyBindings(new ValueModel(), document.getElementById('form1'));
    }
  );
});