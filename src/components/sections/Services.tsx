import { Container } from "../shared/Container.tsx";
import { Title } from "../shared/Title.tsx";
import { Paragraph } from "../shared/Paragraph.tsx";
import { servicesData } from "../../utils/services-data.tsx";
import { Service } from "../cards/Service.tsx";

export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title> Our AI Services</Title>
          <Paragraph>
            Unlock the potential of advanced machine learning, natural language
            processing, and predictive analytics. Our services include:
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map(({ title, description, icon }, key) => (
            <Service
              title={title}
              description={description}
              icon={icon}
              key={key}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
