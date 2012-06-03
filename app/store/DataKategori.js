Ext.define('MyJogja.store.DataKategori', {
	extend: 'Ext.data.TreeStore',
	config: {
		model: 'MyJogja.model.Kategori',
		proxy: {
			type: 'ajax',
			url: 'data/kategori.json',
			reader:{
				type: 'json',
				rootProperty: 'items'
			}
		}
	}
});