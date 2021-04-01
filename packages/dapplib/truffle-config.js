require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food want couple stick snake ice light army genius'; 
let testAccounts = [
"0x33679e7d94982fd6d795a0ac16f9620e4214f6c50cfb66cbc06fb15275ef1402",
"0xcd908b4a3cabad981a08971a57bb51f6ca4f54e9c6401cc3669567375eb84094",
"0xba4a535d8ee4a09e9047ace86f5e22a268867fec67a36208c9b79d40439dd9ba",
"0xa13593811dea2ab85ebff60f8c787f4b96ef56597c403ff915cc20727ffda688",
"0x80bca34d998558289f63aef0a7b2512bf7fc05bff9fa682676f60d0b635f3dac",
"0x63b3fb747b1dadc8fde09a8255332d56505b4a698ae0dd01d245f2903cc75372",
"0xe72b15b2df038ad0e9fd370389e66e4b6a5982a9f6c9ea1c79e8580ffc8c2621",
"0x6d2c954bda2fb0edff68675a19021b56670d60871ab77efa61596a0416e03e94",
"0x13d2339573a0df4cbd575d50ec502f72be24e022ae7c31361f7539182dcfd917",
"0x6f15d52d1eec27f2427251434db4b4233a90b147db5654098a1b93d8ca28512a"
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
