import './countFieldStyles.scss';

const CountField = ({ handleDecrement, handleIncrement, count, productId, index }) => {

    return (
        <div className="count--field-wrapper">
            <span className="count_decrement-btn" onClick={() => handleDecrement(index)}>-</span>
            <input className="count_input" readOnly type="text" name="count" value={count} />
            <span className="count_increment-btn" onClick={() => handleIncrement(index)}>+</span>
        </div>
    )
}

export default CountField;