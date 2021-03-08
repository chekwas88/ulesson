import * as React from "react";
import ReactPlayer from 'react-player'
import {Cell, Image, Paragraph} from "../../elements";
import theme from "../../theme";
import nextButtonImage from "assets/next.svg";
import arrowBack from "assets/arrorback.svg"
import Button from "components/Button";
import { useLocation, useHistory } from "react-router-dom";
import "./index.css";
import Controls from "./controls";

const Page = () => {
    const location = useLocation();
    console.log("llll", location.state);
    const {currentLesson, lessons} = location.state;
    const {name, media_url, chapter } = currentLesson;
    const playerRef = React.useRef();
    const [visible, setVisible] = React.useState(true);

    const [playing, setPlayState] = React.useState();

    const history = useHistory();
    
    const handleRewind10 = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
    }

    const handleForward10 = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
    }

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
                    margin={"1rem auto"}
                    padding={"1rem"} 
                    borderRadius={"1rem"}

                >
                    
                            
                            <Cell
                                maxWidth={"100%"}
                                position={"relative"}
                                backgroundColor={"black"}
                                id={"player"}
                                borderRadius={"1rem"}
                                height={"24rem"}
                                onMouseOver={() => setVisible(true)}
                                onMouseEnter={() => setVisible(true)}
                                onMouseLeave={() => setVisible(false)}
                                justifyContent={"center"}
                                alignItems={"center"}
                                tabletHeight={"15rem"}
                            >
                               
                                <ReactPlayer
                                    
                                    ref={playerRef}
                                    url={media_url}
                                    controls={true}
                                    width={"100%"}
                                    className={"react-player"}
                                    playing={playing}
                                />
                               
                                    <Controls
                                         playing={playing} 
                                         handlePlay={setPlayState}
                                         forward10={handleForward10}
                                         rewind10={handleRewind10}
                                         setVisible={setVisible}
                                         visible={visible}
                                    />
                            </Cell>
                  
                    <Cell alignItems={"center"} justifyContent={"center"} marginTop={"2rem"}>
                        <Paragraph fontWeight={"600"} fontSize={"1rem"}>
                            {chapter}
                        </Paragraph>
                        <Cell alignItems={"center"} marginTop={"1rem"}>
                            <Paragraph opacity={".5"} fontSize={"1rem"}>
                                {name}
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