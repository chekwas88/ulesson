import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Dashboard from '../../views/Dashboard';


test('Dashboard rendered properly', () => {

    
    render(<Dashboard />)
    const p1 = screen.getByText('Recently watched topics');
    const p2 = screen.getByText('Recommended videos');
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();

  
  })
  