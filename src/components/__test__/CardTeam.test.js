import React from 'react';
import { render } from '@testing-library/react';
import TeamCard from '../teamcard/teamcard';

describe('TeamCard', () => {
  it('renderizamos bien el Componente', () => {
    const { container } = render(
      <TeamCard
        imageSrc="https://via.placeholder.com/150"
        title="Sample Title"
        role= "Jefe de Equipo"
        description="Me gustan las habichuelas"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
