const breakpoints = [
        '480px','768px','1024px','1280px','1600px'
]

    breakpoints.sm = breakpoints[0];
    breakpoints.md = breakpoints[1];
    breakpoints.lg = breakpoints[2];
    breakpoints.xl = breakpoints[3];
    breakpoints.xxl = breakpoints[4];
export default {
    colors: {
      primary: '#375165',
      secondary: '#5757b1',
      gradient: 'linear-gradient(190deg, #253840, #1a1aab)'
    },
   
    variants: {
        container: {
            maxWidth: 960,
            width: '100%',
            mx: 'auto',
            px: 30
        },
        opacHover: {
            transition: 'opacity 300ms ease-in-out'
        },
        avatar: {
            boxSizing: 'border-box',
            margin: 0,
            minWidth: 0,
            maxWidth: '100%',
            height: 'auto',
            width: 48,
            height: 48,
            borderRadius: 99999,
            mr: 10
        },
        roundedContainer: {
            borderRadius: 99999,
            maxWidth: 960,
            width: '100%',
            mx: 'auto',
            px: 30
        }
    },

    breakpoints
  }