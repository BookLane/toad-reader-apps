const { getDefaultConfig } = require('expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

defaultConfig.resolver.assetExts.push("ttf", "mp4")

module.exports = defaultConfig