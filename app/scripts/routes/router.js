/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            "": "index",
            "lesson": "test"
        },

        initialize: function() {
            
        },

        index: function() {
            require(['views/lessonlist'], function(LessonlistV){
                console.log("Welcome to your / route.");
                var view = new LessonlistV();
                view.render();
            });
        },

        test: function() {
            require(['views/lessoncontents'], function(LessoncontentsV){
                console.log("Welcome to your / route.");
                var view = new LessoncontentsV();
                view.render();
            });
        }

    });

    return MainRouter;
});





