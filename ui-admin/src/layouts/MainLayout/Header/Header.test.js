import { renderWithRouter } from "SRC/test-utils";

import { Header } from "./Header";

test("renders Header", () => {
    const { getByDataId } = renderWithRouter(<Header />);

    expect(getByDataId("header")).toBeInTheDocument();
});
