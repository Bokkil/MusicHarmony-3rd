/*global define*/

define([
    'underscore',
    'backbone',
    'models/category'
], function (_, Backbone, CategoryM) {
    'use strict';

    var CategoriesC = Backbone.Collection.extend({
        model: CategoryM
    });

    return CategoriesC;
});
