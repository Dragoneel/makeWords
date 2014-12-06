/**
 * @class ImageGridList.store.Images
 * @extends Ext.data.Store
 * Description image store to display Ext.ux.touch.ImageGridList
 */
Ext.define('makeWords.store.Images', {

    extend: 'Ext.data.Store',

    requires: [
    	'makeWords.model.Image'
    ],

    config: {
    	autoLoad: true,
    	model: 'makeWords.model.Image',
    	storeId: 'Images',
        proxy: {
            type: 'ajax',
            url: 'images.json',
            reader: {
                type: "json",
                rootProperty: "images"
            }
        }
    }
});