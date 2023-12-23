type ButtonProps = {
    count: number;
    clickHandler: () => void;
}

export const Button = ({ count, clickHandler }: ButtonProps) => {
    return <button className="button" onClick={clickHandler}>{count}</button>
}