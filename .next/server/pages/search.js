(function() {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 3987:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ search; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(6049);
;// CONCATENATED MODULE: ./components/HeaderOption.js



function HeaderOption({
  Icon,
  title,
  selected
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer
    ${selected && "text-blue-500 border-blue-500"}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
      className: "h-4"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "hidden sm:inline-flex",
      children: title
    })]
  });
}

/* harmony default export */ var components_HeaderOption = (HeaderOption);
;// CONCATENATED MODULE: ./components/HeaderOptions.js





function HeaderOptions() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b dark:text-gray-300",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex space-x-6",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_HeaderOption, {
        Icon: esm/* SearchIcon */.W1M,
        title: "All",
        selected: true
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderOption, {
        Icon: esm/* PhotographIcon */.u3,
        title: "Images"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderOption, {
        Icon: esm/* PlayIcon */.o1U,
        title: "Videos"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderOption, {
        Icon: esm/* NewspaperIcon */.fS1,
        title: "News"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderOption, {
        Icon: esm/* MapIcon */.Zlt,
        title: "Maps"
      }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderOption, {
        Icon: esm/* DotsVerticalIcon */.AjK,
        title: "More"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex space-x-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Settings"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Tools"
      })]
    })]
  });
}

/* harmony default export */ var components_HeaderOptions = (HeaderOptions);
;// CONCATENATED MODULE: ./components/Header.js








function Header() {
  const router = (0,router_.useRouter)();
  const searchInputRef = (0,external_react_.useRef)(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    className: "sticky top-0 bg-white dark:bg-gray-900",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex w-full p-6 items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: "https://i.imgur.com/0BQtwBE.png",
        height: 40,
        width: 120,
        onClick: () => router.push("/"),
        className: "cursor-pointer"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: "flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          ref: searchInputRef,
          className: "flex-grow w-full focus:outline-none dark:bg-gray-900 dark:text-white",
          type: "text"
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* XIcon */.b0D, {
          className: "h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 dark:text-gray-300",
          onClick: () => searchInputRef.current.value = ""
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* SearchIcon */.W1M, {
          className: "border-l-2 pl-4 border-gray-300 h-6 text-blue-500 hidden sm:inline-flex "
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          hidden: true,
          type: "submit",
          onClick: search,
          children: "Search"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_HeaderOptions, {})]
  });
}

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./keys.js
// API key https://developers.google.com/custom-search/v1/using_rest
const API_KEY = 'AIzaSyDmvqc-dtVQCIMlCOGNtSpJeIzF-rX5LHM'; // Context key https://cse.google.com/cse/create/new

