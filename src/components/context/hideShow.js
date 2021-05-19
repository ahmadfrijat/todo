import React from 'react';

export const HideShowContext = React.createContext();



class ToggleStatusHideShow extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
        states: 'hide',

        StatusHideShow: this.changeHideShow,
    };

  }
  
  changeHideShow = () => {
    this.setState({ states: this.state.states === 'hide' ? 'show' : 'hide' });
  };

  render() {
    return (

      <HideShowContext.Provider value={this.state}>
        {this.props.children}
      </HideShowContext.Provider>

    );
  }
}

export default ToggleStatusHideShow;