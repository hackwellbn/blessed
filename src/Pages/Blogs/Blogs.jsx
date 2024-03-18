import React from "react";
import "./Blogs.css";
import Footer from "../../Components/Footer/Footer";
import ppe_image from "./assets/ppes.jpg";
import kofia from "./assets/kofia.png";

const Blogs = () => {
  return (
    <div className="blogs">
      <section className="tips">
        <h3>Tips And Tricks</h3>
        <div className="cards_1">
          <div class="tip-content">
            <h3>Tip 1: Proper safety Gear</h3>
            <p>
              Always wear the necessary safety gear, including welding helmet,
              gloves, and protective clothing, to ensure your safety during
              welding.
            </p>
            <img
              src={kofia}
              width="100"
              margin-top="40%"
              margin-bottom="10px"
            />
          </div>
          <div class="tip-content">
            <h3>Tip 2: Clean Metal surface</h3>
            <p>
              Before welding, ensure the metal surface is clean and free from
              rust, paint, or contaminants. A clean surface promotes better weld
              quality.
            </p>
          </div>
        </div>
        {/* know how */}

        <h3>Know how to design and create a simple door:</h3>
        <div className="know-how">
          <div></div>
          <ol>
            <li>
              <strong>Design and Layout:</strong> Begin by creating a detailed
              blueprint or design layout for the welding door. This layout
              should include measurements, angles, and specifications for the
              door's dimensions and features. Consider factors such as material
              thickness, type of welding process, and joint configurations.
            </li>
            <li>
              <strong>Material Selection:</strong> Choose the appropriate
              materials for the welding door based on factors like strength,
              durability, and intended use. Common materials for welding doors
              include steel, aluminum, or stainless steel. Ensure that the
              selected materials are compatible with welding processes and able
              to withstand environmental conditions.
            </li>
            <li>
              <strong>Cutting and Preparation:</strong> Use cutting tools such
              as plasma cutters, oxy-fuel torches, or abrasive saws to cut the
              metal pieces according to the design specifications. Take care to
              achieve precise cuts and smooth edges to facilitate welding and
              ensure structural integrity.
            </li>
            <li>
              <strong>Fit-up and Alignment:</strong> Fit the cut pieces together
              according to the design layout, ensuring proper alignment and
              fit-up. Use clamps, jigs, or fixtures to hold the pieces in place
              during welding to maintain accuracy and prevent distortion.
            </li>
            <li>
              <strong>Welding Process:</strong> Employ appropriate welding
              processes such as MIG (Metal Inert Gas), TIG (Tungsten Inert Gas),
              or Stick welding to join the metal components together. Follow
              welding procedures carefully, adjusting parameters such as
              voltage, amperage, and travel speed as needed to achieve strong
              and consistent welds.
            </li>
            <li>
              <strong>Weld Joint Preparation:</strong> Prepare the welding
              joints by cleaning, beveling, or chamfering the edges to ensure
              proper penetration and fusion during welding. Remove any
              contaminants such as rust, paint, or grease that could compromise
              weld quality.
            </li>
            <li>
              <strong>Welding Techniques:</strong> Employ proper welding
              techniques such as stringer beads, weave patterns, or multi-pass
              welding to achieve desired weld profiles and penetration. Pay
              attention to weld quality, ensuring complete fusion and minimal
              defects such as porosity, undercut, or slag inclusions.
            </li>
            <li>
              <strong>Post-Weld Treatment:</strong> Perform post-weld treatments
              such as grinding, sanding, or smoothing to remove weld spatter,
              excess material, and sharp edges. This step enhances the aesthetic
              appearance of the welding door and improves safety by eliminating
              potential hazards.
            </li>
            <li>
              <strong>Inspection and Quality Assurance:</strong> Inspect the
              completed welding door for weld quality, dimensional accuracy, and
              overall integrity. Conduct non-destructive testing methods such as
              visual inspection, dye penetrant testing, or ultrasonic testing to
              detect any defects or imperfections.
            </li>
            <li>
              <strong>Finishing and Coating:</strong> Apply surface finishes or
              coatings such as paint, powder coating, or galvanizing to protect
              the welding door from corrosion, abrasion, and other environmental
              hazards. Choose finishes that complement the door's design and
              aesthetic requirements.
            </li>
            <h3>the four common types of welding and their processes</h3>
            <ul>
              <li>
                <strong>
                  Welding is all about joining metal pieces by melting and
                  merging them together. There are various ways to do it, from
                  high-tech methods like using lasers and microwaves to simpler
                  techniques like using a torch or forge. Let's explore the four
                  most common welding processes to get a better understanding of
                  how they work.
                </strong>
              </li>
            </ul>
            <p>
              there are many common types of welding processes{"\n"}but we will
              only venture in a few
            </p>
            <p>
              <li>MIG Welding (GMAW)</li> <li>TIG Welding (GTAW) </li>{" "}
              <li>Stick Welding (SMAW) </li>{" "}
              <li>Flux Cored Arc Welding (FCAW)</li>
            </p>
            <p className="look">
              some of the factors contributing to their dominance include:{"\n"}
            </p>
            <ul>
              {"\n"}
              <li>industrial demand</li>
              <li>easy to learn exceptional for (TIG)</li>
              <li>Affordibility of DIY enthusiasts</li>
              <li>when using TIG very high quality indeed is key </li>
            </ul>
          </ol>
          <div></div>
        </div>

        <div className="welding-ppe">
          <h2>
            what is welding <span>PPE?</span>
          </h2>
          <div class="welding-txt">
            <div className="welding-container">
              <div className="welding-text-area">
                <div className="steps">
                  {" "}
                  <p>
                    welding <span>P</span>ersonal <span>P</span>rotective{" "}
                    <span>E</span>quipment also <span>PPE </span>
                    encompasses a range of safety attire essential for welders
                    during their tasks. its importance lies in shielding workers
                    from potential hazards inherent in weldinng activities.To
                    ensure the utmost safety then, wearing ppe is mandatory
                    throughout the operations.
                  </p>{" "}
                </div>
                <div className="steps">
                  <p>
                    when assembling a comprehensive <span>PPE</span> kit for
                    welders a thorough asessment of potential risks is crucial.
                    understanding the dangers assists to find out the key
                    components necessary for the welders' safety
                  </p>
                </div>
                <div className="steps">
                  <p>
                    Equally significant is the emphasis on thorough training,
                    ensuring that every worker is adept at wearing
                    <span>PPE</span> correctly and consistently.
                  </p>
                </div>
                <div className="steps">
                  <h4 class="middle-h4">
                    What are the <span>PPE </span>used in welding?
                  </h4>
                  <p class="middle-text">
                    Given the numerous safety risks associated with welding,
                    workers must prioritize their protection by wearing a range
                    of welding Personal Protective Equipment (PPE) during
                    operations. Although workers may opt for additional gear
                    based on specific needs, the following represent crucial
                    pieces of protective equipment essential for welding tasks:
                  </p>
                </div>
              </div>
              <div className="ppe-image-container">
                <img src={ppe_image} alt="" />
              </div>
            </div>
            <div className="reach_us">
              <ul class="ppe-list">
                <li>Protective Welding Helmet</li>
                <li>Flame-Resistant Clothing</li>
                <li>Safety Glasses or Face Shield</li>
                <li>Welding Gloves</li>
                <li>Respiratory Protection</li>
                <li>Hearing Protection</li>
                {/* <!-- Add more items as needed --> */}
              </ul>
              <div></div>
              <div></div>
            </div>

            <hr />
          </div>
        </div>
        <div className="footprints"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
