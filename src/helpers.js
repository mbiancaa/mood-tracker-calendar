import { DARKEN_COLOR_FACTOR, MoodsBaseColors } from "./constants/moodColors";

export const generateColorForMood = (moodIndex, moodColor) => {
    if (moodIndex < 5) return MoodsBaseColors[moodColor][moodIndex];
    return darkenColor(MoodsBaseColors[moodColor][moodIndex % 5], moodIndex);
}

function darkenColor(color, index) {
    const hex = color.slice(1);
    const num = parseInt(hex, 16);
    const { r, g, b } = calculateDarkenedRGB(num, index * DARKEN_COLOR_FACTOR);
    return rgbToHex(r, g, b);
}

function calculateDarkenedRGB(num, factor) {
    const r = Math.round((num >> 16) * (1 - factor));
    const g = Math.round(((num >> 8) & 0xFF) * (1 - factor));
    const b = Math.round((num & 0xFF) * (1 - factor));
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    const colorNum = (r << 16) | (g << 8) | b;
    return `#${colorNum.toString(16).padStart(6, '0')}`;
}