import React from 'react';
import ButtonNav from '../components/ButtonNav';
import { Header } from '../components/StyledComponents';

import Layout from '../components/layout';

const CodeOfConduct = () => (
  <Layout>
    <ButtonNav />
    <Header>Baltimore Black Techies Code of Conduct</Header>
    <p>
      The Baltimore Black Techies Meetup (BBT) is dedicated to providing a
      harassment-free community for everyone, regardless of sex, gender identity
      or expression, sexual orientation, disability, physical appearance, age,
      body size, race, nationality, or religious beliefs. We do not tolerate
      harassment of community members in any form. Participants violating these
      rules may be sanctioned or expelled from the community at the discretion
      of the BBT organizers.
    </p>
    <p>
      Harassment includes offensive verbal or written comments related to sex,
      gender identity or expression, sexual orientation, disability, physical
      appearance, age, body size, race, nationality, or religious beliefs,
      deliberate intimidation, threats, stalking, following, harassing
      photography or recording, sustained disruption of talks or other events,
      inappropriate physical contact, and unwelcome sexual attention. Sexual
      language and imagery is not appropriate for any BBT event or communication
      channel. Community members asked to stop any harassing behavior are
      expected to comply immediately.
    </p>
    <p>
      If a community member engages in harassing behavior, the BBT organizers
      may take any action they deem appropriate, including warning the offender,
      expulsion from the BBT community, and/or asking the bar we’re present at
      to expel the offender. If you are being harassed, notice that someone else
      is being harassed, or have any other concerns, please contact an BBT
      organizer immediately, or as soon as you feel comfortable doing so.
    </p>
    Citations:
    <br />
    <a href="https://meetup.com/xtcnyc/pages/23924729/XTC-NYC_Code_of_Conduct">
      XTC Code of Conduct
    </a>
  </Layout>
);

export default CodeOfConduct;
