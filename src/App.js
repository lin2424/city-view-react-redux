import "./App.css";
import CityInput from "./CityInput";
import {useSelector} from "react-redux";
import {useState} from "react";
import ImageList from "./ImageList";

function App() {

    const [images, setImages] = useState([])
    const updateImages = (newImages) => setImages(newImages)
    //useSelector 使用global store中的数据
    const imageLibrary = useSelector(state => state?.cityViewReducer?.imgLibrary)
    const index = useSelector(
        state => state?.cityViewReducer?.clickImgIndex)
    const isLoading = useSelector(state => state?.cityViewReducer?.isLoading)

    return <div className="App" style={{background: `url('${imageLibrary[index]?.url}') no-repeat center center/cover fixed`}}>
        <CityInput cbUpdateImages={updateImages} />
        <ImageList images={images}/>

        {isLoading && <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="Loading"/>}

    </div>
}

export default App;
