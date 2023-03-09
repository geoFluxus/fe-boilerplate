
export const ROLLBAR_ACCESS_TOKEN = import.meta.env.VITE_ROLLBAR_ACCESS_TOKEN

export const THEME = {
  token: {
    borderRadiusLG: 6,  
    borderRadiusSM: 3,  
    colorPrimary: '#00b96b',
    colorTextBase: '#313639d9',
    colorLink: 'white',
    colorBgLayout: '#ebebeb',
    fontFamily: 'Epilogue, sans-serif',
    fontSize: 14,
    marginLG: 16,
    marginMD: 12,
    marginSM: 6,
    marginXS: 4,
    marginXXS: 2,
  },
  components: {
    Button: {
      borderRadius: 3,
      colorLink: '#00b96b',
    },
    Radio: {
      colorBgContainer: 'gainsboro',
    },
    Checkbox: {
      colorBgContainer: 'gainsboro',
    }
  }
}