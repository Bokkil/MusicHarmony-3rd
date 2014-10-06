/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'smoothie',
    'text!templates/lessoncontents.html'
], function ($, _, Backbone, SmoothieChart, LessoncontentsT) {
    'use strict';

    var LessoncontentsV = Backbone.View.extend({

        smoothieChart: SmoothieChart, 
        
        lessoncontents: _.template(LessoncontentsT),

        el: $("#contents"),

        initialize: function () {
            
        },

        render: function () {
            this.$el.html(this.lessoncontents);
        }
    });

    return LessoncontentsV;
});
