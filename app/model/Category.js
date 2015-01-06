Ext.define('makeWords.model.Category', {
    extend: 'Ext.data.Model',


    requires: [
        'Ext.data.Field'
    ],


    config: {
        fields: [
            {
                name: 'title'
            },
            {
                name: 'desc'
            }
        ]
    }
});