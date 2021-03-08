import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Layout from '../../views/Layout';


test('Dashboard rendered properly', () => {

    
    render(<Layout name={"Chisom"} />)
    const p1 = screen.getByText('Chisom');
    expect(p1).toBeInTheDocument();

  
  })
  