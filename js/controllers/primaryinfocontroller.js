

define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", 
	"dojo/text!../views/primaryinfoform.html", "dojo/dom-style", "controllers/preloaderWidget", "dijit/form/Button", "dojox/mvc", "controllers/detailedinfocontroller", "dojo/parser", "dojo/_base/fx", "dojo/domReady!"],
	function (declare, _WidgetBase, _TemplatedMixin, primaryinfotemplate, domStyle, _preloaderWidget, Button, mvc) {
	    return declare("PrimaryWidget", [_WidgetBase, _TemplatedMixin], {
	        templateString: primaryinfotemplate,

	        constructor: function () {
	            this.inherited(arguments);
	        },

	        postCreate: function () {
	            this.inherited(arguments);
	           var preloadwidg = new PreloaderWidget();
	           preloadwidg.placeAt(this.primarydiv, "first");
	            
	            new Button({
	                id: "idBasicInfoNext",
	                label: "Next Step &gt;&gt;",
	                onClick: this.GoBasicInfo
	            }, this.BasicInfoNext);

	            preloadwidg.endLoading();
	        },

	        GoBasicInfo: function () {
	            var myform = dijit.byId("BasicForm")
	            if (myform.validate()) {
	                myform.destroyRecursive();
	                (new DetailedWidget()).placeAt("ContentPanelId", "only").startup();
	            }
	        }
	    });

	});
