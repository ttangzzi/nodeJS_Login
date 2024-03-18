// model

"use strict";

class UserStorage {
  static #users = {
    id: ["jks", "나개발", "김팀장"],
    pw: ["1234", "12345", "123456"],
    name: ["정기성", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
