import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: true,
    textStatus: this.props.status,
  };

  activeEditMode() {
    this.setState({ editMode: true });
     this.props.updateStatus(this.state.textStatus);
   
  }

  deactiveEditMode() {
    this.setState({ editMode: false });
    
  }

  setTextStatus(event) {
    const value = event.currentTarget.value;
    this.setState({ textStatus: value });
  }

  render() {
    return (
      <div>
        {this.state.editMode && (
          <div>
            <span onDoubleClick={this.deactiveEditMode.bind(this)}>
              {this.props.status|| "-------"}
            </span>
          </div>
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
//correct the put request
//create lock editing input  if user is not me if the user is a stranger
//create redirect to my profile if was downloaded another profile user
//ecd the local state learing but first end up the rewrite that code to functional