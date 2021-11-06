module.exports = eleventyComputed => {
  console.log(`I'm a config file: ${__filename}`);

  return {
    dir: {
      output: "www"
    }
  };
};
