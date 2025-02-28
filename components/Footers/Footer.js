

export default function Footer() {
  return (
    <>
      <footer className="relative bg-yellow pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-yellow-light fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-3/12 text-left px-2 py-2">
              <img src="/img/ary-qtv-logo.png" />
              <div className="mt-6 lg:mb-0 mb-6">
                <a  target="_blank" href="https://x.com/aryqtv">
                  <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-twitter"></i>
                  </button>
                </a>
                <a  target="_blank" href="https://www.facebook.com/ARYQTV/">
                  <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-facebook-square"></i>
                  </button>
                </a>
                <a  target="_blank" href="https://www.instagram.com/aryqtvofficial/">
                  <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-instagram"></i>
                  </button>
                </a>
                <a  target="_blank" href="https://www.tiktok.com/@aryqtvofficial">
                  <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-tiktok"></i>
                  </button>
                </a>
                
                
                <a  target="_blank" href="https://www.youtube.com/channel/UCE2oY4S4wOu6WofU2YbfWsw">
                  <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-youtube"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-3/12 text-left px-2 py-2">
              <span className="block uppercase text-yellow-light text-sm font-semibold mb-2 ">About Us</span>
              <p className="text-white font-light">ARY QTV is a leading Islamic channel dedicated to spreading the message of Islam through authentic teachings, discussions, and spiritual enlightenment. We provide insightful programs, live transmissions, and educational content for millions of viewers worldwide. <a href="/about-us"> Read More..</a>
              </p>
            </div>
            <div className="w-full lg:w-6/12 text-left">
              <div className="flex flex-wrap items-top mb-6 text-left">
                <div className="lg:w-4/12 text-left px-2 py-2">
                  <span className="block uppercase text-yellow-light text-sm font-semibold mb-2 text-left">Useful Links</span>
                  <ul className="list-unstyled text-left">
                    <li>
                      <a className="text-white hover:text-black font-semibold block pb-2 text-sm" href="/" >Home</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-black font-semibold block pb-2 text-sm" href="/about-us/" >About Us</a>
                    </li>
                    {/* <li>
                      <a className="text-white hover:text-white-800 font-semibold block pb-2 text-sm" href="/blogs/" >Blogs</a>
                    </li> */}
                    <li>
                      <a className="text-white hover:text-black font-semibold block pb-2 text-sm" href="contact-us" >Contact Us</a>
                    </li>
                    <li>
                      <a className="text-white hover:text-black font-semibold block pb-2 text-sm" href="privacy-policy" >Privacy Policy</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-2 py-2">
                  <span className="block uppercase text-yellow-light text-sm font-semibold mb-2 text-left">Download Our App</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://play.google.com/store/apps/details?id=com.aryservices.qtv&hl=en"  target="_blank">
                        <img src="https://aryzap.com/img/google.png" />
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://apps.apple.com/pk/app/ary-qtv-app/id1330604385" target="_blank">
                        <img src="https://aryzap.com/img/apple.png" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-light font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://aryqtv.tv/"
                  className="text-yellow-light hover:text-blueGray-800"
                >
                  ARY QTV
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
