const path = require('path');
module.exports = {
  packagerConfig: {
    asar: true,
    icon: path.join(process.cwd(), 'main', 'build', 'icon'),
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        bin: 'Electron Starter'
      }
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        bin: 'Electron Starter'
      },
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        bin: 'Electron Starter',
        options: {
          icon: path.join(process.cwd(), 'main', 'build', 'icon.png'),
        },
      }
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        bin: 'Electron Starter',
        icon: path.join(process.cwd(), 'main', 'build', 'icon.png'),
      }
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {}
    }
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'delimitertech',
          name: 'electron-starter'
        },
        prerelease: true
      }
    }
  ]
};