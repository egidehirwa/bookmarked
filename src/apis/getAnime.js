const getAnime = async () => {
    try {
        const res = await fetch('https://api.jikan.moe/v4/anime/');

        if(!res.ok){
            throw new Error(`Failed to fetch anime error status: ${res.status}`)
        }

        const animeData = await res.json();
        return animeData;
    } catch(err) {
        console.error(err)
    }
}

export default getAnime;