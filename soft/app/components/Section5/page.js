import React from "react";
import Styles from "./section5.module.scss";
import Image from "next/image";
import m1 from "../../asset/m1.png";

function Section5() {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <div className={Styles.content}>
            <div>
              <h3>Be the first to see the news</h3>
              <p>
                Your company may not be in the software business, but
                eventually, a software company will be in your business.
              </p>
              <input
                className={Styles.inputbox}
                placeholder="Email here.."
              ></input>
              <button className={Styles.btn}>SUBSCRIBE</button>
            </div>
            <div>
              <Image src={m1} alt="" width={516} height={387} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
