import React from 'react';
import { render } from '@testing-library/react';
import TeamCard from '../teamcard/teamcard';

describe('TeamCard', () => {
  it('renderizamos bien el componente', () => {
    const { container } = render(
      <TeamCard
        imageSrc="https://via.placeholder.com/150"
        title="Sample Title"
        role="jefe de equipo"
        description="me gustan las habichuelas"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
