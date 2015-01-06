Ext.define("makeWords.util.Globals", {
            singleton: true,
            config: {
                sentance: '',
                installed: 'false'
            },
            constructor: function (config) {
                this.initConfig(config);
            }
});