const makePostApiCall = async (url, obj, error) => {
  try {
    const initObj = {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, initObj);
    if (!response.ok) {
      throw new Error(error);
    }
  } catch (err) {
    throw err;
  }
};
export const submitAuthenticationRegFormHandler = async (url, data, error) => {
  try {
    await makePostApiCall(
      url,
      {
        email: data.userEmailInput,
        password: data.userPasswordInput,
        returnSecureToken: true,
      },
      error
    );
  } catch (error) {
    throw error;
  }
};
export const submitRegistrationFormDataHandler = async (url, data, error) => {
  try {
    await makePostApiCall(
      url,
      {
        email: data.userEmailInput,
        phone: data.userPhoneInput,
      },
      error
    );
  } catch (error) {
    throw error;
  }
};
