import externalLink from '../assets/external-link.svg'

const ExternalLink = ({ label, ...remainingProps }: { label: string; [key: string]: string }) => {
  return (
    <a {...remainingProps} className='text-body--small' target='_blank' rel='noopener noreferrer'>
      {label} <span className='visually-hidden'>(opens in a new tab)</span>
      <img aria-hidden='true' src={externalLink} />
    </a>
  )
}

export default ExternalLink
