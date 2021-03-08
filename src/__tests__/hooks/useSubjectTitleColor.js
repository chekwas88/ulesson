// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {useSubjectTitleColor} from '../../hooks';

function UseSessionStorageComponent() {
  const color = useSubjectTitleColor('physics');
  return (
    <div>
      
      <div>Current color: {color}</div>
    </div>
  )
}

test('exposes the updateProps function and shapeProps State', () => {
  render(<UseSessionStorageComponent />)
  const color = screen.getByText(/current color/i)

  
  expect(color).toHaveTextContent('Current color: #7B7FDA')

})
