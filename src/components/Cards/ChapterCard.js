import * as React from "react";
import {Cell, Paragraph, ImageCell, Span} from "../../elements";
import theme from "../../theme";



const Card = ({lessonTitle, src, ...props}) => {
    return (
        
        <Cell
            backgroundColor={theme.colors.white}
            borderRadius={"1rem"}
            paddingBottom={"2rem"}
            height={"100%"}
            
        >   <Cell
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                padding={".5rem"}
            >
                <Cell
                    height={"8rem"}
                    width={"60%"}
                    position={"relative"}
                    padding={"0rem"}
                    

                >
                    <ImageCell
                        backgroundImage={src} 
                        width={"100%"}
                        height={"100%"}
                        
                    />
                    
                                        
                </Cell>
            </Cell>
            <Cell
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                padding={".5rem"}
               
            >
                <Cell width={"80%"} marginTop={"1rem"}>
                    <Paragraph fontSize={"1rem"} fontWeight={"600"} color={theme.colors.dark} transform={"capitalize"}>
                        {lessonTitle}
                    </Paragraph>
                </Cell>
            </Cell>
    
        </Cell>
    )
}

export default Card;