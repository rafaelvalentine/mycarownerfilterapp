import axios from "axios";


/**
 * @name 
 * @description  function initates axios instances  and passes their default values 
 * @type {{growthApi:{Promise<{axios: AxiosInstance<Function}>}}
 * @return {Object}
 */
export default (() => {
    const growthApi = () => axios.create({
        baseURL: 'https://',
        headers: {
            Authorization: `Bearer ${}`
        }
    });

    return {
        growthApi
    }
})();