define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dojo/dom-style"
], function (declare, _WidgetBase, _WidgetsInTemplateMixin, _FocusMixin, domStyle) {
    return declare("PreloaderWidget", [_WidgetBase, _FocusMixin], {

        templateString: "<div id='preloader' class='preloader' data-dojo-attach-point='preloader'>Loading...</div>",

        constructor: function (args) {
            this.inherited(arguments);
        },
        postMixInProperties: function () {
            this.inherited(arguments);
        },
        buildRendering: function () {
            this.inherited(arguments);
        },
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            this.inherited(arguments);
        },
        showLoading: function () {
            var n = this.preloader;
            dojo.fadeIn({
                node: n,
                duration: 1000,
                onEnd: function () {
                    domStyle.set(n, 'display', 'block');
                }
            }).play();
        },
        endLoading: function () {
            var n = this.preloader;
            dojo.fadeOut({
                node: n,
                duration: 1000,
                onEnd: function () {
                   domStyle.set(n, 'display', 'none');
                }
            }).play();
        }
    });
});


