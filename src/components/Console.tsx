type Message = string;

export const Console = ({ messages }: { messages: Message[] }) => {
    return <div className="console__container">
        {messages.map((message: Message, index: number) => (
            <div key={index}>
                {message}

                <hr />
            </div>
        ))}
    </div>
}