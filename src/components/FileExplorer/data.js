export const FILE_DATA = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "folder1",
                    isFolder: true,
                    items: [
                        {
                            id: "4",
                            name: "folder2",
                            isFolder: true,
                            items: [
                                {
                                    id: "5",
                                    name: "file1",
                                    isFolder: false,
                                    items: []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "6",
            name: "file2",
            isFolder: false,
            items: []
        }
    ]
};
