import { useState } from "react"

export const Comment = ({ comments, addReply, deleteComment, root = false }) => {
    const [replyId, setReplyId] = useState(null)
    const [replyText, setReplyText] = useState('');


    const handleAddReply = () => {
        addReply(replyId, replyText);
        setReplyText('');
        setReplyId(null);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start', marginLeft: '50px' }}>
            {root && <>
                <input type="text" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                <button onClick={handleAddReply}>Add comment</button>
            </>
            }
            {
                comments.map((comment) => {
                    return (<div>
                        <div style={{ border: '1px solid black', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <p>{comment.comment}</p>
                            <span>Likes:{comment.likes}</span>
                            <button onClick={() => setReplyId(comment.id)}>Reply</button>
                            <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        </div>
                        <div style={{ paddingLeft: '20px' }}>
                            {
                                replyId === comment.id &&
                                <div>
                                    <input type="text" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                                    <button onClick={handleAddReply}>Send</button>
                                </div>
                            }
                            {
                                comment?.replies?.length > 0 &&
                                <Comment comments={comment.replies} addReply={addReply} deleteComment={deleteComment} />
                            }
                        </div>
                    </div>)
                })
            }
        </div>
    )
}