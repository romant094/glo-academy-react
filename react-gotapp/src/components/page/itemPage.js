import React, {Component} from 'react';
import ItemList from "../itemList";
import ItemDetails from '../itemDetails/itemDetails';
import Error from '../Error';
import RowBlock from '../rowBlock';

export default class ItemPage extends Component {

    state = {
        selectedItem: null,
        error: false,
        loading: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
            error: false
        })
    };

    componentDidCatch(error, info) {
        this.setState({error: true});
    }

    render() {
        const {error, selectedItem} = this.state;
        const {getItem, getItems} = this.props;

        if (error) {
            return <Error/>
        }

        const itemList = () => (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={getItems}
                      renderItem={item => item.name}
            />
        );

        const itemDetails = () => (
            <ItemDetails charId={selectedItem}
                         getData={getItem}
            />
        );

        return (
            <RowBlock
                left={itemList()}
                right={itemDetails()}
            />
        );
    }
}