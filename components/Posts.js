import { useCollection } from "react-firebase-hooks/firestore"
import {db} from "../firebase"
import Post from "./Post";
export default function Posts({ posts }) {
    const [realtimePosts] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    );
    return (
        <div>
        {/* ? in front of realtimePosts is using a method called 
        optional chaining. 
        Allowing you to use deeply rooted data without checking 
        to see if everything in the datachain is valid */}
            {realtimePosts ?
            realtimePosts?.docs.map((post) => (
                <Post
                key={post.id}
                name={post.data().name}
                message={post.data().message}
                email={post.data().email}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
                />
            )) : (
                posts.map((post) => (
                <Post
                key={post.id}
                name={post.name}
                message={post.message}
                email={post.email}
                timestamp={post.timestamp}
                image={post.image}
                postImage={post.postImage}
                />
                )
                ))}
        </div>
    )
}
