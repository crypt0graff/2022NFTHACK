import {useState, useEffect} from 'react';
import {Grid, Card, Spacer, Text, Image} from '@geist-ui/react';
import axios from 'axios';

const DAOGallery = (props) => {
  const [daoSubmissions, setDaoSubmissions] = useState([]);
  //Test Wallet address with an NFT in the Polygon network
  const testWallet = '0xA1920D1b8E8094996c6F5cc1b58d88FED21987fD';
  // const nftPortApiAddress = `https://api.nftport.xyz/v0/accounts/${props.DAOAddress}`;
  const nftPortApiAddress = `https://api.nftport.xyz/v0/accounts/${testWallet}`;

  const obtainNftMetadata = (nfts) => {
    const nftMetadata = [];

    nfts.forEach((nft) => {
      axios.get(nft.file_url).then((response) => {
        //Modify this to fit what our NFT's return
        console.log(response.data.image)
        nftMetadata.push(response.data.image)
      });
    });

    setDaoSubmissions(nftMetadata);
  };

  const loadValidatedDAOSubmissions = async () => {
    console.log("We are here!");

    axios.get(nftPortApiAddress, {
      params: {
        chain: 'polygon',
        page_number: 1,
        page_size: 50,
        include: 'metadata'
      },
      headers: {
        authorization: 'fa0bca0c-7705-45c4-9b1d-0ca4bbcc5889' // Get new api key after hackathon since will be exposed to git
      }
    }).then((response) => {
      const nfts = response.data.nfts;
      console.log(nfts);
      
      // Might not need todo bottom query if our nft api call returns the metadata correctly
      // for this nft's that I am testing with I need to do a few more api calls to get the image
      obtainNftMetadata(nfts);
    })
  };

  useEffect( () => {
    loadValidatedDAOSubmissions();
  }, []);

  return (
    <Grid.Container className="dao-gallery" justify="center" gap={2}>
      <Grid justify='center' alignItems='center' direction="row" xs={14}>
        <Text width='100%' h2>Submissions</Text>
      </Grid>
      <Spacer h={2} w={10}/>
        {daoSubmissions.length ?
          daoSubmissions.map((nftImage) => {
            
            return (
              <>
                <Grid xs={12} md={6}>
                  <Card shadow hoverable width="90%" height="100px">
                    <Image src={nftImage} />
                  </Card>
                </Grid>
                <Grid xs={12} md={6}><Card shadow hoverable width="90%" height="100px" /></Grid>
                <Grid xs={12} md={6}><Card shadow hoverable width="90%" height="100px" /></Grid>
                <Grid xs={12} md={6}><Card shadow hoverable width="90%" height="100px" /></Grid>
                <Grid xs={12} md={6}><Card shadow hoverable width="90%" height="100px" /></Grid>
                <Grid xs={12} md={6}><Card shadow hoverable width="90%" height="100px" /></Grid>
              </>
            )
          })
        :
          <Grid xs={12}>Empty</Grid> 
        }
    </Grid.Container>
  );
};

export default DAOGallery;