import React, { useContext, useEffect, useState } from "react";
import { Store } from "./store";
import {IState, IActions, IEpisode} from "./interfaces";



const RickAndMorty = () => {
  const { state, dispatch } = useContext(Store);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    state.episodes.length === 0 && fetchEpisodes();
  });

  const fetchEpisodes = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const response = await fetch(URL);
    const data = await response.json();

    return dispatch({
      type: "FETCH_DATA",
      payload: data._embedded.episodes,
    });
  };

  const toggleFavoriteEpisode = (episode: IEpisode) => {
      const episodeInFav = state.favorites.includes(episode)
    if (episodeInFav) {
      dispatch({
        type: "REMOVE_FAV",
        payload: episode,
      });
    } else {
      dispatch({
        type: "ADD_FAV",
        payload: episode,
      });
    }
  };

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const renderEpisodes = (episodes: any) => {
    
    return (
      <section className='episode-layout'>
        {episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className='episode-box'>
              <img
                src={episode.image.medium}
                alt={`Rick and Morty ${episode.name}`}
              />
              <div>
                {episode.name} - {`Season: ${episode.season}`} -{" "}
                {`Episode: ${episode.number}`}
              </div>
              <button
                onClick={() => toggleFavoriteEpisode(episode)}
                className='btn btn-secondary'
                type='button'
              >
                {state.favorites.includes(episode)
                  ? "Remove from favorite"
                  : "Make it Favorite"}
              </button>
            </section>
          );
        })}
      </section>
    );
  };

  return (
    <>
      <header>
        <h2>Rick and Morty Episodes</h2>
        <button
          type='button'
          onClick={handleDisplay}
          className='btn btn-primary'
        >
          See favorite Episodes
        </button>
      </header>
      {display
        ? renderEpisodes(state.episodes)
        : renderEpisodes(state.favorites)}
    </>
  );
};

export default RickAndMorty;
