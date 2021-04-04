import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { useTopic } from '../use-topic.hooks';
import { useStyles } from './topic.style';

import SearchComponent from 'src/components/common/autocomplete.component';
import { Tag } from 'src/interfaces/experience';

type Props = {
  topics: Tag[];
  onAddItem: (topic: string) => void;
};

export default function TopicComponent({ topics, onAddItem }: Props) {
  const style = useStyles();

  const { topics: options, search } = useTopic();
  const [selectedTopics, setSelectedTopics] = React.useState<Tag[]>([]);

  React.useEffect(() => {
    setSelectedTopics(topics);
  }, [topics]);

  const toggleVisible = (topic: Tag) => {
    setSelectedTopics([
      ...selectedTopics.map(item => {
        if ((item.id = topic.id)) {
          item.hide = !item.hide;
        }

        return item;
      })
    ]);
  };

  const searchTopic = (text: string) => {
    search(text);
  };

  return (
    <Card className={style.root}>
      <CardHeader disableTypography className={style.header} title={<Typography variant="h5">Topic</Typography>} />
      <CardContent className={style.content}>
        <SearchComponent title="Search Topics" data={options} search={searchTopic} onSelected={onAddItem} type="text" />

        <List>
          {selectedTopics.map((topic, i) => {
            const labelId = `list-label-${topic.id}`;

            return (
              <ListItem key={i} dense button>
                <ListItemText id={labelId} primary={topic.id} />
                <ListItemSecondaryAction>
                  {topic.hide ? (
                    <IconButton edge="end" aria-label="hide-from-experience" onClick={() => toggleVisible(topic)}>
                      <VisibilityOffIcon />
                    </IconButton>
                  ) : (
                    <IconButton edge="end" aria-label="show-on-experience" onClick={() => toggleVisible(topic)}>
                      <VisibilityIcon />
                    </IconButton>
                  )}

                  <IconButton edge="end" aria-label="comments">
                    <DeleteForeverIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>

        <Box className={style.more}>
          <Button color="primary" className={style.show}>
            Show All
            <ExpandMoreIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
