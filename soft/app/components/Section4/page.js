import React from "react";
import Styles from "./section4.module.scss";
import Link from "next/link";
import Image from "next/image";
import l1 from "../../asset/l1.png";
import l2 from "../../asset/l2.png";
import l3 from "../../asset/l3.png";
import l4 from "../../asset/l4.png";
import l5 from "../../asset/l5.png";
import l6 from "../../asset/l6.png";
function Section4() {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <div className={Styles.companylogo}>
            <ul>
              <li>
                <Image src={l1} alt="" width={92} />
              </li>
              <li>
                <Image src={l2} alt="" width={92} />
              </li>{" "}
              <li>
                <Image src={l3} alt="" width={92} />
              </li>{" "}
              <li>
                <Image src={l4} alt="" width={92} />
              </li>{" "}
              <li>
                <Image src={l5} alt="" width={92} />
              </li>{" "}
              <li>
                <Image src={l6} alt="" width={92} />
              </li>{" "}
            </ul>
          </div>
          <div className={Styles.grid_container}>
            <div className={Styles.card1}>
              <div>
                <h2>5,234</h2>
                <h5>Projects</h5>
                <p>
                  Of “high-performing” level are led by a certified project
                  manager
                </p>
              </div>
            </div>

            <div className={Styles.card2}>
              <div className={Styles.content}>
                <h2>3,400+</h2>
                <h5>Hours</h5>
                <p>That meets quality standards required by our users</p>
              </div>
            </div>
            <div className={Styles.card3}>
              <div>
                <h2>24/7</h2>
                <h5>Support</h5>
                <p>Actively engage team members that finishes on time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
