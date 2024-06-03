// import { application } from "express";
import React, { useRef } from "react";

function Signup() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let ageInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let onSignUp = async () => {
    let myHeader = new Headers();
    myHeader.append("content-type", "application/json");

    let dataToSend = {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      age: ageInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    let reqOption = {
      method: "POST",
      headers: myHeader,
      body: JSON.stringify(dataToSend),
    };

    let JSONData = await fetch("http://localhost:4444/register", reqOption);
    let JSOData = await JSONData.json();
    alert(JSOData.msg);
    console.log(JSOData);
  };
  return (
    <div>
      <form>
        <div>
          <label>FirstName:</label>
          <input ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>LastName:</label>
          <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Age:</label>
          <input ref={ageInputRef}></input>
        </div>
        <div>
          <label>Email:</label>
          <input ref={emailInputRef}></input>
        </div>
        <div>
          <label>Password:</label>
          <input ref={passwordInputRef}></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              onSignUp();
            }}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
