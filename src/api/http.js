import axios from "axios";


/**
 * @name 
 * @description  function initates axios instances  and passes their default values 
 * @type {{growthApi:{Promise<{axios: AxiosInstance<Function}>}}
 * @return {Object}
 */
export default (() => {
    const serverApi = () => axios.create({
        baseURL: 'http://localhost:4040/api/v1',
        headers: {
            Authorization: `Bearer ${''}`
        }
    });
    const filterApi = () => axios.create({
        baseURL: 'https://ven10.co/assessment/filter.json',
        headers: {
            Authorization: `Bearer ${''}`
        }
    });
    return {
        serverApi,
        filterApi
    }
})();