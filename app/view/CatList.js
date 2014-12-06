Ext.define('makeWords.view.CatList', {
    extend: 'Ext.List',
    xtype: 'CatList',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],

    config: {

            itemTpl: '{desc}',
            store: 'JsonStore'
            // onItemDisclosure: true


    }
});
