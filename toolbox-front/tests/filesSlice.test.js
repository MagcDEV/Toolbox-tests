import store from "../src/store/store";

describe("Files redux state tests", () => {
  it("Should initially set files to an object", () => {
    const state = store.getState().files;
    expect(state.files).toEqual([]);
  });
});
