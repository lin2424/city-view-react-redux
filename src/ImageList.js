import "./ImageList.scss"
import {useDispatch, useSelector} from "react-redux";
import {clickImg} from "./actions/action";
import {useNavigate} from "react-router";

const ImageList = ({images}) => {
    const imageLibrary = useSelector(
        state => state?.cityViewReducer?.imgLibrary)
    //useDispatch 使用其他地方的fuction
    const dispatch = useDispatch()

    const navigate = useNavigate()
    console.log('images got from ImageList', images)
    return (
        <div className="gallery">
            {
                imageLibrary && imageLibrary.map((img, index) => {
                    // images && images.map((img, index) => {
                    return <div
                        className="imgContainer"
                        key={index}
                        style={{background: `url('${img.url}') no-repeat center center/cover fixed`}}
                        onClick = {() => {
                            dispatch(clickImg(index))
                            navigate(`/picture/${index}`)
                        }}
                        // 把click的图片的号码存起来，也可以存url
                    >
                    </div>
                })
            }
        </div>
    )
}

export default ImageList