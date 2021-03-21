import * as React from 'react';

const ChapterContext = React.createContext();
ChapterContext.displayName = 'ChapterContext';

export const ChapterProvider = ({children}) => {
    const [{currentLesson, chapter, lessons, lessonTitle, id}, setData] = React.useState({
        lessonTitle: "",
        currentLesson: null,
        lessons: [],
        chapter: "",
        id: ""
    });
    const setCurrentVideo  = (data) => {
        setData((prevState) => ({
            ...prevState,
            ...data
        }))
    } 
   
    const value = {
        currentLesson, 
        chapter, 
        lessons, 
        lessonTitle, 
        id,
        setCurrentVideo
    }
    return <ChapterContext.Provider value={value} >{children}</ChapterContext.Provider>
}

export const useChapterContext = () => {
    const context = React.useContext(ChapterContext);
    if(context === undefined){
        throw new Error(`useChapterContext must be used within ChapterContext Provider` )
    }
    return context;
}

