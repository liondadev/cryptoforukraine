import "./content.css";
import 'animate.css';

function AddressBox(props) {
    return (<div className="address-box-container animate__animated animate__bounce">
        <p className="address-box-type">{props.type || "Crypto Address"}</p>
        <button className="address-box-content" onClick={() => {navigator.clipboard.writeText("ho")}}>{props.add || "696969696969696969696969696"}</button>
    </div>)
}

function Content() {
    return (<div className="content-body animate__animated animate__zoomInDown">

        <h1>Give to <span>Ukraine</span></h1>

        <div className="content-donation-types">
            {/* Bitcoin */}
            <img alt="bitcoin-logo" className="content-donation-type" src="https://imgs.search.brave.com/qS7hbNBjSBvI_uHvAdC4e2xztfTbyWe2HHybNQYIjDs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zMy51/cy1lYXN0LTIuYW1h/em9uYXdzLmNvbS9u/b21pY3MtYXBpL3N0/YXRpYy9pbWFnZXMv/Y3VycmVuY2llcy9C/U1YucG5n"></img>
            <img alt="eth-logo" className="content-donation-type" src="https://imgs.search.brave.com/MFA9y4bECHAS_HU3ObURUUpfST9LTFHSxH5tZ5yRCwg/rs:fit:1024:1024:1/g:ce/aHR0cDovL2ljb25z/Lmljb25hcmNoaXZl/LmNvbS9pY29ucy9j/amRvd25lci9jcnlw/dG9jdXJyZW5jeS1m/bGF0LzEwMjQvRXRo/ZXJldW0tRVRILWlj/b24ucG5n"></img>
            <img alt="polk-logo" className="content-donation-type" src="https://imgs.search.brave.com/pSEJDut2_jMDC5But3JXan5Zc6uTB3dw7398BHpdKdY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jcnlw/dG9sb2dvcy5jYy9s/b2dvcy9wb2xrYWRv/dC1uZXctZG90LWxv/Z28ucG5n"></img>
        </div>

        <div className="content-addresses">
            <AddressBox type="BTC (Bitcoin)" add="357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"/>
            <AddressBox type="ETH (Etherium) / USDT (Tether) (ERC-20)" add="0x165CD37b4C644C2921454429E7F9358d18A45e14"/>
            <AddressBox type="Polkadot (DOT)" add="1x8aa2N2Ar9SQweJv9vsuZn3WYDHu7gMQu1RePjZuBe33Hv"/>
            <code>Click an address to copy the address.</code>
            <p>Feel free to <a className="verify" href="https://twitter.com/ukraine/status/1497594592438497282">verify the addresses</a>.</p>
        </div>
    </div>)
}

export default Content;
