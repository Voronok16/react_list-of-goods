import React from 'react';
import Proptypes from 'prop-types';

function Goods(props) {
  const {
    showGoods,
    reversGoods,
    resetScreen,
    sortAlphabet,
    sortLength,
    handleChangeSelect,
    isStarted,
    selectedValue,
    goods,
    goodsOriginal,
  } = props;

  return (

    <div>
      <h1>Goods </h1>
      {isStarted && (
        <>
          <button type="button" onClick={reversGoods}>Reverse</button>
          <button type="button" onClick={sortAlphabet}>
            Sort alphabetically
          </button>
          <button type="button" onClick={sortLength}>Sort by length</button>
          <select
            value={selectedValue}
            onChange={handleChangeSelect}
          >
            {goodsOriginal.map((item, index) => (
              <option value={index}>{index + 1}</option>))}
          </select>
          <button type="button" onClick={resetScreen}>Reset</button>
          <ol>
            {goods.map(item => <li>{item}</li>)}
          </ol>
        </>
      )}
      {!isStarted && (
        <button type="button" onClick={showGoods}>START</button>
      )}
    </div>
  );
}

Goods.propTypes = ({
  showGoods: Proptypes.func,
  reversGoods: Proptypes.func,
  resetScreen: Proptypes.func,
  sortAlphabet: Proptypes.func,
  sortLength: Proptypes.func,
  handleChangeSelect: Proptypes.func,
  isStarted: Proptypes.number,
  selectedValue: Proptypes.namber,
  goods: Proptypes.array,
  goodsOriginal: Proptypes.array,
}).isRequired;

export default Goods;