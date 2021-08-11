import { renderWithRouter } from "SRC/test-utils";

import { MainLayout } from "./MainLayout";

test("renders MainLayout", () => {
    const { getByDataId } = renderWithRouter(
        <MainLayout>
            <div data-id="children" />
        </MainLayout>
    );

    expect(getByDataId("children")).toBeInTheDocument();
});
