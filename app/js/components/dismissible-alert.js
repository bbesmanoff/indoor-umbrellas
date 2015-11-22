import React from 'react';

class DismissibleAlert extends React.Component {
  componentDidMount() {
    $(this.div).on('close.bs.alert', this.props.onDismiss);
  }

  render() {
    return (
      <div className={`alert alert-${this.props.alertType} alert-dismissible`}
          role="alert" ref={(r) => this.div = r}>
        <button type="button" className="close" data-dismiss="alert"
            aria-label="Close"><span aria-hidden="true">×</span></button>

        {this.props.children}
      </div>
    );
  }
}

DismissibleAlert.propTypes = {
  onDismiss: React.PropTypes.func,
  alertType: React.PropTypes.string
}

export default DismissibleAlert;
