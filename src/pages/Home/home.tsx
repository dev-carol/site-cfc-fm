import { Title, Text, Container, Button, Overlay, createStyles, rem } from '@mantine/core';
import "./styles.css"
const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: rem(180),
    paddingBottom: rem(130),
    backgroundImage:
      'url(https://mir-s3-cdn-cf.behance.net/projects/max_808/fd1e1a57441295.Y3JvcCw2MjQsNDg4LDI4NSw4Mw.gif)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },

  title: {
    fontWeight: 800,
    fontSize: rem(40),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export function Home() {
  const { classes, cx } = useStyles();
  const tuneInUrl = 'https://www-radiotoca-com-br.filesusr.com/html/272420_89a6a18dee4cb3f84604873499d18f86.html';
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
      <iframe
          className="iframe"
          src={tuneInUrl}
          title="Radio Player"
          allow="autoplay"
        />
        <Title className={classes.title}>
        CFC FM
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Estude enquanto escute a radio
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
           component="a"
           target="_blank"
           rel="noopener noreferrer"
           href="https://www.e-cnhsp.sp.gov.br/gefor/"
           className={classes.control} 
           variant="white" size="lg">
           Consulta CNH
          </Button>
          
        </div>
      </div>
    </div>
  );
}