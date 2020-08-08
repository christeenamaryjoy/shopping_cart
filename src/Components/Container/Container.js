import React from 'react'
import ListItem from '../ListItem/ListItem.js'
export default class Container extends React.Component {

    constructor() {
        super()
        this.state = {
            datalist: [],
        }
    }

    componentDidMount() {
        this.getData();

    }

    getData = () => {
        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => resolve("done!"), 1000);
            fetch('./data.json').then(response => resolve(response.json()))
        });

        promise.then(
            result => {
                this.setState({ datalist: result })
            },
            error => alert(error) // doesn't run
        );

    }

    addtoCart = (index) => {
        const { datalist } = this.state
        let data = datalist[index]
        data.number = data.number ? data.number + 1 : 1;
        this.setState({ datalist })
        this.props.onCartChange(true, data.price);

    }
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
                        <ListItem key={index} data={data} index={index} addtoCart={this.addtoCart} decrement={this.decrement} />)
                })
                }
            </div>
        )
    }
}