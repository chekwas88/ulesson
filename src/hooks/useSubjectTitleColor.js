import * as React from 'react';
import theme from "../theme";


const useSubjectTitleColor = (subject) => {
    const [color, setColor] = React.useState(theme.colors.dark)
    React.useEffect(() => {
        switch (subject) {
            case 'mathematics':
                setColor(theme.colors.transluscentRed)
                break;

            case 'physics':
                setColor(theme.colors.purple)
                break;
            case 'chemistry':
                setColor(theme.colors.orange)
                break;

            case 'biology':
                setColor(theme.colors.green)
                break;
           
            default:
                break;
        }
    }, [subject])

    return color;
    
}

export default useSubjectTitleColor;