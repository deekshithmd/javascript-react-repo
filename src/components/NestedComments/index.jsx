import { Comment } from "./Comment";
import { useCommentOperations } from "./hooks/use-comments"

export const NestedComments = () => {

    const { comments, addReply, deleteComment } = useCommentOperations();

    return (
        <div>
            <h1>Nested Comments</h1>
            <Comment comments={comments} addReply={addReply} deleteComment={deleteComment} root="true" />
        </div>
    )
}