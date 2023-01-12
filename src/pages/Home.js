import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  const [sectors, setSectors] = useState("");
  const [terms, setTerms] = useState(false);

  // submit user data
  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      sectors,
      terms,
    };

    // check user validity
    if (!name) {
      alert("Please add your name");
      return;
    }
    if (!sectors) {
      alert("Please select your sectors");
      return;
    }
    if (!terms) {
      alert("Please check the terms");
      return;
    }

    // submit after check
    fetch("http://localhost:5000/api/v1/userDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setSectors(data.sectors);
        setTerms(data.terms);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="main">
      <h2 className="header">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h2>

      <form action="" className="sectors-form" onSubmit={handleSubmit}>
        {/* // This is the label for the input field below */}
        <div className="data-input">
          <label htmlFor="name" className="input-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        {/* // This is the label for the input field below */}
        <div className="data-input">
          <label htmlFor="sectors" className="input-label">
            Sectors:
          </label>
          <select
            name=""
            id="sectors"
            className="sectors"
            multiple=""
            onChange={(e) => setSectors(e.target.value)}>
            <optgroup label="Manufacturing">
              <option value="19">
                &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
              </option>
              <option value="18">
                &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
              </option>
              <option value="6">
                &nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage
              </option>
              <option value="342">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp;
                confectionery products
              </option>
              <option value="43">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
              </option>
              <option value="42">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish
                products{" "}
              </option>
              <option value="40">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat
                products
              </option>
              <option value="39">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy
                products{" "}
              </option>
              <option value="437">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
              </option>
              <option value="378">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp;
                snack food
              </option>
              <option value="13">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
              <option value="389">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna{" "}
              </option>
              <option value="385">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom
              </option>
              <option value="390">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room{" "}
              </option>
              <option value="98">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen{" "}
              </option>
              <option value="101">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room{" "}
              </option>
              <option value="392">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office
              </option>
              <option value="394">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                (Furniture)
              </option>
              <option value="341">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor{" "}
              </option>
              <option value="99">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project
                furniture
              </option>
              <option value="12">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
              <option value="94">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
                components
              </option>
              <option value="91">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
                equipment/tools
              </option>
              <option value="224">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of
                machinery{" "}
              </option>
              <option value="97">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime
              </option>
              <option value="271">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminum
                and steel workboat
              </option>
              <option value="269">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht
                building
              </option>
              <option value="230">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship
                repair and conversion
              </option>
              <option value="93">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures
              </option>
              <option value="508">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
              </option>
              <option value="227">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and
                maintenance service
              </option>
              <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
              <option value="67">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of
                metal structures
              </option>
              <option value="263">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and
                buildings
              </option>
              <option value="267">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products
              </option>
              <option value="542">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works
              </option>
              <option value="75">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining
              </option>
              <option value="62">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings,
                Fasteners{" "}
              </option>
              <option value="69">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas,
                Plasma, Laser cutting
              </option>
              <option value="66">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG,
                TIG, Aluminum welding
              </option>
              <option value="9">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber
              </option>
              <option value="54">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging
              </option>
              <option value="556">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods
              </option>
              <option value="559">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic
                processing technology
              </option>
              <option value="55">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing
              </option>
              <option value="57">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding
              </option>
              <option value="53">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics
                welding and processing
              </option>
              <option value="560">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles
              </option>
              <option value="5">&nbsp;&nbsp;&nbsp;&nbsp;Printing </option>
              <option value="148">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising
              </option>
              <option value="150">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals
                printing
              </option>
              <option value="145">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and
                packaging printing
              </option>
              <option value="7">
                &nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing
              </option>
              <option value="44">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing
              </option>
              <option value="45">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile
              </option>
              <option value="8">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
              <option value="337">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)
              </option>
              <option value="51">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building
                materials
              </option>
              <option value="47">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses
              </option>
            </optgroup>

            <optgroup label="Services">
              <option value="25">Business services</option>
              <option value="35">Engineering</option>
              <option value="28">
                Information Technology and Telecommunications
              </option>
              <option value="581">
                Data processing, Web portals, E-marketing
              </option>
              <option value="576">Programming, Consultancy</option>
              <option value="121">Software, Hardware</option>
              <option value="122">Telecommunications</option>
              <option value="22">Tourism</option>
              <option value="141">Translation services</option>
            </optgroup>

            <optgroup label="Transport and Logistics">
              <option value="111">Air</option>
              <option value="114">Rail</option>
              <option value="112">Road</option>
              <option value="113">Water</option>
            </optgroup>

            <optgroup label="Other">
              <option value="37">Creative industries</option>
              <option value="29">Energy technology</option>
              <option value="33">Environment</option>
            </optgroup>
          </select>
        </div>
        {/* // this is the terms and conditions checkbox */}
        <div className="data-input">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="terms">Agree to terms</label>
        </div>

        {/* // submit this form  */}
        <input type="submit" className="submit-btn" value="Submit" />
      </form>
    </div>
  );
}

export default Home;
