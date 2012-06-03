Ext.define('MyJogja.controller.ControlKategori', {
	extend: 'Ext.app.Controller',
	xtype: 'ControlKategori'
	config: {
		refs: {
			main: 'mainpanel'
		},
		control: {
			'daftarkategori': {
				leafitemtap: 'onLeafItemTap'
			}
		}
	},

	onLeafItemTap: function(me, list, index) {
		Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
	}

});