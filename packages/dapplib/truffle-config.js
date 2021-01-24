require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rice mad miss hunt inhale flock vibrant'; 
let testAccounts = [
"0xa85ecc6fb6c5d57c25389ed41e173b41fc66927fa5300e4ab38fa3d4375764bb",
"0x34dc4dd7838751ae5bc5cd31fd1d3d4d2a4abcd5e39c428abde26f1f3f073c96",
"0x7aafdc0700fe0f289ee980ae18bdd0e60cc450867f68811b36eee717d353658a",
"0x29f50e71278ec76b58c0e073ef0c3e8fca15e67f669917003cad0168cdb55ad2",
"0x9538e910c506e832474115c725e0c689d9300ef9e61537e6bed65bcad0460d82",
"0xa770e009eba17740cab4d35b467104638bfc3be33f2a4f674ea60e3ed8041871",
"0x6df43139e9e3e6284d9cc77f6b8bb4bb36f5b5f3b64bd4faff06b1fc773e13b2",
"0x2e35b05882751adaf40180a74973a0c33ee0018fbc9686f5f28250263ecb27e4",
"0xa41ebff80f27b7e95177e42d502e974a872af9802c1e312fbfcaf7be5eb1e843",
"0xf0989ccbef2a789d9739630c071aacadc8b0c51797c7e3ba8fea622d4c2be05b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
