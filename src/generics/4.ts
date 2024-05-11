type UserX = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<UserX>): UserX {
  const defaultUser: UserX = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
