import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Se inscreva na minha <GradientText>Newsletters</GradientText>
        </>
      }
      description=""
    />
  </Section>
);

export { CTA };
