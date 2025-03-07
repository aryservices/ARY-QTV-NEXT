"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,9195];
exports.modules = {

/***/ 5217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ConfigContext": () => (/* binding */ ConfigContext),
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/PageChange/PageChange.js


// reactstrap components
// import { Spinner } from "reactstrap";
// core components
function PageChange(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-cover fixed z-40 w-full h-full top-0 left-0",
                style: {
                    backgroundImage: "url('/img/qtv-banner.webp')"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-0 left-0 w-full h-full block z-50 absolute bg-black bg-opacity-50"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-32 mx-auto max-w-sm text-center relative z-50 top-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fas fa-circle-notch animate-spin text-light-bg mx-auto text-6xl"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        className: "text-lg font-medium text-light-bg font-black",
                        children: [
                            "Loading page contents for: ",
                            props.path
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./config.js
var config_0 = __webpack_require__(1838);
;// CONCATENATED MODULE: ./components/Footers/Footer.js

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "relative bg-yellow pt-8 pb-6",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20",
                    style: {
                        transform: "translateZ(0)"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "absolute bottom-0 overflow-hidden",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "none",
                        version: "1.1",
                        viewBox: "0 0 2560 100",
                        x: "0",
                        y: "0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                            className: "text-yellow-light fill-current",
                            points: "2560 0 2560 100 0 100"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-wrap text-center lg:text-left",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full lg:w-3/12 text-left px-2 py-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/img/ary-qtv-logo.png"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mt-6 lg:mb-0 mb-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://x.com/aryqtv",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.facebook.com/ARYQTV/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-square"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.instagram.com/aryqtvofficial/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-instagram"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.tiktok.com/@aryqtvofficial",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-tiktok"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.youtube.com/channel/UCE2oY4S4wOu6WofU2YbfWsw",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
                                                        type: "button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full lg:w-3/12 text-left px-2 py-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "block uppercase text-yellow-light text-sm font-semibold mb-2 ",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-white font-light",
                                            children: [
                                                "ARY QTV is a leading Islamic channel dedicated to spreading the message of Islam through authentic teachings, discussions, and spiritual enlightenment. We provide insightful programs, live transmissions, and educational content for millions of viewers worldwide. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/about-us",
                                                    children: " Read More.."
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full lg:w-6/12 text-left",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-wrap items-top mb-6 text-left",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "lg:w-4/12 text-left px-2 py-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "block uppercase text-yellow-light text-sm font-semibold mb-2 text-left",
                                                        children: "Useful Links"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "list-unstyled text-left",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "text-white hover:text-black font-semibold block pb-2 text-sm",
                                                                    href: "/",
                                                                    children: "Home"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "text-white hover:text-black font-semibold block pb-2 text-sm",
                                                                    href: "/about-us/",
                                                                    children: "About Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "text-white hover:text-black font-semibold block pb-2 text-sm",
                                                                    href: "contact-us",
                                                                    children: "Contact Us"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "text-white hover:text-black font-semibold block pb-2 text-sm",
                                                                    href: "privacy-policy",
                                                                    children: "Privacy Policy"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-full lg:w-4/12 px-2 py-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "block uppercase text-yellow-light text-sm font-semibold mb-2 text-left",
                                                        children: "Download Our App"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                        className: "list-unstyled",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                    href: "https://play.google.com/store/apps/details?id=com.aryservices.qtv&hl=en",
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "https://aryzap.com/img/google.png"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm",
                                                                    href: "https://apps.apple.com/pk/app/ary-qtv-app/id1330604385",
                                                                    target: "_blank",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "https://aryzap.com/img/apple.png"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            className: "my-6 border-blueGray-300"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-wrap items-center md:justify-between justify-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full md:w-4/12 px-4 mx-auto text-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-sm text-light font-semibold py-1",
                                    children: [
                                        "Copyright \xa9 ",
                                        new Date().getFullYear(),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://aryqtv.tv/",
                                            className: "text-yellow-light hover:text-blueGray-800",
                                            children: "ARY QTV"
                                        }),
                                        "."
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navbars/IndexNavbar.js



function Navbar(props) {
    const { 0: navbarOpen , 1: setNavbarOpen  } = (0,external_react_.useState)(false); // Boolean for open/close state
    const { 0: searchField , 1: setSearchField  } = (0,external_react_.useState)("");
    const { 0: dropdownOpen , 1: setDropdownOpen  } = (0,external_react_.useState)(false);
    const handleChange = (e)=>{
        setSearchField(e.target.value);
    };
    const handleSubmit = (e)=>{
        alert(e.target.query.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-181818 shadow bg-yellow",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container px-4 mx-auto flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        width: "50%",
                                        src: "/img/ary-qtv-logo.png",
                                        alt: "QTV Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
                                type: "button",
                                onClick: ()=>setNavbarOpen(!navbarOpen),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-bars"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none ${navbarOpen ? "block" : "hidden"}`,
                        id: "example-navbar-warning",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col lg:flex-row list-none mr-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            onClick: ()=>setNavbarOpen(false),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fas fa-home text-md leading-lg mr-2"
                                                }),
                                                " Home"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/latestvideos",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            onClick: ()=>setNavbarOpen(false),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fas fa-video text-md leading-lg mr-2"
                                                }),
                                                " Latest Videos"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                                onClick: ()=>setDropdownOpen(!dropdownOpen),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "text-yellow-light fas fa-tv text-md leading-lg mr-2"
                                                    }),
                                                    " Programs",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-chevron-down ml-2 text-sm"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: `absolute left-0 mt-0 w-48 bg-yellow-light2 custom-dropdown font-black text-yellow shadow-lg rounded-md ${dropdownOpen ? "block" : "hidden"}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/on-air",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: " px-4 py-2 hover:text-white hover:bg-yellow cursor-pointer",
                                                            onClick: ()=>setDropdownOpen(false),
                                                            children: "ON AIR"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/popularplaylists",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: " px-4 py-2 hover:bg-yellow cursor-pointer",
                                                            onClick: ()=>setDropdownOpen(false),
                                                            children: "POPULAR"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/archiveplaylists",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: " px-4 py-2 hover:bg-yellow cursor-pointer",
                                                            onClick: ()=>setDropdownOpen(false),
                                                            children: "ARCHIVE"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/schedule",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            onClick: ()=>setNavbarOpen(false),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fas fa-history text-md leading-lg mr-2"
                                                }),
                                                " Schedule"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/namaz-timings",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            onClick: ()=>setNavbarOpen(false),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fas fa-pray text-md leading-lg mr-2"
                                                }),
                                                " NAMAZ TIMINGS"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/ramadan-timings",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "hover:text-white-500 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold cursor-pointer",
                                            onClick: ()=>setNavbarOpen(false),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fas fa-praying-hands text-md leading-lg mr-2"
                                                }),
                                                " RAMADAN TIMINGS"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col lg:flex-row list-none lg:ml-auto",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                                href: "https://www.facebook.com/ARYQTV/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fab fa-facebook leading-lg "
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                                href: "https://x.com/aryqtv",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fab fa-twitter leading-lg "
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                                href: "https://www.instagram.com/aryqtvofficial/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fab fa-instagram leading-lg "
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                                href: "https://www.tiktok.com/@aryqtvofficial",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fab fa-tiktok leading-lg "
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "hover:text-blueGray-500 text-blueGray-700 px-1 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
                                                href: "https://www.youtube.com/channel/UCE2oY4S4wOu6WofU2YbfWsw",
                                                target: "_blank",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "text-yellow-light fab fa-youtube leading-lg "
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://live.aryqtv.tv/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "flex items-end",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "text-yellow bg-yellow-light2 active:bg-blueGray-600 text-xs font-black uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
                                                type: "button",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fas fa-tv"
                                                    }),
                                                    " Watch LIVE"
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./pages/_app.js













