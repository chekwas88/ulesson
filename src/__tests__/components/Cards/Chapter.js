import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {ChapterCard} from '../../../components/Cards';
import src from '../../../assets/dashboard1.png';

test('ChapterCard rendered properly', () => {

    
    render(<ChapterCard 
            lessonTitle={"Introduction to Wave"}
            src={src}
        />)
    const p1 = screen.getByText('Introduction to Wave');
    expect(p1).toBeInTheDocument();
  
  })
  