import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RiAlertLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

import { ParMd, ParXs } from '../../atoms/Typography';
import { Button } from '../../atoms/Button/Button';
import {
  Dropdown,
  DropdownContent,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownCheckbox,
  DropdownRadioGroup,
  DropdownRadio,
} from './Dropdown';
import { DropdownMenuItem, DropdownMenuLabel } from './Dropdown.styles';
import React from 'react';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  subcomponents: { DropdownMenuItem },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => {
  const [color, setColor] = React.useState('blue');
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
      {/* <Dropdown {...args} /> */}
      <DropdownMenu>
        <DropdownTrigger>Button</DropdownTrigger>
        <DropdownContent align="end">
          <DropdownLabel>Switch to available network</DropdownLabel>
          <DropdownItem>Click Me</DropdownItem>
          <DropdownItem disabled>I'm Disabled</DropdownItem>
          <DropdownItem>Click Me 2</DropdownItem>
          <DropdownSeparator />
          <DropdownItem>Grape</DropdownItem>
          <DropdownItem>Click Me</DropdownItem>
          <DropdownSeparator />
          <DropdownCheckbox checked>Checked</DropdownCheckbox>
          <DropdownCheckbox>Unchecked</DropdownCheckbox>
          <DropdownSeparator />
          <DropdownRadioGroup value={color} onValueChange={setColor}>
            <DropdownRadio value="blue">Radio</DropdownRadio>
            <DropdownRadio value="green">Radio</DropdownRadio>
          </DropdownRadioGroup>
        </DropdownContent>
      </DropdownMenu>
    </div>
  );
};

export const BaseDropdown = Template.bind({});

BaseDropdown.args = {
  children: 'Button',
  color: 'primary',
};

// const networkPanels = [
//   'Mainnet',
//   'Arbitrum',
//   'Celo',
//   'Gnosis',
//   'Optimism',
//   'Gnosis',
//   'Polygon',
//   'Kovan',
//   'Rinkeby',
// ].map((item, index) => (
//   <DropdownMenuItem key={index} spacing="0.7rem">
//     <Button color="secondary" fullWidth>
//       {item}
//     </Button>
//   </DropdownMenuItem>
// ));

// export const FullDropdown = Template.bind({});

// FullDropdown.args = {
//   menuMinWidth: '26rem',
//   align: 'end',
//   trigger: (
//     <Button IconLeft={RiAlertLine} variant="outline">
//       Network Unavailable
//     </Button>
//   ),
//   children: [
//     <DropdownMenuLabel key={uuidv4()}>
//       <ParXs>Switch to available network</ParXs>
//     </DropdownMenuLabel>,
//     ...networkPanels,
//   ],
// };
