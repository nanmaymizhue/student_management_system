const isValidName = (name) => {
  return name!== "";
};

const isValidNrcNumber = (nrc) => {
    const nrcPattern = /^([0-9]{1,2})\/[A-Za-z]+\(N\)\/\d{6}$/;
  
    return nrcPattern.test(nrc);
  };
  
const isValidEmail = (email) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return emailPattern.test(email);
};
const isValidDOB = (dob) => {
    return dob !== "";
  };

const isValidPhoneNo = (phoneNo) => {
  const phonePattern = /^\d{11}$/;

  return phonePattern.test(phoneNo);
};
const isValidGender = (gender) => {
  return gender !== "";
};
const isValidNationality = (nationality) => {
  return nationality !== "";
};

const isValidAddress = (permanentAddress) => {
  return permanentAddress !== "";
};



export default {
  isValidName,
  isValidEmail,
  isValidPhoneNo,
  isValidGender,
  isValidNationality,
  isValidAddress,
  isValidDOB,
  isValidNrcNumber,

};
