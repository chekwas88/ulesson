import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {DashboardCard} from '../../../components/Cards';
import butttonImage from '../../../assets/buttonPlayer1.svg';
import src from '../../../assets/dashboard1.png';

test('DashboardCard rendered properly', () => {

    
    render(<DashboardCard 
            topic={"photosynthesis"} 
            butttonImage={butttonImage} 
            src={src}
            subject={"biology"}
        />)
    const p1 = screen.getByText('biology');
    const p2 = screen.getByText('photosynthesis');
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  
  })
  