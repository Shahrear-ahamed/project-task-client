import React, { useState } from "react";
import FormSectors from "../components/FormSectors";

function Home() {
  const [name, setName] = useState("");
  const [sectors, setSectors] = useState("");
  const [terms, setTerms] = useState(false);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);

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

    // update if user want change his data
    if (!edit && id !== "") {
      fetch(`https://project-task-peach.vercel.app/api/v1/userDetails/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.result?.modifiedCount === 1) {
            setName(data?.updateData.name);
            setSectors(data?.updateData.sectors);
            setTerms(data?.updateData.terms);
            setId(data?.updateData._id);
            setEdit(true);
          }
        })
        .catch((err) => alert(err.message));

      return;
    }

    // submit after check
    fetch("https://project-task-peach.vercel.app/api/v1/userDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?._id) {
          setName(data?.data.name);
          setSectors(data?.data.sectors);
          setTerms(data?.data.terms);
          setId(data?.data._id);
          setEdit(true);
        }
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
            disabled={edit}
          />
        </div>

        {/* // This is the label for the input field below */}
        <div className="data-input">
          <label htmlFor="sectors" className="input-label">
            Sectors:
          </label>
          <select
            id="sectors"
            className="sectors"
            disabled={edit}
            onChange={(e) => setSectors(e.target.value)}>
            <FormSectors />
          </select>
        </div>
        {/* // this is the terms and conditions checkbox */}
        <div className="data-input">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            disabled={edit}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="terms">Agree to terms</label>
        </div>

        {/* // submit this form  */}
        {edit ? (
          <button
            type="button"
            value="Edit"
            className="submit-btn"
            onClick={() => setEdit(false)}>
            Edit{" "}
          </button>
        ) : (
          <input type="submit" className="submit-btn" value="Submit" />
        )}
      </form>
    </div>
  );
}

export default Home;
