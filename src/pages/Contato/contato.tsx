import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import infoContato from './infoContato';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));



export function ContatoPage() {
    const { classes } = useStyles();
  
    return (
      <div className='container-homepage'>
        <Group noWrap>
          <Avatar src={infoContato.avatar} size={94} radius="md" />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              {infoContato.title}
            </Text>
  
            <Text fz="lg" fw={500} className={classes.name}>
              {infoContato.name}
            </Text>
            <Group noWrap spacing={10} mt={3}>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {infoContato.email}
              </Text>
            </Group>

          </div>
        </Group>
      </div>
    );
  }
  