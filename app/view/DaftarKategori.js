Ext.define('MyJogja.view.DaftarKategori', {
	extend: 'Ext.NestedList',
	xtype: 'daftarkategori',
	fullscreen: true,
	requires: [
	   'MyJogja.store.DataKategori'
	],
	config: {
		store: 'DataKategori',
        ui: 'round',
		displayField: 'namaKategori'
	}
});