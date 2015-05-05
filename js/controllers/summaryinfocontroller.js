define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
	"dojo/text!../views/summaryinfoform.html", "dojo/dom-style", "controllers/primaryinfocontroller", "controllers/detailedinfocontroller",
    "dojox/mvc/Output","dojox/mvc/Group","dojo/domReady!"],
	function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, summarytemplate, domStyle, primaryinfocontroller, detailedinfocontroller) {
	    return declare("SummaryWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
	        templateString: summarytemplate,

	        model: null,

	        constructor: function (args) {
	            this.inherited(arguments);
	            this.model = model;
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
	            this.Summaryform.destroy();
	            dijit.byId("DetailsForm").destroy();
	            domStyle.set("BasicForm", 'display', 'block');
	        },

	        GoDetailInfo: function () {
	            this.Summaryform.destroy();
	            domStyle.set("DetailsForm", 'display', 'block');
	        }
	    });
	});
