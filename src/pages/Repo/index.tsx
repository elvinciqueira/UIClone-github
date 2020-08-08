import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  ForkIcon,
  StarIcon,
  GithubIcon,
  Stats,
  LinkButton,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={'/elvinciqueira'}>
          elvinciqueira
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'math'}>
          math
        </Link>
      </Breadcrumb>

      <p>Conceitos matemáticos com Javascript</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/elvinciqueira/math'}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
