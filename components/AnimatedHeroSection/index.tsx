const AnimatedHeroSection = ({ device1, device2, device3 }) => {
  return (
    <div className="animatedHeroSection">
      <div className="item1">{device1}</div>
      <div className="item2">{device2}</div>
      <div className="item3">{device3}</div>
      <div className="triangle"></div>
    </div>
  );
};

export default AnimatedHeroSection;
