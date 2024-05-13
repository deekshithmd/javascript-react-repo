import { useState } from "react"
import { Folder } from "./Folder"
import { FILE_DATA } from "./data"
import { useAddFolder } from "./hook/useAddFolder";

export const FilExplorer = () => {
    const [folders, setFolders] = useState(FILE_DATA);

    const { insertNode } = useAddFolder();

    function handleInsertNewNode(id, newFolder, isFolder) {
        const updated = insertNode(folders, id, isFolder, newFolder);
        setFolders(updated)
    }

    return (
        <div>
            <h3>File Explorer</h3>
            <Folder folder={folders} handleInsertNewNode={handleInsertNewNode} />
        </div>
    )
}