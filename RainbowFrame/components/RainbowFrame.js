import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render() {
        const reduceNew = (accumulator, currentValue) => {
            return (
                <div style={{padding: "10px", border: "solid 10px " + currentValue,  }}>
                    {accumulator}
                </div>
            )
        }

        const rainbowFrame = this.props.colors.reduce(reduceNew, this.props.children);

        return (
            <div style={{ width: 800, textAlign: 'center',}}>
                {rainbowFrame}
            </div>
        );
    }
}

export default RainbowFrame;