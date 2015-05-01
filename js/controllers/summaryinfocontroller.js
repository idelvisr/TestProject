define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
	"dojo/text!../views/summaryinfoform.html", "dojo/dom-style", "dojo/_base/fx", "dojo/dom", "dojo/dom-construct", "controllers/primaryinfocontroller", "controllers/detailedinfocontroller", "dijit/form/Button", "dojo/parser",
    "dojox/mvc/Output","dojox/mvc/Group","dojo/domReady!"],
	function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, summarytemplate, domStyle, fx, dom, domConstruct, primaryinfocontroller, detailedinfocontroller, Button, parser) {
	    return declare("SummaryWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
	        templateString: summarytemplate,

	        model: null,

	        constructor: function (args) {
	            this.inherited(arguments);
	            this.model = model;
	        },

	        postCreate: function () {
	            this.inherited(arguments);
	            var preloadwidg = new PreloaderWidget();
	            preloadwidg.placeAt(this.summarydiv, "first");
	            preloadwidg.endLoading();
	        },

	        GoBasicInfo: function () {
	            dijit.byId("Summaryform").destroyRecursive();
	            (new PrimaryWidget()).placeAt("ContentPanelId", "only").startup();
	            parser.parse("ContentPanelId")
	        },

	        GoDetailInfo: function () {
	            dijit.byId("Summaryform").destroyRecursive();
	            (new DetailedWidget()).placeAt("ContentPanelId", "only").startup();
	            parser.parse("ContentPanelId")
	        }
	    });
	});
