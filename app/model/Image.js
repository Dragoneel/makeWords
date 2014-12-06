/**
 * @class ImageGridList.model.Image
 * @extends Ext.ux.touch.ImageGridList.model.Image
 * Description image model to display Ext.ux.touch.ImageGridList
 */
Ext.define('makeWords.model.Image', {

	requires: [
		'Ext.ux.touch.ImageGridList.model.Image'
	],

    extend: 'Ext.ux.touch.ImageGridList.model.Image',
    
    config: {
       fields: [
            {name: 'url', type: 'string'},
            {name: 'title', type: 'string'},
        ] 
    }
});