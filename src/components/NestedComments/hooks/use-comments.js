import { useState } from "react"
import { COMMENTS_DATA } from "../data"

export const useCommentOperations = () => {
    const [comments, setComments] = useState(COMMENTS_DATA);

    const addReply = (commentId, replyText) => {
        const newReply = {
            id: new Date().toString(),
            comment: replyText,
            likes: 0,
            replies: []
        }

        const recursiveAdd = (comments) => {
            return comments.map(comment => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        replies: [newReply, ...comment.replies]
                    }
                } else if (comment.replies.length > 0) {
                    return {
                        ...comment,
                        replies: recursiveAdd(comment.replies)
                    }

                } else {
                    return comment;
                }
            })
        }
        let updatedComments = comments;
        if (commentId) {
            updatedComments = recursiveAdd(comments)
        } else {
            updatedComments = [{ id: Date.now(), comment: replyText, likes: 0, replies: [] }, ...comments]
        }

        setComments(updatedComments)
    }

    const deleteComment = (commentId) => {


        const recursiveDelete = (comments) => {
            return comments?.filter(comment => comment.id !== commentId).map(comment => {
                if (comment?.replies?.length > 0) {
                    return {
                        ...comment,
                        replies: recursiveDelete(comment.replies)
                    }
                }
                else {
                    return comment
                }
            }
            )
        }

        const updatedComments = recursiveDelete(comments)
        setComments(updatedComments)
    }


    return { comments, addReply, deleteComment }
}