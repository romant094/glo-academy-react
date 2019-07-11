import React, {Component, createRef} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import './css/index.css';
import incImg from './img/Vector.png';
import decImg from './img/Minus.png';
import resImg from './img/Reset.png';
import dowImg from './img/Download.png';
import uplImg from './img/Upload.png';

class Counter extends Component {
    state = {};

    counterWrap = createRef();

    componentDidMount() {
        const width = this.counterWrap.current.offsetWidth;
        const height = this.counterWrap.current.offsetHeight;

        this.setState({width, height});
    }

    download = () => {
        const {dow} = this.props;
        fetch('http://localhost:3001/numbers')
            .then(res => res.json())
            .then(res => {
                const index = Math.floor(Math.random() * res.length);
                const result = +res[index]['const'] || +res[index]['saved'];
                dow(result);
            });
    };

    upload = () => {
        const {counter} = this.props;
        const data = {saved: counter};
        fetch('http://localhost:3001/numbers', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .catch(err => console.log(err));
    };

    render() {
        const {width, height} = this.state;

        const {counter, inc, dec, res} = this.props;

        const style = {
            width: `${width + counter * 5}px`,
            height: `${height + counter * 5}px`
        };

        return (
            <div className='wrapper'>
                <div className='counter'>
                    <div className='counter-block'
                         ref={this.counterWrap}
                         style={style}
                    >
                        <span>{counter}</span>
                    </div>
                    <div className='counter-controls'>
                        <button className='counter-controls__inc'
                                onClick={inc}
                        >
                            <img src={incImg} alt='1'/>
                        </button>
                        <button className='counter-controls__dec'
                                onClick={dec}
                        >
                            <img src={decImg} alt='1'/>
                        </button>
                        <button className='counter-controls__res'
                                onClick={res}
                        >
                            <img src={resImg} alt='1'/>
                        </button>
                    </div>
                    <div className='counter-controls'>
                        <button className='counter-controls__dow'
                                onClick={this.download}
                        >
                            <img src={dowImg} alt='1'/>
                        </button>
                        <button className='counter-controls__upl'
                                onClick={this.upload}
                        >
                            <img src={uplImg} alt='1'/>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const
    mapStateToProps = (state) => {
        return {
            counter: state
        }
    };

export default connect(mapStateToProps, actions)(Counter);