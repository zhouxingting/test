import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import AverageClickIcon from 'svg-react-loader?name=AverageClickIcon!../img/averageClickIcon.svg'

function ReactTest() {
  return (
    <div>
      <AverageClickIcon />
    </div>
  )
}

ReactDOM.render(<ReactTest />, document.getElementById('root'))
