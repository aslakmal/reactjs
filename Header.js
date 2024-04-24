import React from 'react';

function Header() {
  return (
    <div>
      <div id="preloader">
        <div className="circle">
          <div id="loader" className="water level-0"></div>
        </div>
      </div>
      <div className="audio_controlls active">
        <div className="volume">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50">
          <path
                d="M25.08,47.58c-0.4,0-0.8-0.14-1.12-0.41L9.97,35.42H4.24c-0.96,0-1.74-0.78-1.74-1.74V16.32			c0-0.96,0.78-1.74,1.74-1.74h5.74L23.96,2.83c0.52-0.43,1.24-0.53,1.85-0.24c0.61,0.29,1,0.9,1,1.57v41.68c0,0.68-0.39,1.29-1,1.57			C25.58,47.52,25.33,47.58,25.08,47.58z M5.97,31.95h4.63c0.41,0,0.8,0.14,1.12,0.41l11.62,9.76V7.89l-11.62,9.76			c-0.31,0.26-0.71,0.41-1.12,0.41H5.97V31.95z"
                fill="#EFEFEF"></path>
            <path id="leftWave"
                d="M37.12 18.06 C35.34 16.29 32.89 15.19 30.19 15.19 30.19 15.76 30.19 16.34 30.19 16.92 30.19 17.49 30.19 18.07 30.19 18.64 31.94 18.64 33.52 19.36 34.67 20.51 35.82 21.66 36.54 23.25 36.54 25 36.54 26.75 35.82 28.33 34.67 29.48 33.52 30.63 31.94 31.35 30.19 31.35 30.19 31.92 30.19 32.5 30.19 33.08 30.19 33.65 30.19 34.23 30.19 34.81 32.89 34.81 35.34 33.71 37.12 31.93 38.9 30.15 40 27.7 40 25 40 22.29 38.9 19.84 37.12 18.06 "
                fill="#EFEFEF"
                data-original="M30.19,34.81v-3.46c3.5,0,6.35-2.85,6.35-6.35s-2.85-6.35-6.35-6.35v-3.46c5.41,0,9.81,4.4,9.81,9.81			S35.6,34.81,30.19,34.81z">
            </path>
            <path id="rightWave"
                d="M42.42 12.76 C39.28 9.63 34.96 7.69 30.19 7.69 30.19 8.26 30.19 8.84 30.19 9.42 30.19 9.99 30.19 10.57 30.19 11.15 34.01 11.15 37.47 12.7 39.97 15.21 42.48 17.71 44.04 21.18 44.04 25 44.04 28.82 42.48 32.28 39.97 34.79 37.46 37.29 34 38.85 30.19 38.85 30.19 39.42 30.19 40 30.19 40.58 30.19 41.15 30.19 41.73 30.19 42.31 34.96 42.31 39.29 40.36 42.42 37.23 45.56 34.1 47.5 29.77 47.5 25 47.5 20.22 45.55 15.89 42.42 12.76 "
                fill="#EFEFEF"
                data-original="M30.19,42.31v-3.46c7.63,0,13.85-6.21,13.85-13.85s-6.21-13.85-13.85-13.85V7.69c9.54,0,17.31,7.76,17.31,17.31			S39.74,42.31,30.19,42.31z">
            </path>
          </svg>
        </div>
        <div className="muted">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50">
          <path
                d="M25.08,47.58c-0.4,0-0.8-0.14-1.12-0.41L9.97,35.42H4.24c-0.96,0-1.74-0.78-1.74-1.74V16.32			c0-0.96,0.78-1.74,1.74-1.74h5.74L23.96,2.83c0.52-0.43,1.24-0.53,1.85-0.24c0.61,0.29,1,0.9,1,1.57v41.68c0,0.68-0.39,1.29-1,1.57			C25.58,47.52,25.33,47.58,25.08,47.58z M5.97,31.95h4.63c0.41,0,0.8,0.14,1.12,0.41l11.62,9.76V7.89l-11.62,9.76			c-0.31,0.26-0.71,0.41-1.12,0.41H5.97V31.95z"
                fill="#EFEFEF"></path>
            <polygon
                points="47.5,18.41 45.04,15.96 38.46,22.54 31.87,15.96 29.41,18.41 36,25 29.41,31.59 31.87,34.04 		38.46,27.46 45.04,34.04 47.5,31.59 40.91,25 "
                fill="#EFEFEF"></polygon>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
