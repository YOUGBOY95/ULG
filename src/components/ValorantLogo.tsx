import { FC } from "react";

const ULGLogo: FC<{ width?: number, height?: number, fill?: string }> = ({ width, height, fill = '#ece8e1' }) => (
  <svg viewBox="0 0 300 60" fill={fill} width={width} height={height}>
    <text x="30" y="40" fontSize="40" fontFamily="'DINNextLTW05', sans-serif">ULG - ESPORT</text>
  </svg>
);

export default ULGLogo;
