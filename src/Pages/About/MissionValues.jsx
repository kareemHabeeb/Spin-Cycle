import "./css/MissionValues.css";
import { FiTarget, FiClock, FiLayers } from "react-icons/fi";

const MissionValues = () => {
  return (
    <section className="section-container">
      <div className="mission-holder">
        <div className="left-missionholder_image">
          <img
            src="https://i.postimg.cc/XqVnYrtJ/Gemini-Generated-Image-amaregamaregamar-1.png"
            alt="SpinCycle Laundry staff member holding folded towels"
          />
        </div>

        <div className="vertical-middle_text ">
          <span className="middle_side-text">SPINCYCLE SPINCYCLE</span>
        </div>

        <div className="right-missionholder_text">
          <div className="content-holder">
            <h2>
              <FiTarget className="text-icon" />
              OUR VISION
            </h2>
            <p>
              To be the undisputed benchmark of excellence in Africa&apos;s
              garment care industry, where 25 years of heritage meets the future
              of sustainable, smart technology. We envision a world where every
              fabric in Lagos—from everyday essentials to priceless heirlooms—
              enjoys a longer life cycle through our scientific approach to deep
              cleaning and preservation.
            </p>

            <h2>
              <FiClock className="text-icon" />
              OUR MISSION
            </h2>
            <p>
              To redefine the laundry experience in Lagos by blending 25 years
              of traditional expertise with smart technology to provide
              meticulous garment care that preserves fabric integrity and
              extends the life of every investment.
            </p>

            <h2>
              <FiLayers className="text-icon" />
              CORE VALUES
            </h2>
            <div className="core-list">
              <p className="list">
                <strong>Mastery &amp; Expertise:</strong> 25 years of
                deep-rooted knowledge in fiber identification and stain
                chemistry for specialized care.
              </p>
              <p className="list">
                <strong>Smart Innovation:</strong> Intelligent machinery and
                real-time monitoring to ensure optimal wash cycles and fabric
                longevity.
              </p>
              <p className="list">
                <strong>Deep-Clean Integrity:</strong> Advanced hygienic
                processes that remove allergens and bacteria while preserving
                fabric vitality.
              </p>
              <p className="list">
                <strong>Sustainable Trust:</strong> A quarter-century of
                reliability built on eco-friendly, biodegradable solutions for
                the Lagos community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
