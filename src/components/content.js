import "./content.css"

function AddressBox(props) {
    return (<div className="address-box-container">
        <p className="address-box-type">{props.type || "Crypto Address"}</p>
        <p className="address-box-content">{props.add || "696969696969696969696969696"}</p>
    </div>)
}

function Content() {
    return (<div className="content-body">

        <h1>Donate Crypto to <span>Ukraine</span></h1>

        <div className="content-donation-types">
            {/* Bitcoin */}
            <img className="content-donation-type" src="https://imgs.search.brave.com/qS7hbNBjSBvI_uHvAdC4e2xztfTbyWe2HHybNQYIjDs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zMy51/cy1lYXN0LTIuYW1h/em9uYXdzLmNvbS9u/b21pY3MtYXBpL3N0/YXRpYy9pbWFnZXMv/Y3VycmVuY2llcy9C/U1YucG5n"></img>
            <img className="content-donation-type" src="https://imgs.search.brave.com/MFA9y4bECHAS_HU3ObURUUpfST9LTFHSxH5tZ5yRCwg/rs:fit:1024:1024:1/g:ce/aHR0cDovL2ljb25z/Lmljb25hcmNoaXZl/LmNvbS9pY29ucy9j/amRvd25lci9jcnlw/dG9jdXJyZW5jeS1m/bGF0LzEwMjQvRXRo/ZXJldW0tRVRILWlj/b24ucG5n"></img>
        </div>

        <div className="content-addresses">
            <AddressBox type="Bitcoin Wallet Address" add="357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"/>
            <AddressBox type="ETH / USDT (ERC-20)" add="0x165CD37b4C644C2921454429E7F9358d18A45e14"/>
            <AddressBox type="Polkadot" add="1x8aa2N2Ar9SQweJv9vsuZn3WYDHu7gMQu1RePjZuBe33Hv"/>
            <p>Feel free to <a className="verify" href="https://twitter.com/ukraine/status/1497594592438497282">verify the addresses</a>.</p>
        </div>
    </div>)
}

export default Content;
