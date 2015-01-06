
Ext.define('makeWords.controller.Control', {
    extend: 'Ext.app.Controller',
    requires: ['makeWords.util.Globals'],
    config: {
        refs: {
        	Main : 'main',
            CatList: 'CatList',
            'fileLoadBtn': 'main #fileLoadBtn',
            'loadedImage': 'main #loadedImage'
        },
        control: {

        	'CatList' : {
        		itemtap : 'showImage'
        	},
        	
            'main' : {
                hideCommand : 'onHideCommand'
            },

            fileLoadBtn: {
                loadsuccess: 'onFileLoadSuccess',
                loadfailure: 'onFileLoadFailure'
            }



        }
    },

    joomla: '',


    onFileLoadSuccess: function(dataurl, e) {
        console.log('File loaded');
        //alert(dataurl);
        var me = this;
        var image = me.getLoadedImage();
        image.setSrc(dataurl);
    },
    
    onFileLoadFailure: function(message) {
        /*Ext.device.Notification.show({
            title: 'Loading error',
            message: message,
            buttons: Ext.MessageBox.OK,
            callback: Ext.emptyFn
        });*/
        alert(message);
    },


    /**
     * show image
     */
    showImage: function(list, index, target, record) {
        this.setImageData();
    },


    /**
     * show image
     */
    loadImage: function() {

         // Cordova commands


        // alert("loadImage: "+window.localStorage.getItem("installed"));
        var check = window.localStorage.getItem("installed");

            if ( check ) {

                // alert("in");

                Ext.getStore('Images').load();
                alert(Ext.getStore("Images").getCount());
                
                var store = Ext.getStore("Images");
                var gallery = Ext.getCmp('img-grid');
                gallery.renderImages(store);

                // alert("out");

            }


    },



    /**
     * set image data
     */
    onHideCommand: function() {
        
       /* if (Ext.getCmp('catlist').getFlex() == 1) {
            Ext.getCmp('catlist').setFlex(0);
        }
        else{
            Ext.getCmp('catlist').setFlex(1);
        }

         
            alert("YOLO");
            navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
                 targetWidth: 200,
                 targetHeight: 200,
                 destinationType: destinationType.FILE_URI,
                 sourceType: Camera.PictureSourceType.PHOTOLIBRARY 
            });

            function onPhotoURISuccess(imageURI) {
                //var image = document.getElementById('myImage');
                //image.src = imageURI;
                alert(imageURI);
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }*/
       
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

         // Cordova commands
        document.addEventListener("deviceready", onDeviceReady, false);

         function onDeviceReady() {
            if (window.localStorage.getItem("installed") == undefined) {

                // add a Record
                Ext.getStore('Images').add([
                       {
                        url: "resources/images/urgent/400px/oublier.png",
                        title: "oublier"
                        },
                        {
                        url: "resources/images/urgent/400px/medicaments.png",
                        title: "medicaments"
                        },
                        {
                        url: "resources/images/urgent/400px/partir.png",
                        title: "partir"
                        },
                        {
                        url: "resources/images/urgent/400px/stop.png",
                        title: "stop"
                        },
                        {
                        url: "resources/images/urgent/400px/batterie.png",
                        title: "batterie"
                        },
                        {
                        url: "resources/images/urgent/400px/mouchoir.png",
                        title: "mouchoir"
                        },
                        {
                        url: "resources/images/urgent/400px/fatigue.png",
                        title: "fatigue"
                        },
                        {
                        url: "resources/images/urgent/400px/froid.png",
                        title: "froid"
                        },
                        {
                        url: "resources/images/urgent/400px/chaud.png",
                        title: "chaud"
                        },
                        {
                        url: "resources/images/urgent/400px/gratte.png",
                        title: "gratte"
                        },
                        {
                        url: "resources/images/urgent/400px/angoisse.png",
                        title: "angoisse"
                        },
                        {
                        url: "resources/images/urgent/400px/douleur.png",
                        title: "douleur"
                        },
                        {
                        url: "resources/images/urgent/400px/aide.png",
                        title: "aide"
                        },
                        {
                        url: "resources/images/urgent/400px/argent.png",
                        title: "argent"
                        },
                        {
                        url: "resources/images/urgent/400px/vomir.png",
                        title: "vomir"
                        },
                        {
                        url: "resources/images/urgent/400px/boire.png",
                        title: "boire"
                        },
                        {
                        url: "resources/images/urgent/400px/mixer.png",
                        title: "mixer"
                        },
                        {
                        url: "resources/images/urgent/400px/faim.png",
                        title: "faim"
                        },
                        {
                        url: "resources/images/urgent/400px/urgent.png",
                        title: "urgent"
                        }
                 ]);

             
                // Write the record to disk
                Ext.getStore('Images').sync();

                // Add recorded data to the image grid component 
                var store = Ext.getStore("Images");
                var gallery = Ext.getCmp('img-grid');

                gallery.renderImages(store);

                // makeWords.util.Globals.setInstalled("true");
                window.localStorage.setItem("installed", true);

            }


        }


    }

    

});