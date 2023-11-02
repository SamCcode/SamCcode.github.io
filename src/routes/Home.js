import anime from "animejs";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SpinningWheel from "../components/SpinningWheel";
import "./HomeStyles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const [startSpin, setStartSpin] = useState(false);
  let navigate = useNavigate();
  const triggerSpin = () => {
    setStartSpin(true);
  };

  function handleClick(url) {
    navigate(url)
  }
  

  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".actioncard__container",
      opacity: 1,
      easing: "easeInOutExpo",
      duration: 6000,
      delay: 5000,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="video">
        <main>
          <div className="introtext">
          <h1>Welcome to AdventureWorld!</h1>
          <h3>Where the Fun Never Ends</h3></div>
          <video autoPlay muted id="video-bg">
            <source src="assets/background-video.mp4" type="video/mp4" />
          </video>
          <SpinningWheel startSpin={startSpin} />
        </main>
        <section className="actioncard__container">
          <Card
            header="Thrilling Adventures"
            text="Have a look at our rides!"
            img="assets/plan-visit.jpg"
            button="Read more!"
            onClick={() =>{handleClick("/rides")}
            }
          />
          <Card
            header="Spin To Win"
            text="Spin the wheel and win vouchers!"
            expandedtext=""
            img="assets/luckywheel.jpg"
            button="Click to spin!"
            onClick={() => {
              triggerSpin();
            }}
          />
          <Card
            header="Tickets-Plan Your Visit"
            text="Reserve tickets!"
            img="assets/tickets.jpg"
            button="Read more!"
            onClick={() =>{handleClick("/tickets")}
            }
          />
        </section>
        <section className="about">
          <h1>The Park</h1>
          <p>
            Experience a world of wonder and excitement at AdventureWorld! Dive
            into heart-pounding thrills on our exhilarating rides, savor
            mouthwatering treats, and create unforgettable memories with your
            loved ones. Get ready for non-stop fun and adventure - your next
            unforgettable journey awaits!
          </p>
        </section>
        <section className="cardcontainer">
          <Card
            header="Halloween"
            expandedtext="Get ready for a spine-tingling Halloween adventure at our theme park! Join us for a night of thrills and chills as the park transforms into a haunted wonderland. Enjoy eerie attractions, ghoulishly delightful shows, and don't forget your costume - our costume contest has fang-tastic prizes. It's a spooky spectacular you won't want to miss! Join us if you dare!"
            img="assets/halloween.jpg"
            text="Click to read more!"
            clickable={true}
            className="card__styletwo"
            buttonStyle="nobutton"
          />
          <Card
            header="Pirate week"
            expandedtext="Ahoy, mateys! Join us for an epic Pirate Weekend adventure like no other. Prepare to set sail on the high seas as you become part of a swashbuckling crew. Enjoy thrilling pirate shows, treasure hunts, and daring battles. Don't forget to dress up in your finest pirate attire and brush up on your pirate lingo, as hidden treasures and a world of adventure await you! Arrr, it's a weekend full of excitement and fun for the whole family. Can you find the hidden booty?"
            img="assets/pirate.jpg"
            text="Click to read more!"
            clickable={true}
            className="card__styletwo"
            buttonStyle="nobutton"
          />
          <Card
            header="Meet and Greet"
            expandedtext="Get ready to meet your favorite characters up close and personal! Our Character Meet and Greets bring your beloved fairytale and animated friends to life. Whether you're a fan of enchanting princesses, heroic superheroes, or lovable animated critters, there's a character waiting to make your day magical. Pose for photos, collect autographs, and share unforgettable moments with these iconic characters. It's a chance to create lasting memories and experience the magic of your favorite stories in person."
            img="assets/characters.jpg"
            text="Click to read more!"
            clickable={true}
            className="card__styletwo"
            buttonStyle="nobutton"
          />
        </section>
        <section className="cardcontainer">
          <Card
            header="Early Bird Tickets: Rise and Shine for the Ultimate Thrill!"
            img="assets/earlybird.jpg"
            text="Click to read more!"
            expandedtext="Don't miss the worm—or, in our case, the best deals in town! Grab our exclusive Early Bird Tickets to kickstart your theme park adventure. Be among the first to arrive and make the most of your day with priority access to all your favorite rides and attractions. Plus, enjoy a complimentary breakfast to fuel up for the excitement ahead. Early Bird Tickets are your golden ticket to more fun, less waiting, and memories that last a lifetime. Purchase now and get ready to be the early bird that catches all the thrills!"
            clickable={true}
            className="card__styletwo"
            buttonStyle="nobutton"
          />
          <Card
            header="Group Discounts: Gather Your Crew for Unforgettable Fun!"
            text="Click to read more!"
            expandedtext="We offer fantastic group discounts that make your visit not only unforgettable but also budget-friendly. Bring your squad, team, school group, or any crew of 15 or more, and enjoy incredible savings on admission. Experience the magic of our rides, shows, and attractions together while creating memories that will be talked about for years to come. Contact us today to learn more about our group discount packages and make your group outing a day to remember!"
            img="assets/group.jpg"
            clickable={true}
            className="card__styletwo"
            buttonStyle="nobutton"
          />
          <Card
            header="Birthday Packages: Celebrate Your Special Day in Style!"
            text="Click to read more!"
            expandedtext="At AdventureWorld, we know that birthdays are all about making unforgettable memories. With our birthday packages, you'll receive VIP treatment from the moment you arrive. Enjoy all-day access to our thrilling rides, shows, and attractions, plus delicious food and beverages. We'll even throw in a birthday cake to sweeten the celebration! Let us take care of the details while you focus on having a blast with your friends and family!"
            img="assets/birthday.jpg"
            clickable={true}
            className="card__styletwo"
            buttonStyle="nobutton"
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
