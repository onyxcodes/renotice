import { render, cleanup, screen, within, fireEvent } from '@testing-library/react';

import ExampleComponent from '../';
import React from 'react';

afterEach(() => cleanup());

test('Base button', () => {
    render(<ExampleComponent classname='its-a-test'/>);

    const el = screen.getByText('Hello Underworld');
    
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('its-a-test');
});