export const formValid = (data: any, errors: any) => {
  //Common validate function
  let valid = true;
  Object.values(errors).forEach((val: any) => {
    val.length > 0 && (valid = false);
  });
  Object.values(data).forEach((val: any) => {
    val === "" && (valid = false);
  });
  return valid;
};
