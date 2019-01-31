const users = [
  { username: "Sommy", email: "sommy@gmail.com", password: "Reallife" },
  { username: "George", email: "georgeoose@gmail.com", password: "Reallife" },
  { username: "Capon", email: "capon@gmail.com", password: "Reallife" },
  { username: "Nelly", email: "nelly@gmail.com", password: "Reallife" }
];

const findByUsername = username => {
  return users.find(user => user.email === username);
};

const checkPassword = (password, user) => {
  if (user.password === password) {
    return true;
  }
};

export default {
  getUser(userDetails) {
    const theUser = findByUsername(userDetails.email);
    if (theUser) {
      if (checkPassword(userDetails.password, theUser)) {
        return { msg: "Login Successful", bool: true, token: "secret" };
      } else {
        return { msg: "Invalid Password", bool: false };
      }
    } else {
      return { msg: "User doesn't exist", bool: false };
    }
  },

  postUser(userDetails) {
    if (findByUsername(userDetails.email)) {
      console.log("Boo");
      return { msg: "Your email already exists", bool: false };
    } else {
      users.push(userDetails);
      console.log(users);
      return { msg: "Sign in successful", bool: true };
    }
  }
};
