import { configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import dotenv from "dotenv";

dotenv.config({
    path: "./env/test.env"
});

configure({ testIdAttribute: "data-id" });
