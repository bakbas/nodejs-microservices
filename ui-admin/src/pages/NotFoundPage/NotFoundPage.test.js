import { render } from "SRC/test-utils";
import { NotFoundPage } from "./NotFoundPage";

describe("<NotFoundPage />", () => {
    it("should render NotFoundPage", () => {
        const dataId = "notFoundPage";
        const { getByDataId } = render(<NotFoundPage />);
        const actions = getByDataId(dataId);

        expect(actions).toBeInTheDocument();
    });
});
