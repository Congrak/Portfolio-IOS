import { Howl, Howler } from "howler";
import { useState, useEffect } from "react";
import { songs } from "../Utils/songs";

export const Music = ({volum}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  
  const handlePlayNext = () => {
    let newIndex = currentSong + 1;
    if (newIndex >= songs.length) {
      newIndex = 0;
    }
    setCurrentSong(newIndex);

    if (sound) {
      sound.stop();
    }

    const newSound = new Howl({
      src: [songs[newIndex].src],
      onend: handlePlayNext,
    });

    setSound(newSound);
    newSound.play();
  };

  const [sound, setSound] = useState(
    new Howl({
      src: [songs[currentSong].src],
      onend: () => {
        handlePlayNext
        setCurrentSong(currentSong + 1)
      },
    })
  );

  useEffect(() => {
    sound.on("play", () => {
      setIsPlaying(true);
    });

    sound.on("pause", () => {
      setIsPlaying(false);
    });

    return () => {
      sound.off("play");
      sound.off("pause");
    };
  }, [sound]);

  useEffect(() => {
    Howler.volume(volum / 100)
  },[volum])

  const handlePlayPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  const handlePlayPrevious = () => {
    let newIndex = currentSong - 1;
    if (newIndex < 0) {
      newIndex = songs.length - 1;
    }
    setCurrentSong(newIndex);

    if (sound) {
      sound.stop();
    }

    const newSound = new Howl({
      src: [songs[newIndex].src],
      onend: handlePlayNext,
    });

    setSound(newSound);
    newSound.play();
  };

  return (
    <span className="flex justify-between h-full w-full items-center p-2 items-center">
      <div className="flex items-center cursor-default">
        <img
          className="rounded-xl h-12 w-12 mr-2"
          src={songs[currentSong].img}
          alt="Album"
        />

        <div className="flex flex-col text-left">
          <span className="font-bold">{songs[currentSong].title}</span>
          <span className="text-gray-500 text-xs">{songs[currentSong].singer}</span>
        </div>
      </div>
      <div className="flex">
        <div className="rotate-180" onClick={handlePlayPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="32"
            height="32"
          >
            <path d="M 32 9 L 32 21.851563 L 11 8.152344 L 11 41.847656 L 32 28.148438 L 32 41 L 40 41 L 40 9 Z" />
          </svg>
        </div>
        {isPlaying ? (
          <div onClick={handlePlayPause}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="32"
              height="32"
            >
              <path d="M 8 4 C 6.895 4 6 4.895 6 6 L 6 24 C 6 25.105 6.895 26 8 26 L 10 26 C 11.105 26 12 25.105 12 24 L 12 6 C 12 4.895 11.105 4 10 4 L 8 4 z M 20 4 C 18.895 4 18 4.895 18 6 L 18 24 C 18 25.105 18.895 26 20 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 6 C 24 4.895 23.105 4 22 4 L 20 4 z" />
            </svg>
          </div>
        ) : (
          <div onClick={handlePlayPause}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="32"
              height="32"
            >
              <path d="M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z" />
            </svg>
          </div>
        )}
        <div onClick={handlePlayNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="32"
            height="32"
          >
            <path d="M 32 9 L 32 21.851563 L 11 8.152344 L 11 41.847656 L 32 28.148438 L 32 41 L 40 41 L 40 9 Z" />
          </svg>
        </div>
      </div>
    </span>
  );
};
