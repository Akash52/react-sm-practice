const url_ip = 'https://ipapi.co/json/';
const url_hp =
    'https://raw.githubusercontent.com/Akash52/practice-repo/master/db.json';

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
