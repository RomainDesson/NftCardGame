import { CardType } from "../Card/types"

interface PropsType {
    isOver: boolean
    drop: any
    droppedCards: CardType[]
}

export const CardAreaUi = ({ isOver, drop, droppedCards }: PropsType) => {
    return (
        <div
            ref={drop}
            className="flex flex-col justify-between items-center"
            style={{
                height: '200px',
                width: '150px',
                border: '1px dashed gray',
                position: 'relative',
                backgroundColor: isOver ? 'lightgreen' : 'white',
            }}
        >
            {droppedCards.map((card: CardType) => (
                <div key={card.id}>{card.name}</div>
            ))}
            <div>Points: {droppedCards.reduce((sum, card) => sum + card.power, 0)}</div>
        </div>
    )
}