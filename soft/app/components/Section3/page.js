import React from "react";
import Styles from "./section3.module.scss";
import i1 from "../../asset/i1.png";
import i2 from "../../asset/i2.png";
import i3 from "../../asset/i3.png";
import i4 from "../../asset/i4.png";
import Image from "next/image";

function Section3() {
  return (
    <div className={Styles.container}>
      <div className={Styles.main}>
        <div>
          <div className={Styles.wave}></div>
        </div>
        <div>
          <h3>The Executive Team</h3>

          <p>
            There’s nothing I really wanted to do in life that I wasn’t able to
            get good at. That’s my skill.
          </p>
        </div>
        <div className={Styles.grid_container}>
          <div className={Styles.card1}>
            <Image
              src={i4}
              className={Styles.Image}
              alt="..."
              width={188}
              height={188}
            />
            <div>
              <h3>William Pearce</h3>
              <h5>Boss</h5>
              <p>
                Website visitors today demand a frictionless user expericence —
                especially when using search. Because of the hight standards.
              </p>
            </div>
          </div>

          <div className={Styles.card2}>
            <Image
              src={i3}
              className={Styles.Image}
              alt="..."
              width={188}
              height={188}
            />
            <div className={Styles.content}>
              <h3>Emma Roberts</h3>
              <h5>UI Designer</h5>
              <p>
                Website visitors today demand a frictionless user expericence —
                especially when using search. Because of the hight standards.
              </p>
            </div>
          </div>
          <div className={Styles.card3}>
            <Image
              src={i1}
              className={Styles.Image}
              alt="..."
              width={188}
              height={188}
            />
            <div>
              <h3>Emma Roberts</h3>
              <h5>UI Designer</h5>
              <p>
                Website visitors today demand a frictionless user expericence —
                especially when using search. Because of the hight standards.
              </p>
            </div>
          </div>
          <div className={Styles.card4}>
            <Image
              src={i2}
              className={Styles.Image}
              alt="..."
              width={188}
              height={188}
            />
            <div className={Styles.content}>
              <h3>Ivana Flow</h3>
              <h5>Athlete</h5>
              <p>
                Website visitors today demand a frictionless user expericence —
                especially when using search. Because of the hight standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
