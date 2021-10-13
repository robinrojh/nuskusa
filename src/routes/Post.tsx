import React from "react";
import { dbService } from "../utils/FirebaseFunctions";
import Comment from '../components/Post/Comment';
import Navbar from "../components/Navbar";

type PostProps = {
    boardId: string,
    postId: string,
    username: string,
    isVerified: boolean,
    role: string
}

type PostState = {
    title: string,
    content: string,
    isAnnouncement: boolean,
    isAnonymous: boolean,
    isPinned: boolean,
    isHidden: boolean,
    owner: string,
    upvotes: number,
    permissions: string[]
}

class Post extends React.Component<PostProps, PostState> {
    constructor(props: PostProps) {
        super(props);
        this.state = {
            title: '',
            content: '',
            isAnnouncement: false,
            isAnonymous: false,
            isPinned: false,
            isHidden: false,
            owner: '',
            upvotes: 0,
            permissions: ["Admin"]
        }
    }

    componentDidMount = () => {
        this.fetchPost();
    }

    fetchPost = () => {
        dbService
            .collection('boards').doc(this.props.boardId)
            .collection('posts')
            .doc(this.props.postId)
            .onSnapshot((querySnapshot) => {
                if (querySnapshot.exists) {

                }
                console.log('post fetching successful')
            })
    }

    render = () => {
        return (
            <div>
                <Navbar />
                {this.props.postId}
                <Comment />
            </div>
        )
    }
}

export default Post;
