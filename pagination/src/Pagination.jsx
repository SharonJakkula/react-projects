import React from 'react'

const Pagination = ({data,pageHandler}) => {
    let pageNumbers = []
    for(let i=0;i< Math.ceil((data?.length || 0)/10); i++) {
      pageNumbers.push(i);
    }
  return (
    <div>
        <center>
            {pageNumbers.map(page => <button key={page}className="pagebutton"
            onClick={() => pageHandler(page)}>{page}</button >)}
        </center>
    </div>
  )
}

export default Pagination