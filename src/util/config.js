export const CLUB_NAMES = [
  "Sofia Center",
  "Sofia Lyulin",
  "Sofia Mladost",
  "Sofia Pavlovo",
  "Plovdiv Trakia",
  "Plovdiv Center",
  "Burgas Central Park",
  "Varna Center",
  "Varna Planet Mall",
  "Varna Levski",
];
export const WORK_HOURS = [
  "07.00",
  "08.00",
  "09.00",
  "10.00",
  "11.00",
  "12.00",
  "13.00",
  "14.00",
  "15.00",
  "16.00",
  "17.00",
  "18.00",
  "19.00",
  "20.00",
  "21.00",
  "22.00",
];
export const ACTIVITIES = [
  "BOOTY",
  "Tabata",
  "Pilates",
  "LES MILLS GRIT",
  "LES MILLS CORE",
  "Folklore Dances",
  "Yoga",
  "Stretching",
];
export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
export const REGEX_PHONE = /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/;
export const REGEX_UPPERCASE = /[A-Z]/;
export const REGEX_NAME = /^[A-Z][A-Za-z'-]+([ A-Z][A-Za-z'-]+)*/;
export const SPLIT_REGEX_UPPERCASE = /(?=[A-Z])/;
export const FILL_IN_VALID_EMAIL_MSG = "Fill in a valid email address!";
export const FILL_IN_VALID_PHONE_MSG =
  "Fill in a valid gsm number - starting with +3598... or 08...!";
export const FILL_IN_VALID_PASSWORD_MSG =
  "Password must be 6 to 20 characters long and contain 1 capital letter, 1 lowercase letter and 1 number!";
export const CONFIRM_VALID_PSW_MSG = "Confirm your password!";
export const POST_REGISTRATION_AUTH_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6KelOIQO1vqaFenmxrzOrsKoNgeThnXs";
export const POST_LOGIN_AUTH_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6KelOIQO1vqaFenmxrzOrsKoNgeThnXs";
export const USERS_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/iron_fit-users.json";
export const CLUBS_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/iron-fit-clubs.json";
export const PRICES_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/iron-fit-prices.json";
export const TIMETABLES_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/iron-fit-timetables.json";
export const REGISTRATION_AUTH_ERROR =
  "Unsuccessful registration! Please, check if the email has been used for registration already or try again later!";
export const REGISTRATION_URL_ERROR =
  "Something went wrong with the request! No data has been sent! Please, try again later!";
export const LOADING_MSG = "Loading...";
export const REGISTRATION_SUCCESS =
  "Your registration has been successful! Thank you!";
export const INVALID_LOGIN_INPUTS =
  "Invalid inputs! Please, fill in both fields and resubmit!";
export const LOGIN_AUTH_ERROR =
  "Unsuccessful login! Please, check the email and the password and resubmit with valid credentials!";
export const LOGIN_URL_ERROR =
  "Unsuccessful login! Something went wrong with the request! Please, try again later!";
export const LOGIN_SUCCESS = "You have been logged in successfully! Welcome!";
export const UNSUCCESSFUL_REQUEST =
  "The request has not been successful! Please, try again later!";
export const GUEST_TRY_ORDER_PLAN_MSG =
  "Please, log in and then order a plan online! Thank you!";
export const UNSUCCESSFUL_REQUEST_ORDER_PLAN =
  "Something went wrong with the request and the order has not been sent! Please, try again later.";
export const INVALID_INPUT_DATA_ORDER_PLAN =
  "Please, fill in the form with valid data!";
export const INVALID_CLUB_DATA_ORDER_PLAN =
  "Please, choose a valid club from the list!";
export const SUCCESSFUL_ORDER_MSG =
  "The data has been sent successfully! Please, visit the chosen club in order to receive your card! Thank you!";
