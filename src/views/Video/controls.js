
import * as React from "react";
import {Cell, Spacer, Image} from "../../elements";
import theme from "../../theme";
import playButtonImage from "assets/buttonPlayer1.svg";
import pauseButtonImage from "assets/pause.png";
import loopback from "assets/loop1.svg";
import loopfront from "assets/loop2.svg";
import Button from "components/Button";

const Controls = ({handlePlay, visible, setVisible, rewind10, forward10, playing}) => {
   
    const _handlePlay = () => {
       handlePlay(!playing)
        setVisible(false);
    }
   
    return(
        <Cell 
            position={"absolute"}
            margin={"auto"}
            width={"auto"}
            left={"0"}
            right={"0"}
            
        >
        {visible ?
            (<Cell 
                justifyContent={"center"}
                flexDirection={"row"}
            >
                <Button
                    onClick={rewind10}
                    backgroundColor={theme.colors.transparent}
                    width={"4rem"}
                    height={"4rem"}
                >
                    <Image 
                        src={loopback}
                    />
                </Button>
                <Spacer width={"1rem"} />
                {!playing ? (
                    <Button
                    onClick={() => _handlePlay()}
                    backgroundColor={theme.colors.transparent}
                    width={"4rem"}
                    height={"4rem"}
                    >
                    <Image 
                        src={playButtonImage}
                    />
                    </Button>): (<Button
                        onClick={() => _handlePlay()}
                        backgroundColor={theme.colors.white}
                        width={"4rem"}
                        height={"4rem"}
                        borderRadius={"50%"}
                    >
                        <Image 
                            src={pauseButtonImage}
                        />
                    </Button>)
                }
                <Spacer width={"1rem"} />
                <Button
                    onClick={forward10}
                    backgroundColor={theme.colors.transparent}
                    width={"4rem"}
                    height={"4rem"}
                >
                    <Image 
                        src={loopfront}
                    />
                </Button>
            </Cell>):null}
        </Cell>
    )
}
export default Controls;