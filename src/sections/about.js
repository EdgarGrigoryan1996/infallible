/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import AboutImage from 'assets/images/about.svg';
import DrawingArrow from 'assets/drawing-arrow.svg';

const data = {
  title:
    'About Us',
  // description:
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  // btnName: 'Explore Details',
  // btnURL: '#',
  points: [
    {
      icon: <IoIosCheckmarkCircle color="#849184"/>,
      text: 'Founded in 2022, we provide specialized accounting services for logistics partners and focus on accounts receivables, managing unpaid invoices, and commercial debt collection.',
    },
    {
      icon: <IoIosCheckmarkCircle color="#849184"/>,
      text: 'By collaborating with legal professionals when necessary, we deliver reliable, transparent, and tailored financial solutions that help businesses overcome challenges and thrive.',
    },
  ],
};

export default function About() {
  return (
    <section sx={{ variant: 'section.profit' } } id="about">
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={AboutImage} alt="Thumbnail" width="700" height="565" />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
      </Container>
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: 'flex',
    order: [2, null, null, 0],
    mx: ['auto', 0],
    img: {
      ml: [0, null, null, -3],
      height: [265, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 350, 400, '470px'],
    pb: [7, null, null, 0],
    '.btn__link': {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: 'absolute',
    bottom: -185,
    left: '33%',
    display: ['none', null, null, null, null, null, null, 'block'],
  },
};
