import * as React from "react";
import {Cell, Headline, Spacer, Image, ImageCell, Paragraph} from "elements";
import {DashboardCard as Card, Button} from "components";
import theme from "../../theme";
import hand from "assets/hand.svg"
import mathematics from "assets/dashboard1.png";
import physics from "assets/dashboard2.png";
import chemistry from "assets/dashboard3.png";
import biology from "assets/dashboard4.png";
import butttonImage from "assets/buttonPlayer1.svg";
import englishImageCard from "assets/english.svg"
import mathematicsImageCard from "assets/mathematics.svg"
import physicsImageCard from "assets/physics.svg"
import biologyImageCard from "assets/biology.svg"
import chemistryImageCard from "assets/chemistry.svg"
import Layout from "views/Layout";
import { useHistory } from "react-router-dom";




const Page = () => {
    const history = useHistory();
    
    

    const toChapter = (pathname) => {
        history.push(`/${pathname}/chapters`);
    }

    return(
        <Layout name={"Hassan"}>
            <Cell flexDirection={"row"}>
                <Cell
                    flex={"10%"}
                    alignItems={"flex-end"}
                   
                >
                    <Button                        
                        backgroundColor={theme.colors.transparent}
                    >
                        <Image 
                            src={hand}
                        />
                    </Button>
                </Cell>
                <Cell width={"80%"} margin={"0 auto"}>
                    <Cell>
                        <Headline fontSize={"1.75"} fontWeight={"500"} fontFamily={"itim"} textTransform>{"Hello Hassan,"}</Headline>
                    </Cell>
                    <Cell
                        flexDirection={"row"}
                        // justifyContent={"space-between"}
                        flexWrap={"wrap"}
                        screenLargeFlexWrap={"wrap"}
                    >

                        <Cell
                            cursor={"pointer"}
                            height={"8rem"}
                            tabletHeight={"5rem"}
                            position={"relative"}
                            flex={"1"}
                            mobileFlex={"0 1 5rem"}                            
                            onClick={() => toChapter("mathematics")}
                        >
                            <ImageCell
                                backgroundImage={mathematicsImageCard}
                                backgroundSize={"contain"} 
                                width={"100%"}
                                height={"100%"}
                                borderRadius={".5rem"}
                                
                            />
                            
                        </Cell>
                        <Spacer width={"1rem"} />
                        <Cell
                            cursor={"pointer"}
                            height={"8rem"}
                            position={"relative"}
                            tabletHeight={"5rem"}
                            flex={"1"}
                            mobileFlex={"0 1 5rem"}
                            onClick={() => toChapter("physics")}
                        >
                            <ImageCell
                                backgroundSize={"contain"} 
                                backgroundImage={physicsImageCard} 
                                height={"100%"}
                                borderRadius={".5rem"}
                                justifyContent={"center"}
                            />
                            
                        </Cell>
                        <Spacer width={"1rem"} />

                        <Cell
                            cursor={"pointer"}
                            height={"8rem"}
                            position={"relative"}
                            tabletHeight={"5rem"}
                            flex={"1"}
                            mobileFlex={"0 1 5rem"}
                            onClick={() => toChapter("chemistry")}
                        >
                            <ImageCell
                                backgroundSize={"contain"} 
                                backgroundImage={chemistryImageCard} 
                                width={"100%"}
                                height={"100%"}
                                borderRadius={".5rem"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            />
                            
                        </Cell>
                        <Spacer width={"1rem"} />

                        <Cell
                             flex={"1"}
                            height={"8rem"}
                            mobileFlex={"0 1 5rem"}
                            position={"relative"}
                            tabletHeight={"5rem"}
                            cursor={"pointer"}
                            onClick={() => toChapter("biology")}
                        >
                            <ImageCell
                                backgroundSize={"contain"}    
                                backgroundImage={biologyImageCard} 
                                height={"100%"}
                                borderRadius={".5rem"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            />
                            
                        </Cell>
                        <Spacer width={"1rem"} />

                        <Cell
                            height={"8rem"}
                            position={"relative"}
                            flex={"1"}
                            tabletHeight={"5rem"}
                            cursor={"pointer"}
                            mobileFlex={"0 1 5rem"}
                            onClick={() => toChapter("english")}
                        >
                            <ImageCell
                                backgroundSize={"contain"} 
                                backgroundImage={englishImageCard} 
                                width={"100%"}
                                height={"100%"}
                                borderRadius={".5rem"}
                                
                            />
                            
                        </Cell>

                    </Cell>
                    
                    <Cell marginTop={"5rem"} 
                        flexDirection={"row"}
                        
                        justifyContent={"space-between"} >
                        <Paragraph 
                            tabletFont={"1rem"} 
                            fontSize={"1.75rem"}
                            fontWeight={"500"}
                            fontFamily={"itim"}
                        >
                            {"Recently watched topics"}
                        </Paragraph>
                        <Cell padding={"1rem"} alignItems={"flex-end"} >
                            <Button
                                width={"6rem"}
                                fontSize={".875"}
                                borderRadius={".5rem"}
                                paddingLeft={"1rem"}
                                paddingRight={"1rem"}
                                paddingTop={".5rem"}
                                paddingBottom={".5rem"}
                                fontWeight={"600"}
                                backgroundColor={theme.colors.transluscentRed}
                            >
                                {"SEE ALL"}
                            </Button>
                    </Cell>
                    </Cell>
                    <Cell
                        marginTop={"1rem"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        mobileFlexDirection={"column"}
                        tabletFlexWrap={"wrap"}
                    >
                        <Cell 
                            flex={"1 1 15rem"} 
                            mobileFlex={"1"}
                            padding={"0rem"} 
                            marginBottom={"1rem"}
                        >
                            <Card 
                                topic={"understanding motion"}
                                subject={"mathematics"}
                                src={mathematics}
                                butttonImage={butttonImage}
                            />
                        </Cell>
                        <Spacer width={"1rem"} height={"1rem"} />
                        <Cell 
                            flex={"1 1 15rem"} 
                            mobileFlex={"1"}
                            padding={"0rem"} 
                            marginBottom={"1rem"}
                        >
                            <Card 
                                topic={"light"}
                                subject={"physics"}
                                src={physics}
                                butttonImage={butttonImage}
                            />
                        </Cell>
                        <Spacer width={"1rem"} height={"1rem"} />
                        <Cell 
                            flex={"1 1 15rem"} 
                            mobileFlex={"1"}
                            padding={"0rem"} 
                            marginBottom={"1rem"}
                        >
                            <Card 
                                topic={"pollution of water"}
                                subject={"chemistry"}
                                src={chemistry}
                                butttonImage={butttonImage}
                            />
                        </Cell>
                        <Spacer width={"1rem"} height={"1rem"}/>
                        <Cell
                            flex={"1 1 15rem"} 
                            mobileFlex={"1"}
                            padding={"0rem"} 
                            marginBottom={"1rem"}
                        >
                            <Card 
                                topic={"Micro-organisms"}
                                subject={"biology"}
                                src={biology}
                                butttonImage={butttonImage}
                            />
                            
                        </Cell>
                        <Spacer width={"1rem"} height={"1rem"} />
                    </Cell>
                   
                    <Cell marginTop={"5rem"} 
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                    >
                        <Paragraph 
                            tabletFont={"1rem"} 
                            fontSize={"1.75rem"}
                            fontFamily={"itim"}
                            fontWeight={"500"}
                        >
                            {"Recommended videos"}
                        </Paragraph>
                        <Cell padding={"1rem"} alignItems={"flex-end"} >
                            <Button
                                width={"6rem"}
                                fontSize={".875"}
                                borderRadius={".5rem"}
                                paddingLeft={"1rem"}
                                paddingRight={"1rem"}
                                paddingTop={".5rem"}
                                paddingBottom={".5rem"}
                                fontWeight={"600"}
                                backgroundColor={theme.colors.transluscentRed}
                            >
                                {"SEE ALL"}
                            </Button>
                        </Cell>
                    </Cell>
                    <Cell 
                        marginTop={"1rem"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                        mobileFlexDirection={"column"}
                        tabletFlexWrap={"wrap"}
                    > 
                        <Cell 
                            flex={"1 1 15rem"} 
                            mobileFlex={"1"}
                            padding={"0rem"} 
                            marginBottom={"1rem"}
                        >
                            <Card 
                                topic={"understanding motion"}
                                subject={"mathematics"}
                                src={mathematics}
                                butttonImage={butttonImage}
                            />
                        </Cell>
                        <Spacer width={"1rem"} height={"1rem"} />
                        <Cell 
                            flex={"1 1 15rem"} 
                            mobileFlex={"1"}
                            padding={"0rem"} 
                            marginBottom={"1rem"}
                        >
                            <Card 
                                topic={"light"}
                                subject={"physics"}
                                src={physics}
                                butttonImage={butttonImage}
                            />
                        </Cell>
                        <Spacer width={"1rem"} height={"1rem"}/>
                        <Cell 
                            flex={"1 1 15rem"} 
                            mobileFlex={"1"}
                            padding={"0rem"} 
                            marginBottom={"1rem"}
                        >
                            <Card 
                                topic={"pollution of water"}
                                subject={"chemistry"}
                                src={chemistry}
                                butttonImage={butttonImage}
                            />
                        </Cell>
                        <Spacer width={"1rem"} height={"1rem"} />
                        <Cell 
                            flex={"1 1 15rem"} 
                            mobileFlex={"1"}
                            padding={"0rem"} 
                            marginBottom={"1rem"}
                        >
                            <Card 
                                topic={"Micro-organisms"}
                                subject={"biology"}
                                src={biology}
                                butttonImage={butttonImage}
                            />
                        
                        </Cell>
                        <Spacer width={"1rem"} height={"1rem"} />
                    </Cell>
                    
                </Cell>
                <Cell flex={"10%"} />
            </Cell>
        </Layout>
    )
}

export default Page;