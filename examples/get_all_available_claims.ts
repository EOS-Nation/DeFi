import { JsonRpc } from 'eosjs';
import * as defi from "..";

// nodeos
const rpc = new JsonRpc("https://eos.eosn.io", { fetch: require('node-fetch') });

// params
const chain = "eos";
const owner = "chenqiji1234";
const authorization = [{actor: owner, permission: "active"}];

(async () => {
    for ( const dapp of Object.keys(defi[chain])) {
        // available claim actions
        const actions = await defi[chain][dapp].get_available_claims( rpc, owner, authorization );

        console.log( actions );
        console.log( defi[chain][dapp].tokens );
    }
})()