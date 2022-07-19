import axios from 'axios'

const url = 'http://locahost:5000/post'

export const fetchPost = () => axios.get(url)

