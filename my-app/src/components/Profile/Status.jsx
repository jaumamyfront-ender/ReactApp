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
    this.setState({ editMode: false, textStatus: this.props.status });
  }

  setTextStatus(event) {
    const value = event.currentTarget.value;
    this.setState({ textStatus: value });
  }

  render() {
    return (
      <div>
        {this.state.editMode && this.EditingMode()}
        {!this.state.editMode && (
          <div>
            <input
              type="text"
              onBlur={() => {
                this.activeEditMode();
                this.props.updateStatus(this.state.textStatus);
              }}
              onChange={this.setTextStatus.bind(this)}
              value={this.state.textStatus} // Добавляем значение из состояния в input
            />
          </div>
        )}
      </div>
    );
  }
}//componentdidmount-->is me-->editing mode -->edit span or no edit span

//if isMe:true-->span-onClick-->deactiveeditmode-->edit mode:false-->return-->input Onblur()(for  editing info coz edit mode return only simple span)

//Mount(if userId-->set_isME on state)-->span(deactive)-->return input or isMe:false-->span(htis.props.status)-->no edit mode

export default ProfileStatus;


