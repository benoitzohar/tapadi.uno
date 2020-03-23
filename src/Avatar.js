import React, { useEffect, useState } from "react";

const COLORS = ["#FFE478", "#3AA3F7", "#f58442", "#479A5F"];

export default function Avatar() {
  const [colorKey, setColorKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      setColorKey(colorKey === COLORS.length - 1 ? 0 : colorKey + 1);
    }, 1500);
    return () => clearTimeout(t);
  }, [colorKey]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 260 260"
    >
      <defs>
        <g id="g">
          <circle fill="#fff" r="11.5" />
          <circle fill="#65C9FF" r="8.2" />
          <circle fill="#3B697E" r="5" />
          <circle fill="#fff" cx="-3" cy="-3" r="3.5" />
        </g>
      </defs>
      <mask id="a" fill="#fff">
        <circle cx="120" cy="120" r="110" transform="translate(10 10)" />
      </mask>
      <mask
        id="d"
        maskUnits="userSpaceOnUse"
        x="64.5"
        y="10"
        width="131"
        height="54.4"
      >
        <path
          fill="#65C9FF"
          d="M106.4 12.3c-17.6 2-31.2 7.4-31.5 21.2a71 71 0 0 0-43.3 65.3v8.9h197v-8.9a70.9 70.9 0 0 0-43.3-65.3c-.3-13.9-13.9-19.3-31.5-21.2v18.6c0 13.1-10.6 23.6-23.6 23.6S106.4 42 106.4 28.9V10.3z"
        />
      </mask>
      <mask id="c" fill="#fff">
        <circle cx="120" cy="120" r="110" transform="translate(10 -125)" />
      </mask>
      <mask id="b" fill="#fff">
        <circle cx="120" cy="120" r="110" />
      </mask>
      <mask
        id="e"
        maskUnits="userSpaceOnUse"
        x="37.2"
        y="-.1"
        width="30.5"
        height="15.8"
      >
        <path
          fill="#fff"
          d="M33.4 12.9a18.7 18.7 0 0 0 37.2-.1c.1-.8-.8-2-1.8-2H35.3c-1 0-2 1.1-1.9 2.1z"
        />
      </mask>
      <mask
        id="f"
        maskUnits="userSpaceOnUse"
        x="36.2"
        y="21.6"
        width="31.5"
        height="21.7"
      >
        <path
          fill="#fff"
          d="M33.4 12.9a18.7 18.7 0 0 0 37.2-.1c.1-.8-.8-2-1.8-2H35.3c-1 0-2 1.1-1.9 2.1z"
        />
      </mask>
      <path
        className="avatar-background"
        fill={COLORS[colorKey]}
        mask="url(#a)"
        d="M0 0h260v260H0z"
      />
      <g transform="translate(5 -22)" mask="url(#b)">
        <path
          fill="#EDB98A"
          d="M147.5 167.9V186h3.7c37.3 0 67.4 31.7 67.4 70.9v8.9H31.4v-8.9c0-39.2 30.1-70.9 67.4-70.9h3.7v-18.1a55 55 0 0 1-29.7-44.1c-5.3-.8-9.5-5.7-9.5-11.7V98.3c0-5.9 4.1-10.7 9.3-11.7v-6.1c0-30.4 23.5-55 52.5-55s52.4 24.7 52.4 55.2v6.1c5.4.9 9.3 5.8 9.3 11.7v13.8c0 6-4.1 10.9-9.5 11.7a55.4 55.4 0 0 1-29.8 43.9z"
        />
      </g>
      <g transform="translate(0 136)" mask="url(#c)">
        <path
          fill="#65C9FF"
          d="M107.7 10.3c-16.8 2-29.7 7.4-30 21.2a71 71 0 0 0-41.1 65.3v8.9h187.2v-8.9a71 71 0 0 0-41.2-65.3c-.3-13.9-13.2-19.3-29.9-21.2v18.6c0 13.1-10 23.6-22.4 23.6S107.7 42 107.7 28.9V10.3z"
        />
        <path
          fill="#fff"
          d="M100.5 58.2v47.5h-6.9v-51c2.1 1.3 4.4 2.5 6.9 3.5zm65.9-3.5v39.7c0 1.9-1.5 3.4-3.4 3.4a3.4 3.4 0 0 1-3.4-3.4V58.2c2.4-1 4.7-2.2 6.8-3.5z"
        />
        <path
          mask="url(#d)"
          fillOpacity=".2"
          d="M89.6 10c-14.8 2.8-25.1 8.4-25.1 19.3 0 19.4 32.5 35.2 65.5 35.2s65.5-15.7 65.5-35.2c0-10.9-10.3-16.5-25.1-19.3 8.9 3.3 14.7 8.8 14.7 18.1 0 20.1-27.4 36.4-55.2 36.4S74.8 48.1 74.8 28c0-9.2 5.8-14.7 14.8-18z"
        />
      </g>
      <path d="M111.4 112.9a18.7 18.7 0 0 0 37.2-.1c.1-.8-.8-2-1.8-2h-33.5c-1 0-2 1.1-1.9 2.1z" />
      <path
        mask="url(#e)"
        fill="#fff"
        d="M42.2-.1h20.7a5 5 0 0 1 4.9 4.9v5.9a5 5 0 0 1-4.9 4.9H42.2a5 5 0 0 1-4.9-4.9V4.9c-.1-2.8 2.1-5 4.9-5z"
        transform="translate(78 100)"
      />
      <g mask="url(#f)" transform="translate(78 100)">
        <g transform="translate(38 24)" fill="#FF4F6D">
          <circle cx="9.1" cy="8.4" r="10.8" />
          <circle cx="18.9" cy="8.4" r="10.8" />
        </g>
      </g>
      <path
        fill="#C29D79"
        d="M118.2 94c0 4.4 5.3 7.9 11.8 7.9s11.8-3.5 11.8-7.9"
      />
      <g transform="translate(103 78)">
        <use xlinkHref="#g" />
        <use xlinkHref="#g" transform="translate(55)" />
      </g>
      <g fill="#B58143">
        <path d="M101 57.8c-5.7.3-15 4.4-14.7 10.2 0 .2.3.3.4.1 2.7-2.9 22-5.9 28.8-4.3.6.1 1.1-.5.7-.9-3.4-3.8-10.1-5.3-15.2-5.1M160 57.8c5.7.3 15 4.4 14.7 10.2 0 .2-.3.3-.4.1-2.7-2.9-22-5.9-28.8-4.3-.6.1-1.1-.5-.7-.9 3.4-3.8 10.1-5.3 15.2-5.1" />
      </g>
      <g>
        <path
          fill="#B58143"
          d="M146.4 133.6c-2.3 2.3-4.8 3.3-8 2.6-.5-.1-2.7-4.5-8.2-4.5-5.5 0-7.7 4.3-8.3 4.5-3.1.7-5.7-.3-8-2.6-4.4-4.2-8-10.1-5.9-16.5 1.2-3.3 3-7 6.5-8 3.6-1.1 8.7 0 12.5-.8 1.2-.3 2.4-.7 3.3-1.4.8.7 2.2 1.2 3.3 1.4 3.7.8 8.7-.4 12.4.8 3.5 1.1 5.4 4.7 6.5 8 2 6.4-1.7 12.2-6 16.5m36-71.1c-3.2 8.3-2 18.6-2.5 27.3-.5 7.1-2 17.6-8 22.2-3 2.3-8.5 6.2-12.5 5.2-2.7-.8-3-9-6.6-12.1-4-3.5-9.2-5.1-14.4-4.8-2.1.1-6.7.1-8.5 1.9-2-1.8-6.4-1.8-8.6-1.9a20 20 0 0 0-14.2 4.7c-3.6 3.1-4 11.4-6.7 12.1-4 1.1-9.5-2.8-12.5-5.2-6-4.6-7.4-15.1-7.9-22.2-.6-8.7.7-19-2.6-27.3-1.5 0-.5 15.9-.5 15.9v20c0 15.1 8.9 37.6 28.8 46.2 4.8 2.1 15.8 5.5 24.2 5.5s19.4-3.1 24.2-5.2c19.9-8.6 28.8-31.5 28.8-46.5v-20c.1.1 1.2-15.8-.5-15.8"
        />
      </g>
    </svg>
  );
}