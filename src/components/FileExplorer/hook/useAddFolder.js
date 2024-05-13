export const useAddFolder = () => {
    function insertNode(tree, id, isFolder, item) {
        if (tree?.id === id && tree?.isFolder) {
            const newFolder = {
                id: new Date().getTime(),
                name: item,
                isFolder,
                items: []
            }
            tree.items.unshift(newFolder);
            return tree
        }

        let latestNodes = []
        latestNodes = tree?.items?.map(folder => insertNode(folder, id, isFolder, item))
        return { ...tree, items: latestNodes }

    }
    return { insertNode };
}