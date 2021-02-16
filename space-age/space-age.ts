interface Planets { [key: string]: number }

const Planets: Planets = {
    Earth: 1.0,
    Mercury : 0.2408467,
    Venus : 0.61519726,
    Mars : 1.8808158,
    Jupiter : 11.862615,
    Saturn : 29.447498,
    Uranus : 84.016846,
    Neptune : 164.79132
  }

  const SECONDS_IN_EARTH_YEAR = 31557600

  interface SpaceAge {
      [key: string]: any
  }
class SpaceAge {
    constructor(public readonly seconds: number) {
        for (const planet in Planets) {
            this[`on${planet}`] = () => this.rotation(<any>Planets[planet])
        }
    }

    rotation(rotate: number) {
        return Number( (this.seconds / (rotate * SECONDS_IN_EARTH_YEAR)).toFixed(2) )
    }
}

export default SpaceAge