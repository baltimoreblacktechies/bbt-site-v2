import React from 'react';
import ButtonNav from '../components/ButtonNav';
import {
  Header,
  HeaderSection,
  Section,
  ListWrapper,
  ListTitle,
  List,
  ListItem
} from '../components/StyledComponents';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <ButtonNav />
    <HeaderSection>
      <Header centered>Black + Techie = Us</Header>
    </HeaderSection>
    <Image />
    <Section>
      We&apos;re HYPED to host Baltimore&apos;s first Black coding meet up! Join
      us every Thursday at The Impact Hub Baltimore (10 E North Ave) to learn
      and code with others. Whether you&apos;re an experienced coder or ready to
      take your first course, we invite you to join us.
    </Section>
    <ListWrapper>
      <ListTitle>
        We have four recurring nights on a rotating schedule:
      </ListTitle>
      <List>
        <ListItem>Speaker Night</ListItem>
        <ListItem>Study Group Night</ListItem>
        <ListItem>Project Night </ListItem>
        <ListItem>Networking Night</ListItem>
      </List>
    </ListWrapper>
    <Section>
      We are focused on encouraging and improving representation in tech.
      Therefore this is an inclusive space. All are welcome. Please respect our
      goals and mission, and have fun!
    </Section>
  </Layout>
);

export default IndexPage;