const CONTEXT_KEY = '9867c733a42c0c643';
;// CONCATENATED MODULE: ./Response.js
/* harmony default export */ var Response = ({
  "kind": "customsearch#search",
  "url": {
    "type": "application/json",
    "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
  },
  "queries": {
    "request": [{
      "title": "Google Custom Search - asdasd",
      "totalResults": "4120",
      "searchTerms": "asdasd",
      "count": 10,
      "startIndex": 1,
      "inputEncoding": "utf8",
      "outputEncoding": "utf8",
      "safe": "off",
      "cx": "26791804998f7ba17"
    }],
    "nextPage": [{
      "title": "Google Custom Search - asdasd",
      "totalResults": "4120",
      "searchTerms": "asdasd",
      "count": 10,
      "startIndex": 11,
      "inputEncoding": "utf8",
      "outputEncoding": "utf8",
      "safe": "off",
      "cx": "26791804998f7ba17"
    }]
  },
  "context": {
    "title": "FaresChrome"
  },
  "searchInformation": {
    "searchTime": 0.275893,
    "formattedSearchTime": "0.28",
    "totalResults": "4120",
    "formattedTotalResults": "4,120"
  },
  "items": [{
    "kind": "customsearch#result",
    "title": "Google Maps",
    "htmlTitle": "Google Maps",
    "link": "https://www.google.com/maps/contrib/101093109555274918442/reviews",
    "displayLink": "www.google.com",
    "snippet": "asdasd qweqwe. 5 contributions. Looking for your own reviews and photos? You \ncan contribute on Google Maps too! See my profile. Reviews Photos.",
    "htmlSnippet": "<b>asdasd</b> qweqwe. 5 contributions. Looking for your own reviews and photos? You <br>\ncan contribute on Google Maps too! See my profile. Reviews Photos.",
    "cacheId": "XAlk-VDgeisJ",
    "formattedUrl": "https://www.google.com/maps/contrib/101093109555274918442/reviews",
    "htmlFormattedUrl": "https://www.google.com/maps/contrib/101093109555274918442/reviews",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjsuMXw41HvKt-V5343CUF8T9SctSxlub6gOjFnmpdNLm0us0e5clNujI",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "referrer": "origin",
        "og:image": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png",
        "og:image:width": "256",
        "twitter:card": "summary",
        "og:site_name": "Contributions by asdasd qweqwe",
        "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
        "og:title": "Contributions by asdasd qweqwe",
        "og:image:height": "256",
        "google": "notranslate",
        "og:description": "65 Contributions"
      }],
      "place": [{
        "image": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png",
        "name": "Contributions by asdasd qweqwe",
        "description": "65 Contributions"
      }],
      "cse_image": [{
        "src": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "asdasd",
    "htmlTitle": "<b>asdasd</b>",
    "link": "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9lMWM1N2M0L3BvZGNhc3QvcnNz",
    "displayLink": "www.google.com",
    "snippet": "asdasd. Krisna Imanda. asdasd. Subscribe. Visit website. Halo, semoga kalian \nsemua enjoy sama podcast gua, makasih! :) Available episodes. Nov 9, 2019.",
    "htmlSnippet": "<b>asdasd</b>. Krisna Imanda. <b>asdasd</b>. Subscribe. Visit website. Halo, semoga kalian <br>\nsemua enjoy sama podcast gua, makasih! :) Available episodes. Nov 9, 2019.",
    "cacheId": "7oiGynWOzDIJ",
    "formattedUrl": "https://www.google.com/podcasts?feed...",
    "htmlFormattedUrl": "https://www.google.com/podcasts?feed...",
    "pagemap": {
      "metatags": [{
        "og:image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiUBh41-2JgmI3_abK3tBjnqZupsK6kIx3nEBOns7tV8JTO7E",
        "apple-itunes-app": "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lMWM1N2M0L3BvZGNhc3QvcnNz",
        "og:type": "music.radio_station",
        "twitter:card": "summary",
        "twitter:title": "asdasd",
        "og:site_name": "Google Podcasts",
        "og:title": "asdasd",
        "music:creator": "asdasd",
        "title": "asdasd",
        "og:description": "Halo, semoga kalian semua enjoy sama podcast gua, makasih! :)",
        "twitter:creator": "asdasd",
        "article:author": "asdasd",
        "twitter:image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiUBh41-2JgmI3_abK3tBjnqZupsK6kIx3nEBOns7tV8JTO7E",
        "referrer": "origin",
        "viewport": "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
        "og:url": "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lMWM1N2M0L3BvZGNhc3QvcnNz"
      }],
      "cse_image": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSiUBh41-2JgmI3_abK3tBjnqZupsK6kIx3nEBOns7tV8JTO7E"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "asd asdasd",
    "htmlTitle": "asd <b>asdasd</b>",
    "link": "https://www.google.com/maps/contrib/114846736674989349324/reviews",
    "displayLink": "www.google.com",
    "snippet": "asd asdasd. 1 contribution. Looking for your own reviews and photos? You can \ncontribute on Google Maps too! See my profile. Reviews Photos. Review places ...",
    "htmlSnippet": "asd <b>asdasd</b>. 1 contribution. Looking for your own reviews and photos? You can <br>\ncontribute on Google Maps too! See my profile. Reviews Photos. Review places&nbsp;...",
    "cacheId": "ddnfbrqGrv0J",
    "formattedUrl": "https://www.google.com/maps/contrib/114846736674989349324/reviews",
    "htmlFormattedUrl": "https://www.google.com/maps/contrib/114846736674989349324/reviews",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjsuMXw41HvKt-V5343CUF8T9SctSxlub6gOjFnmpdNLm0us0e5clNujI",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "referrer": "origin",
        "og:image": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png",
        "og:image:width": "256",
        "twitter:card": "summary",
        "og:site_name": "Contributions by asd asdasd",
        "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
        "og:title": "Contributions by asd asdasd",
        "og:image:height": "256",
        "google": "notranslate",
        "og:description": "11 Contributions"
      }],
      "place": [{
        "image": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png",
        "name": "Contributions by asd asdasd",
        "description": "11 Contributions"
      }],
      "cse_image": [{
        "src": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Google Maps",
    "htmlTitle": "Google Maps",
    "link": "https://www.google.com/maps/contrib/114854300553708996234/reviews",
    "displayLink": "www.google.com",
    "snippet": "asdasd asdasd. 3 contributions. Looking for your own reviews and photos? You \ncan contribute on Google Maps too! See my profile. Reviews Photos.",
    "htmlSnippet": "<b>asdasd asdasd</b>. 3 contributions. Looking for your own reviews and photos? You <br>\ncan contribute on Google Maps too! See my profile. Reviews Photos.",
    "cacheId": "mjffF9A9HF0J",
    "formattedUrl": "https://www.google.com/maps/contrib/114854300553708996234/reviews",
    "htmlFormattedUrl": "https://www.google.com/maps/contrib/114854300553708996234/reviews",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjsuMXw41HvKt-V5343CUF8T9SctSxlub6gOjFnmpdNLm0us0e5clNujI",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "referrer": "origin",
        "og:image": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png",
        "og:image:width": "256",
        "twitter:card": "summary",
        "og:site_name": "Contributions by asdasd asdasd",
        "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
        "og:title": "Contributions by asdasd asdasd",
        "og:image:height": "256",
        "google": "notranslate",
        "og:description": "23 Contributions"
      }],
      "place": [{
        "image": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png",
        "name": "Contributions by asdasd asdasd",
        "description": "23 Contributions"
      }],
      "cse_image": [{
        "src": "https://maps.gstatic.com/tactile/geoprofile/sharing/non_lg.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Google Maps",
    "htmlTitle": "Google Maps",
    "link": "https://www.google.com/maps/contrib/109486631822414138985/reviews",
    "displayLink": "www.google.com",
    "snippet": "asdasd asdasd. Local Guide · Level 3. 0 points1 point 97 points points points \npoints points points. 75. 250. Looking for your own reviews and photos? You can\n ...",
    "htmlSnippet": "<b>asdasd asdasd</b>. Local Guide · Level 3. 0 points1 point 97 points points points <br>\npoints points points. 75. 250. Looking for your own reviews and photos? You can<br>\n&nbsp;...",
    "cacheId": "TwByrcH7Y6gJ",
    "formattedUrl": "https://www.google.com/maps/contrib/109486631822414138985/reviews",
    "htmlFormattedUrl": "https://www.google.com/maps/contrib/109486631822414138985/reviews",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnvOWa__nknQDPhRK3biydCez_GcRd6HdMu0Y6vHm6pF4ps-rQyn4wCEiB",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "referrer": "origin",
        "og:image": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_3.png",
        "og:image:width": "256",
        "twitter:card": "summary",
        "og:site_name": "Contributions by asdasd asdasd",
        "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
        "og:title": "Contributions by asdasd asdasd",
        "og:image:height": "256",
        "google": "notranslate",
        "og:description": "Level 3 Local Guide | 97 Points"
      }],
      "place": [{
        "image": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_3.png",
        "name": "Contributions by asdasd asdasd",
        "description": "Level 3 Local Guide | 97 Points"
      }],
      "cse_image": [{
        "src": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_3.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Google",
    "htmlTitle": "Google",
    "link": "https://www.google.com/intl/sv/press/",
    "displayLink": "www.google.com",
    "snippet": "Search the world's information, including webpages, images, videos and more. \nGoogle has many special features to help you find exactly what you're looking ...",
    "htmlSnippet": "Search the world&#39;s information, including webpages, images, videos and more. <br>\nGoogle has many special features to help you find exactly what you&#39;re looking&nbsp;...",
    "cacheId": "S6m2kGt0m3sJ",
    "formattedUrl": "https://www.google.com/intl/sv/press/",
    "htmlFormattedUrl": "https://www.google.com/intl/sv/press/",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7N7oNLN6n1JOrXd8FdWKBkfefWNAEgAMLX_XE4GygTAm4ZqNYziGnRw",
        "width": "320",
        "height": "112"
      }],
      "metatags": [{
        "referrer": "origin",
        "viewport": "width=device-width,minimum-scale=1.0",
        "google": "notranslate",
        "format-detection": "telephone=no"
      }],
      "cse_image": [{
        "src": "https://www.google.se/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "The Unending Wallet",
    "htmlTitle": "The Unending Wallet",
    "link": "https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yZGViZGMwL3BvZGNhc3QvcnNz",
    "displayLink": "www.google.com",
    "snippet": "wegrbstdgfv --- Support this podcast: https://anchor.fm/bobwest/support. 58 sec · \nNov 19, 2019. asdas. asdasd --- Support this podcast: https://anchor.fm/bobwest/\n ...",
    "htmlSnippet": "wegrbstdgfv --- Support this podcast: https://anchor.fm/bobwest/support. 58 sec &middot; <br>\nNov 19, 2019. asdas. <b>asdasd</b> --- Support this podcast: https://anchor.fm/bobwest/<br>\n&nbsp;...",
    "cacheId": "UiJVDu_RpY8J",
    "formattedUrl": "https://www.google.com/podcasts?feed...",
    "htmlFormattedUrl": "https://www.google.com/podcasts?feed...",
    "pagemap": {
      "metatags": [{
        "og:image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDKwoqcI-h8aH-QkhGmXBI1rK5LP0_er_cZLv7xBTi7l-jJ-YV",
        "apple-itunes-app": "app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yZGViZGMwL3BvZGNhc3QvcnNz",
        "og:type": "music.radio_station",
        "twitter:card": "summary",
        "twitter:title": "The Unending Wallet",
        "og:site_name": "Google Podcasts",
        "og:title": "The Unending Wallet",
        "music:creator": "The Unending Wallet",
        "title": "The Unending Wallet",
        "og:description": "The Unending Wallet is a podcast about finances. From a person who doesn't actually have an unending wallet.\n\nRetirement, personal finance, 401k's, we get into it all.\n\nCover art photo by https://neonbrand.com Support this podcast: https://anchor.fm/bobwest/support",
        "twitter:creator": "The Unending Wallet",
        "article:author": "The Unending Wallet",
        "twitter:image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDKwoqcI-h8aH-QkhGmXBI1rK5LP0_er_cZLv7xBTi7l-jJ-YV",
        "referrer": "origin",
        "viewport": "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
        "og:url": "https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yZGViZGMwL3BvZGNhc3QvcnNz"
      }],
      "cse_image": [{
        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDKwoqcI-h8aH-QkhGmXBI1rK5LP0_er_cZLv7xBTi7l-jJ-YV"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Google Maps",
    "htmlTitle": "Google Maps",
    "link": "https://www.google.com/maps/contrib/102851302292869713333/reviews",
    "displayLink": "www.google.com",
    "snippet": "adfadf asdasd. Local Guide · Level 2. 0 points1 point 57 points points points \npoints points points. 15. 75. Looking for your own reviews and photos? You can ...",
    "htmlSnippet": "adfadf <b>asdasd</b>. Local Guide · Level 2. 0 points1 point 57 points points points <br>\npoints points points. 15. 75. Looking for your own reviews and photos? You can&nbsp;...",
    "cacheId": "d2c8xOAoux8J",
    "formattedUrl": "https://www.google.com/maps/contrib/102851302292869713333/reviews",
    "htmlFormattedUrl": "https://www.google.com/maps/contrib/102851302292869713333/reviews",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCDYYOyURbQDbzmJQFQtlCsJYDljanJVwZpD3SEQB1VccOp8b96Tlcjy88",
        "width": "310",
        "height": "163"
      }],
      "metatags": [{
        "referrer": "origin",
        "og:image": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_2.png",
        "og:image:width": "256",
        "twitter:card": "summary",
        "og:site_name": "Contributions by adfadf asdasd",
        "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
        "og:title": "Contributions by adfadf asdasd",
        "og:image:height": "256",
        "google": "notranslate",
        "og:description": "Level 2 Local Guide | 57 Points"
      }],
      "place": [{
        "image": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_2.png",
        "name": "Contributions by adfadf asdasd",
        "description": "Level 2 Local Guide | 57 Points"
      }],
      "cse_image": [{
        "src": "https://maps.gstatic.com/tactile/geoprofile/sharing/lg_2.png"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "Hey Amigo - Google My Maps",
    "htmlTitle": "Hey Amigo - Google My Maps",
    "link": "https://www.google.com/maps/ms?ie=UTF8&oe=UTF8&msa=0&msid=116131200643646760145.000480ed33210118c32e9",
    "displayLink": "www.google.com",
    "snippet": "Embed on my site. Capa sin nombre. Coliquim. TOSTADAS ORTIZ. DRILOS \nPIZZA. Ansa Inmobiliaria. Cerrajería Colima. Cerrajería Colima. asdasd ...",
    "htmlSnippet": "Embed on my site. Capa sin nombre. Coliquim. TOSTADAS ORTIZ. DRILOS <br>\nPIZZA. Ansa Inmobiliaria. Cerrajería Colima. Cerrajería Colima. <b>asdasd</b>&nbsp;...",
    "cacheId": "oEQJQckmMXcJ",
    "formattedUrl": "https://www.google.com/maps/ms?ie=UTF8&oe=UTF8&msa=0...",
    "htmlFormattedUrl": "https://www.google.com/maps/ms?ie=UTF8&amp;oe=UTF8&amp;msa=0...",
    "pagemap": {
      "website": [{
        "image": "https://www.google.com/maps/d/thumbnail?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to",
        "name": "Hey Amigo - Google My Maps",
        "description": "Socios Hey Amigo",
        "url": "https://www.google.com/maps/d/viewer?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to"
      }],
      "metatags": [{
        "og:image": "https://www.google.com/maps/d/thumbnail?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to",
        "apple-itunes-app": "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1U7MrjKXAJwJREsRuLQ4lYoFr4to%26hl%3Den_US",
        "og:type": "website",
        "twitter:card": "summary_large_image",
        "twitter:title": "Hey Amigo - Google My Maps",
        "og:site_name": "Google My Maps",
        "viewport": "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
        "twitter:description": "Socios Hey Amigo",
        "og:title": "Hey Amigo - Google My Maps",
        "og:url": "https://www.google.com/maps/d/viewer?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to",
        "og:description": "Socios Hey Amigo",
        "twitter:image:src": "https://www.google.com/maps/d/thumbnail?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to"
      }],
      "cse_image": [{
        "src": "https://www.google.com/maps/d/thumbnail?mid=1U7MrjKXAJwJREsRuLQ4lYoFr4to"
      }]
    }
  }, {
    "kind": "customsearch#result",
    "title": "San Rafael - Google Maps",
    "htmlTitle": "San Rafael - Google Maps",
    "link": "https://www.google.com/maps/search/?api=1&query=San+Rafael&query_place_id=ChIJL3oJNmeXhYARVCbi5iBNAb4",
    "displayLink": "www.google.com",
    "snippet": "Set depart & arrive time · Route options · All traffic · Satellite · Terrain ...",
    "htmlSnippet": "Set depart &amp; arrive time &middot; Route options &middot; All traffic &middot; Satellite &middot; Terrain&nbsp;...",
    "cacheId": "2DgZs4HpSfoJ",
    "formattedUrl": "https://www.google.com/maps/search/?api=1&query=San+Rafael...",
    "htmlFormattedUrl": "https://www.google.com/maps/search/?api=1&amp;query=San+Rafael...",
    "pagemap": {
      "cse_thumbnail": [{
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUDTMfgWSotdHvbOKW4AmY1steqsilnDJS4q33zGx-d0AXvvxPiFY9Mvs",
        "width": "204",
        "height": "247"
      }],
      "metatags": [{
        "referrer": "origin",
        "twitter:card": "summary",
        "theme-color": "#3367d6",
        "viewport": "initial-scale=1.0, user-scalable=no",
        "google": "notranslate"
      }],
      "cse_image": [{
        "src": "https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
      }]
    }
  }]
});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/index.js + 230 modules
var solid_esm = __webpack_require__(3802);
;// CONCATENATED MODULE: ./components/PaginationButtons.js






function PaginationButtons() {
  const router = (0,router_.useRouter)();
  const startIndex = Number(router.query.start) || 0;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex justify-between max-w-lg text-blue-700 mb-30 mt-5",
    children: [startIndex >= 10 && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/search?term=${router.query.term}&start=${startIndex - 10}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-grow flex-col items-center cursor-pointer hover:underline",
        children: [/*#__PURE__*/jsx_runtime_.jsx(solid_esm/* ChevronLeftIcon */.wyc, {
          className: "h-5"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Previous"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/search?term=${router.query.term}&start=${startIndex + 10}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-grow flex-col items-center cursor-pointer hover:underline dark:bg-gray-900",
        children: [/*#__PURE__*/jsx_runtime_.jsx(solid_esm/* ChevronRightIcon */.XCv, {
          className: "h-5"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "Next"
        })]
      })
    })]
  });
}

/* harmony default export */ var components_PaginationButtons = (PaginationButtons);
;// CONCATENATED MODULE: ./components/SearchResults.js




function SearchResults({
  results
}) {
  var _results$searchInform, _results$items;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 dark:bg-gray-900",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dark:bg-gray-900",
      children: "\u200F\u200F\u200E \u200E"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "text-gray-600 text-md mb-5 dark:text-gray-400",
      children: [(_results$searchInform = results.searchInformation) === null || _results$searchInform === void 0 ? void 0 : _results$searchInform.formattedTotalResults, " results"]
    }), (_results$items = results.items) === null || _results$items === void 0 ? void 0 : _results$items.map(result => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-xl mb-8 dark:text-gray-400",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "group",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: result.link,
          className: "text-sml",
          children: result.formattedUrl
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: result.link,
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "truncate text-xl text-blue-800 font-medium group-hover:underline dark:text-gray-200",
            children: result.title
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        class: "line-clamp-4",
        children: result.snippet
      })]
    }, result.link)), /*#__PURE__*/jsx_runtime_.jsx(components_PaginationButtons, {})]
  });
}

/* harmony default export */ var components_SearchResults = (SearchResults);
;// CONCATENATED MODULE: ./pages/search.js









function Search({
  results
}) {
  const router = (0,router_.useRouter)();
  console.log(results);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [router.query.term, " - FaresChrome"]
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(components_SearchResults, {
      results: results
    })]
  });
}

/* harmony default export */ var search = (Search);
async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json()); //After server rendered -> Pass results to client

  return {
    props: {
      results: data
    }
  };
}

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [297,618,664], function() { return __webpack_exec__(3987); });
module.exports = __webpack_exports__;

})();