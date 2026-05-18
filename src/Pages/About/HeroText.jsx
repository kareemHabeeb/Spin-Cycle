import "./css/HeroText.css";

const HeroText = () => {
  return (
    <section className="wrapper_container">
      <div className="Text-Holder">
        <div className="iconholderleft">
          <img src="https://i.postimg.cc/Gm2MFbvP/Vector-(1).png" alt="" />
        </div>

        <div className="middle-text">
          <p>
            For over 25 years, SpinCycle Laundry has been Lagos’s premier
            destination for premium garment care. We treat your wardrobe as an
            investment, combining deep textile expertise with intelligent
            technology to extend the life of every fiber. Our commitment is
            simple: providing meticulous, eco-friendly cleaning that preserves
            the craftsmanship of your clothes while defining the future of
            laundry in Nigeria.
          </p>
        </div>
        <div className="iconholderright">
          <img src="https://i.postimg.cc/Gm2MFbvP/Vector-(1).png" alt="" />
        </div>
      </div>

      <div className="images-container">
        <div className="image-holderleft">
          <img
            src="https://i.postimg.cc/vmv7BJVd/ac5a4a369808fad3a8dd6a4ca0e40e23788c6cde.jpg"
            alt="Happy customer "
          />
        </div>

        <div className="image-holderright">
          <img
            src="https://i.postimg.cc/gcgM4ZjQ/67fc28363138f6cede7dfeeb1c84fef2d1248976.jpg"
            alt="SpinCycle staff members"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroText;
