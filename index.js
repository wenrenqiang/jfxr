global.jfxr = {}

require('./src/sound')
require('./src/math')
require('./src/random')
require('./src/presets')
require('./src/synth')

module.exports = {
    Sound: jfxr.Sound,
    Preset: jfxr.Preset,
    Synth: jfxr.Synth,
}
