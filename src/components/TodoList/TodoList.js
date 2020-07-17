import React, { Component } from 'react';
import { List, Avatar, Input, Button  } from 'antd';

class AddTodo extends Component{
  constructor(props){
    super(props);
    this.state = {
      addedList: [],
      inputValue: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleButtonClick = () => {
    console.log('enter into add button click');
    this.setState({
        // addedList: [...this.state.addedList, this.state.inputValue],
        addedList: this.state.inputValue,
        inputValue: ''
    }, () => {
      this.props.onAdd(this.state.addedList)
    });
  };

  render() {
    const { data } = this.props;
    return(
      <div>
        <Input
          placeholder="请输入相关内容"
          value={ this.state.inputValue }
          onChange={ this.handleInputChange }
        />
        <Button type="primary" onClick={ this.handleButtonClick }>add</Button>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default AddTodo;
