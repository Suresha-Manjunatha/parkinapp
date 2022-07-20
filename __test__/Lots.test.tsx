import { fireEvent, render, screen } from "@testing-library/react-native";
import Lots from "../src/screens/Lots";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn(),
  };
});

const route = {
  params: {
    lots: 2,
  },
};
test("Lots component", () => {
  jest.useFakeTimers();
  const tree = render(<Lots route={route} />);
  expect(tree).toMatchSnapshot();

  const txt = screen.getByTestId("test-0");
  fireEvent.press(tree.getByTestId("btnadd"));

  const txtbox1 = screen.getByTestId("txt1");
  fireEvent.changeText(txtbox1, { target: { value: "test" } });

  const btn1 = screen.getByTestId("btn1");
  const btn2 = screen.getByTestId("btn2");
  expect(btn2).toBeTruthy();
  fireEvent.press(btn1);
  fireEvent.press(txt);
  const addmodal = screen.getByTestId("add");
  expect(addmodal).toBeTruthy();

  fireEvent.changeText(txtbox1, { target: { value: "test" } });

  expect(btn2).toBeTruthy();
  fireEvent.press(btn1);
  fireEvent.press(txt);
  fireEvent.press(btn2);
  // jest.useFakeTimers();
  const remove = screen.getByTestId("remove");
  expect(remove).toBeTruthy();
  // const btn3 = screen.getByTestId("btn3");
  // const btn4 = screen.getByTestId("btn4");
  // expect(btn4).toBeTruthy();
});
