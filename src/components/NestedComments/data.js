export const COMMENTS_DATA = [
    {
        id: 1,
        comment: 'comment 1',
        likes: 10,
        replies: [
            {
                id: 2,
                name: 'name 2',
                comment: 'comment 2',
                likes: 20,
                replies: []
            },
            {
                id: 3,
                name: 'name 3',
                comment: 'comment 3',
                likes: 30,
                replies: []
            }
        ]
    },
    {
        id: 4,
        name: 'name 4',
        comment: 'comment 4',
        likes: 40,
        replies: []
    }
]