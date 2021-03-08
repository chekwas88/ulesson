import * as React from "react";
import {Cell, Main, Header, Spacer, Image, Paragraph} from '../../elements';
import headerIcon from "assets/headerIcon.svg"
import personIcon from "assets/personIcon.svg"
import theme from "../../theme";
import {
   useHistory
  } from "react-router-dom";


const Layout = ({name, children}) => {
    const history = useHistory();
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
                        cursor={"pointer"}
                        onClick={() => history.push('/')}
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
                            {`${name}` || "Hassan"}
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