import Link from 'next/link';
import React from 'react';

export default function feedback() {
  return (
    <div className="container">
      <div className="py-2">
        <Link href="/">&nbsp; Back to shopping</Link>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <h1 className="text-center mt-5">
            <span className="bold shadow-md">Feedback</span>
          </h1>
          <br />
          <hr className="bg-white"></hr>
          <h6 className="text-center">Can you share some feedback below:</h6>
          <h3 className=" text-center mt-4">
            How do you rate your overall experience?
            <br />
          </h3>

          <form>
            <label className="radio-inline"></label>
            <input type="radio" name="experience" value="bad" />
            &nbsp; Bad &nbsp;
            <label className="radio-inline"></label>
            <input type="radio" name="experience" value="bad" />
            &nbsp; Average &nbsp;
            <label className="radio-inline"></label>
            <input type="radio" name="experience" value="bad" />
            &nbsp; Good &nbsp;
            <br />
            <br />
            <div className="row">
              <div className="col-md-2"></div>
              <label className="col-md-4"> </label>
              Full Name* &nbsp;
              <input type="text" id="text" required="" placeholder="" />
              <label className="col-md-4"></label>
              &nbsp; Email* &nbsp;
              <input type="text" id="text" required="" placeholder="" />
            </div>
            <div>
              <br />
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <label className="col-md-4"> </label>
              Age* &nbsp;
              <input type="number" id="text" required="" placeholder="" />
              <label className="col-md-4"> </label>
              &nbsp; Phone* &nbsp;
              <input type="number" id="text" required="" placeholder="+91" />
            </div>
            <div>
              <br />
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <label className="col-md-8"></label>
              Message*&nbsp;
              <textarea
                id="message"
                required=""
                placeholder="Write yor message here"
                cols="48"
                rows="5"
              ></textarea>
            </div>
            <br />
            <div className="row">
              <div className="col-md-2"></div>
              <button className="primary-button" onClick={'/login'}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
