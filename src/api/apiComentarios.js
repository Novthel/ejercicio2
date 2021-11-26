import CONFIG from '../configuracion/config.json';

export const consumir = async () => {
    const path= new URL(CONFIG.URL_COMMETS);
    const result = await fetch(path);
    return await result.json()
}