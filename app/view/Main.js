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
        id: 'main',
        items: [

            {

                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'MakeWord',
                    items:[
                        {
                            xtype: 'button',
                            iconCls: 'list',
                            align: 'left',
                            //itemId: 'hideButton',
                            ui : 'plain',
                            handler: function() {
                                function success(image_uri) {
                                    //var img = Ext.ComponentQuery.query("image")[0];
                                    //img.setSrc(image_uri);
                                    //alert(image_uri);
                                    Ext.getStore('Images').add({
                                        url: image_uri,
                                        title: "toto"
                                    });
                                }

                                function fail(message) {
                                    alert("Failed: " + message);
                                }

                                navigator.camera.getPicture(success, fail, 
                                    {
                                        quality: 50,
                                        destinationType: navigator.camera.DestinationType.FILE_URI,
                                        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
                                    }
                                );
                            }
                        },
                        {
                            xtype: 'button',
                            iconCls: 'loop',
                            align: 'right',
                            itemId: 'megaInitilizeButton',
                            ui : 'plain'
                        }
                    ]
            },
            {
                xtype: 'CatList',
                id: 'catlist',
                flex: 1
            },
            {
                xtype: 'image-grid-list-panel',
                flex: 2,
                id: 'img-grid'
                
            },
            {

                    docked: 'bottom',
                    xtype: 'titlebar',
                    title: '',
                    id: 'joomla',
                    listeners: {
                    painted: function(CatList, eOpts){
                        
                        makeWords.app.getController('makeWords.controller.Control').loadImage();

                    }
                }
            },/*
            {
                xtype: 'fileupload',
                itemId: 'fileLoadBtn',
                autoUpload: true,
                loadAsDataUrl: true,
                flex: 1,
                states: {
                    browse: {
                        text: 'Browse and load'
                    },
                    ready: {
                        text: 'Load'
                    },

                    uploading: {
                        text: 'Loading',
                        loading: true// Enable loading spinner on button
                    }
                }
            },

            {
                        itemId: 'loadedImage',
                        flex: 2,
                        xtype: 'img',
                        width: '80%',
                        height: '200px',
                        style: 'margin-top:15px;'
                    }*/
            
            
        ],
        listeners: [

            {
                delegate: '#hideButton',
                event: 'tap',
                fn: 'onHideButtonTap'
            },
            {
                delegate: '#megaInitilizeButton',
                event: 'tap',
                fn: 'onMegaInitilizeButtonTap'
            }

        ]
        
    },

    showUrgent: function(){

        // gallery view
        var gallery = Ext.getCmp('img-grid');
        var store = Ext.getStore("Images");
        gallery.renderImages(store);

    },

    onHideButtonTap: function() {
        this.fireEvent("hideCommand", this);
    }


});
