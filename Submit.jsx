import React from 'react'

function Submits(props) {
   const{submitData}=props;
  return (
    <div className='submit__container'>
        {submitData.map((v) => {
            return (
              <div className="submit___item" key={v.id}>
                <div className="item__data">
                  <p>Name: {v.name} </p>
                  <p>Department: {v.dept} </p>
                  <p>Rating: {v.rate} </p>
                </div>
              </div>
            );
          })}
    </div>
  )
}

export default Submits;