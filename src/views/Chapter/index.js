import * as React from "react";
import {Cell, Headline, Spacer, Span, Image, Paragraph} from "elements";
import {ChapterCard as Card, Button, Loader} from "components";
import useData from "hooks/useData";
import Layout from "views/Layout";
import theme from "../../theme";
import { useLocation, useHistory } from "react-router-dom";
import arrowBack from "assets/arrorback.svg"
import {useChapterContext,} from "contexts/chapterContext";

const Chapter = ({chapters, history, pageData, pageSubject}) => {
    const {setCurrentVideo} = useChapterContext()
    const formateTitle = (title) => {
        if(title.length > 30){
            return `${title.substr(0, 30)}...`
        }
        return title;
    }
    const toVideo  = (data) => {
        const {currentLesson, chapter, lessons, lessonTitle, id} = data
        history.push({
            pathname: `/video/${lessonTitle}/${id}`,
        })
        setCurrentVideo({currentLesson, chapter, lessons})
    }

    return (
        <Cell
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
                        fontSize={"2rem"}
                        backgroundColor={theme.colors.transparent}
                    >
                        <Image 
                            src={arrowBack}
                        />
                    </Button>
                </Cell>
                <Cell flex={"80%"} margin={"0 auto"}>
                    <Cell>
                        <Headline
                            fontSize={"1.75"} 
                            fontWeight={"500"} 
                            fontFamily={"itim"} 
                            textTransform={"capitalize"}
                        >
                            {pageSubject}
                        </Headline>
                    </Cell>
                    
                    {pageData && (
                        <Cell>
                            {chapters ? chapters.map((chap) => {
                                const {lessons, name: chapterName, id} = chap;
                                return(<React.Fragment key={id}>
                                    <Cell marginTop={"1rem"} >
                                        <Paragraph 
                                            tabletFont={"1rem"} 
                                            fontSize={"1.75rem"}
                                            fontWeight={"500"}
                                            fontFamily={"itim"}
                                        >
                                            {`${id}. ${chapterName}`}
                                        </Paragraph>
                                    </Cell>
                                    <Cell
                                        marginTop={"1rem"}
                                        flexDirection={"row"}
                                        justifyContent={"flex-start"}
                                        mobileFlexDirection={"column"}
                                        screenLargeFlexWrap={"wrap"}
                                        tabletFlexWrap={"wrap"}
                                    >
                                        {lessons.map((lesson) => {
                                            const {icon, name, id} = lesson
                                            const routeParam = {
                                                id,
                                                lessonTitle:name,
                                                lessons,
                                                chapter: chapterName,
                                                currentLesson: {
                                                    ...lesson,
                                                    chapter: chapterName,
                                                    }
                                            }
                                            return(
                                                <React.Fragment key={id}>
                                                    
                                                
                                                    <Cell 
                                                        onClick={() => toVideo(routeParam)}
                                                        flex={"0 1 15rem"} 
                                                        mobileFlex={"1"}
                                                        tabletFlex={"1 1 18rem"}
                                                        padding={"0rem"} 
                                                        marginBottom={"1rem"}
                                                        cursor={"pointer"}
                                                    >
                                                        <Card 
                                                            lessonTitle={formateTitle(name)}
                                                            src={icon}
                                                        />
                                                    </Cell>
                                                    <Spacer width={"1rem"} height={"1rem"} />
                                                    
                                                </React.Fragment>
                                            )
                                        })}
                                    </Cell>
                                </React.Fragment>)
                                
                            }):null}
                        </Cell>
                    )}
                    
                </Cell>
                <Cell flex={"10%"} />
            </Cell>
    )
}

const Page = () => {
    const location = useLocation();
    const history = useHistory();
    const pageSubject = location.pathname.split('/')[1]
    const [pageData, setPagedata] = React.useState();
    const [chapters, setChapters] = React.useState();
    const {data, status, error, refetch} = useData();
    
    React.useEffect(() => {
        if(data){
            const results = data.subjects.filter((sub) => sub.name.toLowerCase() === pageSubject );
            setPagedata(results);
            const chaps = results.map((item) => item.chapters)
            setChapters(...chaps)
             
        }
        window.sessionStorage.clear();
    }, [pageSubject, data]);



    if(["idle","pending"].includes(status)){
        return (
            <Layout>
                <Loader />
            </Layout>
        )
    }

    if(error){
        return (
            <Layout>
                <Cell
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
                            fontSize={"2rem"}
                            backgroundColor={theme.colors.transparent}
                        >
                            <Image 
                                src={arrowBack}
                            />
                        </Button>
                    </Cell>
                    <Cell
                        height={"calc(100vh - 8rem)"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Span textAlign={"center"} marginBottom={".5rem"} padding={"1rem"}>
                            {"Could not complete your requset at the momment."}
                        </Span>
                        <Button
                            paddingTop={"1rem"}
                            paddingBottom={"1rem"}
                            paddingLeft={"1rem"}
                            paddingRight={"1rem"}
                            width={"10rem"}
                            backgroundColor={theme.colors.dark}
                            onClick={refetch}
                            fontSize={"1rem"}
                        >
                            {" Please Try Again"}
                        </Button>
                    </Cell>
                    <Cell flex={"10%"} />
                </Cell>
               
            </Layout>
        )
    }


   

   
    
    
    return(
        <Layout name={"Hassan"}>
            
            <Chapter history={history} pageData={pageData} pageSubject={pageSubject} chapters={chapters} />
        </Layout>
    )
}

export default Page;