import React, { useState } from "react";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const res = await fetch(
        "https://reactfirebase-90671-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        alert("data saved successfully");
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
      } else {
        alert("plz fill data");
      }
    } else {
      alert("plz fill data");
    }
  };
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row ">
            {/* Contact left side */}
            <h2 className="text-center mb-3">
              Connect with Ours <br /> Sales team
            </h2>
            {/* Contact Right side */}
            <div className="col-12 col-lg-7 mx-lg-auto contact-right-side">
              <form method="POST">
                <div className="row">
                  <div className="col-12 col-lg-6 contact-input-field">
                    <input
                      type="text"
                      class="form-control"
                      name="firstName"
                      value={userData.firstName}
                      onChange={postUserData}
                      id="exampleFormControlInput1"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-12 col-lg-6 contact-input-field">
                    <input
                      type="text"
                      class="form-control"
                      name="lastName"
                      value={userData.lastName}
                      onChange={postUserData}
                      id="exampleFormControlInput1"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 contact-input-field">
                    <input
                      type="text"
                      class="form-control"
                      name="phone"
                      value={userData.phone}
                      onChange={postUserData}
                      id="exampleFormControlInput1"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-12 col-lg-6 contact-input-field">
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      value={userData.email}
                      onChange={postUserData}
                      id="exampleFormControlInput1"
                      placeholder="Email ID"
                    />
                  </div>
                </div>
                <div className="col-12 contact-input-field">
                  <input
                    name="address"
                    value={userData.address}
                    onChange={postUserData}
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Address"
                  />
                </div>
                <div className="col-12 ">
                  <input
                    type="text"
                    name="message"
                    value={userData.message}
                    onChange={postUserData}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter message"
                  />
                </div>
                <div class="form-check form-check-box">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" className="main-hero-para">
                    Agree by terms and conditons
                  </label>
                </div>
              </form>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitData}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
