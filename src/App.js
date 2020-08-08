import React from 'react';
import './App.css';
import Footer from './Components/footer/footer.js'
import Container from './Components/Container/Container.js'
import PopUp from './Components/PopUp/PopUp.js'
class App extends React.Component {

  state = { quantity: 0, total: 0, popUpMessage: '' }

  cartChange = (isIncrement, price) => {
    const { total, quantity } = this.state
    let quantityChange = 0;
    let totalChange = 0;

    if (isIncrement) {
      quantityChange = quantity ? quantity + 1 : 1;
      totalChange = total ? total + price : price
    } else {
      quantityChange = quantity > 0 ? quantity - 1 : 0;
      totalChange = total > 0 ? total - price : 0
    }
    this.setState({ quantity: quantityChange, total: totalChange })
  }


  checkOut = () => {
    let popUpMessage = ''
    if (this.state.quantity > 0) {
      popUpMessage = 'Transaction Succesfull'
    } else
      popUpMessage = 'Add Items to cart'

    this.setState({ popUpShow: true, popUpMessage })

  }
  closePopUp = () => {
    this.setState({ popUpShow: false })
  }

  render() {
    const { quantity, total, popUpShow, popUpMessage } = this.state;
    return (
      <div className="App">
        <Container onCartChange={this.cartChange} />
        <Footer quantity={quantity} total={total} checkOut={this.checkOut} />
        <PopUp total={total} show={popUpShow} closePopUp={this.closePopUp} message={popUpMessage} />
      </div>
    );
  }
}

export default App;
