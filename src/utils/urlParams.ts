// create a function that takes an object and return a URL params string

const urlParams = (obj: { [key: string]: string | number | boolean }) => {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

export default urlParams;
