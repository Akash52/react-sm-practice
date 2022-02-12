const url_ip = 'https://ipapi.co/json/';
const url_hp = 'http://hp-api.herokuapp.com/api/characters';

export const fetchData = async () => {
    try {
        const response = await fetch(url_ip);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

export const fetchCharacters = async () => {
    try {
        const response = await fetch(url_hp);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
};
