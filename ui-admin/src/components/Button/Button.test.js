import { render } from "SRC/test-utils";

import { Button } from "./Button";

test("renders Button", () => {
    const dataId = "textField";
    const { getByDataId } = render(<Button id={dataId}>Button</Button>);
    const actions = getByDataId(dataId);

    expect(actions).toBeInTheDocument();
});
