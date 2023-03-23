export const clubNames = [
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
export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
export const REGEX_PHONE = /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/;
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
