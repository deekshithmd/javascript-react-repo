import { useEffect, useRef } from "react";

const virtualNode = {
    type: 'div',
    props: {
        class: 'header-container',
        children: {
            0: 'This is',
            1: {
                type: 'h1',
                props: {
                    key: 10,
                    id: 'hading',
                    children: 'devtools.tech'
                }
            },
            2: {
                type: 'h2',
                props: {
                    id: 'heading',
                    children: 'Awesome!'
                }
            },
            3: {
                type: 'input',
                props: {
                    type: 'text',
                    value: 'Virtual test'
                }
            },
            4: {
                type: 'button',
                props: {
                    children: 'Click'
                }
            },
            5: 0,
            6: {
                props: {
                    children: {
                        0: {
                            type: 'div',
                            props: {
                                children: 'React'
                            }
                        },
                        1: {
                            type: 'div',
                            props: {
                                children: 'Fragment'
                            }
                        }
                    }
                }
            },
            7: ''
        }
    }
}


export const VirtualToDOM = () => {
    const parentRef = useRef(null)

    useEffect(() => {
        if (parentRef?.current) {
            renderToDom(virtualNode, parentRef.current)
        }

    }, [])

    const renderChild = (node, parent) => {

        const renderedContent = render(node);

        if (renderedContent) {
            parent.appendChild(renderedContent)
        }

    }


    const render = (node) => {
        if (!node) {
            return null;
        }

        if (typeof node !== 'object') {
            // To handel text nodes
            return document.createTextNode(node?.toString())
        }

        if (!node.type && node.props && node.props.children) {
            // To handle fragments
            const fragment = document.createDocumentFragment();

            const children = node.props.children || {};
            for (let key in children) {
                const child = children[key];
                renderChild(child, fragment)
            }

            return fragment;
        }

        // For elements
        const element = document.createElement(node.type);
        const props = node.props || {};

        for (let key in props) {
            if (key === 'children') {
                continue;
            } else if (key === 'class') {
                element.className = props[key];
            } else {
                element.setAttribute(key, props[key])
            }
        }

        if (props?.children) {
            if (typeof props.children === 'object' && !Array.isArray(props.children)) {
                for (let key in props.children) {
                    const child = props.children[key];

                    renderChild(child, element)
                }
            } else {
                renderChild(props.children, element)
            }
        }
        return element
    }

    const renderToDom = (virtualNode, domNode) => {
        const renderedContent = render(virtualNode);

        if (renderedContent) {
            domNode?.appendChild(renderedContent)
        }
    }


    return (
        <div>
            <h1>Virtual Node to Real DOM</h1>
            <div id='root-1' ref={parentRef} />
        </div>
    )
}