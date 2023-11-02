import React from 'react';
import "./RulesAndPoliciesStyles.css";
import { IconContext } from 'react-icons/lib';
import { AiOutlineClose } from 'react-icons/ai';

const RulesAndPolicies = (props) => {
  return (
    <div className="rules-section">
      <div className='rulesheader'>
      <h2>Rules and Policies</h2>
      <a onClick={() => props.onClick('rules')}>
        <IconContext.Provider value={{ className: "closinglogo" }}>
          <AiOutlineClose />
        </IconContext.Provider>
      </a></div>
      <p>
        At AdvetureWorld, we want to ensure that all our visitors have a safe and enjoyable experience. Please take a moment to review our park rules and policies.
      </p>
      <h3>General Rules:</h3>
      <ul>
        <li>Follow all posted safety instructions and warnings.</li>
        <li>No running, pushing, or horseplay within the park.</li>
        <li>Smoking is only allowed in designated smoking areas.</li>
        <li>Respect other visitors and park staff.</li>
      </ul>

      <h3>Ride and Attraction Rules:</h3>
      <ul>
        <li>Observe height and age restrictions for rides.</li>
        <li>Secure all loose articles before boarding a ride.</li>
        <li>Stay seated and keep hands and arms inside ride vehicles at all times.</li>
        <li>Obey ride operator instructions.</li>
      </ul>

      <h3>Food and Beverage Policies:</h3>
      <ul>
        <li>Outside food and beverages are not allowed in the park.</li>
        <li>Enjoy your meals in designated dining areas.</li>
        <li>Check our park map for dining options and locations.</li>
      </ul>

      <h3>Park Closure and Events:</h3>
      <p>
        AdventureWorld may close due to inclement weather or special events. Check our website or contact guest services for the most up-to-date information.
      </p>

      <h3>Lost and Found:</h3>
      <p>
        If you lose an item, please visit our Lost and Found located near the park entrance.
      </p>

      <p>
        Thank you for visiting AdventureWorld. We hope you have a fantastic time while following our rules and policies.
      </p>
    </div>
  );
};

export default RulesAndPolicies;