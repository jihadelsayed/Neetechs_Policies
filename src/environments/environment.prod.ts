export const environment = {
  production: true,
  // SERVER_URL: "http://127.0.0.1:8000/",
  // FrontEnd_URL: "http://localhost:4200/",
  // CHAT_URL: "ws://localhost:8000/ws/chat/",
  // SERVER_URL_WITH_OUT_SLASH: "http://127.0.0.1:8000",
  STRIPE_PUBLIC_KEY: "pk_test_51IwTvvIR19rXEZpRWoj9M4BGNy5nJ1GQOsXUZXHRD0PS3QGexQQSVNQR0vMB8jMoONQtO4RNQ30pC3N5BdgiGstB00shA8ejRI",
  SERVER_URL_WITH_OUT_SLASH: "",
  SERVER_URL: "https://server."+ window.location.hostname.replace(/^[^.]+./, '') +".com/",
  CHAT_URL: "wss://server."+ window.location.hostname.replace(/^[^.]+./, '') +"/ws/chat/",
  FrontEnd_URL: window.location.origin,
  MainDomain: window.location.hostname.replace(/^[^.]+./, ''),
  LoginURL: "https://accounts." + window.location.hostname.replace(/^[^.]+./, '') +"/",
  MY_ACCOUNT_URL: "https://myaccount.neetechs.com/",
  JSON_URL: 'https://raw.githubusercontent.com/jihadelsayed/neetechs/main/json/',

};
