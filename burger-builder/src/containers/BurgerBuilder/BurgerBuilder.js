import React, {Component} from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingrediants: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingrediants={this.state.ingrediants} />
                <div>Build Controler</div>
            </Aux>
            
        );
    }
}

export default BurgerBuilder;