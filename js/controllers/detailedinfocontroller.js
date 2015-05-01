define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dijit/_WidgetsInTemplateMixin", 
	"dojo/text!../views/detailedinfoform.html", "dojo/dom-style", "controllers/preloaderWidget", "dojo/_base/fx", "dojo/dom", "dojo/dom-construct", "controllers/primaryinfocontroller", "controllers/summaryinfocontroller", "dijit/form/Button", "dojo/parser", "dijit/form/ComboBox", "dijit/form/FilteringSelect", "dijit/registry", "dojo/data/ItemFileReadStore", "controllers/preloaderWidget", "dojo/domReady!"],
	function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, detailedinfoform, domStyle, preloaderWidget, fx, dom, domConstruct, primaryinfocontroller, summaryinfocontroller, Button, parser, comboBox, filteringSelect, registry) {
	    return declare("DetailedWidget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
	        templateString: detailedinfoform,

	        constructor: function (args) {
	            this.inherited(arguments);
	        },

	        postCreate: function () {
	            this.inherited(arguments);
	            
	            var preloadwidg = new PreloaderWidget();
	            preloadwidg.placeAt(this.detaileddiv, "first");

	            new Button({
	                id: "idSummaryInfoNext",
	                label: "Next Step &gt;&gt;",
	                onClick: this.GoSummaryInfo
	            }, this.SummaryInfoNext);

	            new Button({
	                id: "idBasicInfoPrevious",
	                label: "&lt;&lt; Previous",
	                onClick: this.GoBasicInfo
	            }, this.BasicInfoPrevious);

	            var stateStore = new dojo.data.ItemFileReadStore({
	                url: "./js/data/states.json"
	            });

	            var cityStore = new dojo.data.ItemFileReadStore({
	                url: "./js/data/cities.json"
	            });
	            
	            new filteringSelect({
	                id: "state",
	                store: stateStore,
	                autoComplete: true,
	                style: "width: 208px;",
	                ref: model.DetailedInfo.State,
	                searchAttr: "name",
	                onChange: function (state) {
	                    registry.byId('city').query.state = this.value || /.*/;
	                    registry.byId('city').reset();
	                }
	            }, this.state).startup();

	            new comboBox({
	                id: "city",
	                store: cityStore,
	                autoComplete: true,
	                query: { state: /.*/ },
	                style: "width: 208px;",
	                required: true,
	                searchAttr: "name",
	                labelAttr: "name",
	                ref: model.DetailedInfo.City,
	                //onChange: function (city) {
	                //    registry.byId('state').set('value', this.item ? this.item.state : null);
	                //}
	            }, this.city).startup();

	            registry.byId('city').reset();

	            preloadwidg.endLoading();
	        },

	        GoBasicInfo: function () {
	            dijit.byId("DetailsForm").destroyRecursive();
	            (new PrimaryWidget()).placeAt("ContentPanelId", "only").startup();
	            parser.parse("ContentPanelId")
	        },

	        GoSummaryInfo: function () {
	            var myform = dijit.byId("DetailsForm")
	            if (myform.validate()) {
	                model.DetailedInfo.StateName = dijit.byId('state').attr('displayedValue');
	                myform.destroyRecursive();
	                (new SummaryWidget).placeAt("ContentPanelId", "only");
	                parser.parse("ContentPanelId")
	            }
	        }
	    });
	});
