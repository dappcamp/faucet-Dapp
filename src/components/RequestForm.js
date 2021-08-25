import { useState } from 'react';

import * as constants from "../constants";
import { TextField, Button, Typography, Divider } from '@material-ui/core';

import EthereumFaucet from "../abis/EthereumFaucet.json";
import { getEther, donateEther } from "../utils";

function RequestForm() {
    const [walletAddr, setWalletAddr] = useState();
    const [etherReq, setEtherReq] = useState();
    const [etherDonate, setEtherDonate] = useState();
    const [requestLoading, setRequestLoading] = useState(false);
    const [donateLoading, setDonateLoading] = useState(false);

    async function handleGetEther() {
        setRequestLoading(true);
        await getEther(constants.FAUCET_ADDR, EthereumFaucet, etherReq, walletAddr);
        setRequestLoading(false);
    }

    async function handleDonateEther() {
        setDonateLoading(true);
        await donateEther(constants.FAUCET_ADDR, EthereumFaucet, etherDonate);
        setDonateLoading(false);
    }

    return (
        <div className="App" style={{ padding: "50px" }}>
            <Typography variant="h4">
                Rinkeby Faucet
            </Typography>

            <TextField fullWidth onChange={e => setWalletAddr(e.target.value)} label="Wallet Address" /><br /><br />
            <TextField fullWidth onChange={e => setEtherReq(e.target.value)} type="number" label="Ethers Required" /><br /><br />

            {requestLoading && <div><p>Loading...</p><br /></div>}
            <Button onClick={handleGetEther} variant="contained" color="primary">
                Submit
            </Button><br /><br /><br />

            <Divider light /><br /><br />

            <TextField fullWidth onChange={e => setEtherDonate(e.target.value)} type="number" label="Ethers to donate" /><br /><br />
            {donateLoading && <div><p>Loading...</p><br /></div>}
            <Button onClick={handleDonateEther} variant="contained" color="primary">
                Submit
            </Button><br /><br />
        </div>
    );
}

export default RequestForm;