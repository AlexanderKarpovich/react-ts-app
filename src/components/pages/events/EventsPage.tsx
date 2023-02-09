import React, { FC, useRef, useState } from 'react'

const EventsPage: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        alert(value == '' ? 'Empty managed input!' : 'Managed input text: ' + value);
        alert(inputRef.current?.value == '' ? 'Empty unmanaged input!' : 'Unmanaged input text: ' + inputRef.current?.value)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDraggedOver(false);
        alert('Dropped');
    }

    const dragLeftHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDraggedOver(false);
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDraggedOver(true);
    }

    return (
        <div>
            <h1>Events</h1>
            <p>Try inputs and button!</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <input type='text' value={value} onChange={changeHandler} placeholder='Managed input' />
                <input type='text' ref={inputRef} placeholder='Unmanaged input' />
                <button onClick={clickHandler}>Click me!</button>
            </div>
            <p>Try to move upper square!</p>
            <div draggable style={{ width: 200, height: 200, background: 'red', margin: 5 }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeftHandler}
                onDragOver={dragOverHandler}
                style={{ width: 200, height: 200, background: (isDraggedOver ? 'green' : 'red'), margin: 5 }}></div>
        </div>
    )
}

export default EventsPage