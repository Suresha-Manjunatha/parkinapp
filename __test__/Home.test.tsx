import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../App";
import Home from "../src/screens/Home";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

test("Home component", () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
  const txt = screen.getByTestId("txt");
  fireEvent.changeText(txt, { target: { value: "test" } });
  const btn = screen.getByTestId("btn");
  fireEvent.press(btn);
});
