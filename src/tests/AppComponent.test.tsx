import App from "../App";
import { render, screen } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

describe("title", () => {
  it("should render title", () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
