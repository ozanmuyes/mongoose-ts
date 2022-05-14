import mongoose from "mongoose";

import type User from "../entities/User";
import UserModel from "./User";

describe("message", () => {
  beforeAll(async () => {
    mongoose.connect(global.__MONGO_URI__);
  });

  beforeEach(async () => {
    UserModel.collection.deleteMany({});
    //
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("should create a new user", async () => {
    // Arrange
    //
    const USER_ID = Date.now().toString(16);
    const USER: User = {
      id: USER_ID,
      username: `${USER_ID}_username`,
      email: `${USER_ID}_email`,
    };

    // Act
    //
    await UserModel.create(USER);

    // Assert
    //
    const db = UserModel.db.collections;
    expect(Object.keys(db).includes("users")).toBe(true);
    // From here on we can use mongo shell syntax (i.e. `db.users.findOne(...)`)

    const FOUND = await db.users.findOne({ id: USER_ID });
    expect(typeof FOUND === "object").toBe(true); // check if a record has been found

    expect(FOUND.id === USER_ID).toBe(true);
    //
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip("sanity check to see if beforeEach works", async () => {
    const docsCount = await UserModel.countDocuments({});

    expect(docsCount).toBe(0);
  });

  it("should read an existing user", async () => {
    // Arrange
    //
    const USER_ID = "some_user_id";
    const USER: User = {
      id: USER_ID,
      username: `${USER_ID}_username`,
      email: `${USER_ID}_email`,
    };

    // NOTE Be careful when seeding, insert data in the right format
    await UserModel.collection.insertOne(USER);

    // Act
    //
    const FOUND = await UserModel.findOne({ id: USER_ID });

    // Assert
    //
    expect(typeof FOUND === "object").toBe(true); // check if a record has been found

    expect(FOUND.id).toBe(USER_ID);
    //
  });

  //
});
