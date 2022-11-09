import {FETCH_ALL_IMAGES, CLICK_IMG, BasicUrl, AccessKey, FETCH_IMAGH_API} from "../consts";
import axios from "axios";

const imgLibrary = [
    {
        //description
        des: 'Crossing',
        url: 'https://images.unsplash.com/photo-1506751470038-e579eb91f580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwxfHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'body of water',
        url: 'https://images.unsplash.com/photo-1507992781348-310259076fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwzfHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'city buildings',
        url: 'https://images.unsplash.com/photo-1503206557829-9a9979ad1227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw0fHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    },
    {
        des: 'city wallpapers',
        url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max'
    },
    {
        des: 'high-rise buildings',
        url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw1fHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400'
    }
]

// action creator (to create action)  action是object 但是用的时候一般放在fuction里
export const fetchImageInAction = () => {
    console.log('fetch all from action')
    return {
        type: FETCH_ALL_IMAGES,
        payload: imgLibrary
    }
}

// async action 异步操作 creator function(to create action)
export const fetchImageAPI = (city) => dispatch => {
    // set isLoading = true
    dispatch({
        type: 'LOADING',
        payload: true,
    })

    //sending request
    axios.get(BasicUrl, {
        params: {
            query: city,
            orientation: 'landscape',
        },
        headers: {
            Authorization: `Client-ID ${AccessKey}`
        }
    }).then(res => {
        let {data: {results}} = res
        let imageList = results.map(item => ({
            des: item.alt_description,
            // regular: item.urls.regular,
            url: item.urls.regular,
            thumb: item.urls.thumb
        }))

        // set isLoading = false
        dispatch({
            type: 'LOADING',
            payload: false,
        })
        console.log('async action data', imageList)

        //once the data is ready ,dispatch action object
        dispatch({
            type: FETCH_ALL_IMAGES,
            payload: imageList
        })

    }).catch(err => {
        console.log('fetch city http error!', err)
        // set isLoading = false
        dispatch({
            type: 'LOADING',
            payload: false,
        })
    })
}

// 
export const fetchImageAPIAwait = city => async dispatch => {
    // set isLoading = true
    dispatch({
        type: 'LOADING',
        payload: true,
    })

    try{
        //sending request
        let temRes = await axios.get(BasicUrl, {
            params: {
                query: city,
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        })

        let {data: {results}} = temRes
        let imageList = results.map(item => ({
            des: item.alt_description,
            // regular: item.urls.regular,
            url: item.urls.regular,
            thumb: item.urls.thumb
        }))

        // set isLoading = false
        dispatch({
            type: 'LOADING',
            payload: false,
        })
        console.log('async action data', imageList)

        //once the data is ready ,dispatch action object
        dispatch({
            type: FETCH_ALL_IMAGES,
            payload: imageList
        })

    } catch (err) {
        console.log('fetch city http error!', err)
        // set isLoading = false
        dispatch({
            type: 'LOADING',
            payload: false,
        })
    }
}


export const clickImg = (index) => {
    return {
        type: CLICK_IMG,
        payload: index
    }
}


// export default fetchImageInAction
// export {fetchImageInAction}