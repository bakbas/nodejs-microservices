import { render } from "SRC/test-utils";
import { HomePage } from "./HomePage";

test("renders HomePage", () => {
    const dataId = "homePage";
    const { getByDataId } = render(<HomePage />);
    const actions = getByDataId(dataId);

    expect(actions).toBeInTheDocument();
});
