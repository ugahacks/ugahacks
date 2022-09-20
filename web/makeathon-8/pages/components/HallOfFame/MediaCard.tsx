import React, { ReactElement } from "react";
import withStyles from '@mui/styles/withStyles';
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MediaCardProps {
  teamImage: string;
  placement: string;
  teamName: string;
  link: string;
  buttonText: string;
}

const CardButton = withStyles(
  {
    root: {
      width: "250px",
      paddingLeft: "15px",
      paddingRight: "15px",
      fontSize: "1.1em",
      fontFamily: "Poppins",
      borderRadius: "50px",
      textAlign: "center",
      color: "#A6BDA4",
    },
  },
  { index: 1 }
)(Button);

export default function MediaCard(props: MediaCardProps): ReactElement {
  return (
    <Card className="card-container">
      <CardActionArea>
        <CardMedia
          className="card-pic"
          image={props.teamImage}
          title="Winner"
        />
        <CardContent className="card-text-container">
          <Typography variant="h6" component="h6">
            {props.placement}
          </Typography>
          <Typography variant="body1" component="h6">
            {props.teamName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-action-container">
        <CardButton
          variant="contained"
          size="small"
          color="primary"
          href={props.link}
        >
          <Typography variant="subtitle1" component="h6">
            {props.buttonText}
          </Typography>
        </CardButton>
      </CardActions>
    </Card>
  );
}
