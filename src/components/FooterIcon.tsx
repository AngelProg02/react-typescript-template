export interface FooterIconProps {
  icon: iconTypes;
  webUrl: string;
}

export type iconTypes =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'reddit'
  | 'telegram'
  | 'twitter'
  | 'youtube';

export const FooterIcon = ({ icon, webUrl }: FooterIconProps) => {
  return (
    <a href={webUrl} target="_blank" rel="external noreferrer">
      <img src={`src/assets/footer/${icon}.svg`} alt={icon} />
    </a>
  );
};
