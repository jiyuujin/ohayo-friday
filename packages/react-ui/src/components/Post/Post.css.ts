import { style } from '@vanilla-extract/css'

export const item = style({
  borderRadius: '10px',
  padding: '12px 0',
  textAlign: 'left',
})

export const itemLink = style({
  color: '#2c2e2f',
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  verticalAlign: 'middle',
  borderLeft: '3px solid #fff',
  paddingLeft: '1em',
})

export const title = style({
  margin: 0,
  textAlign: 'left',
  fontSize: '1.2rem',
})

export const subtitle = style({
  marginBottom: 0,
  textAlign: 'left',
  fontSize: '0.92rem',
})
