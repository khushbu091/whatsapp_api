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

// WhatsApp SVG Icon
const WhatsAppIcon = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-[34px] h-[34px]"
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

// External Link Icon
const ExternalIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[24px] h-[24px]"
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
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f5f5] text-[#111] flex justify-center">

      {/* MOBILE CONTAINER */}
      <div className="w-full max-w-[600px] min-h-screen bg-white">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <header
          className="
            h-[108px]
            px-[32px]
            flex
            items-center
            justify-between
            bg-white
            border-b
            border-[#eeeeee]
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-[14px]">

            {/* Your Logo */}
            <div
              className="
                w-[65px]
                h-[65px]
                rounded-full
                bg-black
                flex
                items-center
                justify-center
                border
                border-[#eeeeee]
                shadow-sm
                overflow-hidden
              "
            >
              <img
                src={logo}
                alt="Radhe Book"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Brand */}
            <div>
              <div
                className="
                  text-[20px]
                  font-extrabold
                  tracking-[-0.4px]
                  text-[#111318]
                "
              >
                RADHE BOOK
              </div>

              <div
                className="
                  mt-[5px]
                  text-[12px]
                  font-semibold
                  tracking-[4px]
                  text-[#89919a]
                "
              >
                CONTACT DESK
              </div>
            </div>

          </div>

          {/* CONNECT BUTTON */}
          <button
            onClick={openWhatsApp}
            className="
              h-[48px]
              px-[20px]
              rounded-full
              border-[2px]
              border-[#d5d8dc]
              bg-white
              text-[15px]
              font-bold
              whitespace-nowrap
              hover:bg-[#f7f7f7]
              active:scale-[0.98]
              transition
            "
          >
            Let's connect
          </button>

        </header>


        {/* =====================================================
            MAIN BACKGROUND
        ====================================================== */}
        <main
          className="
            min-h-[calc(100vh-108px)]
            bg-[#f5f7f6]
            px-[18px]
            pt-[30px]
            pb-[45px]
          "
        >

          {/* MAIN CARD */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-[30px]
              bg-white
              shadow-[0_8px_35px_rgba(0,0,0,0.06)]
            "
          >

            {/* =================================================
                BLACK COVER
            ================================================== */}
            <section
              className="
                relative
                h-[285px]
                overflow-hidden
                bg-[#050505]
              "
            >

              {/* Background circles */}
              <div
                className="
                  absolute
                  w-[470px]
                  h-[470px]
                  rounded-full
                  border
                  border-[#ffffff0d]
                  -right-[190px]
                  -top-[245px]
                "
              />

              <div
                className="
                  absolute
                  w-[350px]
                  h-[350px]
                  rounded-full
                  border
                  border-[#ffffff0d]
                  -right-[120px]
                  -top-[185px]
                "
              />

              <div
                className="
                  absolute
                  w-[250px]
                  h-[250px]
                  rounded-full
                  border
                  border-[#ffffff08]
                  right-[15px]
                  -top-[135px]
                "
              />

              {/* Top title */}
              <div
                className="
                  absolute
                  top-[36px]
                  left-[38px]
                  z-10
                  text-white
                  text-[14px]
                  font-bold
                  tracking-[4px]
                "
              >
                LET'S KEEP IN TOUCH
              </div>

              {/* Right Brand */}
              <div
                className="
                  absolute
                  right-[36px]
                  bottom-[105px]
                  z-10
                  text-[#ffd400]
                  text-[15px]
                  font-extrabold
                  tracking-[4px]
                "
              >
                RADHEBOOK
              </div>

            </section>


            {/* =================================================
                PROFILE CONTENT
            ================================================== */}
            <section
              className="
                relative
                text-center
                px-[20px]
                pb-[42px]
              "
            >

              {/* PROFILE LOGO */}
              <div
                className="
                  relative
                  z-20
                  mx-auto
                  -mt-[67px]
                  mb-[24px]

                  w-[142px]
                  h-[142px]

                  rounded-full
                  border-[8px]
                  border-white

                  bg-black

                  shadow-[0_7px_22px_rgba(0,0,0,0.18)]

                  flex
                  items-center
                  justify-center

                  overflow-hidden
                "
              >

                {/* Your Logo */}
                <img
                  src={logo}
                  alt="Radhe Book"
                  className="w-full h-full object-contain"
                />

              </div>


              {/* NAME */}
              <div className="flex items-center justify-center">

                <h1
                  className="
                    text-[29px]
                    leading-none
                    font-extrabold
                    tracking-[-0.8px]
                    text-[#101318]
                  "
                >
                  Radhe Book
                </h1>

                {/* Verification Badge */}
                <span
                  className="
                    ml-[8px]
                    w-[28px]
                    h-[28px]
                    rounded-full
                    bg-[#1685f8]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-[17px]
                    font-black
                  "
                >
                  ✓
                </span>

              </div>


              {/* USERNAME */}
              <div
                className="
                  mt-[16px]
                  text-[18px]
                  text-[#68727d]
                  font-medium
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

                  mt-[34px]

                  min-h-[57px]
                  px-[35px]

                  rounded-[18px]

                  bg-[#f1f4f3]

                  text-[16px]
                  font-bold
                  text-[#151a20]
                "
              >
                Your Support contact desk
              </div>


              {/* DESCRIPTION */}
              <p
                className="
                  mt-[30px]
                  mb-[28px]

                  text-[18px]
                  leading-[1.65]

                  text-[#6d757d]
                  font-medium
                "
              >
                Say hello. Ask a question.
                <br />
                Let's get the conversation started.
              </p>


              {/* =================================================
                  WHATSAPP BUTTON
              ================================================== */}
              <button
                onClick={openWhatsApp}
                className="
                  w-full
                  h-[50px]

                  rounded-[20px]

                  bg-[#050505]

                  text-white

                  flex
                  items-center

                  px-[25px]

                  shadow-[0_8px_22px_rgba(0,0,0,0.12)]

                  active:scale-[0.99]
                  hover:bg-[#101010]

                  transition
                "
              >

                {/* Icon */}
                <div className="flex-shrink-0">
                  <WhatsAppIcon />
                </div>


                {/* Divider */}
                <div
                  className="
                    h-[38px]
                    w-[1px]
                    bg-[#555]
                    ml-[22px]
                    mr-[22px]
                  "
                />


                {/* Text */}
                <span
                  className="
                    flex-1
                    text-left
                    text-[20px]
                    font-extrabold
                  "
                >
                  Chat on WhatsApp
                </span>


                {/* Arrow */}
                <span
                  className="
                    text-[32px]
                    font-light
                    leading-none
                  "
                >
                  →
                </span>

              </button>


              {/* OPEN WHATSAPP */}
              <div
                className="
                  mt-[24px]
                  text-[16px]
                  text-[#818a92]
                  font-medium
                "
              >
                Opens WhatsApp
              </div>


              {/* DIVIDER */}
              <div
                className="
                  h-[1px]
                  bg-[#e2e5e4]
                  my-[27px]
                "
              />


              {/* CONTINUE */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-[18px]
                  text-[17px]
                  leading-[1.5]
                  font-bold
                  text-[#1b2026]
                "
              >

                <div className="flex-shrink-0">
                  <ExternalIcon />
                </div>

                <span>
                  Continue in your app or on WhatsApp
                  <br className="sm:hidden" />
                  Web
                </span>

              </div>


              {/* COUNTDOWN */}
              <div
                className="
                  mt-[27px]
                  text-[16px]
                  text-[#7d858d]
                  font-medium
                "
              >
                Redirecting to WhatsApp in{" "}

                <strong
                  className="
                    text-[#15191e]
                    font-extrabold
                    text-[19px]
                  "
                >
                  {seconds}
                </strong>

                {" "}seconds...
              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  );
}