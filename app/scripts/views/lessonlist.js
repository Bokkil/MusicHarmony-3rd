/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/lessonlist.html'
], function ($, _, Backbone, LessonlistT) {
    'use strict';

    var LessonlistV = Backbone.View.extend({
        tagName: 'div',

        id: 'lessonlist',

        className: '',

        events: {
            'click .go-lesson': 'goLesson'
        },

        lessonlist: _.template(LessonlistT),

        el: $("#contents"),

        initialize: function () {
            console.log("test");
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            console.log("text");
            //this.$el.html(this.template(this.model.toJSON()));
            this.$el.html(this.lessonlist);
        },

        goLesson: function() {
            console.log("gogo");
            window.router.navigate('lesson', true);
            return false;
        }
    });

    return LessonlistV;
});
