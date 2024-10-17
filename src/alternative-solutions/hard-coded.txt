import "./App.css";
import TextImg from "./components/TextImg";
import CatOne from "./assets/cat1.png";
import CatTwo from "./assets/cat2.png";

function App() {
  return (
    <>
      <TextImg
        imgPosition="left"
        image={CatOne}
        textPosition="top" // I control the text positioning, I am centered by default, but you can put me "top" or "bottom"
        backgroundColor="#580030" // I control the background color, change me to whatever you like!
        headerOneColor="white" //I control the h1 tag color, my brother headTwoColor controls the h2. Mix and match us!
        headerOne="Space Cat Adventures"
        headerTwo="An epic cosmic journey"
        pText="Follow our brave space cat as it embarks on thrilling missions across the universe. From dodging asteroids to making friends with alien creatures, every moment is an adventure!"
      />

      <TextImg
        imgPosition="right"
        image={CatTwo}
        headerOne="Galactic Paws: The Space Cat Chronicles"
        headerTwo="One paw at a time!"
        pText="From saving space stations from malfunctioning AI systems to exploring uncharted planets, Captain Whiskers proves that even in the vastness of the universe, curiosity is a cat’s greatest weapon. Armed with his trusty laser claw and accompanied by a crew of quirky robotic sidekicks, Whiskers is on a mission to protect the galaxy, one paw at a time."
      />
    </>
  );
}

export default App;
