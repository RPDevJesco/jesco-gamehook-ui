module.exports = {
  packagerConfig: {
    asar: true,
    // additional packager configuration options
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // configuration options for Windows Squirrel
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'], // This will create a zip file for macOS
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        // configuration options for macOS DMG
      },
      platforms: ['darwin'], // This will create a DMG file for macOS
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        // configuration options for Debian packages
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        // configuration options for RPM packages
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};