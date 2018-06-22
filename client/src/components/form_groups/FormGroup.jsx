import React, { Component } from "react";

class FormGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subGroup: props.group ? props.group.subGroup : "",
      groupName: props.group ? props.group.groupName : "",
      error: ""
    };
  }

  handleInputChange = e => {
    const target = e.target,
      value = target.value,
      name = target.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.groupName) {
      this.setState(() => ({ error: "Укажите название группы" }));
    } else if (this.state.groupName === this.state.subGroup) {
      this.setState(() => ({ error: "Группы не должны совпадать!" }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        groupName: this.state.groupName
      });
    }
  };

  render() {
    return (
      <div className="form_container">
        {this.state.error && <p className="error">{this.state.error}</p>}
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form_group">
            <label htmlFor="groupName">Название группы</label>
            <input
              type="text"
              name="groupName"
              placeholder="группа товаров"
              autoFocus
              value={this.state.groupName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form_group">
            <select
              name="subGroup"
              value={this.state.subGroup}
              onChange={this.handleInputChange}
            >
              <option>Выбрать группу товаров</option>
              {this.props.data.map((group, index) => {
                return (
                  <option key={index} value={group.groupName}>
                    {group.groupName}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="form_btn">Добавить группу</button>
        </form>
      </div>
    );
  }
}

export default FormGroup;
