/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        text: '../bower_components/requirejs-text/text',
        smoothie: '../bower_components/smoothie/smoothie'
    }
});

require([
    'backbone', 'routes/router'
], function (Backbone, Router) {
    window.router = new Router();
    console.log (window.router);
    Backbone.history.start({
        pushState: true,
        root: "/"
    });
});
