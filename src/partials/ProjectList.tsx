import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
       <GradientText>Projetos</GradientText> recentes
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Projeto 1 - Sorteador"
        description="Junto com outros Trainees da Therion, estou desenvolvendo uma página web capaz de 
        sortear nomes e números."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Projeto 2 - Capivara da Sorte"
        description="Como projeto da matéria extensionista de Desenvolvimento Web, estou desenvolvendo
        uma plataforma de apostas ficticias com tema de capivara."
        link="/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>HTML</Tags>
            <Tags color={ColorTags.EMERALD}>Bootstrap</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Projeto 3 - Sistema de recomendação de animes"
        description="Em conjunto com outro aluno da UTFPR, estou desenvolvendo um sistema de recomendação
        de animes, utilizando uma database de usuários do MyAnimeList."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.INDIGO}>Neural Networks</Tags>
            <Tags color={ColorTags.ROSE}>IA</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