// Create a Context for Config
const ConfigContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
router_default().events.on("routeChangeStart", (url)=>{
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    external_react_dom_default().render(/*#__PURE__*/ jsx_runtime_.jsx(PageChange, {
        path: url
    }), document.getElementById("page-transition"));
});
router_default().events.on("routeChangeComplete", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
router_default().events.on("routeChangeError", ()=>{
    external_react_dom_default().unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
const MyApp = ({ Component , pageProps  })=>{
    const { 0: config , 1: setConfig  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const loadConfig = async ()=>{
            try {
                await (0,config_0.fetchConfig)();
                setConfig((0,config_0.getConfig)());
            } catch (error) {
                console.error("Failed to load config:", error);
                setConfig({});
            }
        };
        loadConfig();
    }, []);
    const Layout = Component.layout || (({ children  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(ConfigContext.Provider, {
        value: config,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                !pageProps.metaOverride && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "ARY QTV | 1st Religious Channel from Pakistan"
                        }, "title"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Stream ARY QTV, the first religious channel from Pakistan. Explore Islamic programs, Naats, Hadeeth, and Tilawat-e-Quran with renowned scholars."
                        }, "description"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "keywords",
                            content: "ARY QTV, Religious Channel, Naats, Hadeeth, Tilawat-e-Quran, Pakistan"
                        }, "keywords"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "author",
                            content: "ARY QTV"
                        }, "author"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "robots",
                            content: "index, follow"
                        }, "robots"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:type",
                            content: "website"
                        }, "og:type"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:url",
                            content: "https://aryqtv.tv/"
                        }, "og:url"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:title",
                            content: "ARY QTV | 1st Religious Channel from Pakistan"
                        }, "og:title"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:description",
                            content: "Stream ARY QTV, the first religious channel from Pakistan. Explore Islamic programs, Naats, Hadeeth, and Tilawat-e-Quran with renowned scholars."
                        }, "og:description"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image",
                            content: "https://aryqtv.tv/img/ary-qtv-logo.png"
                        }, "og:image"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:site_name",
                            content: "ARY QTV"
                        }, "og:site_name"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }, "twitter:card"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:title",
                            content: "ARY QTV – Religious Programs, Naats & Quran"
                        }, "twitter:title"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:description",
                            content: "Watch ARY QTV for Islamic programs, Naats, Hadeeth, Tilawat-e-Quran, and more. Stay enlightened with authentic teachings by renowned scholars."
                        }, "twitter:description"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:image",
                            content: "https://aryqtv.tv/img/ary-qtv-logo.png"
                        }, "twitter:image"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:site",
                            content: "@ARYQTV"
                        }, "twitter:site"),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:creator",
                            content: "@ARYQTV"
                        }, "twitter:creator"),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            type: "image/png",
                            href: "/img/ary-qtv-logo.png"
                        }, "favicon")
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
                    fixed: true
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,1664,7544,1838], () => (__webpack_exec__(5217)));
module.exports = __webpack_exports__;

})();