import data from '../../models/shelters.json';
import Card from '../../components/Card/ShelterCard/Card';

function ShelterPage() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          maxWidth: '1195px',
          width: '100%',
        }}
      >
        {data.shelters.length === 0 ? (
          <p>No shelterss available.</p>
        ) : (
          data.shelters.map((card) => (
            <div
              style={{
                marginBottom: '44px',
                flexBasis: 'calc((100% - 40px) / 3)',
              }}
              key={card.id}
            >
              <Card shelter={card} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShelterPage;
