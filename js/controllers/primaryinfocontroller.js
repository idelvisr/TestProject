define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
	"dojo/text!../views/primaryinfoform.html", "dojo/dom-style", "controllers/detailedinfocontroller", "dojo/domReady!"],
	function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, primaryinfotemplate, domStyle) {
	    return declare("PrimaryWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
	        templateString: primaryinfotemplate,

	        constructor: function () {
	            this.inherited(arguments);
	        },
	        
	        buildRendering: function () {
	            this.inherited(arguments);
	            $("#preloader").show();
	        },

	        postCreate: function () {
	            this.inherited(arguments);
	            $("#preloader").fadeOut(400);
	        },

	        GoBasicInfo: function () {
	            if (this.BasicForm.validate()) {
	                domStyle.set("BasicForm", 'display', 'none');
	                (new DetailedWidget()).placeAt("ContentPanelId", "first").startup();
	            }
	        }
	    });
	});
