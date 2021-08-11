import { render } from "SRC/test-utils";

import { InputField } from "./InputField";

test("renders InputField", () => {
    const dataId = "textField";
    const { getByDataId } = render(
        <InputField id={dataId} name="text" value="text" />
    );
    const actions = getByDataId(dataId);

    expect(actions).toBeInTheDocument();
});
