Ext.define('makeWords.store.JsonStore', {
    extend: 'Ext.data.Store',


    requires: [
        'makeWords.model.Category',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],


    config: {
        autoLoad: true,
        model: 'makeWords.model.Category',
        storeId: 'JsonStore',
        proxy: {
            type: 'ajax',
            url: 'cat.json',
            reader: {
                type: "json",
                rootProperty: "category"
            }
        }
    }
});