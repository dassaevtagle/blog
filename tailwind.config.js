module.exports = {
  theme: {
      extend: {
          colors: {
            "b-green": 'var(--b-green)',
            "b-dark": 'var(--b-dark)',
            "b-light": 'var(--b-light)',
            "b-orange": 'var(--b-orange)',
            "b-blue": "var(--b-blue)"
          }
      },
      darkSelector: '.dark-mode',
      fontFamily: {
        display: ['IBM Plex Mono', 'Menlo', 'monospace'],
        body: ['IBM Plex Mono', 'Menlo', 'monospace'],
      }
  },
  plugins: [require('tailwindcss-dark-mode')()],
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  }
}
