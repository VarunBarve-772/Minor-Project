import React from 'react';
import '../../css/Category.css';

const Category = (props) => {

    const setCategory = (category) => {
      let category_temp = {
        'category': category
      }
      props.setQuestionCategory(category_temp);
    }

    return (
        <div className="drop_down">
            <button className="dropbtn">Category 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="drop_down-content">
              <div className="header">
                <h3 className="cat_heading">categories</h3>
              </div>   
              <div className="row">
                <div className="column">
                  <p style={{cursor: 'pointer'}} className="drop_down_item" onClick={() => {setCategory('SVITS')}}>Shree Vaishnav Institute of Technology and Science</p>
                  <p style={{cursor: 'pointer'}} className="drop_down_item" onClick={() => {setCategory('SVIFS')}}>Shree Vaishnav Institute of Forensic Science</p>
                  {/* <p style={{cursor: 'pointer'}} class="drop_down_item" onClick={() => {setCategory('SVITS')}}>Link 3</p> */}
                </div>
                <div className="column">
                  <p style={{cursor: 'pointer'}} className="drop_down_item" onClick={() => {setCategory('SVIIT')}}>Shree Vaishnav Institute of Information Technology</p>
                  <p style={{cursor: 'pointer'}} className="drop_down_item" onClick={() => {setCategory('SVIA')}}>Shree Vaishnav Institute of Architecture</p>
                  {/* <p style={{cursor: 'pointer'}} class="drop_down_item" onClick={() => {setCategory('SVITS')}}>Link 3</p> */}
                </div>
                <div className="column">
                  <p style={{cursor: 'pointer'}} className="drop_down_item" onClick={() => {setCategory('SVITT')}}>Shree Vaishnav Institute of Textile Technology</p>
                  <p style={{cursor: 'pointer'}} className="drop_down_item" onClick={() => {setCategory('SVSM')}}>Shree Vaishnav School of Management</p>
                  {/* <p style={{cursor: 'pointer'}} class="drop_down_item" onClick={() => {setCategory('SVITS')}}>Link 3</p> */}
                </div>
              </div>
            </div>
          </div>
    )
}

export default Category;