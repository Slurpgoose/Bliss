import tinycolor from 'tinycolor2'

export const ToHex = (color) => {
    return tinycolor(color).toHexString();
}

export const ToRGB = (color) => {
    return tinycolor(color).toRgbString();
}

export const ToHSL = (color) => {
    return tinycolor(color).toHslString()
}

export const isLight = (color) => {
    return tinycolor(color).isLight()
}

export const lighter = (color, amount) => {
    return tinycolor(color).lighten(amount).toHexString()
}
export const darker = (color, amount) => {
    return tinycolor(color).darken(amount).toHexString()
}

export const brighter = (color, amount) => {
    return tinycolor(color).brighten(amount).toHexString()
}

export const SAT = (color, amount) => {
    return tinycolor(color).saturate(amount).toHexString()
}

export const deSAT = (color, amount) => {
    return tinycolor(color).desaturate(amount).toHexString()
}

export const greyScale = (color, amount) => {
    return tinycolor(color).greyscale(amount).toHexString()
}

export const spin = (color, amount) => {
    return tinycolor(color).spin(amount).toHexString()
}

export const Analogous = (color, results=3, slices=30) => {
    let colors = tinycolor(color).analogous();
    colors = colors.map((c) => { return c.toHexString(); });
    return colors
}

export const Monochromatic = (color, results=3) => {
    let colors = tinycolor(color).monochromatic();
    console.log(colors)
    colors.sort((a, b) => (a._b < b._b) ? 1 : -1)
    colors = colors.map((c) => { return c.toHexString(); });
    return colors
}

export const SplitComplementry = (color) => {
    let colors = tinycolor(color).splitcomplement();
    colors = colors.map((c) => { return c.toHexString(); });
    return colors
}

export const Triad = (color) => {
    let colors = tinycolor(color).triad();
    colors = colors.map((c) => { return c.toHexString(); });
    return colors
}

export const Tetrad = (color) => {
    let colors = tinycolor(color).tetrad();
    colors = colors.map((c) => { return c.toHexString(); });
    return colors
}


export const Complement = (color) => {
    let newColor = tinycolor("#f00").complement().toHexString()

    return [color, newColor]
}
