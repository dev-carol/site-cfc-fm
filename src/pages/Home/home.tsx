import { Button } from "@mantine/core";
import "./styles.css"
const HomePage = () => {
    const tuneInUrl = 'https://www-radiotoca-com-br.filesusr.com/html/272420_89a6a18dee4cb3f84604873499d18f86.html';
  return (
    <>
      <div className="container-homepage">
        <div>
          <h2 className="title">CFC FM desde 2023 formando motoristas!</h2>
          <span> Oferecemos cursos de primeira habilitação e músicas para ouvir enquanto dirige</span>
        </div>

        <div className="box-img">
          <img src="https://i.gifer.com/2iDN.gif"className="img-car" />
          <iframe
          className="iframe"
          src={tuneInUrl}
          title="Radio Player"
        />
        </div>
       
        <div className="box-button">
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.e-cnhsp.sp.gov.br/gefor/"
            variant="outline"
            color="yellow"
            radius="xl"
          >
            Consulta CNH
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
