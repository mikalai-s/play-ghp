import { calc } from "./utils";

export async function doSomethingWrong() {
    try {
        await calc();
    } catch (error) {
        throw new Error("Something wrong happened!", { cause: error });
    }
}
