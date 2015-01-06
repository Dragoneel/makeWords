Ext.define('makeWords.view.CatList', {
    extend: 'Ext.List',
    xtype: 'CatList',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],

    config: {

            itemTpl: '{title}',
            store: 'JsonStore'
            // onItemDisclosure: true


    }
});
