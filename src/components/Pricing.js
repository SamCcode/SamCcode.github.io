import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./PricingStyles.css"; // Make sure to create the appropriate CSS file
import { IconContext } from "react-icons/lib";

const Pricing = (props) => {
  return (
    <section className={props.className}>
      <div className="ticket-headerwrapper">
      <h2>Pricing and Ticket Options</h2>
      <a onClick={() => props.onClick("pricing")}>
        <IconContext.Provider value={{ className: "closinglogo" }}>
          <AiOutlineClose />
        </IconContext.Provider>
      </a></div>
      <div className="ticket-optionwrapper">
        <div className="ticket-option">
          <h3>Admission Tickets</h3>
          <ul>
            <li>Adults (Ages 13-64): $[Price]</li>
            <li>Children (Ages 3-12): $[Price]</li>
            <li>Seniors (Ages 65+): $[Price]</li>
            <li>Children under 3: Free</li>
          </ul>
        </div>
        <div className="ticket-option">
          <h3>Family Packages</h3>
          <p>[Description of family package and pricing]</p>
        </div>
        <div className="ticket-option">
          <h3>Special Events and Seasons</h3>
          <p>[Description of special events or seasonal pricing]</p>
        </div>
        <div className="ticket-option">
          <h3>Annual Passes</h3>
          <p>
            Unlock a year of unlimited fun with our annual passes. Enjoy
            exclusive benefits, including priority access to events, discounts
            on dining, and much more.
          </p>
        </div>
        <div className="ticket-option">
          <h3>Online Booking Perks</h3>
          <p>
            Skip the lines and book your tickets online for additional benefits
            such as early park entry and exclusive offers.
          </p>
        </div>
        <div className="ticket-option">
          <h3>Discounts and Promotions</h3>
          <p>
            We offer discounts for students, military personnel, and senior
            citizens. Keep an eye out for limited-time promotions and offers.
          </p>
        </div>
        <div className="ticket-option">
          <h3>Group Rates</h3>
          <p>
            Planning a group visit? Check out our special group rates and book
            an unforgettable day at [Your Theme Park Name].
          </p>
        </div>
        <div className="ticket-option">
          <h3>Membership Programs</h3>
          <p>
            Join our membership programs for even more perks, including access
            to exclusive events and discounts on merchandise and dining.
          </p>
        </div>
        <div className="ticket-option">
          <h3>Payment Options</h3>
          <p>
            We accept major credit cards, mobile payments, and cash for your
            convenience.
          </p>
        </div>
        <div className="ticket-option">
          <h3>Refund and Cancellation Policy</h3>
          <p>
            Our refund and cancellation policy is designed with your flexibility
            in mind. [Details of the policy]
          </p>
        </div>
        <div className="ticket-option">
          <h3>Contact Us</h3>
          <p>
            Have questions about pricing or need assistance with your booking?
            Our friendly customer support team is here to help. Reach out to us
            at [Customer Support Email/Phone Number].
          </p>
        </div>
      </div>
      <div className="plan-btnwrapper">
        <button className="plan-btn">Book Now</button>
        <button className="plan-btn" onClick={() => props.onClick("pricing")}>Go Back</button>
      </div>
    </section>
  );
};

export default Pricing;
