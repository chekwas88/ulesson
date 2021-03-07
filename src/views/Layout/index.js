import * as React from "react";
import {Cell, Main, Header, Spacer, Headline, Image, Paragraph} from '../../elements';
import headerIcon from "assets/headerIcon.svg"
import personIcon from "assets/personIcon.svg"
import theme from "../../theme";

const Layout = ({children}) => {
    return(
        <Cell>
            <Header
               
            >
                <Cell
                    width={"100%"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    
                    height={"100%"}
                >
                    <Cell 
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        paddingLeft={"2rem"}
                    >
                        
                            <Image 
                                src={headerIcon} 
                                width={"2rem"}
                                height={"2rem"}
                            />
                            <Spacer width={".5rem"} />
                            <Paragraph color={theme.colors.white} fontSize={".875"}>
                                {"ULesson"}
                            </Paragraph>
                    </Cell>
                    <Cell
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        paddingRight={"2rem"}
                    >
                        
                            <Image 
                                src={personIcon} 
                                width={"2rem"}
                                height={"2rem"}
                            />
                        <Spacer width={".5rem"} />
                        <Paragraph color={theme.colors.white} fontSize={".875"}>
                            {"Hassan"}
                        </Paragraph>
                    </Cell>
                </Cell>
            </Header>
            <Main overflowX={"hidden"} justifyContent={"center"} alignItems={"center"} paddingBottom={"3rem"} >
                    {children}
            </Main>
        </Cell>
        
    )
}

export default Layout;