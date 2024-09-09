import axios from '../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from '../redux/Infrastructure';

const useRefreshToken = () => {
    const auth = useSelector((state) => state.appValue.createProfileData);

    const dispatch = useDispatch();

    const refresh = async () => {
        const refreshToken = {"refreshToken" : auth?.refreshToken}
        const response = await axios.post('/auth/refresh-token', refreshToken).then((res) => {
            // setAuth(prev => {
            //     return { ...prev, access_token: res.data.access_token }
            // });
            dispatch(setUserState(res.data))
            return res;
        }).catch(err => {
            console.log({err})
            window.localStorage.removeItem('aToken');
            window.localStorage.removeItem('rToken');
            window.location.reload();
            return null;
        });
        
        return response.data.access_token;
    }
    return refresh;
};

export default useRefreshToken;
