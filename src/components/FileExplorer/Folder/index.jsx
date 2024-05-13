import { useState } from "react"

export const Folder = ({ folder, handleInsertNewNode }) => {
    const [open, setOpen] = useState(false);
    const [showInput, setShowInput] = useState({ isFolder: false, visible: false })

    const handleAddNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setOpen(true)
        setShowInput({ isFolder, visible: true })
    }

    const handleAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNewNode(folder?.id, e.target.value, showInput?.isFolder);
            setShowInput({ ...showInput, visible: false })
        }
    }

    if (!folder?.isFolder) {
        return <div style={{ margin: '10px 0px', paddingLeft: '50px' }}>📄{folder?.name}</div>
    }
    return (
        <div style={{ paddingLeft: '50px', margin: '10px 0px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <div onClick={() => setOpen(!open)} >
                {folder?.isFolder ? '📁' : ''}{folder?.name}
                <span style={{ padding: '0px 5px', border: '1px solid black', margin: '0px 10px' }} onClick={(e) => handleAddNewFolder(e, true)}>folder+</span>
                <span style={{ padding: '0px 5px', border: '1px solid black' }} onClick={(e) => handleAddNewFolder(e, false)}>file+</span>
            </div>
            {
                showInput?.visible &&
                <div
                    style={{ display: 'flex', margin: '10px 0px' }}
                >
                    {showInput?.isFolder ? '📁' : '📄'}
                    <input
                        type="text"
                        onKeyDown={(e) => handleAddFolder(e)}
                        onBlur={() => setShowInput({ ...showInput, visible: false })}
                        autoFocus
                    />
                </div>
            }
            {
                open && folder?.items?.map(item => <Folder key={item?.id} folder={item} handleInsertNewNode={handleInsertNewNode} />)
            }
        </div>
    )
}