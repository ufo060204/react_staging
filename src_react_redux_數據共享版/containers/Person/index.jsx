import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    // console.log(personObj);
    this.props.addPerson(personObj);
    this.nameNode.value = '';
    this.ageNode.value = '';
  };


  render() {
    return (
      <>
        <h2>我是 Person 組件，上方組件總合為；{this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder="輸入名字" />
        <input ref={c => this.ageNode = c} type="text" placeholder="輸入年齡" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.person.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </>
    );
  }
}

export default connect(
  (state) => ({ person: state.person, count: state.count }), // 映射狀態
  { addPerson: createAddPersonAction } // 映射操作狀態的方法
)(Person);
