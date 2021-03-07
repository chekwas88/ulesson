import * as React from "react";
import {Cell, Header, Headline, Spacer, Span, Image, Paragraph} from "elements";
import theme from "../../theme";
import playButtonImage from "assets/buttonPlayer1.svg";
import loopback from "assets/loop1.svg";
import loopfront from "assets/loop2.svg";
import nextButtonImage from "assets/next.svg";
import arrowBack from "assets/arrorback.svg"
import Button from "components/Button";
import { useLocation, useHistory } from "react-router-dom";

const Page = () => {

    const history = useHistory();

    return(
        <Cell                     
            backgroundColor={theme.colors.background}
            height={"100vh"}
            paddingBottom={"2rem"}
            position={"relative"}
            flexDirection={"row"}
        >
            <Cell
                margin={"1.3rem auto"}
                flex={"10%"}
                alignItems={"flex-end"}
            >
                <Button
                    onClick={() => history.goBack()}
                    maxWidth={"5rem"}
                    height={"2rem"}
                    backgroundColor={theme.colors.transparent}
                >
                    <Image 
                        src={arrowBack}
                    />
                </Button>
            </Cell>
            <Cell flex={"80%"}>
                <Cell
                    width={"80%"}
                    tabletWidth={"90%"}
                    margin={"2rem auto"}
                    // padding={"1rem"} 
                    
                >
                    <Cell 
                        position={"relative"}
                        backgroundColor={theme.colors.dark}
                        width={"100%"}
                        // height={"100%"}
                        borderRadius={"1rem"}
                        alignItems={"center"}
                        height={"25rem"}
                        tabletHeight={"15rem"}
                        justifyContent={"center"}
                        
                        
                    >
                        <Cell 
                            position={"absolute"}
                            margin={"auto"}
                            backgroundColor={theme.colors.dark}
                            width={"auto"}
                            left={"0"}
                            right={"0"}
                            justifyContent={"center"}
                            flexDirection={"row"}
                        >
                            
                            <Button
                                backgroundColor={theme.colors.transparent}
                                width={"5rem"}
                            >
                                <Image 
                                    src={loopback}
                                />
                            </Button>
                            <Button
                                backgroundColor={theme.colors.transparent}
                                width={"5rem"}
                            >
                                <Image 
                                    src={playButtonImage}
                                />
                            </Button>
                            <Button
                                backgroundColor={theme.colors.transparent}
                                width={"5rem"}
                            >
                                <Image 
                                    src={loopfront}
                                />
                            </Button>
                        </Cell>
                    </Cell>

                    <Cell alignItems={"center"} justifyContent={"center"} marginTop={"2rem"}>
                        <Paragraph fontWeight={"600"} fontSize={"1rem"}>
                            {"Number line representation"}
                        </Paragraph>
                        <Cell alignItems={"center"} marginTop={"1rem"}>
                            <Paragraph opacity={".5"} fontSize={"1rem"}>
                                {"Rational Numbers"}
                            </Paragraph>
                        </Cell>
                        <Cell alignItems={"center"} marginTop={"1rem"}>
                            <Button
                                maxWidth={"8rem"}
                                borderRadius={".5rem"}
                            >
                                <Image 
                                    src={nextButtonImage}
                                />
                            </Button>
                        </Cell>
                    </Cell>
                </Cell>
            </Cell>
            <Cell 
                flex={"10%"}
            />
        </Cell>
    )
}

export default Page;