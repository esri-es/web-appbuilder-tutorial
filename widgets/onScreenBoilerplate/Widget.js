define([
  'dojo/_base/declare',
  'jimu/BaseWidget',
  'esri/layers/WebTiledLayer'
], function(
  declare,
  BaseWidget,
  WebTiledLayer
) {

  var clazz = declare([BaseWidget], {
    //these two properties are defined in the BaseWiget
    baseClass: 'on-screen-boilerplate',
    name: 'onScreenBoilerplate',

    // add additional properties here

    postCreate: function() {
      // summary:
      //      Overrides method of same name in dijit._Widget.
      // tags:
      //      private
      this.inherited(arguments);
      console.log('Avuxi::postCreate', arguments);

      // add additional post constructor logic here
    },

    // start up child widgets
    startup: function() {
      // summary:
      //      Overrides method of same name in dijit._Widget.
      // tags:
      //      private
      this.inherited(arguments);
      console.log('Avuxi::startup', arguments);
      console.log('Opacity:' + this.config.AvuxiButton.params.opacity)
      console.log('API Key:' + this.config.AvuxiButton.params.api_key)
      console.log('App ID:' + this.config.AvuxiButton.params.app_id)
      var api_key = this.config.AvuxiButton.params.api_key;
      var app_id = this.config.AvuxiButton.params.app_id;
      var map = this.map;
      dojo.byId('showAvuxi').onclick = function(){
        var tiled = new WebTiledLayer("http://api.avuxi.com/v02/hm/sights/?z=${level}&x=${col}&y=${row}&o=0.6&app_id="+app_id+"&app_key="+api_key+"&type=eating");
        map.addLayer(tiled);
      };
    },

    onOpen: function() {
      // summary:
      //      Overrides method of same name in jimu._BaseWidget.
      console.log('Avuxi::onOpen', arguments);

      // add code to execute whenever the widget is opened
    },

    onClose: function() {
      // summary:
      //      Overrides method of same name in jimu._BaseWidget.
      console.log('Avuxi::onClose', arguments);

      // add code to execute whenever the widget is closed
    }
  });

  return clazz;
});
