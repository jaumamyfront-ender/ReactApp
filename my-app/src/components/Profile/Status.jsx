import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: true,
    textStatus: this.props.status,
    IsMe: true,
  };
  componentDidMount = async () => {
    let userId = this.props.userId;
    if (userId !== 2 && userId > 2) {
      this.setState({ IsMe: false }); // Деактивируем режим редактирования
    }
  };
  EditingMode() {
    if (this.state.IsMe === true) {
      return (
        <div>
          <span onDoubleClick={this.deactiveEditMode.bind(this)}>
            {this.props.status || "-------"}
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span>{this.props.status || "-------"}</span>
        </div>
      );
    }
  }
  activeEditMode() {
    this.setState({ editMode: true });
    this.props.updateStatus(this.state.textStatus);
  }

  deactiveEditMode() {
    this.setState({ editMode: false,textStatus:this.props.status });
  }

  setTextStatus(event) {
    const value = event.currentTarget.value;
    this.setState({ textStatus: value });
  }

  render() {
    return (
      <div>
        {this.state.editMode && (
         this.EditingMode()
        )}
        {!this.state.editMode && (
          <div>
            <input
              type="text"
              onBlur={() => {
                this.activeEditMode();
              }}
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