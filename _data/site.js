module.exports = () => {
  console.log(`I'm a global data file: ${__filename}`);
  return {
    foo: "bar",
    baz: false
  };
};