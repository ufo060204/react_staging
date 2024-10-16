import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
  state = { carName: "保時捷", students: ["小明", "小華", "小王"] };

  changeCar = () => {
    // this.setState({ carName: '特斯拉' })
    // this.setState({});

    const obj = this.state;
    obj.carName = "特斯拉";
    console.log(obj === this.state);
    this.setState(obj);
  };

  addStudent = () => {
    // 錯誤的添加方式，因為直接修改了原本的數據，沒有創建新的數據
    // const { students } = this.state;
    // students.unshift("阿忠");
    // this.setState({ students });

    // 正確的添加方式
    const { students } = this.state;
    this.setState({ students: ["阿忠", ...students] });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(this.props, this.state); // 目前的 props 和 state
  //   // console.log('shouldComponentUpdate', nextProps, nextState); // 接下來要變化的目標 props 和 state
  //   // if (this.state.carName === nextState.carName) return false;
  //   // else return true
  //   return !this.state.carName === nextState.carName;
  // }

  render() {
    console.log("Parent---render");
    const { carName } = this.state;
    return (
      <div className="parent">
        <h3>我是 Parent 組件</h3>
        {this.state.students}
        <p>我的車名字是: {carName}</p>
        <button onClick={this.changeCar}>點我換車</button>
        <button onClick={this.addStudent}>增加一個阿忠</button>
        {/* <Child carName={carName} /> */}
        <Child carName="瑪莎拉蒂" />
      </div>
    );
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, this.state); // 目前的 props 和 state
  //   console.log("shouldComponentUpdate", nextProps, nextState); // 接下來要變化的目標 props 和 state
  //   // if (this.props.carName === nextProps.carName) return false;
  //   // else return true;
  //   return !this.props.carName === nextProps.carName;
  // }

  render() {
    console.log("Child---render");
    return (
      <div className="child">
        <h3>我是 Child 組件</h3>
        <span>我接到的車名字是: {this.props.carName}</span>
      </div>
    );
  }
}
