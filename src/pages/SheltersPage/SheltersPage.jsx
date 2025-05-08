import data from '../../models/shelters.json';
import Card from '../../components/Card/ShelterCard/Card';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import Container from '../../layout/Container/Container';

function ShelterPage() {
  return (
    <Container>
      <PageWrapper>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            maxWidth: '1195px',
            width: '100%',
            paddingTop: '64px',
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
      </PageWrapper>
    </Container>
  );
}

export default ShelterPage;
