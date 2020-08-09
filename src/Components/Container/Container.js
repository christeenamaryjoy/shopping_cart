import React from 'react'
import ListItem from '../ListItem/ListItem.js'

export default class Container extends React.Component {

    state = {
        datalist: []
    }

    componentDidMount() {
        this.getData();
    }


    // get data from local json
    getData = () => {
        let promise = new Promise(function (resolve, reject) {
            fetch('./data.json').then(response => resolve(response.json()))
        });

        promise.then(
            result => {
                this.setState({ datalist: result })
            },
            error => alert(error) // doesn't run
        );

    }

    // on add to cart/increment add quantity 
    addtoCart = (index) => {
        const { datalist } = this.state
        let data = datalist[index]
        data.number = data.number ? data.number + 1 : 1;
        this.setState({ datalist })
        this.props.onCartChange(true, data.price);

    }

    // on decrement rreduce quantity 
    decrement = (index) => {
        const { datalist } = this.state
        let data = datalist[index]
        if (data.number > 0)
            this.props.onCartChange(false, data.price);
        data.number = data.number > 0 ? data.number - 1 : 0;
        this.setState({ datalist })


    }

    render() {
        const { datalist } = this.state;
        return (
            <div className='container'>
                {datalist.map((data, index) => {
                    return (
                        <ListItem key={index} data={data} addtoCart={() => this.addtoCart(index)} decrement={() => this.decrement(index)} />)
                })
                }
            </div>
        )
    }
}