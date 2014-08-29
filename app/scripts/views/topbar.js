/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'text!templates/topbar.ejs'
], function ($, _, Backbone, JST, TopbarT) {
    'use strict';

    var TopbarV = Backbone.View.extend({
        template: JST['app/scripts/templates/topbar.ejs'],

        tagName: 'div',

        id: 'topbar',

        className: '',

        events: {},

        topbar: _.template(TopbarT),

        el: $("#topbar"),

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            //this.$el.html(this.template(this.model.toJSON()));
            this.$el.html(this.topbar);
        }
    });

    return TopbarV;
});
