import store from "../src/store/store";

describe("List redux state tests", () => {
  it("Should initially set list to an empty array", () => {
    const state = store.getState().list;
    expect(state.list).toEqual([]);
  });
});