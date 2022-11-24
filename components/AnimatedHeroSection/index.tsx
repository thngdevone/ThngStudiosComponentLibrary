const AnimatedHeroSection = ({
  time1,
  time2,
  time3,
  device1,
  device2,
  device3
}) => {
  return (
    <div className="animatedHeroSection">
      <div
        className="item1"
        style={{
          animation: `shiftRight1 ${time1}s`,
          animationTimingFunction: "cubic-bezier(0.15, 0.72, 0.58, 0.99)",
          animationFillMode: "forwards"
        }}
      >
        {device1}
      </div>
      <div
        className="item2"
        style={{
          animation: `shiftRight2 ${time2}s`,
          animationTimingFunction: "cubic-bezier(0.15, 0.72, 0.58, 0.99)",
          animationFillMode: "forwards"
        }}
      >
        {device2}
      </div>
      <div
        className="item3"
        style={{
          animation: `shiftRight3 ${time3}s`,
          animationTimingFunction: "cubic-bezier(0.15, 0.72, 0.58, 0.99)",
          animationFillMode: "forwards"
        }}
      >
        {device3}
      </div>
      <div className="shadow"></div>
      <div className="triangle"></div>
    </div>
  );
};

export default AnimatedHeroSection;
