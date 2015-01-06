/**
 * @class ImageGridList.model.Image
 * @extends Ext.ux.touch.ImageGridList.model.Image
 * Description image model to display Ext.ux.touch.ImageGridList
 */
Ext.define('makeWords.model.Image', {

	requires: [
		'Ext.ux.touch.ImageGridList.model.Image'
	],

    /*requires: [
        'Ext.data.Field'
    ],*/

    extend: 'Ext.ux.touch.ImageGridList.model.Image',
    //extend: 'Ext.data.Model',
    
    config: {
        
       fields: [
            {name: 'url', type: 'string'},
            {name: 'title', type: 'string'}
        ],
        proxy: {
            type: 'localstorage',
            id  : 'images'
            // type: "sql",
            // database: "Info734",
            // table: "Image"
        }
    }
});