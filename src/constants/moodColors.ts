export interface MoodsBaseColorsObject {
    [color: string]: string[];
}

export const MoodsBaseColors: MoodsBaseColorsObject = {
    Red: [
        '#ff2100', '#ff2e00', '#ff4214', '#ff5628', '#ff6a3c'
    ],
    Blue: [
        '#0014ff', '#1428ff', '#283cff', '#3c50ff', '#5064ff'
    ],
    Yellow: [
        '#ffdf14', '#ffe328', '#ffe73c', '#ffeb50', '#ffef64'
    ],
    Green: [
        '#2df042', '#41f255', '#55f468', '#69f67b', '#7df88e'
    ]
};

export const DARKEN_COLOR_FACTOR: number = 0.009;