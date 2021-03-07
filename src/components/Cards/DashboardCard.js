import * as React from "react";
import {Cell, Paragraph, ImageCell,  Image} from "../../elements";
import Button from "../Button";
import theme from "../../theme";
import {useSubjectTitleColor} from "../../hooks";



const Card = ({subject, topic, src, butttonImage, ...props}) => {
    const color = useSubjectTitleColor(subject);
    return (
        
        <Cell
            backgroundColor={theme.colors.transparent}
            
        >
            <Cell
                height={"10rem"}
                flex={"1"}
                position={"relative"}
                padding={"0rem"}

            >
                <ImageCell
                    backgroundImage={src} 
                    flex={"1"}
                    height={"100%"}
                    borderRadius={"1rem"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                   
                    
                    <Button
                        backgroundColor={theme.colors.transparent}
                    >
                        <Image 
                            src={butttonImage}
                        />
                    </Button>
                </ImageCell>
                
            </Cell>
            <Cell marginTop={"1rem"}>
                <Paragraph fontSize={"1rem"} fontWeight={"600"} color={color} transform={"capitalize"}>
                    {subject}
                </Paragraph>
            </Cell>
            <Cell justifyContent={"flex-start"} marginTop={"1rem"} marginButtom={"1rem"}>
                <Paragraph transform={"capitalize"} fontWeight={"700"} fontSize={"1.25rem"} color={theme.colors.dark}>
                    {topic}
                </Paragraph>
            </Cell>
        </Cell>
    )
}

export default Card;