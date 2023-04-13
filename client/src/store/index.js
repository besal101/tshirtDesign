import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './Kurillo.png',
  fullDecal: './Kurillo.png',
});

export default state;
