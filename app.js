const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello world react!"),
    React.createElement("h2", {}, "hello world react2!"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello world react!"),
    React.createElement("h2", {}, "hello world react2!"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
