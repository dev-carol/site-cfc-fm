import "./styles.css"
const MusicPlayer = () => {
  const tuneInUrl = 'https://www-radiotoca-com-br.filesusr.com/html/272420_89a6a18dee4cb3f84604873499d18f86.html';

  return (
    <div>
        <iframe
          className="iframe"
          src={tuneInUrl}
          title="Radio Player"
        />
      
    </div>
  );
};

export default MusicPlayer;
