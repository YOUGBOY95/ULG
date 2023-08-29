import React, { FC } from "react";

const ULGLogo: FC<{ width?: number; height?: number, fill?: string }> = ({ width, height, fill = '#ece8e1' }) => (
  <svg viewBox="0 0 300 60" fill={fill} width={width} height={height}>
    <style>
      {`
        @font-face {
          font-family: 'Valorant Font'; /* Nom de la police */
          src: url('#{$fonts-src}/valorant/Valorant Font.ttf') format('truetype');
        }
      `}
    </style>
    <text x="30" y="40" fontSize="38" fontFamily="'Valorant Font', sans-serif"></text>
  </svg>
);

export default ULGLogo;
