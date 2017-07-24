import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class TodoBox extends React.Component {
  constructor(props){
    super(props);
    this.handleNodeRemoval = this.handleNodeRemoval.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      data: [
				{"id":"00001","task":"Wake up","complete":"false"},
				{"id":"00002","task":"Eat breakfast","complete":"false"},
        {"id":"00003","task":"Go to work","complete":"false"}
			]
    }
  }

  generateId() {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  handleNodeRemoval(id) {
    let data = this.state.data;
    data = data.filter((row) => {
      return row.id !== id;
    });
    this.setState({ data: data });
  }

  handleToggleComplete(id) {
    let data = this.state.data.slice();
    data.forEach((row) => {
      if(row.id === id){
        row.complete = row.complete === 'false' ? 'true' : 'false';
      }
    });
    this.setState({data: data});
  }

  handleSubmit(task){
    let data = this.state.data.slice();
    let complete = 'false';
    let id = this.generateId();
    data = data.concat([{id, task, complete}]);
    this.setState({data: data});
  }

  render() {
    return (
      <div className="well">
        <h1 className="vert-offset-top-0">Todo:</h1>
        <TodoList data={this.state.data} removeNode={this.handleNodeRemoval} toggleComplete={this.handleToggleComplete}/>
        <TodoForm onTaskSubmit={this.handleSubmit}/>
      </div>
    )
  }

}

export default TodoBox;
