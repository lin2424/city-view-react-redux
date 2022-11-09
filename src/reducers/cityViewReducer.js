import {FETCH_ALL_IMAGES, CLICK_IMG, DefaultCity} from "../consts";

const initState = {
    //存放内容，是一个空数组
    imgLibrary: [],
    clickImgIndex: 0,
    isLoading: false,
}
export const cityViewReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_ALL_IMAGES:
            console.log('image reducer is printing---', action?.payload)
            //。。。原来的state不变，复制一份新的,把action.payload放在新的state中
            //？ 安全运算符 safe navigation operator, 当action没有payload的时候，也会往下运行
            //clickImgIndex: 0 点一次按钮，默认从第0张图片开始
            return {...state, imgLibrary: action?.payload, clickImgIndex: 0}
        case CLICK_IMG:
            return {...state, clickImgIndex: action?.payload}
        case 'LOADING':
            return {...state, isLoading: action?.payload}
        default:
            console.log('image reducer')
            return state
    }

}