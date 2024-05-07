import "./App.css";

const Header = () => {
  <>
    <header>
      <div className="logo">
        <img src="./images/logo.png" alt="logo" />
        <nav className="main-nav">
          <input id="menu-toggle" type="checkbox" />
          <label for="menu-toggle" class="menu-btn">
            <span></span>
          </label>

          <ul className="nav-list">
            <li>
              <a className="nav-list-item" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="nav-list-item" href="#">
                Reservation
              </a>
            </li>
            <li>
              <a className="nav-list-item" href="#">
                Gallery
              </a>
            </li>
            <li>
              <a className="nav-list-item" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-list-item" href="#">
                Elements
              </a>
            </li>
            <li>
              <a className="nav-list-item" href="#">
                Shop
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </>;
};
const FormSection = () => {
  <>
    <section className="form-section">
      <div>
        <fieldset className="main-form">
          <form action="#">
            <label className="form-title">Trial Class</label>
            <br />
            <input type="text" value="Enter your name" className="input" />
            <br />
            <input type="tel" value="Enter your phone" className="input" />
            <br />
            <select className="input">
              <option disabled="disabled" selected="selected">
                Choose your class
              </option>
              <option>Yoga for health</option>
              <option>Yoga for lose weight</option>
              <option>Yoga for children</option>
              <option>Yoga for elderly</option>
            </select>
            <br />
            <button className="form-btn">Try it</button>
          </form>
        </fieldset>
      </div>
      <div className="main-words">
        <h1 className="main-title">
          Just Balance <br />
          Your mind & body
        </h1>
        <p className="main-description">
          Create the healthy living <br />
          for youself
        </p>
      </div>
    </section>
  </>;
};
const ProgrammCard = ({ img, title, period, text }) => {
  <>
    <li className="program-card">
      <img src={img} alt="" />
      <div className="content">
        <h3 className="program-title">{title}</h3>
        <p className="program-description">{text}</p>
        <p className="program-period">{period}</p>
      </div>
    </li>
  </>;
};
const ProgramSection = () => {
  <>
    <section className="program-section">
      <h2 className="title-program-section">Yoga Feature programm</h2>
      <h3 className="second-title-program-section">Our Classes</h3>
      <div className="list-container">
        <ul className="program-list">
          <ProgrammCard
            img="./images/img-01.jpg"
            title="Yoga for health"
            text=" Minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat consectetur adipising elit,sed do
              eiusmod tempor incididunt."
            period="Ashtanga-Hatha"
          />
          <ProgrammCard
            img="./images/img-02.jpg"
            title="yoga for lose weight"
            text=" Minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat consectetur adipising elit,sed do
              eiusmod tempor incididunt."
            period="Ashtanga-Hatha"
          />
          <ProgrammCard
            img="./images/img-03.jpg"
            title="Yoga for children"
            text="   Minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat consectetur adipising elit,sed do
              eiusmod tempor incididunt."
            period="Ashtanga-Hatha"
          />
          <ProgrammCard
            img="./images/img-04.jpg"
            title="Yoga for elderly"
            text=" Minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat consectetur adipising elit,sed do
              eiusmod tempor incididunt."
            period="Ashtanga-Hatha"
          />
        </ul>
      </div>
    </section>
  </>;
};
const PictureItem = ({ img }) => {
  <div>
    <li className="picture-item">
      <img className="picture" src={img} alt="Pulse" />
      <div className="overlay">
        <div className="text">&#128269;</div>
      </div>
    </li>
  </div>;
};

