import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Button,
  } from '@mantine/core';
  import { IconBrandAndroid, IconBrandApple, IconAppWindow } from '@tabler/icons-react';
  
  const mockdata = [
    {
      title: 'Android',
      description:
        'https://play.google.com/store/apps/details?id=br.gov.sp.detran.simulado&hl=pt_BR&gl=US',
      icon: IconBrandAndroid,
    },
    {
      title: 'IOS',
      description:
        'https://apps.apple.com/br/app/simulado-detran-sp/id684203767',
      icon: IconBrandApple,
    },
    {
      title: 'Web',
      description:
        'https://www.detran.sp.gov.br/simulado',
      icon: IconAppWindow,
    },
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(34),
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function SimuladorPage() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
      <Button 
       component="a"
       target="_blank"
       href={feature.description}
       rel="noopener noreferrer"
       mt="md"
       variant="outline"
       color="yellow">
        Saiba mais
      </Button>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group position="center">
          <Badge variant="outline"
            color="yellow" size="lg">
            Pratique sempre!
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
        Existem simulados que podem ser uma ferramenta valiosa 
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
        para ajudá-lo a se preparar para a prova, permitindo que você adquira conhecimento e aprimore suas habilidades ao volante :D
        </Text>
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }