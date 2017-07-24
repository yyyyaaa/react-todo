import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.removeNode = this.removeNode.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  removeNode(nodeId) {
    this.props.removeNode(nodeId);
  }

  toggleComplete(nodeId) {
    this.props.toggleComplete(nodeId);
  }

  render() {
    const listItems = this.props.data.map((listItem) => {
      return (
        <Todo key={listItem.id} nodeId={listItem.id} task={listItem.task}
          complete={listItem.complete} removeNode={this.removeNode} toggleComplete={this.toggleComplete} />
      );
    });

    return (
      <ul className='list-group'>
        {listItems}
      </ul>
    )
  }
}

export default TodoList;
