import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {GET_IMAGE} from "../../actions";
import AddForm from "../addForm/addForm";
import Loader from "../loader/loader";
import Error from "../error/error";

import "./modal.scss";

const Modal = ({id, trigger, GET_IMAGE, items}) => {

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!items[id]){
            GET_IMAGE(id)
        }
        else {
            setLoading(false);
            if(items[id].error) setError(true);
        }

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        }
    }, [items])

    return (
        <>
            <div className="modal">
                {loading? <Loader/> : ""}
                {error? <Error/> : ""}
                {items[id]?
                    <>
                        <button
                            onClick={() => trigger(null)}
                            className="modal__close"/>
                        <img src={items[id].url} alt="big image" className="modal__img"/>
                        <div className="modal__comments">
                            {items[id].comments? items[id].comments.map(elem => {
                                    return (
                                        <div key={elem.id} className="comment">
                                            <span className="comment__title">{new Intl.DateTimeFormat({
                                                day: "2-digit", month:"2-digit", year: "numeric"
                                            }).format(elem.date)}</span>
                                            <span className="comment__text">{elem.text}</span>
                                        </div>
                                    )
                                }
                            ) : ""}
                        </div>
                        <AddForm id={id}/>
                </>
                : ""}
            </div>

            <div
                onClick={() => trigger(null)}
                className="overlay"/>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.withComments
    }
}
const mapDispatchToProps = {
    GET_IMAGE
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);