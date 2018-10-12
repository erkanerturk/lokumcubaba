export const isString = value => {
  const regex = /^[a-zA-Z ıİğĞçÇöÖüÜşŞ]{1,30}$/;
  return value.search(regex) === -1 ? false : true;
};

export const isNumber = value => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export const isInRange = (value, min, max) => {
  const length = value.split('').length;
  return length >= min && length <= max ? true : false;
};

export const isEmpty = value => {
  return ['', null, undefined].some(temp => temp === value) ? true : false;
};

export const isPhoneNumber = value => {
  const regex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
  return value.search(regex) === -1 ? false : true;
};

export const isEmail = value => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value.search(regex) === -1 ? false : true;
};
