import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
// import useRefreshToken from "./useRefreshToken";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_API } from "../services/ApiEndPoints";
import { setUserState } from "../redux/Infrastructure";

const useAxiosPrivate = () => {
    // const refresh = useRefreshToken();
    const auth = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.access_token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                if (error?.response?.status === 401) {
                    localStorage.removeItem("userData");
                    dispatch(setUserState(null))
                    navigate(LOGIN_API)
                    // window.location.reload();
                }
                // const prevRequest = error?.config;
                // if (error?.response?.status === 401 && !prevRequest?.sent) {
                //     prevRequest.sent = true;
                //     const newAccessToken = await refresh();
                //     prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                //     return axiosPrivate(prevRequest);
                // }
                return Promise.reject(error);
            }
        );
        console.log({responseIntercept})

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            // axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth])

    return axiosPrivate;
}

export default useAxiosPrivate;