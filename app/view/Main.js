Ext.define("MyJogja.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar','MyJogja.view.DaftarKategori'],
    xtype: 'mainpanel',
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
                title: 'Beranda',
                iconCls: 'beranda',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'My Jogja'
                },
                
                html: [
                    "Selamat datang di aplikasi My Jogja. Aplikasi ini akan memberikan anda informasi seputar wisata, kuliner, penginapan, belanja, dll."
                ].join("")
            },
            {
                title: 'Kategori',
                iconCls: 'kategori',
                layout: 'fit',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Kategori'
                    },
                    {
                        xtype: 'daftarkategori'
                    }

                ]
            }
        ]
    }
});