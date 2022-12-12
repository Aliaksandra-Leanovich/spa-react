import ArrowRight from "../../assets/arrowRight.svg";
import ExploreImg1 from "../../assets/exploreImg1.svg";
import ExploreImg2 from "../../assets/exploreImg2.svg";
import ExploreImg3 from "../../assets/exploreImg3.svg";
import {
  BlockSC,
  ContainerOfBlocksSC,
  ContainerSC,
  DescriptionOfBlockSC,
  ImageSC,
  LinkBlockSC,
  LinkSC,
  SectionSC,
  TitleSC,
  TitlOfBlockSC,
} from "./style";

const config = [
  {
    image: ExploreImg1,
    title: "Cool feature title",
    description: " Learning curve network effects return on investment.",
    link: {
      image: ArrowRight,
      text: "Explore page",
      link: "#",
    },
  },
  {
    image: ExploreImg2,
    title: "Cool feature title",
    description: " Learning curve network effects return on investment.",
    link: {
      image: ArrowRight,
      text: "Explore page",
      link: "#",
    },
  },
  {
    image: ExploreImg3,
    title: "Cool feature title",
    description: " Learning curve network effects return on investment.",
    link: {
      image: ArrowRight,
      text: "Explore page",
      link: "#",
    },
  },
];

export const ExploreSection = () => {
  return (
    <SectionSC>
      <ContainerSC>
        <TitleSC>
          Handshake infographic mass market crowdfunding iteration.
        </TitleSC>
        <ContainerOfBlocksSC>
          {config.map((item) => (
            <BlockSC>
              <ImageSC src={item.image} alt="explore section" />
              <TitlOfBlockSC>{item.title}</TitlOfBlockSC>
              <DescriptionOfBlockSC>{item.description}</DescriptionOfBlockSC>
              <LinkBlockSC>
                <LinkSC href={item.link.link}>{item.link.text}</LinkSC>
                <img src={item.link.image} alt="arrow" />
              </LinkBlockSC>
            </BlockSC>
          ))}
        </ContainerOfBlocksSC>
      </ContainerSC>
    </SectionSC>
  );
};
