/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function Post({ post }) {
    const { title, userId, id, body } = post;
    return (
        <div className="box">
            <h5>Title : {title}</h5>
            <p>userId:{userId} </p>
            <p>postId: {id} </p>
            <p>body: {body} </p>
        </div>
    );
}