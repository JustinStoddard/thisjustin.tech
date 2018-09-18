import React from 'react';
import { Segment, Container, Header, Image, List, Divider } from 'semantic-ui-react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return(
    <Container>
      <List.Item onClick={() => onVideoSelect(video)}>
        <Segment inverted>
          <Segment>
            <Image src={imageURL}/>
          </Segment>
          <Segment>
            <Header as="h3">{video.snippet.title}</Header>
          </Segment>
        </Segment>
      </List.Item>
      <Divider hidden/>
    </Container>
  )
}

export default VideoListItem;