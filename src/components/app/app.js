import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {GET_DATA} from "../../actions";
import Service from "../../service";
import Loader from "../loader/loader";
import Image from "../image/image";
import Modal from "../modal/modal";
import Error from "../error/error";

import "./app.scss";

const service = new Service();

const App = ({GET_DATA}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(null);

    useEffect(() =>{
        if(!data.length){
            GET_DATA();
            setLoading(true);
            service.getAll()
                .then(res => {
                    setLoading(false);
                    setData(res);
                    setError(false);
                })
                .catch(() => {
                    setLoading(false);
                    setError(true)
                })
        }
    }, [data])


    const showModal = (id) => {
        setModal(id)
    }

    return (
        <main className="container">
            {modal? <Modal id={modal} trigger={setModal} service={service}/> : ""}
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
        data: state.data
    }
}
const mapDispatchToProps = {
    GET_DATA
}

export default connect(mapStateToProps, mapDispatchToProps)(App);