import React, {Component} from 'react'
import Masonry from 'react-masonry-component';
import './table.css'

let masonryOptions = {
    transitionDuration: 0
};


function drawTable(data) {
  if(!data) data = [{title: 'no title', description: 'no description', price: 'no price'}];

  let rows = data.map(row => {
      return (
        <div className='item'>
        <p>Name: {row.title}</p>
        <p>Description: {row.description}</p>
        <p>Price: {row.price}</p>
      </div>
    );
  });

  return rows;
}

export class ProductTable extends Component {

  render() {
    let {products} = this.props;

    return(
      <div>
        <Masonry className='masonry' options={masonryOptions}>
              { drawTable(products) }
        </Masonry>
      </div>
    )
  }
}
