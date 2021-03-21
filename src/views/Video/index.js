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
import {useChapterContext} from "contexts/chapterContext";


const Video = () => {
    const [data, setData] = React.useState();
    const [playing, setPlayState] = React.useState();
    const context = useChapterContext();
    const history = useHistory();
    const location = useLocation();
    const storageKey = location.pathname.split('/').join("")
    const playerRef = React.useRef();
    const [visible, setVisible] = React.useState(true);

    const {setCurrentVideo} = context;

    React.useEffect(() => {
        if(!context.currentLesson){
            console.log("noww", context)
            const jsonData = JSON.parse(window.sessionStorage.getItem(storageKey));
            setData(jsonData); 
        }
        else{
            console.log("here", context)
            if(location.pathname.split[1] !== context.currentLesson.name){
                
                const jsonData = JSON.parse(window.sessionStorage.getItem(storageKey));
                console.log("noww in", jsonData)
                if(!jsonData){
                    const serializedValue = JSON.stringify(context);
                    window.sessionStorage.setItem(storageKey, serializedValue);
                    setData(context)
                }else{
                    setData(jsonData); 
                }
               
            }else{
                const serializedValue = JSON.stringify(context);
                window.sessionStorage.setItem(storageKey, serializedValue);
                setData(context);
            }
            
        }
        
    }, [context, setData, storageKey, location]);

   
    

    const getCurrentVidIndex = React.useCallback(() => {
        const {lessons, currentLesson} = data;
       return lessons.findIndex((item) => item.id === currentLesson.id);

    }, [data])


    

    
    
    const handleRewind10 = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
    }

    const handleForward10 = () => {
        playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
    }

    const toNextVideo = () => {
        if(getCurrentVidIndex() !== lessons.length -1){
            const nextVidId = getCurrentVidIndex() + 1;
            const nextLesson = lessons[nextVidId];
            const {name:lessonTitle, id} = nextLesson
            history.push({
                pathname: `/video/${lessonTitle}/${id}`,
            })
            setCurrentVideo({currentLesson: nextLesson, chapter, lessons})
        }
    }
   
    if(!data){
        return null;
    }
    const {chapter="", lessons=[], currentLesson={},} = data;
    const {name, media_url, } = currentLesson;

    return (
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
                                    disabled={getCurrentVidIndex()=== lessons.length - 1}
                                    onClick={toNextVideo}
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


export default Video;
