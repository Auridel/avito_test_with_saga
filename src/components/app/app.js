import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {GET_DATA} from "../../actions";
import Loader from "../loader/loader";
import Image from "../image/image";
import Modal from "../modal/modal";
import Error from "../error/error";

import "./app.scss";


const App = ({GET_DATA, data, error}) => {
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(null);

    useEffect(() =>{
        if(!data.length && !error){
            setLoading(true);
            GET_DATA();
        }
        if(data || error) {
            setLoading(false);
        }
    }, [data])


    const showModal = (id) => {
        setModal(id)
    }

    return (
        <main className="container">
            {modal? <Modal id={modal} trigger={setModal}/> : ""}
            <h1 className="main-header">Test App</h1>
            {loading? <Loader/> : ""}
            {error? <Error/> : ""}
            <section className="content">
                {data.length? data.map(item =>
                    <a
                        key={item.id}
                        onClick={(e) => {
                        e.preventDefault();
                        showModal(item.id)
                    }}>
                        <Image
                            url={item.url}
                            />
                    </a>
                    ) : ""}
            </section>
            <footer className="main-footer">
                <span className="main-footer__copyright">© 2018-2019</span>
            </footer>
        </main>
    )
};

const mapStateToProps = (state) => {
    return{
        data: state.data,
        error: state.error
    }
}
const mapDispatchToProps = {
    GET_DATA
}

export default connect(mapStateToProps, mapDispatchToProps)(App);