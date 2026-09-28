import React, { useEffect, useState } from "react";
import logo from "../assets/logo3.png";

const WHATSAPP_NUMBER = "919876543210";

const WHATSAPP_MESSAGE =
  "Hello, I want to contact the support desk.";

const openWhatsApp = () => {
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  window.location.href = url;
};

// WhatsApp Icon
const WhatsAppIcon = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15" fill="#25D366" />

      <path
        d="M23.45 8.48A10.48 10.48 0 0 0 16 5.4c-5.8 0-10.52 4.72-10.52 10.53 0 1.85.48 3.65 1.4 5.23L5.4 26.6l5.57-1.46a10.52 10.52 0 0 0 5.03 1.28h.01c5.8 0 10.52-4.72 10.52-10.52 0-2.8-1.09-5.43-3.08-7.42Z"
        fill="white"
      />

      <path
        d="M21.63 18.8c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.4-.07-.12-.27-.2-.57-.35Z"
        fill="#25D366"
      />
    </svg>
  );
};

// External Icon
const ExternalIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[20px] h-[20px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
};

export default function Landing() {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          openWhatsApp();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[100dvh] w-full overflow-hidden bg-[#f4f5f5] text-[#111] flex justify-center">

      {/* MOBILE CONTAINER */}
      <div className="h-[100dvh] w-full max-w-[600px] bg-white flex flex-col overflow-hidden">

        {/* HEADER */}
        <header
          className="
            flex-shrink-0
            h-[72px]
            sm:h-[82px]
            px-[16px]
            sm:px-[24px]
            flex items-center justify-between
            bg-white
            border-b border-[#eeeeee]
          "
        >
          <div className="flex items-center gap-[9px] sm:gap-[12px] min-w-0">

            {/* Logo */}
            <div
              className="
                w-[43px] h-[43px]
                sm:w-[52px] sm:h-[52px]
                rounded-full
                bg-black
                flex items-center justify-center
                border border-[#eeeeee]
                shadow-sm
                overflow-hidden
                flex-shrink-0
              "
            >
              <img
                src={logo}
                alt="Radhe Book"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Brand */}
            <div className="min-w-0">
              <div
                className="
                  text-[15px]
                  sm:text-[18px]
                  font-extrabold
                  tracking-[-0.3px]
                  text-[#111318]
                "
              >
                RADHE BOOK
              </div>

              <div
                className="
                  mt-[2px]
                  text-[8px]
                  sm:text-[10px]
                  font-semibold
                  tracking-[2.5px]
                  text-[#89919a]
                "
              >
                CONTACT DESK
              </div>
            </div>
          </div>

          {/* Connect */}
          <button
            onClick={openWhatsApp}
            className="
              h-[38px]
              sm:h-[44px]
              px-[13px]
              sm:px-[18px]
              rounded-full
              border-[1.5px]
              border-[#d5d8dc]
              bg-white
              text-[11px]
              sm:text-[14px]
              font-bold
              whitespace-nowrap
              active:scale-[0.98]
              transition
              flex-shrink-0
            "
          >
            Let's connect
          </button>
        </header>

        {/* MAIN */}
        <main
          className="
            flex-1
            min-h-0
            bg-[#f5f7f6]
            px-[10px]
            sm:px-[18px]
            py-[10px]
            sm:py-[16px]
            overflow-hidden
          "
        >
          {/* CARD */}
          <div
            className="
              h-full
              w-full
              overflow-hidden
              rounded-[20px]
              sm:rounded-[28px]
              bg-white
              shadow-[0_5px_25px_rgba(0,0,0,0.06)]
              flex flex-col
            "
          >

            {/* COVER */}
            <section
              className="
                relative
                flex-shrink-0
                h-[150px]
                sm:h-[210px]
                overflow-hidden
                bg-[#050505]
              "
            >
              {/* Circles */}
              <div
                className="
                  absolute
                  w-[300px]
                  h-[300px]
                  rounded-full
                  border border-[#ffffff0d]
                  -right-[130px]
                  -top-[170px]
                "
              />

              <div
                className="
                  absolute
                  w-[230px]
                  h-[230px]
                  rounded-full
                  border border-[#ffffff0d]
                  -right-[90px]
                  -top-[130px]
                "
              />

              <div
                className="
                  absolute
                  w-[170px]
                  h-[170px]
                  rounded-full
                  border border-[#ffffff08]
                  right-[10px]
                  -top-[100px]
                "
              />

              {/* Title */}
              <div
                className="
                  absolute
                  top-[20px]
                  left-[22px]
                  z-10
                  text-white
                  text-[10px]
                  sm:text-[13px]
                  font-bold
                  tracking-[2.5px]
                "
              >
                LET'S KEEP IN TOUCH
              </div>

              {/* Brand */}
              <div
                className="
                  absolute
                  right-[22px]
                  bottom-[28px]
                  z-10
                  text-[#ffd400]
                  text-[11px]
                  sm:text-[14px]
                  font-extrabold
                  tracking-[3px]
                "
              >
                RADHEBOOK
              </div>
            </section>

            {/* PROFILE */}
            <section
              className="
                relative
                flex-1
                min-h-0
                text-center
                px-[15px]
                sm:px-[20px]
                pt-0
                pb-[10px]
                flex
                flex-col
                items-center
              "
            >

              {/* Profile Logo */}
              <div
                className="
                  relative
                  z-20
                  -mt-[43px]
                  sm:-mt-[55px]
                  mb-[10px]
                  sm:mb-[15px]

                  w-[90px]
                  h-[90px]

                  sm:w-[115px]
                  sm:h-[115px]

                  rounded-full
                  border-[5px]
                  sm:border-[7px]
                  border-white

                  bg-black

                  shadow-[0_5px_18px_rgba(0,0,0,0.18)]

                  flex items-center justify-center

                  overflow-hidden
                  flex-shrink-0
                "
              >
                <img
                  src={logo}
                  alt="Radhe Book"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* NAME */}
              <div className="flex items-center justify-center flex-shrink-0">
                <h1
                  className="
                    text-[22px]
                    sm:text-[27px]
                    leading-none
                    font-extrabold
                    tracking-[-0.6px]
                    text-[#101318]
                  "
                >
                  Radhe Book
                </h1>

                <span
                  className="
                    ml-[6px]
                    w-[21px]
                    h-[21px]
                    sm:w-[25px]
                    sm:h-[25px]
                    rounded-full
                    bg-[#1685f8]
                    text-white
                    flex items-center justify-center
                    text-[12px]
                    sm:text-[15px]
                    font-black
                  "
                >
                  ✓
                </span>
              </div>

              {/* USERNAME */}
              <div
                className="
                  mt-[7px]
                  text-[14px]
                  sm:text-[17px]
                  text-[#68727d]
                  font-medium
                  flex-shrink-0
                "
              >
                @RadheBookcommunity
              </div>

              {/* SUPPORT LABEL */}
              <div
                className="
                  inline-flex
                  items-center
                  justify-center
                  mt-[13px]
                  sm:mt-[20px]
                  min-h-[40px]
                  sm:min-h-[48px]
                  px-[20px]
                  sm:px-[30px]
                  rounded-[14px]
                  bg-[#f1f4f3]
                  text-[12px]
                  sm:text-[15px]
                  font-bold
                  text-[#151a20]
                  flex-shrink-0
                "
              >
                Your Support contact desk
              </div>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-[12px]
                  mb-[12px]
                  sm:mt-[18px]
                  sm:mb-[18px]

                  text-[13px]
                  sm:text-[17px]

                  leading-[1.4]
                  sm:leading-[1.55]

                  text-[#6d757d]
                  font-medium
                  flex-shrink-0
                "
              >
                Say hello. Ask a question.
                <br />
                Let's get the conversation started.
              </p>

              {/* WHATSAPP BUTTON */}
              <button
                onClick={openWhatsApp}
                className="
                  w-full
                  h-[48px]
                  sm:h-[56px]

                  rounded-[16px]
                  sm:rounded-[18px]

                  bg-[#050505]
                  text-white

                  flex items-center
                  px-[16px]
                  sm:px-[22px]

                  shadow-[0_6px_18px_rgba(0,0,0,0.12)]

                  active:scale-[0.99]
                  transition

                  flex-shrink-0
                "
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <WhatsAppIcon />
                </div>

                {/* Divider */}
                <div
                  className="
                    h-[28px]
                    sm:h-[36px]
                    w-[1px]
                    bg-[#555]
                    ml-[14px]
                    mr-[14px]
                    sm:ml-[20px]
                    sm:mr-[20px]
                  "
                />

                {/* Text */}
                <span
                  className="
                    flex-1
                    text-left
                    text-[16px]
                    sm:text-[19px]
                    font-extrabold
                  "
                >
                  Chat on WhatsApp
                </span>

                {/* Arrow */}
                <span
                  className="
                    text-[25px]
                    sm:text-[30px]
                    font-light
                    leading-none
                  "
                >
                  →
                </span>
              </button>

              {/* Opens WhatsApp */}
              <div
                className="
                  mt-[8px]
                  sm:mt-[12px]
                  text-[11px]
                  sm:text-[14px]
                  text-[#818a92]
                  font-medium
                  flex-shrink-0
                "
              >
                Opens WhatsApp
              </div>

              {/* Divider */}
              <div
                className="
                  w-full
                  h-[1px]
                  bg-[#e2e5e4]
                  my-[10px]
                  sm:my-[15px]
                  flex-shrink-0
                "
              />

              {/* CONTINUE */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-[10px]
                  text-[12px]
                  sm:text-[15px]
                  leading-[1.35]
                  font-bold
                  text-[#1b2026]
                  flex-shrink-0
                "
              >
                <div className="flex-shrink-0">
                  <ExternalIcon />
                </div>

                <span>
                  Continue in your app or on WhatsApp
                  <br />
                  Web
                </span>
              </div>

              {/* COUNTDOWN */}
              <div
                className="
                  mt-[8px]
                  sm:mt-[12px]
                  text-[11px]
                  sm:text-[14px]
                  text-[#7d858d]
                  font-medium
                  flex-shrink-0
                "
              >
                Redirecting to WhatsApp in{" "}
                <strong
                  className="
                    text-[#15191e]
                    font-extrabold
                    text-[14px]
                    sm:text-[17px]
                  "
                >
                  {seconds}
                </strong>{" "}
                seconds...
              </div>

            </section>
          </div>
        </main>
      </div>
    </div>
  );
}