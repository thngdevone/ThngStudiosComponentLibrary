import "./styles.css";
import AnimatedHeroSection from "../components/AnimatedHeroSection/index";
export default function App() {
  const time1 = 1;
  const time2 = 1.6;
  const time3 = 1.3;
  const device1 = <div className="laptop"></div>;
  const device2 = <div className="phone"></div>;
  const device3 = <div className="tablet"></div>;
  // const device1 = <h1>Hello world</h1>;
  return (
    <div className="App">
      <AnimatedHeroSection
        time1={time1}
        time2={time2}
        time3={time3}
        device1={device1}
        device2={device2}
        device3={device3}
      />
    </div>
  );
}
