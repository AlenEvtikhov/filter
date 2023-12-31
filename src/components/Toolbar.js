import React from 'react'
import PropTypes from 'prop-types'


function Toolbar(props) {
  const { filters, selected, onSelectfilter } = props;
  
  return (
    <nav className='toolbar'>
      <ul className='toolbar__list'>
        {filters.map((filter, index) => {
          return <li className='toolbar__item' key={index}>
            <button className={filter === selected ? 'toolbar__btn active' : 'toolbar__btn'} onClick={() => onSelectfilter(filter)}>{filter}</button>
          </li>
        })}
      </ul>
    </nav>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectfilter: PropTypes.func,
}

export default Toolbar