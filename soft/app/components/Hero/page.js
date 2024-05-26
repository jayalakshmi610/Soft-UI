import React from "react";
import Styles from "./hero.module.scss";

function Hero() {
  return (
    <div className={Styles.container}>
      <div className={Styles.main}>
        <h1>Work with an amazing design</h1>
        <p>
          We’re constantly trying to express ourselves and actualize our dreams.
          If you have the opportunity to play this game
        </p>
        <button className={Styles.btn}>CREATE ACCOUNT</button>

        <div className={Styles.contacts}>
          <h3>Find us on</h3>
          <ul>
            <li>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.875 2.0625C15.875 1.60547 15.6992 1.21875 15.3828 0.867188C15.0312 0.550781 14.6445 0.375 14.1875 0.375H1.8125C1.32031 0.375 0.933594 0.550781 0.617188 0.867188C0.265625 1.21875 0.125 1.60547 0.125 2.0625V14.4375C0.125 14.9297 0.265625 15.3164 0.617188 15.6328C0.933594 15.9844 1.32031 16.125 1.8125 16.125H8.73828V9.90234H6.59375V7.51172H8.73828V5.75391C8.73828 4.76953 8.98438 4.03125 9.54688 3.46875C10.1094 2.90625 10.8477 2.625 11.7969 2.625C12.5 2.625 13.1328 2.66016 13.625 2.73047V4.83984H12.3594C11.9023 4.83984 11.5859 4.94531 11.4102 5.15625C11.2695 5.36719 11.1992 5.64844 11.1992 6V7.51172H13.625L13.3086 9.90234H11.1992V16.125H14.1875C14.6445 16.125 15.0312 15.9844 15.3828 15.6328C15.6992 15.3164 15.875 14.9297 15.875 14.4375V2.0625Z"
                  fill="white"
                />
              </svg>
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.875 5.20703C8.57812 5.20703 9.24609 5.41797 9.87891 5.76953C10.5117 6.12109 11.0039 6.61328 11.3555 7.24609C11.707 7.87891 11.918 8.54688 11.918 9.25C11.918 9.98828 11.707 10.6562 11.3555 11.2891C11.0039 11.9219 10.5117 12.4141 9.87891 12.7656C9.24609 13.1172 8.57812 13.293 7.875 13.293C7.13672 13.293 6.46875 13.1172 5.83594 12.7656C5.20312 12.4141 4.71094 11.9219 4.35938 11.2891C4.00781 10.6562 3.83203 9.98828 3.83203 9.25C3.83203 8.54688 4.00781 7.87891 4.35938 7.24609C4.71094 6.61328 5.20312 6.12109 5.83594 5.76953C6.46875 5.41797 7.13672 5.20703 7.875 5.20703ZM7.875 11.8867C8.57812 11.8867 9.21094 11.6406 9.73828 11.1133C10.2305 10.6211 10.5117 9.98828 10.5117 9.25C10.5117 8.54688 10.2305 7.91406 9.73828 7.38672C9.21094 6.89453 8.57812 6.61328 7.875 6.61328C7.13672 6.61328 6.50391 6.89453 6.01172 7.38672C5.48438 7.91406 5.23828 8.54688 5.23828 9.25C5.23828 9.98828 5.48438 10.6211 6.01172 11.1133C6.50391 11.6406 7.13672 11.8867 7.875 11.8867ZM13.043 5.03125C13.043 4.78516 12.9375 4.57422 12.7617 4.36328C12.5508 4.1875 12.3398 4.08203 12.0938 4.08203C11.8125 4.08203 11.6016 4.1875 11.4258 4.36328C11.2148 4.57422 11.1445 4.78516 11.1445 5.03125C11.1445 5.3125 11.2148 5.52344 11.4258 5.69922C11.6016 5.91016 11.8125 5.98047 12.0938 5.98047C12.3398 5.98047 12.5508 5.91016 12.7266 5.69922C12.9023 5.52344 13.0078 5.3125 13.043 5.03125ZM15.7148 5.98047C15.7148 6.64844 15.75 7.73828 15.75 9.25C15.75 10.7969 15.7148 11.8867 15.6797 12.5547C15.6445 13.2227 15.5391 13.7852 15.3984 14.2773C15.1875 14.875 14.8359 15.4023 14.4141 15.8242C13.9922 16.2461 13.4648 16.5625 12.9023 16.7734C12.4102 16.9492 11.8125 17.0547 11.1445 17.0898C10.4766 17.125 9.38672 17.125 7.875 17.125C6.32812 17.125 5.23828 17.125 4.57031 17.0898C3.90234 17.0547 3.33984 16.9492 2.84766 16.7383C2.25 16.5625 1.72266 16.2461 1.30078 15.8242C0.878906 15.4023 0.5625 14.875 0.351562 14.2773C0.175781 13.7852 0.0703125 13.2227 0.0351562 12.5547C0 11.8867 0 10.7969 0 9.25C0 7.73828 0 6.64844 0.0351562 5.98047C0.0703125 5.3125 0.175781 4.71484 0.351562 4.22266C0.5625 3.66016 0.878906 3.13281 1.30078 2.71094C1.72266 2.28906 2.25 1.9375 2.84766 1.72656C3.33984 1.58594 3.90234 1.48047 4.57031 1.44531C5.23828 1.41016 6.32812 1.375 7.875 1.375C9.38672 1.375 10.4766 1.41016 11.1445 1.44531C11.8125 1.48047 12.4102 1.58594 12.9023 1.72656C13.4648 1.9375 13.9922 2.28906 14.4141 2.71094C14.8359 3.13281 15.1875 3.66016 15.3984 4.22266C15.5391 4.71484 15.6445 5.3125 15.7148 5.98047ZM14.0273 13.8906C14.168 13.5039 14.2383 12.8711 14.3086 11.9922C14.3086 11.5 14.3438 10.7617 14.3438 9.8125V8.6875C14.3438 7.73828 14.3086 7 14.3086 6.50781C14.2383 5.62891 14.168 4.99609 14.0273 4.60938C13.7461 3.90625 13.2188 3.37891 12.5156 3.09766C12.1289 2.95703 11.4961 2.88672 10.6172 2.81641C10.0898 2.81641 9.35156 2.78125 8.4375 2.78125H7.3125C6.36328 2.78125 5.625 2.81641 5.13281 2.81641C4.25391 2.88672 3.62109 2.95703 3.23438 3.09766C2.49609 3.37891 2.00391 3.90625 1.72266 4.60938C1.58203 4.99609 1.47656 5.62891 1.44141 6.50781C1.40625 7.03516 1.40625 7.77344 1.40625 8.6875V9.8125C1.40625 10.7617 1.40625 11.5 1.44141 11.9922C1.47656 12.8711 1.58203 13.5039 1.72266 13.8906C2.00391 14.6289 2.53125 15.1211 3.23438 15.4023C3.62109 15.543 4.25391 15.6484 5.13281 15.6836C5.625 15.7188 6.36328 15.7188 7.3125 15.7188H8.4375C9.38672 15.7188 10.125 15.7188 10.6172 15.6836C11.4961 15.6484 12.1289 15.543 12.5156 15.4023C13.2188 15.1211 13.7461 14.5938 14.0273 13.8906Z"
                  fill="white"
                />
              </svg>
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1367 5.59375C16.8398 5.06641 17.4727 4.43359 18 3.66016C17.2969 3.97656 16.5938 4.1875 15.8906 4.25781C16.6641 3.76562 17.2266 3.09766 17.5078 2.21875C16.7695 2.64062 15.9961 2.95703 15.1523 3.09766C14.8008 2.74609 14.3789 2.46484 13.9219 2.25391C13.4648 2.04297 12.9727 1.9375 12.4453 1.9375C11.7773 1.9375 11.1797 2.11328 10.6172 2.42969C10.0547 2.78125 9.59766 3.23828 9.28125 3.80078C8.92969 4.36328 8.78906 4.99609 8.78906 5.62891C8.78906 5.91016 8.78906 6.19141 8.85938 6.47266C7.34766 6.40234 5.94141 6.05078 4.60547 5.34766C3.26953 4.67969 2.17969 3.76562 1.26562 2.60547C0.914062 3.20312 0.738281 3.83594 0.738281 4.46875C0.738281 5.10156 0.878906 5.69922 1.19531 6.22656C1.47656 6.78906 1.89844 7.21094 2.39062 7.5625C1.79297 7.5625 1.23047 7.38672 0.738281 7.07031V7.14062C0.738281 8.01953 1.01953 8.79297 1.58203 9.46094C2.14453 10.1641 2.84766 10.5859 3.69141 10.7617C3.33984 10.832 3.02344 10.8672 2.70703 10.8672C2.49609 10.8672 2.25 10.8672 2.03906 10.832C2.25 11.5703 2.67188 12.168 3.30469 12.6602C3.9375 13.1523 4.64062 13.3633 5.48438 13.3633C4.11328 14.418 2.56641 14.9453 0.878906 14.9453C0.527344 14.9453 0.246094 14.9453 0 14.9102C1.6875 16.0352 3.58594 16.5625 5.66016 16.5625C7.80469 16.5625 9.70312 16.0352 11.3906 14.9102C12.9023 13.9258 14.0977 12.625 14.9414 10.9375C15.75 9.39062 16.1719 7.73828 16.1719 6.05078C16.1719 5.83984 16.1367 5.69922 16.1367 5.59375Z"
                  fill="white"
                />
              </svg>
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0.53125C10.5469 0.53125 12.0234 0.953125 13.3594 1.72656C14.6953 2.5 15.75 3.55469 16.5234 4.89062C17.2969 6.22656 17.7188 7.70312 17.7188 9.25C17.7188 10.832 17.2969 12.2734 16.5234 13.6094C15.75 14.9453 14.6953 16.0352 13.3594 16.8086C12.0234 17.582 10.5469 17.9688 9 17.9688C7.41797 17.9688 5.97656 17.582 4.64062 16.8086C3.30469 16.0352 2.21484 14.9453 1.44141 13.6094C0.667969 12.2734 0.28125 10.832 0.28125 9.25C0.28125 7.70312 0.667969 6.22656 1.44141 4.89062C2.21484 3.55469 3.30469 2.5 4.64062 1.72656C5.97656 0.953125 7.41797 0.53125 9 0.53125ZM6.50391 13.6094C7.73438 13.6094 8.75391 13.2227 9.52734 12.4141C10.3008 11.6406 10.6875 10.6211 10.6875 9.35547C10.6875 9.10938 10.6523 8.86328 10.6172 8.61719H6.50391V10.1289H8.96484C8.89453 10.6914 8.61328 11.1484 8.12109 11.5C7.62891 11.8516 7.10156 11.9922 6.50391 11.9922C5.73047 11.9922 5.09766 11.7461 4.57031 11.1836C4.04297 10.6562 3.79688 10.0234 3.79688 9.25C3.79688 8.51172 4.04297 7.87891 4.57031 7.31641C5.09766 6.78906 5.73047 6.50781 6.46875 6.50781C7.17188 6.50781 7.76953 6.75391 8.26172 7.17578L9.42188 6.01562C8.61328 5.27734 7.62891 4.89062 6.50391 4.89062C5.69531 4.89062 4.95703 5.10156 4.32422 5.48828C3.65625 5.875 3.12891 6.40234 2.74219 7.07031C2.32031 7.73828 2.14453 8.47656 2.14453 9.25C2.14453 10.0586 2.32031 10.7969 2.74219 11.4648C3.12891 12.1328 3.65625 12.6602 4.32422 13.0469C4.95703 13.4336 5.69531 13.6094 6.50391 13.6094ZM14.625 9.88281H15.8555V8.61719H14.625V7.38672H13.3594V8.61719H12.1289V9.88281H13.3594V11.1133H14.625V9.88281Z"
                  fill="white"
                />
              </svg>
            </li>
          </ul>
          <div>
            <div className={Styles.wave}>
              <div className={Styles.wavereverse}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;