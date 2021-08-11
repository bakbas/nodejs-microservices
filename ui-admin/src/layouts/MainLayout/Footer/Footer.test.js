import { renderWithRouter } from "SRC/test-utils";

import { SideBar } from "./SideBar";

test("renders SideBar", () => {
    const route = "/product-definitions";
    const { getByDataId } = renderWithRouter(<SideBar />, { route });

    expect(getByDataId(route)).toHaveClass("active");
});
