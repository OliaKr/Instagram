import { userReducer } from "./user.reducer";
import { gUsers } from "../assets/services.js/user-service.js";

describe("UserReducer", () => {
  const mockUser = { username: "eli1", fullname: "eli mor", id: "u103" };
  const initialState = {
    user: gUsers[0],
    users: [],
    isSwitchModalOpen: false,
    isSearchOpen: false,
    isNotificationsOpen: false,
  };

  it("creates initial state", async () => {
    console.log("userReducer", userReducer);
    const state = userReducer(initialState);
    expect(state).toBe(initialState);
  });
});
