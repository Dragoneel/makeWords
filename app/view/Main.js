Ext.define('makeWords.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.ux.touch.ImageGridList.view.Panel',
        'makeWords.store.Images'
    ],
    config: {
        layout: 'hbox',
        items: [

            {

                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'MakeWord'
            },
            {
                xtype: 'CatList',
                flex: 1,
            },
            {
                xtype: 'image-grid-list-panel',
                flex: 2,
            },
            {

                    docked: 'bottom',
                    xtype: 'titlebar',
                    title: '',
                    id: 'joomla'
            }
            
            
        ]
    }
});
