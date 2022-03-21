import React, { Component, useRef, useState } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from 'emailjs-com'

const Contact = (props) => {
  const form = useRef()
  const [values, setValues] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  })
  // render() {
  if (!props.data) return null;

  const name = props.data.name;
  const street = props.data.address.street;
  const city = props.data.address.city;
  const state = props.data.address.state;
  const zip = props.data.address.zip;
  const phone = props.data.phone;
  const message = props.data.contactmessage;


  const hanldeChange = (e) => {
    const {name, value} = e.target
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value
    }))
  }

  const sendEmail = (e) => {
    debugger
    e.preventDefault()
    emailjs.sendForm('service_uuvnwnh', 'template_xmdfssg', form.current,
      'user_zcI0Ge5RwLux6Bx73HCeq').then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
    setValues((prevValue) => ({
      ...prevValue,
      user_name: '',
      user_email: '',
      subject: '',
      message: ''
    }))
  }
  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <form onSubmit={sendEmail} ref={form}>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  required
                  type="text"
                  value={values.user_name}
                  onChange={hanldeChange}
                  size="35"
                  name="user_name"
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  required
                  type="email"
                  value={values.user_email}
                  onChange={hanldeChange}
                  size="35"
                  name="user_email"
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  required
                  type="text"
                  value={values.subject}
                  name="subject"
                  onChange={hanldeChange}
                  size="35"
                  autoComplete="false"
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                value={values.message}
                onChange={hanldeChange}
                  required
                  cols="50"
                  rows="15"
                  name="message"
                ></textarea>
              </div>

              <div>
                <button className="submit" type="submit">Submit</button>
                <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
              </div>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </Slide>
      </div>
    </section>
  );
}
// }

export default Contact;
