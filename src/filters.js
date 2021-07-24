const stackItems = (stack) => {
  const items = {
    golang: require("./assets/stacklogos/logo-golang.svg"),
    java: require("./assets/stacklogos/logo-java.svg"),
    javascript: require("./assets/stacklogos/logo-javascript.svg"),
    nodejs: require("./assets/stacklogos/logo-nodejs.svg"),
    python: require("./assets/stacklogos/logo-python.svg"),
    rust: require("./assets/stacklogos/logo-rust.svg"),
  };

  return items[stack];
};

export default stackItems;
