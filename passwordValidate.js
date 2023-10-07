function passwordValidator(pass) {

  let isLengthValid = checkLengthValid(pass);
  let isLettersDigitsValid = checkLettersDigits(pass);
  let is2DigitsValid = check2Digits(pass);

  if (isLengthValid && isLettersDigitsValid && is2DigitsValid) {
    console.log(`Password is valid`);
  }

  function checkLengthValid(pass) {
    lengthCount = 0;
    for (let i = 0; i < pass.length; i++) {
      lengthCount++;
    } 
    
    if (lengthCount >= 6 && lengthCount <= 10) {
      return true;
    } else {
      console.log(`Password must be between 6 and 10 characters`);
      return false;
    }
  }

  function checkLettersDigits(pass) {
    for (let el of pass) {
      let code = el.charCodeAt(0)

      if (
          !((code >= 48 && code <= 57) ||
          (code >= 65 && code <= 90) ||
          (code >= 97 && code <= 122))
      ) {
        console.log(`Password must consist only of letters and digits`);
        return false;
      } 
    }
    return true;
  }

  function check2Digits(pass) {
    let digits = 0;

    for (let el of pass) {
      let code = el.charCodeAt(0) 

      if (code >= 48 && code <= 57) {
          digits++;
        }
      }

      if (digits < 2) {
        console.log(`Password must have at least 2 digits`);
        return false;
      } else {
        return true;
      }
    }
  }
// passwordValidator('logIn');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s');