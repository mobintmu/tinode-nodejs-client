const express = require('express');
const app = express();
const Tinode = require('tinode-sdk');
// const Tinode = require('indexeddb');

 
app.listen(3000, () => {
    console.log('server is running on port 3000')

    chat();
});


const chat = (() => { 
    Tinode.setNetworkProviders(require('ws'), require('xmlhttprequest'));
    Tinode.setDatabaseProvider(require('fake-indexeddb'));

    const tinode = new Tinode({appName: 'TinodeWeb/0.17'  , host: '127.0.0.1:6060', apiKey: 'AQEAAAABAAD_rAp4DJh05a1HAwFT3A6K', transport: 'ws',persist:true}); 
    console.log(tinode);
})
