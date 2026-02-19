import React,{ useState, useMemo, useRef } from "react";
// import { List } from "react-window";

const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

const buffferSize = 5;
const itemsPerView=10;

export const Virtualization = ({itemHeight=40,containerHeight=400, renderItem}) => {
const [scrollTop, setScrollTop] = useState(0);
const [startIndex, setStartIndex] = useState(0);

const scrollRef = useRef(null);
const tickingRef = useRef(false);


    const handleScroll = (e) => {
        scrollRef.current = e.target.scrollTop;
        if(!tickingRef.current){
            requestAnimationFrame(() => {
                setScrollTop(scrollRef.current);
                tickingRef.current = false;
            });
            tickingRef.current = true;
        }
    }


    const visibleItems = useMemo(() => {
        const startIndex = Math.max(0, Math.floor(scrollTop/itemHeight) - buffferSize);
        const endIndex = Math.min(items.length, startIndex + itemsPerView + buffferSize*2);
        setStartIndex(startIndex);

        return items.slice(startIndex, endIndex);

    }, [scrollTop]);

    return (
        <div>
            <h1>Virtualization</h1>
            <div style={{height: `${containerHeight}px`, width: '100%', overflowY: 'auto', position: 'relative'}} onScroll={handleScroll}>
                {visibleItems.map((item, index) => (
                        // <div key={index} style={{height: `${itemHeight}px`, position: 'absolute', top: `${(startIndex+index)*itemHeight}px`}}>
                        //     {renderItem(item, index)}
                        // </div>
                        React.cloneElement(renderItem(item, index),{
                            style: {
                                height: `${itemHeight}px`,
                                width: '100%',
                                position: 'absolute',
                                top: `${(startIndex+index)*itemHeight}px`,
                                backgroundColor: 'green',
                                padding: '10px',
                                border: '1px solid blue'
                            }
                        })
                    ))}
                </div>
        </div>
    )

}

    // const Row = ({ index, style }) => (
    //     <div style={style}>
    //         {items[index]}
    //     </div>
    // )
    // return (
    //     <div>
    //         <h1>Virtualization</h1>
    //         <div>
    //             <List
    //                rowComponent={Row}
    //                rowCount={items.length}
    //                rowHeight={100}
    //           rowProps={{items}}
    //             >
    //                 {Row}
    //             </List>
    //         </div>
    //     </div>
    // )