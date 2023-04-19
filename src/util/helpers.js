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
  } catch (error) {
    throw error;
  }
};
const makeGetApiCall = async (url, error) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(error);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
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
export const submitAuthenticationLoginFormHandler = async (
  url,
  data,
  error
) => {
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
export const submitLoginFormDataHandler = async (url, error) => {
  try {
    const data = await makeGetApiCall(url, error);
    return data;
  } catch (error) {
    throw error;
  }
};
export const updateLoggedUser = async (url, error) => {
  try {
    const data = await makeGetApiCall(url, error);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getClubs = async (url, error) => {
  try {
    const data = await makeGetApiCall(url, error);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getPrices = async (url, error) => {
  try {
    const data = await makeGetApiCall(url, error);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getUsers = async (url, error) => {
  try {
    const data = await makeGetApiCall(url, error);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getTimetables = async (url, error) => {
  try {
    const data = await makeGetApiCall(url, error);
    return data;
  } catch (error) {
    throw error;
  }
};
export const updateUserOrderData = async (
  url,
  userId,
  dataPlan,
  dataUser,
  dataClub,
  error
) => {
  try {
    await makePostApiCall(
      url.replace(".json", `/${userId}/orderData.json`),
      { dataPlan, dataUser, dataClub },
      error
    );
  } catch (error) {
    throw error;
  }
};
