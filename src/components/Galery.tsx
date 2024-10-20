import '../styles/galery.css';

export interface GaleryProps {
  images: { image: string; alt: string }[];
}

export const Galery = ({ images }: GaleryProps) => {
  return (
    <section>
      {images.map((item, index) => (
        <img key={index} src={item.image} alt={item.alt} />
      ))}
    </section>
  );
};
