import { render, screen, act } from "@testing-library/react";
import Question from "../components/Question";

const testQuestion = {
  id: 1,
  prompt: "What is 2 + 2?",
  answers: ["3", "4", "5", "22"],
  correctIndex: 1,
};

test("creates an interval with setTimeout", () => {
  jest.spyOn(global, "setTimeout");
  render(<Question question={testQuestion} onAnswered={() => {}} />);
  expect(setTimeout).toHaveBeenCalled();
});
