import { render } from "@testing-library/react-native";
import App from "../App";
import Home from "../src/screens/Home";

test("test app", () => {
  render(<App />);
});

test("test app", () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
