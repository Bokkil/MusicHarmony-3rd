/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "/": "index"
        },

        index: function() {
            require(['app/scripts/views/topbar'], function(TopbarV){
                console.log("Welcome to your / route.");
                console.log("test");
                var topbar = new TopbarV();
                topbar.render();
            });
        },

    });

    return MainRouter;
});





