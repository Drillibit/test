import React, { Component } from 'react';

class FormGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groupName: props.group ? props.group.groupName : '',
            error: ''
        };
    };

    handleInputChange = e => {
        const target = e.target,
              value = target.value,
              name = target.name  
        this.setState({
            [name]: value
        });
    }   

    onSubmit = e => {
        e.preventDefault();
        if (!this.state.groupName) {
            this.setState(() => ({error: 'Укажите название группы'}));
        }
        this.setState(() => ({error: ''}));
        this.props.onSubmit({
            groupName: this.state.groupName,
        })
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
                    <button className="form_btn">
                        Добавить группу
                    </button>
                </form>
            </div>
        );
    };
};

export default FormGroup;