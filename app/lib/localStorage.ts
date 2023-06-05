import Cookies from 'js-cookie'

export const getLocalStorage = (key: string) => {
    return Cookies.get(key)
}
