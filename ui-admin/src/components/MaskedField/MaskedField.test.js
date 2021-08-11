import { render } from "SRC/test-utils";

import { MaskedField } from "./MaskedField";

test("renders MaskedField", () => {
    const dataId = "maskedField";
    const { getByDataId } = render(
        <MaskedField id={dataId} name="text" value="1000" />
    );
    const actions = getByDataId(dataId);

    expect(actions).toBeInTheDocument();
});
