define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin",
	"dojo/text!../views/detailedinfoform.html", "dojo/dom-style", "controllers/primaryinfocontroller", "controllers/summaryinfocontroller", "dijit/form/ComboBox", "dijit/form/FilteringSelect", "dojo/data/ItemFileReadStore", "dojo/domReady!"],
	function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, detailedinfoform, domStyle) {
	    return declare("DetailedWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
	        templateString: detailedinfoform,

	        constructor: function (args) {
	            this.inherited(arguments);
	        },

	        buildRendering: function () {
	            this.inherited(arguments);
	            $("#preloader").show();
	        },

	        postCreate: function () {
	            this.inherited(arguments);

	            var stateStore = new dojo.data.ItemFileReadStore({
	                url: "./js/data/states.json"
	            });

	            var cityStore = new dojo.data.ItemFileReadStore({
	                url: "./js/data/cities.json"
	            });

	            this.state.set("store", stateStore);

	            this.city.set("store", cityStore);

	            $("#preloader").fadeOut(400);
	        },

	        StateChange: function () {
	            this.city.query.state = this.state.value || /.*/;
	            this.city.reset();
	        },

	        GoBasicInfo: function () {
	            this.DetailsForm.destroy();
	            domStyle.set("BasicForm", 'display', 'block');
	        },

	        GoSummaryInfo: function () {
	            if (this.DetailsForm.validate()) {
	                model.DetailedInfo.StateName = this.state.attr('displayedValue');
	                domStyle.set("DetailsForm", 'display', 'none');
	                (new SummaryWidget).placeAt("ContentPanelId", "first");
	            }
	        }
	    });
	});
