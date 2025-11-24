import DefaultLayout from "../layouts/DefaultLayout";
import Hero from "../components/Hero";
import InfoStrip from "../components/InfoStrip";
import CardGrid from "../components/CardGrid";
import MapSection from "../components/MapSection";
import Carousel from "../components/Carousel";

export default function HomePage() {
  const infoItems = [
    { label: "Tiempo", value: "—" },
    { label: "Estado del mar", value: "—" },
    { label: "Aforo calas", value: "—" },
    { label: "Aforo parkings", value: "—" },
    { label: "Accesos", value: "—" },
  ];

  const queHacerItems = [
    {
      title: "Respira Benitatxell",
      text: "Espacios de silencio, puntos de meditación y una naturaleza para respirar.",
      href: "/que-hacer/respira-benitatxell/",
    },
    {
      title: "Calas y mar",
      text: "Las calas de Benitatxell con información práctica y estado en tiempo real.",
      href: "/que-hacer/natura-y-rutas/calas/",
    },
    {
      title: "Rutas y naturaleza",
      text: "Senderos, rutas a pie y en bicicleta para descubrir el territorio.",
      href: "/que-hacer/natura-y-rutas/",
    },
    {
      title: "Patrimonio 360",
      text: "Museu al Vent, Pesqueres de cingle y otros recursos en 360º.",
      href: "/que-hacer/patrimonio-360/",
    },
  ];

  const destacados = [
    {
      title: "Mitjafavafest",
      text: "Fiesta gastronómica y cultural del Poble Nou de Benitatxell.",
      tag: "Evento",
      href: "/agenda/",
    },
    {
      title: "Ruta dels Penya-segats",
      text: "Un recorrido único junto al acantilado para descubrir el Mediterráneo.",
      tag: "Experiencia",
      href: "/que-hacer/natura-y-rutas/",
    },
    {
      title: "Espacios de silenci",
      text: "Puntos especialmente seleccionados para desconectar y respirar.",
      tag: "Respira Benitatxell",
      href: "/que-hacer/respira-benitatxell/",
    },
  ];

  return (
    <DefaultLayout>
      <Hero
        title="Respira Benitatxell"
        subtitle="Una web turística conectada con los datos en tiempo real y el Sistema de Inteligencia Turística."
        videoUrl="[URL_VIDEO_HERO]"
        primaryCta={{ label: "Ver mapa", href: "#mapa" }}
        secondaryCta={{
          label: "Planifica tu visita",
          href: "/planifica-tu-visita/",
        }}
      />

      <InfoStrip items={infoItems} />

      <MapSection
        title="Mapa turístico"
        description="Explora calas, rutas, miradores, espacios de silencio y servicios turísticos en un único mapa interactivo."
        embedUrl="[URL_IFRAME_MAPA_O_DEJAR_VACIO]"
      />

      <CardGrid title="¿Qué hacer?" items={queHacerItems} />

      <Carousel title="Ahora en Benitatxell" items={destacados} />

      <section
        style={{
          padding: "3rem 2rem",
          backgroundColor: "var(--color-bg)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "var(--color-primary-dark)",
          }}
        >
          Próximos eventos
        </h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
          Consulta la agenda turística para no perderte las actividades del
          municipio.
        </p>
        <a
          href="/agenda/"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.6rem",
            borderRadius: "999px",
            backgroundColor: "var(--color-primary)",
            color: "#FFFFFF",
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Ver agenda completa
        </a>
      </section>

      <section
        style={{
          padding: "3rem 2rem 4rem",
          backgroundColor: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "var(--color-primary-dark)",
          }}
        >
          Planifica tu visita
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            maxWidth: "650px",
            margin: "0 auto 1.5rem",
          }}
        >
          Descubre dónde comer, dónde dormir y qué servicios turísticos tienes a
          tu disposición para organizar tu estancia en el Poble Nou de
          Benitatxell.
        </p>
        <a
          href="/planifica-tu-visita/"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.6rem",
            borderRadius: "999px",
            backgroundColor: "var(--color-accent)",
            color: "#000000",
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Empezar a planificar
        </a>
      </section>
    </DefaultLayout>
  );
}
