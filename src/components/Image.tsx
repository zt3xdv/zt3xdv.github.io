import { githubRawBase } from '../constants';
import type { ImgHTMLAttributes } from 'react';

export function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt, title, ...rest } = props;
  const isRelative = !src?.startsWith('http') && !src?.startsWith('//');
  const fullSrc = isRelative ? `${githubRawBase}${src}` : src;
  return (
    <figure style={{ margin: '1.5rem 0', textAlign: 'left' }}>
      <img
        src={fullSrc}
        alt={alt}
        title={title}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
        }}
        loading="lazy"
        {...rest}
      />
      {alt && (
        <figcaption style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
