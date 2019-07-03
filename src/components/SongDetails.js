import React from 'react'

const SongDetails = ({song}) => {
    if(!song) return null;

    console.log("song: ", song);
    return(
        <div>
            {song['im:artist'].label}
            {song['im:price'].label}
        </div>
    )

}

export default SongDetails
