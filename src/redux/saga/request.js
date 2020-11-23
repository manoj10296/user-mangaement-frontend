import axios from 'axios'
import { API } from '../../BackendUrl'

const apiCall = async ({ method, api, body }) => {
  const token = localStorage.getItem('token')
  try {
    console.log(method, api, body, token)
    const result = await axios({
      method: method,
      url: `${API}/${api}`,
      data: body,
      headers: {
        authorization: token
      }
    })
    console.log('sss', result)
    return result
  } catch (error) {
    console.log(error)
  }
}

export default apiCall