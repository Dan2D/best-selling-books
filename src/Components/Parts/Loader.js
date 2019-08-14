import React from 'react';
import "../App/App.css";

function Loading(props) {
    return (
                <div className={props.isLoading ? "loading loading-active" : "loading"} >
                    <img src={require("../../Images/book-flat.png")} alt="book" />
                </div>
    )
}

export default Loading
