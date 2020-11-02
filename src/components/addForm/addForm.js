import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {SEND_COMMENT} from "../../actions";

import "./addForm.scss";

const AddForm = ({id, status, SEND_COMMENT}) => {
    const [data, setData] = useState({name: "", comment: ""})
    const [error, setError] = useState({name: false, comment: false});

    useEffect(() => {
        if(status === "ok"){
            setData({name: "", comment: ""});
        }
    }, [status])

    const sendData = () => {
        if(data.name.trim() && data.comment.trim()) {
            setError({name: false, comment: false});
            SEND_COMMENT(id, data);
        }
        else {
            if(!data.name.trim()) setError(prev => {return {...prev, name: true}});
            if(!data.comment.trim()) setError(prev => {return {...prev, comment: true}});
        }
    }

    return (
        <div className="add-form">
            <div className="add-form__wrapper">
                <input
                    onChange={(e) => {
                        if(!e.target.value.trim()) setError({...error, name: true});
                        else setError({...error, name: false});
                        setData({...data, name: e.target.value})
                    }}
                    value={data.name}
                    type="text"
                    className={`add-form__input${error.name? " alert" : ""}`}
                    name="name" placeholder="Ваше имя"/>
                {error.name? <span className="add-form__alert">Введите имя</span> : ""}
            </div>
            <div className="add-form__wrapper">
                <input
                    onChange={(e) => {
                        if(!e.target.value.trim()) setError({...error, comment: true});
                        else setError({...error, comment: false});
                        setData({...data, comment: e.target.value})
                    }}
                    value={data.comment}
                    type="text"
                    className={`add-form__input${error.comment? " alert" : ""}`}
                    name="comment" placeholder="Ваш комментарий"/>
                {error.comment? <span className="add-form__alert">Введите комментарий</span> : ""}
            </div>
            <button
                onClick={sendData}
                className={`add-form__submit ${status}`}>Отправить комментарий</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        status: state.sendStatus
    }
}
const mapDispatchToProps = {
    SEND_COMMENT
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);