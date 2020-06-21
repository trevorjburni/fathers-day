import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import Icons from "./components/Icons";
// Import bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import custom CSS
import './App.css';


const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Happy Father's Day Dad!</h1>

      <img
        className="image"
        src={Icons.meme}
        alt="Meme-able"
      />

      <h3>
        For Father's Day this year I decided to make a webpage / slideshow of some of my favorite pictures which remind me of the great Dad that you are.
      </h3>
    </Jumbotron>
    <Carousel>

      <Carousel.Item>
        <h4>
          This piece is what I call "meme-able"
        </h4>
        <img
          className="image"
          src={Icons.meme}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
            I could easily see this being a meme.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          Happy as a bee.
        </h4>
        <img
          className="image"
          src={Icons.adorable}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
            This one is adorable
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          You have taken the family on many trips, thank you for blessing us with all of these opportunities.
        </h4>
        <img
          className="image"
          src={Icons.cruise}
          alt="First Picture"
        />
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          You have definetly shown me how to have fun.
        </h4>
        <img
          className="image"
          src={Icons.disney}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
            This one is adorable too.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          This just makes me think of the movie: "Elf", which is very quotable.
        </h4>
        <img
          className="image"
          src={Icons.elf}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
            "Did you hear that?"
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          This was an awesome trip! I'm so glad that we could make this happen! All thanks to your hardwork!
        </h4>
        <img
          className="image"
          src={Icons.familyDisney}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
            Love the matching shirts.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          You have always been cheerful. You have the ability to brighten anyones day.
        </h4>
        <img
          className="image"
          src={Icons.familyFun}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
            Look how little Kyler and Brady are!
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          You have raised a great family, one that I'm very greatful to be apart of.
        </h4>
        <img
          className="image"
          src={Icons.familyPic}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
            This is my desktop's background picture.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          Let's be honest, there's no need for the barrel. We all know the barrels are backless.
        </h4>
        <img
          className="image"
          src={Icons.himHer}
          alt="First Picture"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          That one time you were a hoola girl. I actually don't know the story behind this one. But's it's great.
        </h4>
        <img
          className="image"
          src={Icons.hoola}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          This is the face you make when you are about to say something goofy. I can tell, because of the way mom is looking at you. Otherwise, I'd think you were just wondering why I was taking a picture.
        </h4>
        <img
          className="image"
          src={Icons.joke}
          alt="First Picture"
        />
        <Carousel.Caption>
          <p>
            Don't believe me? Ask Mom.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          You have been the best Dad since the beginning.
        </h4>
        <img
          className="image"
          src={Icons.oldie}
          alt="First Picture"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          Mom will get a kick out of this one.
        </h4>
        <img
          className="image"
          src={Icons.smile}
          alt="First Picture"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          Brady Bombed. But really, I have some of the best memories at Snowbird. I hope that we can continue going for YEARS to come.
        </h4>
        <img
          className="image"
          src={Icons.snowbird}
          alt="First Picture"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          Disney, Disney, Disney I can't ever get enough, no matter how wet we get.
        </h4>
        <img
          className="image"
          src={Icons.splash}
          alt="First Picture"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          Toothless. You know like Priceless, but toothless in this case.
        </h4>
        <img
          className="image"
          src={Icons.toothless}
          alt="First Picture"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          You make the best of all situations, even if you are trapped in a telephone booth.
        </h4>
        <img
          className="image"
          src={Icons.trapped}
          alt="First Picture"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <h4>
          The signs that you two picked in this picture, is perfect. You two are awesome! Thank you for your example, support, and making every moment fun.
        </h4>
        <img
          className="image"
          src={Icons.wedding}
          alt="First Picture"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  </Container>
);

export default App;
