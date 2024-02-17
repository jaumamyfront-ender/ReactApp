import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: true,
    textStatus: "123",
  };

  activeEditMode() {
    this.setState({ editMode: true });
  }

  deactiveEditMode() {
    this.setState({ editMode: false });
  }

  setTextStatus(event) {
    const value = event.target.value;
    this.setState({ textStatus: value });
  }

  render() {
    return (
      <div>
        {this.state.editMode && (
          <div>
            <span onDoubleClick={this.deactiveEditMode.bind(this)}>
              {this.state.textStatus}
            </span>
          </div>
        )}
        {!this.state.editMode && (
          <div>
            <input
              type="text"
              onBlur={this.activeEditMode.bind(this)}
              onChange={this.setTextStatus.bind(this)}
              value={this.state.textStatus} // Добавляем значение из состояния в input
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

//ecd the local state learing but first end up the rewrite that code to functional
