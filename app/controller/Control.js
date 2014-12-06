
Ext.define('makeWords.controller.Control', {
    extend: 'Ext.app.Controller',
    requires: ['makeWords.util.Globals'],
    config: {
        refs: {
        	Main : 'main',
            CatList: 'CatList'
        },
        control: {

        	'CatList' : {
        		itemtap : 'showImage',
        	}
        	

        }
    },

    joomla: '',


    showImage: function(list, index, target, record) {
        console.log('showImage');
        this.setImageData();
    },


    /**
     * set image data
     */
    setImageData: function(){

        // gallery view
        var gallery = this.getMain().down('image-grid-list-panel');

        // store data
        // var store = Ext.create('makeWords.store.Images');
        // var  urls = [
        //     'resources/images/1.jpg',
        //     'resources/images/2.jpg',
        //     'resources/images/3.jpg',
        //     'resources/images/4.jpg',
        //     'resources/images/5.jpg',
        //     'resources/images/5.jpg',
        //     'resources/images/7.jpg',
        //     'resources/images/8.jpg',
        //     'resources/images/9.jpg',
        //     'resources/images/10.jpg',
        //     'resources/images/11.jpg',
        //     'resources/images/12.jpg',
        //     'resources/images/13.jpg',
        //     'resources/images/14.jpg',
        //     'resources/images/15.jpg',
        //     'resources/images/16.jpg',
        //     'resources/images/17.jpg',
        //     'resources/images/18.jpg',
        //     'resources/images/19.jpg',
        //     'resources/images/20.jpg'
        // ];
        // var model;

        // for(var i = 0, length = urls.length; i < length; i++){
        //     model = Ext.create(makeWords.model.Image);
        //     model.set('url', urls[i]);
        //     model.set('title', 'toto');
        //     store.add(model);
        // }
        var store = Ext.getStore("Images");

        gallery.renderImages(store);
        
        
    },

   

    /**
     * @method launch
     * Launch function
     */
    launch:function() {
        console.log("Launch running");

    }

    

});