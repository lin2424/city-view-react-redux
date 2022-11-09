import {useEffect, useState} from "react";
import "./CityInput.scss";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";
import {useDispatch} from "react-redux";
import {fetchImageAPI, fetchImageAPIAwait, fetchImageInAction, fetchInput} from "./actions/action";

const CityInput = ({cbUpdateImages}) => {

    const dispatch = useDispatch()
    const [city, setCity] = useState(DefaultCity)
    // const [images, setImages] = useState([])
    //load image list in local conpoent
    // useEffect(() => fetchCity(city), [city])
    // load image list in action


    // useEffect(() => {
    //     dispatch(fetchImageAPI(city))
    // }, [city])
    //
    useEffect(() => {
        dispatch(fetchImageAPIAwait(DefaultCity))
    }, [])

    //event handler for key down
    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === 'Enter' &&   //使用enter
        newCity !== city &&
        setCity(newCity )
    }

        return (
            <div className="searchBar">
                <input
                    className="inputCity"
                    type="text"
                    placeholder="Search City here ..."
                    // onKeyDown 当按下键盘的时候运行
                    onKeyUp={cbInput}
                />

                <button onClick={() => {
                    //调用function
                    dispatch(fetchImageAPI(city))
                }}>Search City</button>

                <button onClick={() => {
                    //调用function
                    dispatch(fetchImageAPIAwait(city))
                }}>Fetch City Await</button>

                <button onClick={() => {
                    //调用function
                    dispatch(fetchImageInAction())
                }}>Use action</button>
            </div>
        )
    }

    export default CityInput