import React, { ReactElement } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

interface MediaCardProps {
  teamImage: string,
  placement: string,
  teamName: string,
  link: string,
  buttonText: string
}

//type Classes = ClassNameMap<"root" | "button" | "media" | "h5" | "btext" | "cardcontent">

const CustomButton = withStyles({
  root: {
    paddingLeft: '15px',
    paddingRight: '15px',
    fontSize: '1.1em',
    fontFamily: 'Poppins',
    borderRadius: '50px',
  }
})(Button);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 300,
    textAlign: 'center',
    '@media (max-width:480px)': {
      maxWidth: '100%'
    }
  },
  media: {
    height: 180,
  },
  h5: {
    color: 'black',
  },
  btext: {
    size: '1em',
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    color: 'black',
    display: 'inline-block',
  },
  cardcontent: {
    padding: '0px'
  },
});

export default function MediaCard(props: MediaCardProps): ReactElement {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.teamImage}
          title="Winner"
        />
        <CardContent className={classes.cardcontent}>
          <Typography variant="h6" component="h6" className={classes.h5}>
            {props.placement}
          </Typography>
          <Typography variant="body1" component="h6" className={classes.h5}>
            {props.teamName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <CustomButton variant="contained" size="small" color="primary" href={props.link}>
          <Typography variant="subtitle1" component="h6" className={classes.btext}>
            {props.buttonText}
          </Typography>
        </CustomButton>
      </CardActions>
    </Card>
  );
}