const PictureSection = () => {
  <>
    <section>
      <ul className="picture-list">
        <PictureItem img="./images/img-05.jpg" />
        <PictureItem img="./images/img-06.jpg" />
        <PictureItem img="./images/img-07.jpg" />
        <PictureItem img="./images/img-08.jpg" />
        <PictureItem img="./images/img-09.jpg" />
        <PictureItem img="./images/img-10.jpg" />
        <PictureItem img="./images/img-11.jpg" />
        <PictureItem img="./images/img-12.jpg" />
      </ul>
    </section>
  </>;
};
const Card = ({ price, date, time, text }) => {
  <>
    <li className="card-item">
      <p className="card-item-price">
        <span> $</span> {price}
      </p>
      <div className="card-condition">
        <p className="card-period">Entry date: {date}</p>
        <p className="card-period">Entry time: {time}</p>
        <p>{text}</p>
        <button type="button" className="card-btn">
          Buy now
        </button>
      </div>
    </li>
  </>;
};
const CardSection = () => {
  <>
    <section className="card-section">
      <ul className="card-section-list">
        <Card
          price="49/month"
          date="mon-fri"
          time="8a.m-8p.m"
          text="Nutrition advicer: no"
        />
        <Card
          price="69 /month"
          date="mon-fri"
          time="8a.m-8p.m"
          text="Nutrition advicer: no"
        />
        <Card
          price="99/month"
          date="mon-sun"
          time="8a.m-8p.m"
          text="Nutrition advicer: no"
        />
      </ul>
    </section>
  </>;
};
const SliderImage = (img) => {
  <img className="slider-img" src={img} alt="" />;
};
const AboutSection = () => {
  <>
    <section className="about-section">
      <div className="about-section-text">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptate quidem, explicabo asperiores libero inventore veritatis
          natus, placeat dignissimos in laborum eius quae numquam voluptates
          provident voluptatibus fugiat maiores. Error recusandae eos provident
          explicabo iure quas cum quaerat, asperiores veritatis! Repellendus
          autem laborum aliquid? Error velit sit soluta earum, provident,
          voluptates molestias quod voluptate suscipit nihil omnis vero ducimus
          reiciendis.
        </p>
      </div>
      <div className="container">
        <button type="button" className="slider-btn slider-prev">
          &#10094;
        </button>
        <div className="slider">
          <div className="slider-line">
            <SliderImage img="./images/img-13.jpg" />
            <SliderImage img="./images/img-11.jpg" />
            <SliderImage img="./images/img-12.jpg" />
            <SliderImage img="./images/img-10.jpg" />
            <SliderImage img="./images/img-09.jpg" />
            <SliderImage img="./images/img-08.jpg" />
            <SliderImage img="./images/img-07.jpg" />
          </div>
        </div>
        <button type="button" className="slider-btn slider-next">
          &#10095;
        </button>
      </div>
    </section>
  </>;
};
const InfoCard = (img, alt, title, text) => {
  <>
    <li className="info-item">
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  </>;
};

const InfoSection = () => {
  <>
    <section className="info-section">
      <ul className="program-list">
        <InfoCard
          img="./images/ico-01.png"
          alt="Pulse"
          title="Improved overall health"
          text="Enim ad minim veniam , quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com"
        />
        <InfoCard
          img="./images/ico-02.png"
          alt="Eye"
          title="Increased concentration"
          text="Enim ad minim veniam , quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com"
        />
        <InfoCard
          img="./images/ico-03.png"
          alt="Man in balance"
          title="Balance your mind"
          text=" Enim ad minim veniam , quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com"
        />
        <InfoCard
          img="./images/ico-04.png"
          alt="Sleeping"
          title="sleep better"
          text="Enim ad minim veniam , quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com"
        />
        <InfoCard
          img="./images/ico-05.png"
          alt="Woman`s figure"
          title="weight loss"
          text="Enim ad minim veniam , quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com"
        />
        <InfoCard
          img="./images/ico-06.png"
          alt="Bones"
          title="strengthens your bones"
          text="Enim ad minim veniam , quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com"
        />
        <InfoCard
          img="./images/ico-07.png"
          alt="Man doing stretching"
          title="increased flexibility"
          text="Enim ad minim veniam , quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com"
        />
        <InfoCard
          img="./images/ico-08.png"
          alt="Heart"
          title="Lower blood pressure"
          text="Enim ad minim veniam , quis nostrud exercitation toui ullamcomi
            laboris nisi ut aliquip ex ea com"
        />
      </ul>
    </section>
  </>;
};
const Footer = () => {
  <>
    <footer>
      <div class="footering">
        <div class="about">
          <h2 class="footer-title">About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            praesentium eum eligendi voluptatibus doloremque. Eaque autem porro,
            odit reprehenderit necessitatibus nam dolores sint vel nihil quam?
            Eaque ad, doloribus itaque sequi minus quidem laudantium optio
            placeat perferendis voluptas.
          </p>
        </div>
        <div class="contact">
          <div>
            <h2 class="footer-title">Contact us</h2>
            <address>
              <p>
                <i class="fa fa-location-dot"></i> 5419 Joseph Mountains
                <br />
                Apt.716
              </p>

              <i class="fa fa-phone"></i>

              <a href="tel:+123456789">+1 234 567 89</a>
              <a href="tel:+123467890">+1 234 67890</a>
            </address>
          </div>
        </div>
        <address>
          <div class="email">
            <a href="mailto:joga.info@example.com">
              <i class="fa fa-envelope"></i> joga.info@example.com
            </a>
            <a href="http://www.example.com">
              <i class="fa-solid fa-globe"></i>www.example.com
            </a>
          </div>
        </address>
      </div>

      <ul class="social-links">
        <li>
          <i class="fa fa-pinterest"></i>
        </li>
        <li>
          <i class="fa fa-twitter"></i>
        </li>
        <li>
          <i class="fa fa-facebook"></i>
        </li>
        <li>
          <i class="fa fa-google-plus"></i>
        </li>
        <li>
          <i class="fa fa-instagram"></i>
        </li>
      </ul>
      <p class="copyright">
        Copyright <span>©</span> 2016-2017 <span> Yoga classes</span>
      </p>
    </footer>
  </>;
};
function App() {
  return (
    <div className="App">
      <Header />
      <FormSection />
      <ProgramSection />
      <PictureSection />
      <AboutSection />
      <InfoSection />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
