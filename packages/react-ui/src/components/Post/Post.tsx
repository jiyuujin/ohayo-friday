import React from 'react'
import { item, itemLink, title as titleStyle, subtitle as subtitleStyle } from './Post.css'

export interface PostProps {
  url: string
  title: React.ReactNode
  subtitle?: React.ReactNode
}

export function Post({ url, title, subtitle }: PostProps) {
  return (
    <div className={item}>
      <a href={url} className={itemLink}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={subtitleStyle}>{subtitle}</p>
      </a>
    </div>
  )
}
