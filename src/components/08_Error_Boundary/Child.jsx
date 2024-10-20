import React, { Component } from "react";

export default class Child extends Component {

  state = {
    // users: [
    //   { id: "001", name: "Tom", age: 18 },
    //   { id: "002", name: "Jerry", age: 21 },
    //   { id: "003", name: "Jack", age: 25 },
    // ],
    users: 'abc',
  };

  render() {
    return (
      <div>
        <h2>我是 Child 组件</h2>
        {
          this.state.users.map((userObj) => {
            return <h4 key={userObj.id}>{userObj.name} --- {userObj.age}</h4>;
          })
        }
      </div>
    );
  }
}
