import React from 'react'

import { styled } from '@/utils/stitches.config'

// * --------------------------------------------------------------------------
// * Component
// * --------------------------------------------------------------------------

const Anchor = React.forwardRef(
  (props: AnchorProps, ref: React.Ref<HTMLAnchorElement>) => {
    const { children, href, arrow, underline, favicon, discreet, ...rest } =
      props

    const icon = getIconString(href, arrow)

    return (
      <StyledAnchor
        arrow={arrow as ArrowPosition}
        css={{
          '--icon': `url(${icon})`,
        }}
        href={href}
        discreet={discreet as boolean}
        favicon={favicon as boolean}
        underline={underline as boolean}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledAnchor>
    )
  },
)

Anchor.displayName = 'Anchor'

// * --------------------------------------------------------------------------
// * Styles
// * --------------------------------------------------------------------------

const StyledAnchor = styled('a', {
  fontSize: 'inherit',
  lineHeight: 'inherit',
  color: 'var(--color, var(--accent))',
  fontWeight: 500,
  wordBreak: 'break-word',
  textDecoration: 'none',
  outline: 'none',
  transition: 'border-color 0.3s ease, color 0.3s ease',

  '--hover-color': 'var(--text-primary)',

  '&:focus': {
    '--color': 'var(--hover-color, var(--accent))',
    '--hover-translation-distance': 'var(--arrow-translation, 0)',
  },

  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      '--color': 'var(--hover-color, var(--accent))',
      ' --hover-translation-distance': 'var(--arrow-translation, 0)',
    },
  },

  variants: {
    discreet: {
      true: {
        '--color': 'var(--text-tertiary)',
      },
    },
    arrow: {
      left: {
        '--size': '1.1em',
        '--arrow-direction': -1,
        '--arrow-translation': '-0.25em',
        '--hover-color': 'unset',

        '&:before': {
          content: '',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: 'var(--size, 1.05em)',
          height: 'var(--size, 1.05em)',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginRight: '0.18em',
          transition: 'transform 0.4s ease',
          transform:
            'translateY(-2px) translateX(var(--hover-translation-distance, 0px)) scaleX(var(--arrow-direction, 1))',
        },
      },
      right: {
        '--size': '1.1em',
        '--arrow-direction': 1,
        '--arrow-translation': '0.25em',
        '--hover-color': 'unset',

        '&:after': {
          content: '',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: 'var(--size, 1.05em)',
          height: 'var(--size, 1.05em)',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginLeft: '0.18em',
          transition: 'transform 0.4s ease',
          transform:
            'translateY(-2px) translateX(var(--hover-translation-distance, 0px)) scaleX(var(--arrow-direction, 1))',
        },
      },
    },
    favicon: {
      true: {
        '--size': '1.1em',

        '&:before': {
          content: '',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: 'var(--size, 1.05em)',
          height: 'var(--size, 1.05em)',
          maskImage: 'var(--icon)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'currentColor',
          marginRight: '0.18em',
          transform: 'translateY(-2px)',
        },
      },
    },
    underline: {
      true: {
        borderBottom: '1px solid',
        borderColor: 'var(--border-color, transparent)',

        '--hover-color': 'unset',

        '&:focus': {
          '--border-color': 'var(--accent)',
        },

        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            '--border-color': 'var(--accent)',
          },
        },
      },
    },
  },
})

// * --------------------------------------------------------------------------
// * Types
// * --------------------------------------------------------------------------

type ArrowPosition = 'left' | 'right'

interface BaseAnchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** This prop makes the Anchor component color typography tertiary to blend more with corpus */
  discreet?: boolean
}

interface UnderlineAnchorProps extends BaseAnchor {
  arrow?: never
  /** This prop makes the Anchor component render an underline only visible on hover */
  underline?: boolean
  favicon?: never
}
interface ArrowAnchorProps extends BaseAnchor {
  /** This prop makes the Anchor component render an arrow to the left or the right of the text */
  arrow?: ArrowPosition
  underline?: never
  favicon?: never
}
interface FaviconAnchorProps extends BaseAnchor {
  arrow?: never
  underline?: never
  favicon?: boolean
}

type AnchorProps = ArrowAnchorProps | FaviconAnchorProps | UnderlineAnchorProps

// * --------------------------------------------------------------------------
// * Utils
// * --------------------------------------------------------------------------

/**
 * Base 64 equivalent of the ArrowIcon, TwitterIcon and GithubIcon with width and height set to "var(--size, 1.05em)"
 */
export const Arrow =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSJ2YXIoLS1zaXplLCAxLjA1ZW0pIiBoZWlnaHQ9InZhcigtLXNpemUsIDEuMDVlbSkiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48bGluZSB4MT0iNSIgeTE9IjEyIiB4Mj0iMTkiIHkyPSIxMiI+PC9saW5lPjxwb2x5bGluZSBwb2ludHM9IjEyIDUgMTkgMTIgMTIgMTkiPjwvcG9seWxpbmU+PC9zdmc+'

const Twitter =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSJ2YXIoLS1zaXplLCAxLjA1ZW0pIiBoZWlnaHQ9InZhcigtLXNpemUsIDEuMDVlbSkiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXR3aXR0ZXIiPjxwYXRoIGQ9Ik0yMyAzYTEwLjkgMTAuOSAwIDAgMS0zLjE0IDEuNTMgNC40OCA0LjQ4IDAgMCAwLTcuODYgM3YxQTEwLjY2IDEwLjY2IDAgMCAxIDMgNHMtNCA5IDUgMTNhMTEuNjQgMTEuNjQgMCAwIDEtNyAyYzkgNSAyMCAwIDIwLTExLjVhNC41IDQuNSAwIDAgMC0uMDgtLjgzQTcuNzIgNy43MiAwIDAgMCAyMyAzeiI+PC9wYXRoPjwvc3ZnPg=='

const Github =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSJ2YXIoLS1zaXplLCAxLjA1ZW0pIiBoZWlnaHQ9InZhcigtLXNpemUsIDEuMDVlbSkiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWdpdGh1YiI+PHBhdGggZD0iTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyIj48L3BhdGg+PC9zdmc+'

export const getIconString = (
  href?: string,
  arrow?: ArrowPosition,
): string | null => {
  switch (true) {
    case typeof arrow !== 'undefined':
      return Arrow
    case href && href.includes('twitter.com'):
      return Twitter
    case href && href.includes('github.com'):
      return Github
    default:
      // Improve: Add default link icon here
      return null
  }
}

// * --------------------------------------------------------------------------
// * Exports
// * --------------------------------------------------------------------------
export { Anchor }
export type { AnchorProps, ArrowPosition }
