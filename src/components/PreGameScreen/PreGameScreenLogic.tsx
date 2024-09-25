import { PreGameScreenUi } from "./PreGameScreenUi";
import { CardType } from "../Card/types";
import { useGameStore } from "../../store/game";
import { heartsDeck } from "../PlayerBar/PlayerDeck";
import { useEffect } from "react";

interface PropsType {
    joinGame: (e: React.FormEvent<HTMLFormElement>) => void;
    setGameId: (gameId: string) => void;
    setPlayerName: (playerName: string) => void;
}

export const PreGameScreenLogic = ({joinGame, setGameId, setPlayerName}: PropsType) => {
    const { playerDeck, setPlayerDeck } = useGameStore();

    useEffect(() => {
        setPlayerDeck(heartsDeck)
    }, [])

    const handleSetPlayerDeck = (deck: CardType[]) => {
        setPlayerDeck(deck);
    }

    return (
        <PreGameScreenUi joinGame={joinGame} setGameId={setGameId} setPlayerName={setPlayerName} handleSetPlayerDeck={handleSetPlayerDeck} playerDeck={playerDeck} />
    )
}