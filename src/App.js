import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Modal from "react-modal";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [user, setuser] = useState("");
const [Email, setemail] = useState("");
const [phone, setphone] = useState("");
const [dob, setdob] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button className="btnopenModal" onClick={openModal}>
        Open Form
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        className="ModalContainer"
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <button onClick={closeModal}>close</button> */}
        <div className="modal">
          <div className="modal-content">
            <h1>Fill Details</h1>
            <label>Username:</label>
            <input type="text" className="inputField" onChange={(e)=>setuser(e.target.value)}/>
            <label>Email Address:</label>
            <input type="text" className="inputField" onChange={(e)=>setemail(e.target.value)}/>
            <label>Phone Number:</label>
            <input type="number" className="inputField" onChange={(e)=>setphone(e.target.value)}/>
            <label>Date of Birth:</label>
            <input type="date" className="inputField" onChange={(e)=>setdob(e.target.value)}/>
            <br/>
            <button className="btnopenModal">Submit</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
